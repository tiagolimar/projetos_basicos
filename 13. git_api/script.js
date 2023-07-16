const user = document.querySelector("#user");
const img_container = document.querySelector("#img_container");
const img = document.querySelector("img");
const list_repos = document.querySelector("#list_html");
const loading = document.querySelector("#loading");
const followers_container = document.querySelector("#followers_container");
const followers_list = document.querySelector("#followers_list");
let username;

let updateLoading = () => {
    let text = loading.querySelector("h3");
    if (text) {
        text.remove();
    } else {
        loading.innerHTML =
            '<h3 class="loading text-light text-center">CARREGANDO...</h3>';
    }
};

async function getUserInfo(username) {
    try {
        updateLoading();
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const userData = await response.json();

        const { avatar_url, followers_url } = userData;

        const response_followers = await fetch(followers_url);
        const followers = await response_followers.json();

        const repoResponse = await fetch(
            `https://api.github.com/users/${username}/repos`
        );
        const repoData = await repoResponse.json();

        const repositories = repoData.map((repo) => ({
            name: repo.name,
            url: repo.html_url,
            data: repo.created_at,
        }));

        const userInfo = [avatar_url, followers, repositories];
        updateLoading();
        return userInfo;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

function removeTitle(father){
    child = father.querySelector(".reset");
    try{
        child.remove();
    }
    catch{
        return null;
    }
}

function createTitulo(text) {
    const titulo = document.createElement("h4");
    titulo.classList.add("text-center");
    titulo.classList.add("reset");
    titulo.innerHTML = text;
    return titulo;
}

function putImage(url) {
    removeTitle(img_container);
    img_container.insertBefore(createTitulo(username), img_user);
    img.style.display = "initial";
    img.src = url;
}

function putImageFollowers(followers) {
    removeTitle(followers_container);
    followers_container.insertBefore(
        createTitulo("Seguidores"),
        followers_list
    );
    followers_list.innerHTML = "";
    followers.forEach((follower) => {
        const { login, avatar_url, html_url } = follower;

        const item = document.createElement("li");
        item.classList.add("list-inline-item");

        const card = `<div class="card mt-4" style="width: 8rem;">
        <img src="${avatar_url}" class="card-img-top" alt="imagem de perfil de ${login}">
        <div class="card-body bg-primary">
          <a class="card-text text-white" href="${html_url}" target="_blank">${login}</a>
        </div>
      </div>`;
        item.innerHTML = card;
        followers_list.appendChild(item);
    });
}

function listRepos(repositorios) {
    list_repos.innerHTML = "";
    for (let rep of repositorios) {
        const item = document.createElement("li");
        item.classList.add("list-inline-item");

        const { name, url, data } = rep;
        const card = `<div class="card m-2 bg-secondary" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title text-light">${name.toUpperCase()}</h5>
          <p class="card-text text-light">Criado em ${formatData(data)}</p>
          <a href="${url}" class="card-link text-light" target="_blank">Acessar</a>
        </div>
      </div>`;
        item.innerHTML = card;
        list_repos.appendChild(item);
    }
}

function formatData(data) {
    let [year, month, day] = data.split("-");
    day = day.substring(0, 2);
    return `${day}/${month}/${year}`;
}

user.addEventListener("keyup", (e) => {
    if (e.keyCode == 13) main();
});

async function main() {
    username = user.value;
    const data = await getUserInfo(username);
    const [url, followers, repositorios] = data;
    putImage(url);
    putImageFollowers(followers);
    listRepos(repositorios);
}
