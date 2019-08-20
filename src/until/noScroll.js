class NoScroll{
  constructor(element) {
    this.element = element;
    this.isScroll = false;
    this.setTouchstart();
    this.setTouchMove();
    this.setTouchEnd();
  }
  setTouchstart(){
    this.element.addEventListener('touchstart',(e)=>{
      this.isScroll = true;
      this.touchstartE = {
        x:e.touches[0].clientX,
        y:e.touches[0].clientY
      }
    })
  }
  debounce(fn, wait) {     
    // return ()=>{      
    //   if(window.timeout){
    //     clearTimeout(window.timeout)
    //   }else{
    //     window.timeout = setTimeout(fn, wait);  
    //   };
    // }
    
  }
  setTouchMove(){
    this.element.addEventListener('touchmove',(e)=>{
      if(!window._timer) {
        window._timer = setInterval(() => {
            this.touchmoveE = {
              x:e.touches[0].clientX,
              y:e.touches[0].clientY
            }
        let [x,y] = [Math.abs(this.touchmoveE.x - this.touchstartE.x),Math.abs(this.touchmoveE.y - this.touchstartE.y)]
        console.log(x,y);
        if(x > y){
          console.log("上下滚动")
        }else{
          console.log('左右滚动')
        }
        }, 300);
      }
    })
  }
  setTouchEnd(){
    this.element.addEventListener('touchend',(e)=>{
      clearInterval(window._timer)
      window._timer = null
      this.isScroll = false;
    })
  }
}
export default NoScroll;