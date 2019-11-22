const modalOverlay = document.querySelector('.modal-overlay')
const pages = document.querySelectorAll('.classImg')

for (let page of pages) {

    page.addEventListener('click', function() {

    const imgId = page.getAttribute('id')
    // const pageH3 = page.querySelectorAll('h3').textContet


        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = `assets/portfolio/${imgId}.png`
    })
}

document.querySelector('.modal-close').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})