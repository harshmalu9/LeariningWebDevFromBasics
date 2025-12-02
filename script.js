addEventListener('mousemove', (e) => {
    // console.log(e.x, e.y);

    document.body.style.setProperty('--x', e.x + 'px');
    document.body.style.setProperty('--y', e.y + 'px');
});

const h1 = document.querySelector('h1');
const text = h1.innerText
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function randomText(){
    let str = text.split('').map((char, index) => {
        if(index < iteration) {
            return char
        }
        return characters[Math.floor(Math.random() * 53)]
    }).join('');

    h1.innerText = str

    iteration += 0.25

    console.log(str);

    return str;
}

h1.addEventListener('mouseenter', () => {
    console.log("hello");
    let int = setInterval(randomText, 50);
    setTimeout(() => {
        iteration = 0
        clearInterval(int)
    }, text.length * 1000)
})

