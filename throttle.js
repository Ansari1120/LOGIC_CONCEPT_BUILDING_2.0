function throttle(fn, wait) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("Scroll event handler executed");
  }, 200)
);

// Throttling ensures that a function is executed at most
//  once in a specified time interval,
// regardless of how many times the event is triggered.

//Throttling is useful for scenarios where you want to
// limit the rate at which a function is executed, such as
//  handling scroll or resize events, where you want
// to avoid performance issues caused by rapid firing of events.
