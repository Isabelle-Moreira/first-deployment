function getData() {
    fetch('https://backend-firstdeploy.onrender.com/api/data')
    .then(response => response.json())
    .then(data => {
    document.getElementById('data').textContent = `Dados do Backend:
    ${data.message}`;
    })
    .catch(error => console.error('Erro ao obter dados:', error));
    }
