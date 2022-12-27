const usd=document.getElementById('usd')
const som=document.getElementById('som')
const eur=document.getElementById('eur')
const convert = (elem, target,target1, isTrue) =>
{
    elem.oninput = () =>
    {
        const request = new XMLHttpRequest()
        request.open('GET', "data.json")
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () =>
        {
            console.log(request.response);
            const data = JSON.parse(request.response)
            isTrue===17 ? (target.value = (elem.value / data.usd).toFixed(2))&&(target1.value = (elem.value / data.eur).toFixed(2)) : (target.value = (elem.value * data.usd).toFixed(2))&&(target1.value = (elem.value * (data.usd/data.eur)).toFixed(2))
            isTrue===18 ? (target.value = (elem.value * data.eur).toFixed(2))&&(target1.value = (elem.value *(data.eur/data.usd)).toFixed(2)): null
            elem.value === '' && (target.value=target1.value = '')
        }
    }
}
convert(som, usd,eur, 17)
convert(usd, som,eur)
convert(eur,som,usd,18)
