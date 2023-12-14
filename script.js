function firstChar(text) {
  // your code here
	const trimmedStr = text.trim();

  // Check if the string is not empty
  if (trimmedStr.length > 0) {
    // Return the first character
    return trimmedStr.charAt(0);
  } else {
    // Return an empty string if the input is empty
    return '';
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
