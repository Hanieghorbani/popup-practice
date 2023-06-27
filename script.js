const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')
const popup = document.querySelector('.popup')

openBtn.addEventListener('click',()=>{
  popupChange('none','translateX(0)','gray')
})

closeBtn.addEventListener('click',()=>{
  popupChange('block','translateX(-1000px)','var(--background)')
})

function popupChange(dsply,trns,color) {
  openBtn.style.display = dsply
  popup.style.transform = trns
  document.querySelector('body').style.background = color
}