function submitForm() {
    const name = document.getElementById("Nome").value;
    const email = document.getElementById("Email").value;
    const data = "Nome: ${name}\nEmail: ${email}\n";
  
    const hiddenElement = document.createElement("a");
    hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(data);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'form_data.txt';
    hiddenElement.click();
  }