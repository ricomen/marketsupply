  "use strict";
function Slider(settings) {
  this.slider = document.querySelector(settings.className);  
  this.sliderItems = this.slider.querySelectorAll(".slider__item");
  this.btnPrev = this.slider.querySelector('.slider__btn--prev');
  this.btnNext = this.slider.querySelector('.slider__btn--next');
  this.interval = settings.interval;  
  this.inf = settings.inf;   
  var self = this;
  this.btnNext.onclick = function() {    
    self.nextSlide();
  } 
  this.btnPrev.onclick = function () {
    self.prevSlide();
  }   
  this.init();
  this.slideShow();
  
}
Slider.prototype.slideShow = function() {
  console.log(this.inf);
  if(this.inf) {
    this.timer();
  }
}

Slider.prototype.timer = function() { 
  var self = this;
  var timer = setInterval(function() {
    self.nextSlide();
  },this.interval);
  
}
Slider.prototype.init = function() {
    for(var i = 0;  i < this.sliderItems.length; i++) {      
      this.sliderItems[i].style.left = (this.sliderItems[i].offsetWidth * i) + "px";
    };    
  };

// след. слайд
Slider.prototype.nextSlide = function() {   
  if((parseInt(this.sliderItems[0].style.left) !== parseInt(-(this.sliderItems.length-1)*this.sliderItems[0].offsetWidth))) {
    for(var i = 0;  i < this.sliderItems.length; i++) {
      this.sliderItems[i].style.left = parseInt(this.sliderItems[i].style.left) - this.sliderItems[0].offsetWidth + "px";    
    }
  } else this.init();
};

//пред. слайд
Slider.prototype.prevSlide = function() {
  if((parseInt(this.sliderItems[0].style.left) !== 0)) {
    for(var i = 0;  i < this.sliderItems.length; i++) {
      this.sliderItems[i].style.left = parseInt(this.sliderItems[i].style.left) + this.sliderItems[0].offsetWidth + "px";
    }
  } else for (var i = 0; i < this.sliderItems.length; i++) {    
    this.sliderItems[i].style.left = -parseInt(this.sliderItems[0].offsetWidth * ((this.sliderItems.length - i)-1))+ "px";
  };
};


var s1 = new Slider({
        className: ".s1",
        interval: "2500",
        inf: false
});

var s2 = new Slider({
        className: ".s2",
        interval: "3000",
        inf: true
});

var s3 = new Slider({
        className: ".s3",
        interval: "3000",
        inf: true
});