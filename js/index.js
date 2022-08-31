/* libreria auto escritura */
let typed = new Typed(".auto-input",{
    strings: ["I'm Juan Pablo"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

/* descarga cv */
const boton = document.getElementById('btn-download')

boton.addEventListener('click', ()=>{
    window.open("https://firebasestorage.googleapis.com/v0/b/portafolio-913ab.appspot.com/o/Curriculum%20Vitae%20CV%20Profesional%20marron%20blanco%20(1).pdf?alt=media&token=44f0ad3f-9b82-48d9-a0e5-324b3160d879")
})


/* menu hamburguesa */

document.querySelector(".bars__menu").addEventListener("click", animateBars);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const menu = document.querySelector('.menu')
function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    menu.classList.toggle('menu__active')
}


/* animacion scroll */

window.addEventListener("scroll",()=>{
    const header = document.querySelector('.header')
    header.classList.toggle("header__active",window.scrollY>0)
})

/* botones carrusel */
window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.container__cards'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },{
            breakpoint: 800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
            }
        ]
    });

});

/* envio de formulario */

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ctdo2ht';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Email';
      Swal.fire({
        title: 'Mensaje enviado',
        icon: 'success',
        backdrop: false,
        timer: 3000,
        timerProgressBar: true,
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false
      })
      setInterval("location.reload()", 4000);
    }, (err) => {
      btn.value = 'Enviar Email';
      Swal.fire({
          title: `Error: ${JSON.stringify(err)}`,
          icon: 'error',
          backdrop: false,
          timer: 3000,
          timerProgressBar: true,
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false
      })
    });
});