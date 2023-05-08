const FadeUp = (el) => {
  for (var idx = 0; idx < el.length; idx++) {
    el[idx].animate([
      // keyframes
      {
        opacity: 0,
        transform: " translateY(15rem)",
        easing: "ease",
      },
      {
        opacity: 1,
        transform: " translateY(0rem)",
        easing: "ease",
      }
    ], {
      // timing options
      duration: 800 + 500 * idx,
    }); 
    el[idx].style.opacity="1";
  }
 
}
const FadeLeft = (el, time) => {
  el.animate([
    // keyframes
    {
      opacity: 0,
      transform: " translateX(-15rem)",
      easing: "ease",
    },
    {
      opacity: 1,
      transform: " translateX(0rem)",
      easing: "ease",
    }
  ], {
    // timing options
    duration: time,
  });
  el.style.opacity="1";
}
const FadeRight = (el, time) => {
  el.animate([
    // keyframes
    {
      opacity: 0,
      transform: " translateX(15rem)",
      easing: "ease",
    },
    {
      opacity: 1,
      transform: " translateX(0rem)",
      easing: "ease",
    }
  ], {
    // timing options
    duration: time,
  });
  el.style.opacity="1";
}