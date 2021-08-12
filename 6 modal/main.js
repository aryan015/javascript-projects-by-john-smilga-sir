// selectors
const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

// open modal
modalBtn.addEventListener('click',function(){
    // console.log(hero.classList)
    modal.classList.add('open-modal')
})

// close modal
closeBtn.addEventListener('click',function(){
    modal.classList.remove('open-modal')
})