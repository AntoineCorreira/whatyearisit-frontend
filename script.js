fetch('http://localhost:3000/year')
.then(response => response.json())
.then(data => {
    document.querySelector('body').innerHTML += `
    <h1 id='year'>${data.date}</h1>
    `
})