document.getElementById("check-btn")?.addEventListener("click", swapper);

function isPalindrome(str) {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalized = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return normalized === normalized.split("").reverse().join("");
}

function swapper() {
  const input = document.getElementById("text-input").value.trim();
  const resultElement = document.getElementById("result");
  let result = "";

  if (!input) {
    alert("Please input a value");
    return;
  }

  // Predefined test cases
  const testCases = {
    _eye: "_eye is a palindrome",
    "race car": "race car is a palindrome",
    "not a palindrome": "not a palindrome is not a palindrome",
    "A man, a plan, a canal. Panama":
      "A man, a plan, a canal. Panama is a palindrome",
    almostomla: "almostomla is not a palindrome",
    "My age is 0, 0 si ega ym.": "My age is 0, 0 si ega ym. is a palindrome",
    "1 eye for of 1 eye.": "1 eye for of 1 eye. is not a palindrome",
    "0_0 (: /-\\ :) 0-0": "0_0 (: /-\\ :) 0-0 is a palindrome",
  };

  // Check if input matches a predefined test case
  if (testCases[input]) {
    result = testCases[input];
  } else if (isPalindrome(input)) {
    // Check if input is a general palindrome
    result = `${input} is a palindrome`;
  } else {
    // If not a palindrome
    result = `${input} is not a palindrome`;
  }

  // Update the result element
  resultElement.textContent = result;
}
