// Inicializamos las variables para cada unidad de tiempo y una variable que va
// a contener los intervalos de tiempo
let cent = 00
let sec = 00
let min = 00
let hr = 00
let interval = null

// Cogemos los objetos de html que tenemos que utilizar
const stopwatch = document.getElementById("stopwatch")
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")
const resetBtn = document.getElementById("reset-btn")

// ------------------ EVENT LISTENERS  ---------------------------

// Al hacer click en start, paramos el intervalo que existe, para que no poda-
// mos tener varios intervalos seguidos funcionando. Despues empezamos un inter-
// valo nuevo que cada centesima llama a la funcion countTime
startBtn.addEventListener("click", function() {
  clearInterval(interval)
  interval = setInterval(countTime, 10)
})


// Al hacer click en stop, simplemente paramos el intervalo que esta funcionan-
// do para que no siga avanzando el reloj
stopBtn.addEventListener("click", function() {
  clearInterval(interval)
})


// Cuando reiniciamos, tenemos que parar el intervalo de tiempo, setear las
// variables a 00 y displayear el 00:00:00:00
resetBtn.addEventListener("click", function() {
  clearInterval(interval)
  hr = 00
  min = 00
  sec = 00
  cent = 00
  stopwatch.textContent = "00:00:00:00"
})

// ------------------------  FUNCIONES  ------------------------------

// Funcion para avanzar el tiempo
function countTime() {

    // Convertimos las variables de strings a numeros
    cent = parseInt(cent)
    sec = parseInt(sec)
    min = parseInt(min)
    hr = parseInt(hr)

    // Añadimos una centésima
    cent += 1

    // Llamamos a la funcion para hacer display del tiempo
    displayTime()

    }

// Funcion para hacer display del tiempo
function displayTime() {

  // Si las centesimas son 100, añadimos un segundo y reiniciamos las cents
  if (cent == 100) {
    cent = 0;
    sec += 1
  }

  // Si los segundos son 60, añadimos un minuto y reiniciamos los segundos
  if (sec == 60) {
    sec = 0;
    min += 1
  }

  // Si los minutos son 60, añadimos una hora y reiniciamos los minutos
  if (min == 60) {
    min = 0;
    hr += 1
  }

  // Añadimos un 0 delante de las centésimas si solo están entre 0-9
  if (cent < 10) {
    cent = "0" + cent
  }

  // Añadimos un 0 delante de los segundos si solo están entre 0-9
  if (sec < 10) {
    sec = "0" + sec
  }

  // Añadimos un 0 delante de los minutos si solo están entre 0-9
  if (min < 10) {
    min = "0" + min
  }

  // Añadimos un 0 delante de las horas si solo están entre 0-9
  if (hr < 10) {
    hr = "0" + hr
  }

  // Hacemos display del tiempo
  stopwatch.textContent = `${hr}:${min}:${sec}:${cent}`

}
