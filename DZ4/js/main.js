const serch=document.querySelector('svg')
const block2=document.querySelector('.block2')
const input=document.querySelector('input')
serch.onclick=()=>{
    const request= new XMLHttpRequest()
    request.open('get','data.json')
    request.send()
    request.addEventListener('load',()=>{
        const info=JSON.parse(request.response)
        switch (input.value.toUpperCase()) {
            case info.person1.name:
                block2.innerHTML=Object.values(info.person1).join("<br/>")
                break;
            case info.person2.name:
                block2.innerHTML=Object.values(info.person2).join("<br/>")
                break;
            case info.person3.name:
                block2.innerHTML=Object.values(info.person3).join("<br/>")
                break;
            default:
                alert('Enter "Kairat" or "Nurdin" or "Alisher"')
                break;
        }
    })}
    