const mainBack = document.querySelector('#main_back')
const intro1 = document.querySelector('#intro1')
mainBack.addEventListener('mousemove', (e) =>{
    const range = 20
    let horizontal = (e.clientX / parseInt(getComputedStyle(mainBack).width, 10))*range - range/2
    let vertical = (e.clientY / parseInt(getComputedStyle(mainBack).height, 10))*range - range/2
    document.querySelector("#main_back1").style.transform =`translate3d(${horizontal}px, ${vertical}px, 0) rotateX(${-vertical}deg) rotateY(${horizontal}deg)`
    document.querySelector("#main_back2").style.transform =`translate3d(${horizontal*3}px, ${vertical}px, 0) rotateX(${-vertical}deg) rotateY(${horizontal}deg)`
})

document.addEventListener('scroll', (e) => {
    let scrolled_bottom = document.documentElement.scrollTop + window.innerHeight
    let trect = intro1.getBoundingClientRect();
    let theight = ((trect.top - window.innerHeight) + trect.height/3)
    console.log((theight))
    if(theight <= 0){
        intro1.style.opacity = "1"
    }
    else
    {
        intro1.style.opacity = "0"
    }

})

function menuEnter(){
    document.getElementsByClassName('menu_down')[0].style.height = '12rem'
}
function  menuLeave(){
    document.getElementsByClassName('menu_down')[0].style.height = '0rem'
}

function  goTo(object){
    console.log("part"+object.id)
    let el = document.querySelector("#part"+object.id)
    window.scrollTo({top:el.offsetTop+130, left:0, behavior:"smooth"})
}