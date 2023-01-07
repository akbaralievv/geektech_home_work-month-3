const usd=document.getElementById('usd')
const som=document.getElementById('som')
const eur=document.getElementById('eur')
const convert = (elem, target,target1, isTrue) =>
{
    elem.oninput = () =>
    {
        fetch('data.json')
            .then(response=>response.json())
            .then(json=>{

                isTrue===17 ? (target.value = (elem.value / json.usd).toFixed(2))&&(target1.value = (elem.value / json.eur).toFixed(2)) : (target.value = (elem.value * json.usd).toFixed(2))&&(target1.value = (elem.value * (json.usd/json.eur)).toFixed(2))
                isTrue===18 ? (target.value = (elem.value * json.eur).toFixed(2))&&(target1.value = (elem.value *(json.eur/json.usd)).toFixed(2)): null
                elem.value === '' && (target.value=target1.value = '')
            })
    }
}
convert(som, usd,eur, 17)
convert(usd, som,eur)
convert(eur,som,usd,18)
