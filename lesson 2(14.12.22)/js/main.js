// SetTimeoute

// const hi = ()=>{
// console.log('hi');
//  }
//  setTimeout((hi), 1000);
//  setTimeout(()=>{
//    console.log('1232131');
//  },2000)

// setTimeout(()=>{
//     console.log('0');
// },0)
// setTimeout(()=>{
//     console.log('1');
// },1000)
// setTimeout(()=>{
//     console.log('2');
// },2000)
// console.log('a');
// console.log('b');

// SetInterval

// const interval=setInterval(() => {
//     console.log('ok');
// }, 1000);
// setInterval(() => {
//     clearInterval(interval)
// }, 5000);

const block=document.getElementsByClassName('block')
let positionX=0
let positionY=0
let positionX_end = 448;
let positionY_end = 448;
const move=()=>{
    if(positionX<=440){
        positionX+=15
        block[0].style.left=`${positionX}px`
        setTimeout(move,30)
    }else if(positionX>=440 && positionY<=440){
        positionY+=15
        block[0].style.top=`${positionY}px`
        setTimeout(move,30)
    } else if (positionX_end > 0) {
            positionX_end -= 15;
            block[0].style.left = `${positionX_end}px`;
            setTimeout(move, 30);
          } else if (positionY_end > 0) {
            positionY_end -= 15;
            block[0].style.top = `${positionY_end}px`;
            setTimeout(move, 30);
          } else if (positionY_end === -2) {
            location.reload();
          }
}
move()
let time = setInterval(() => console.log("start"), 1000);
setTimeout(() => {
  clearInterval(time);
}, 60000);
// console.log(block[0]);

// setTimeout(() => {
//     console.log('1');
// },1000 );
// setTimeout(() => {
//     console.log('2');
// },1000 );
// setTimeout(() => {
//     console.log('3');
// },1000 );

// Call Stack > Web Api > Callback Queue > Call Stack

// Callback (функция высшего порядка)

// const doHomework=(subject,callback)=>{
//     alert(`starting my ${subject} homework`)
//     callback()
// }
// const alertFinish=()=>{
//     alert('done!')
// }
// doHomework('scince',alertFinish)
// alertFinish()

//Замыкание

// const func=(num)=>{
//     console.log(num);
//     const culc=()=>{
//         const newNum=num*5
//         console.log(newNum);
//     }
//     culc()
// }
// func(9)

// const func=(n)=>{
//     console.log(n,'n');
//     return function(num){
//         console.log(num,'num');
//         console.log(n+num);
//         // return n+num
//     }
// }
// const neweNum=func(3);
// neweNum(10)