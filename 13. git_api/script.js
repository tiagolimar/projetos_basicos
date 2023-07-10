const user = document.querySelector('#user');
const img = document.querySelector('img');
const lista = document.querySelector('ul')

async function getUserInfo(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        const { avatar_url } = userData;

        const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repoData = await repoResponse.json();

        const repositories = repoData.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            data: repo.created_at
        }));

        const userInfo = [avatar_url, repositories];

        return userInfo;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

user.addEventListener('keyup',e=>{
    if(e.keyCode == 13) main()
})

async function main() {
    const data = await getUserInfo(user.value)
    const [url,repositorios] = data
    colocarImagem(url)
    listarRepositorios(repositorios)
}

function colocarImagem(url){
    img.style.display = 'initial'
    img.src = url
}

function listarRepositorios(repositorios){
    for(let rep of repositorios) {
        const item = document.createElement('li')
        item.classList.add('list-inline-item')
        
        const {name,url,data} = rep
        const card = `<div class="card m-2 bg-secondary" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light">${name.toUpperCase()}</h5>
          <p class="card-text text-light">Criado em ${formatarData(data)}</p>
          <a href="${url}" class="card-link text-light">Acessar</a>
        </div>
      </div>`
        item.innerHTML = card
        lista.appendChild(item)
    }
}

function formatarData(data){
    let [year,month,day] = data.split('-')
    console.log(day);
    day = day.substring(0,2)
    return `${day}/${month}/${year}`
}