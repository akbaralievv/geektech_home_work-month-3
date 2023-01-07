const serch=document.querySelector('svg')
const block2=document.querySelector('.block2')
const input=document.querySelector('input')
serch.onclick=()=>{
    fetch('data.json')
    .then(response=>response.json())
    .then(json=>{
        switch (input.value.toUpperCase()) {
            case json.person1.name:
                block2.innerHTML=Object.values(json.person1).join("<br/>")
                break;
            case json.person2.name:
                block2.innerHTML=Object.values(json.person2).join("<br/>")
                break;
            case json.person3.name:
                block2.innerHTML=Object.values(json.person3).join("<br/>")
                break;
            default:
                alert('Enter "Kairat" or "Nurdin" or "Alisher"')
                break;
        }
    })
}
    