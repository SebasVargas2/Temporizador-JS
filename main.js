let ingreso = document.getElementById('ingreso')
const boton = document.getElementById('boton')
const boton2 = document.getElementById('pause')
const boton3 = document.getElementById('cancel')
let pantalla = document.getElementById('pantalla')
var detener2 = null
let flag = true

function start(){
    function regresiva(ingreso){
        if (ingreso<0){
            pass
        }
        else {
            if (ingreso==0){
                pantalla.textContent='Finish'
            }
            else {
                var detener = setInterval(regresiva,1000,ingreso-1)
                pantalla.textContent=(ingreso)
                boton2.addEventListener('click',()=>{
                    clearInterval(detener)
                    boton2.textContent="Continue"
    
                    boton2.addEventListener('click', ()=>{
                        detener2 = setInterval(regresiva,1000,ingreso-1)
                        boton2.textContent="Pausar"
                    })
                })
                boton3.addEventListener('click',()=>{
                    clearInterval(detener2)
                    clearInterval(detener)
                    ingreso.textContent=" "
                    pantalla.textContent="Cancelado"
                    flag=false
                })
            }
        }
    }

    if (isNaN(ingreso.value)){
        alert('Eso no es un numero')
        miNumero.value = " "
    }
    else{
        if (flag==true){
            regresiva(ingreso.value)
        }
    }
}   

function again(){
    location.reload()
}




