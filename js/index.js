let typed = new Typed(".auto-input",{
    strings: ["{Desarrollador", "Frontend};"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


const boton = document.getElementById('btn-download')

boton.addEventListener('click', ()=>{
    window.open("https://firebasestorage.googleapis.com/v0/b/portafolio-913ab.appspot.com/o/Curriculum%20Vitae%20CV%20Profesional%20marron%20blanco%20(1).pdf?alt=media&token=44f0ad3f-9b82-48d9-a0e5-324b3160d879")
})


const menu = document.querySelector('.menu'), burguer = document.querySelector('.burguer')

burguer.addEventListener('click',()=>{
    menu.classList.toggle('menu__active')
})



window.addEventListener("scroll",()=>{
    const header = document.querySelector('.header')
    header.classList.toggle("header__active",window.scrollY>0)
})
