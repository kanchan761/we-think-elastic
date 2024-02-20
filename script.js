var nav=document.querySelector(".navright>i")
var cross = document.querySelector(".navi>i")

var tl = gsap.timeline()

tl.to(".navi",{
right:"0%",
duration:0.6,
})

tl.pause()
nav.addEventListener("click",function(){
tl.play()
})
cross.addEventListener("click",function(){
    tl.reverse();
})


gsap.from(".h1 h1",{
    y:40,
    delay:0.7,
duration:1,
    opacity:0,
    stagger:0.1,
    scrub:4

})


gsap.to(".page2 video",{
    width:"100%",
    duration:9,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 0%",   //????????
        end:"top -100%",
        // markers:true,
        pin:true,
        scrub:2,
    }
})
gsap.from(".page3>h3,.page3>h5",{
y:50,
// delay:1,
opacity:0,
stagger:0.4,
scrollTrigger:{
    trigger:".page3",
    scroller:"body",
    start:"top 60%",
    end:"top 10%",
    // markers :true,
    scrub:2,
}
})

// var a=document.querySelector(".right5")

// a.addEventListener("mouseenter",()=>{
// a.style.height="48%";
// a.style.width="38%";
// })

gsap.to(".page6 h1",{
transform:"translatex(-140%)",

scrollTrigger:{
  trigger:".page6",
  scroller:"body",
//   markers:true,
  start:"top 0%",
  end:"top -200%",
  pin:true,
  scrub:2,
}
})

