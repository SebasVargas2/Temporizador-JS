let ingreso = document.getElementById('ingreso')
const boton = document.getElementById('boton')
const boton2 = document.getElementById('pause')
const boton3 = document.getElementById('cancel')
let pantalla = document.getElementById('pantalla')


function start(){
    function regresiva(ingreso){
        if (ingreso==0){
            pantalla.textContent='Finish'
        }
        else {
            let detener = setInterval(regresiva,1000,ingreso-1)
            pantalla.textContent=(ingreso)
            boton2.addEventListener('click',()=>{
                clearInterval(detener)
                boton2.textContent="Continue"

                boton2.addEventListener('click', ()=>{
                    setInterval(regresiva,1000,ingreso-1)
                    boton2.textContent="Pausar"
                })
            })
            
            boton3.addEventListener('click',()=>{
                clearInterval(detener)
                ingreso.textContent=""
                pantalla.textContent="0"
            })
        }
    }
    regresiva(ingreso.value)
}   






