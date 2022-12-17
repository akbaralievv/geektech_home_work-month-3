const block=document.getElementsByClassName('block_item')
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
let q = setInterval(() => console.log("start"), 1000);
setTimeout(() => {
  clearInterval(q);
}, 60000);