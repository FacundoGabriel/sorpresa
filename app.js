// variables

const sobre = document.querySelector('.envoltorio-sobre');
const container = document.querySelector('.container')
const btn = document.querySelector('#btn')


sobre.addEventListener('click', () => {
    sobre.classList.toggle('flap');
})

container.style.display = "none";


btn.addEventListener('click', () =>{
    const ocultar_after = document.querySelector('.ocultar-after')

    ocultar_after.style.display = "none"

    container.style.display = "flex";

  
    
})