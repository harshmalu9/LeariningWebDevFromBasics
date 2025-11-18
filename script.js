const btn = document.querySelector('button')
const progressBar = document.querySelector('.inner')
const progText = document.querySelector('h2')
const displayText = document.querySelector('#text')
let progress = 0

btn.addEventListener('click', () => {
    btn.style.pointerEvents = 'none'
    let interval = setInterval(() => {
        progress++;
        progText.innerHTML = progress + '%'
        progressBar.style.width = progress + '%'
        btn.innerHTML = 'Downloading'
        displayText.innerHTML = 'The download is in progress.'
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
        displayText.innerHTML = 'Downloading done.'
    }, 10000)
})