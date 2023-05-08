var Slider = function (listImgSlider, el, elNext, elPrev, elImg) {
  this.el = el;
  this.listImgSlider = listImgSlider;
  this.elNext = elNext;
  this.elPrev = elPrev;
  this.elImg = elImg;
  this.current = 0;
  this.direction ;
  this.run = () => {
    this.elImg.animate([
      // keyframes
      {
        opacity: 0.5,

        easing: "ease",
      },
      {
        opacity: 1,
        easing: "ease",
      }
    ], {
      // timing options
      duration: 700,
    });
    this.elImg.setAttribute("src", this.listImgSlider[this.current]);

  }

  this.elNext.addEventListener("click", () => {
    this.direction=1;
    this.current += 1;
    if (this.current > this.listImgSlider.length - 1)
      this.current = 0;
    this.el.style.transform = "translate(-25%)";
    this.run();
  })
  this.elPrev.addEventListener("click", () => {
    this.direction=-1;
    this.current -= 1;
    if (this.current < 0)
      this.current = this.listImgSlider.length - 1;
    this.el.style.transform = "translate(25%)";
    this.run();

  })
  this.el.addEventListener("transitionend", () => {
    if(this.direction=== 1){
        this.el.appendChild(this.el.firstElementChild);
    }
    if(this.direction=== -1){
      this.el.prepend(this.el.lastElementChild);
    }
  
    this.el.style.transition = "none";
    this.el.style.transform = "translate(0)";
    setTimeout(() => {
      this.el.style.transition = "all 0.5s";
    })
  })
}