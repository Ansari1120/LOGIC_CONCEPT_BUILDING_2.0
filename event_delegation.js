//Event delegation allows you to manage events efficiently by adding a single event listener
//to a common parent element and handling events for multiple child elements.

document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target && event.target.matches("button.className")) {
    console.log("Button clicked:", event.target.textContent);
  }
});

//Adding event listeners to multiple elements can degrade performance.
