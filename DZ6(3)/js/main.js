const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () =>
{
    tabContent.forEach((item) => {
        item.style.display = 'none';
    })
    tabs.forEach((item) =>
    {
        item.classList.remove('tabheader__item_active');
    })
}
hideTabContent()
const showTabContent = (i = 0) =>
{
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()

// дз задание первое
let c = 0;
const slider = e =>
{
    setInterval((i) =>
    {
        if (c === 4) c = 0;
        hideTabContent()
        showTabContent(c);
        c++;
    }, 2300);
}
slider()
tabsParent.addEventListener('click', (e) =>
{
   
    if (e.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) =>
        {
            if (e.target === item) {
                hideTabContent()
                showTabContent(i)
                c = i;
            }
        })      
    }
})
// конец первого задания дз

// modal
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () =>
{
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}
const closeModal = () =>
{
    modal.classList.add('hide');
    modal.classList.remove('show')
    document.body.style.overflow = ''
}
modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

// дз задание второе
const diolog = document.querySelector('.modal__dialog')
modal.addEventListener('click', (e) =>
{
    if (!diolog.contains(e.target) && modal.classList.contains('show')) closeModal();
})
// дз здание третье
// const scroolEnd = () => {
//     const footer = document.documentElement;
//     if (footer.scrollTop + footer.clientHeight >= footer.scrollHeight - 0.8) {
//         openModal();
//     }
// }
// window.addEventListener("scroll", scroolEnd)

// lesson 5
const message={
    loading:'идет загрузка...',
    success:'спасибо скоро свяжется',
    fail:'ой что-то пошло не так :('
}
// const forms = document.querySelectorAll('form')
// const postData = (form) =>
// {
//     form.onsubmit = (e) =>
//     {
//         e.preventDefault()
//         const messageBllock=document.createElement('div')
//         messageBllock.textContent=message.loading
//         form.append(messageBllock)
//         const request = new XMLHttpRequest()
//         request.open("POST", "server.php")
//         request.setRequestHeader("Content-type", "application/json")

//         const formData = new FormData(form)
//         const object = {}

//         formData.forEach((item, i) =>
//         {
//             const arr = [item, i]
//             console.log(arr);
//             object[i] = item
//         })
//         console.log(object);
//         const json = JSON.stringify(object)
//         request.send(json)
//         request.addEventListener('load',()=>{
//             if(request.status===200){
//                 console.log('ok');
//                 messageBllock.textContent=message.success
//             }else{
//                 console.log('not ok');
//                 messageBllock.textContent=message.fail
//             }
//         })
//     }
    
// }
// forms.forEach((item) =>
// {
//     postData(item)
// })

// post request

//DZ5
// const modalTrigger2 = document.querySelector('.btn_dark')
// modalTrigger2.addEventListener('click', openModal)
// const forms = document.querySelectorAll('form')
// const postData = (form) =>
// {
//     form.onsubmit = (e) =>
//     {
//         e.preventDefault()
//         const messageBllock=document.createElement('div')
//         messageBllock.textContent=message.loading
//         form.append(messageBllock)
//         const request = new XMLHttpRequest()
//         request.open("POST", "server.php")
//         request.setRequestHeader("Content-type", "application/json")

//         const formData = new FormData(form)
//         const object = {}

//         formData.forEach((item, i) =>
//         {
//             const arr = [item, i]
//             console.log(arr);
//             object[i] = item
//         })
//         console.log(object);
//         const json = JSON.stringify(object)
//         request.send(json)
//         request.addEventListener('load',()=>{
//             let arr=[]
//             for(let key in object){
//                 arr.push(object[key])
//             }
//             messageBllock.textContent=`Ваше имя: ${arr[0]}   Ваш номер: ${arr[1]} `
//         })
//     }
    
// }
// forms.forEach((item) =>
// {
//     postData(item)
// })

// DZ6
const modalTrigger2 = document.querySelector('.btn_dark')
modalTrigger2.addEventListener('click', openModal)
const forms = document.querySelectorAll('form')
const postData = (url, data) =>
{
    const res = fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: data
    })
    return res
}
const bindData = (form) =>
{
    form.onsubmit = (e) =>
    {
        e.preventDefault()
        const messageBllock=document.createElement('div')
        messageBllock.textContent=message.loading
        form.append(messageBllock)


        const formData = new FormData(form)
        const object = {}

        formData.forEach((item, i) =>
        {
            const arr = [item, i]
            console.log(arr);
            object[i] = item
        })
        console.log(object);
        const json = JSON.stringify(object)
        const closeMessage = function ()
        {
            setTimeout(() =>
            {
                messageBlock.remove()
            }, 2000);
        }
        
            postData('server.php',json)
            .then(data=>{
                console.log(data.status)
                setTimeout(() => {
                    if (data.status == 200) {
                        messageBlock.textContent = message.success
                        closeMessage()
                    }
                   
                }, 1000);
                // let arr=[]
                // for(let key in object){
                //     arr.push(object[key])
                // }
                // messageBllock.textContent=`Ваше имя: ${arr[0]}   Ваш номер: ${arr[1]} `
            })
            .catch(() =>
            {
                console.error(e)
                setTimeout(() => {
                    messageBlock.textContent = message.fail
                    closeMessage()
                }, 1000);
            })
        // })
    }
    
}
forms.forEach((item) =>
{
    bindData(item)
})
