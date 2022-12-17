const phoneInput=document.querySelector('.phoneInput')
const phoneCheck=document.querySelector('.phoneCheck')
const phoneResult=document.querySelector('.phoneResult')
const block=document.getElementById('block_item')
const btn=document.getElementById('btn')
const gmailRegExp=/^[A-Za-z0-9_\-]+\@(gmail)+\.[A-Za-z]{2,3}$/
const emailRegExp=/^[A-Za-z0-9_\-]+\@(mail)+\.[A-Za-z]{2,3}$/
phoneCheck.addEventListener('click',()=>{
    const newPhoneValue=phoneInput.value.split(' ')
    if(gmailRegExp.test(newPhoneValue.join('')) || emailRegExp.test(newPhoneValue.join(''))){
        phoneInput.style.background='green'
    }else{
        phoneInput.style.background='red'
    }
})
let iter=0
btn.onclick=()=>{
    if(iter<357){
        iter=iter+4
        block.style.left =`${iter}px`
        setTimeout(btn.onclick,10)
    }
}