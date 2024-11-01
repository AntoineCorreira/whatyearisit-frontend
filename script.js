fetch('https://whatyearisit-backend-eight-eta.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('body').innerHTML += `
    <h1 id='year'>${data.date}</h1>
    `
})