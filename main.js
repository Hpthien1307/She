// toggle click

// const tgBlock = document.querySelectorAll('.toggleJs');
// if (tgBlock) {
//     const tgParent = document.querySelectorAll('.tgParent');
//     console.log(tgParent)
//     if (tgParent) {
//         tgParent.forEach((parent)=>{
//             parent.addEventListener('click', ()=> {
//                 parent.classList.toggle('active')
//             })
//         })
//     }
// }


// menu mobile

const menuMb = document.querySelector('.menuMb');
const hg = document.querySelector('.hambuger .hd-bar');
const over = document.querySelector('.overlay');
const body = document.querySelector('body');

hg.onclick =()=> {
    hg.classList.toggle('active');
    menuMb.classList.toggle('active');
    over.classList.toggle('active');
    body.classList.toggle('no-scroll');
}

over.onclick =()=> {
    hg.classList.remove('active')
    menuMb.classList.remove('active')
    over.classList.remove('active')
    body.classList.remove('no-scroll');
}