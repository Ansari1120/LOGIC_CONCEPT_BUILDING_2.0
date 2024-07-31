function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage
const input = document.querySelector("input");
input.addEventListener(
  "input",
  debounce(() => {
    console.log("Input event handler executed");
  }, 300)
);

//Debouncing ensures that a function is executed only
//  after a specified period of inactivity. The function
//   will not execute until
// a certain amount of time has passed since the last event.

//Debouncing is useful for scenarios where you want to delay
// the execution of a function until a certain amount of time has
// passed since the last event, such as validating form inputs or
// searching with live search suggestions.
