var countPrice = function(start, end, el, time) {
  this.start = start;
  this.end = end;
  this.el = el;
  this.current = this.start;
  this.time= time
  this.count();
}
countPrice.prototype.count =function() {
  if (this.start > this.end) {
    let timer = setInterval(() => {
      this.current -= Math.ceil((this.start - this.end) / 10);
      if (this.current <= this.end) {
        this.current = this.end;
        clearInterval(timer)
      }
      this.el.innerHTML  = this.current;
      console.log("🚀 ~ file: countPrice.js ~ line 15 ~ time ~ this.el.innerHTML", this.el.innerHTML)
    }, parseInt(this.time / 10))
  }
  else{
 
      let timer = setInterval(() => {
        this.current += Math.ceil((this.end - this.start) / 10);
        
        if (this.current >=this.end) {
          this.current = this.end;
          clearInterval(timer)
        }
        this.el.innerHTML  = this.current;
      }, parseInt(this.time / 10))
    
  }
}