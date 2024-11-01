fetch('https://whatyearisit-backend-eight-eta.vercel.app/year')
.then(response => response.json())
.then(data => {
    document.querySelector('#year').textContent = data.date;
})