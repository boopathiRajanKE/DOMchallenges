const loadingSpan = document.querySelector('.progress_bar > div')
const button = document.querySelector('.load')
const countSpan = document.querySelector('.queue')

let counter = 0;

button.addEventListener('click', () => {
    counter++
    updateCounter();

    if (counter === 1) {
        initiateProgress();
    }
})

const initiateProgress = () => {
    loadingSpan.animate([
        { width: '100%' }
    ], 
    {
        duration: 2000,
        iterations: `1`
        
    }).finished.then(() => {
        counter--
        updateCounter();
        if (counter !== 0) initiateProgress()
    })
}

const updateCounter = () => {
    countSpan.innerText = `Queue ${counter}`
}