// const butnn=document.getElementById("butn");
const inPut=document.getElementById("input");
const img=document.getElementById("img");
const boxImg=document.getElementById("box-img")
function Qrcode(){
img.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inPut.value;
boxImg.classList.add("box-qrcode")
}