const fadersUp = document.querySelectorAll(".fade-up");
const fadersDown = document.querySelectorAll(".fade-down");
const fadersLeft = document.querySelectorAll(".fade-left");
const fadersRight = document.querySelectorAll(".fade-right");
const fadersIn = document.querySelectorAll(".fade-in");


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };


  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return ;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);



fadersUp.forEach( faderUp =>{
    appearOnScroll.observe(faderUp);
})
fadersDown.forEach( faderDown =>{
    appearOnScroll.observe(faderDown);
})
fadersLeft.forEach( faderLeft =>{
  appearOnScroll.observe(faderLeft);
})
fadersRight.forEach( faderRight =>{
  appearOnScroll.observe(faderRight);
})
fadersIn.forEach( faderIn =>{
    appearOnScroll.observe(faderIn);
  })