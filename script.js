const inputBox=document.getElementById("input-box")
const imgBox=document.getElementById('imgBox')
const qrImg=document.getElementById('qrImg')

function generateQR(){
    if(inputBox.value.length>0){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputBox.value;
    imgBox.classList.add('show-img')
    storage()
    }
    else{
        inputBox.classList.add('error')
        setTimeout(()=>{
            inputBox.classList.remove('error')
        },1000)
    }
}

function storage(){
    localStorage.setItem('data',qrImg.src)
}
function get(){
    imgBox=localStorage.getItem('data')
}
get()


