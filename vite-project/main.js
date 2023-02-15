import './style.css'
import javascriptLogo from './javascript.svg'
const primaryHeader = document.querySelector('.primary-header')
const mobileNav = document.querySelector('.mobile-nav-toggle')
const primaryNav = document.querySelector('.primary-navigation')
const iconOpen = document.querySelector('.icon-open')
const iconClose = document.querySelector('.icon-close')
mobileNav.addEventListener('click', ()=> {
    
  if(primaryNav.hasAttribute('data-visible')){
      mobileNav.setAttribute('aria-expanded', false)
      document.body.style.overflow="scroll"
      iconOpen.style.display = 'block'
      iconClose.style.display = 'none'
    }  
    else {
        mobileNav.setAttribute('aria-expanded', true)
        document.body.style.overflow="hidden"
        iconOpen.style.display = 'none'
        iconClose.style.display = 'block'

  }
    primaryNav.toggleAttribute('data-visible')
    primaryHeader.toggleAttribute('data-overlay')
})