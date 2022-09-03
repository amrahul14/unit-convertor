const inputVal =  document.getElementById("input-val")
const conbtn = document.getElementById("btn")

const Length = document.getElementById("length")
const Volume = document.getElementById("volume")
const Mass = document.getElementById("mass")
conbtn.addEventListener("click",function(){
     let meter = 3.281 * inputVal.value
     let feet = 0.305 * inputVal.value
     let liter = 0.264 * inputVal.value
     let gallon = 3.788 * inputVal.value
     let kilogram = 2.204 * inputVal.value
     let pound = 0.454 * inputVal.value
     Length.innerHTML = `${inputVal.value} meters = ${meter.toFixed(3)} feet | ${inputVal.value} feet = ${feet.toFixed(3)} meters`
     Volume.innerHTML = `${inputVal.value} liter = ${liter.toFixed(3)} gallon | ${inputVal.value} gallon = ${gallon.toFixed(3)} liter`
     Mass.innerHTML = `${inputVal.value} kilogram = ${kilogram.toFixed(3)} pound | ${inputVal.value} pound = ${pound.toFixed(3)} kilogram`
})