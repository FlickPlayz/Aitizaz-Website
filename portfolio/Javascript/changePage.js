// This code has so far been tested in Firefox, Chrome and Edge on a Mac.

// The code creates a button which when clicked adds or removes a class called 'js-modify-page' to the <html> tag, allowing you to style your page differently when the button is 'off' or 'on'.

// So we have HTML, CSS and JavaScript working together - all three languages!

// find the <span id="switch">

var findLocation = document.getElementById("switch");

// create a button in code

var button = document.createElement("button");
button.setAttribute("class", "js-make-something-happen"); // add a class we can use to style the button in CSS
button.setAttribute("id", "make-something-happen"); // add an ID to listen out for clicks on the button
button.textContent = "Greyscale"; // add the text for the button

// add this created button to our HTML at the place we've saved in the 'findLocation' variable

findLocation.append(button); // add the button to the HTML

// point JavaScript at the button we have just added and save the button location to do things with later

var listenForInteraction = document.getElementById("make-something-happen");

// This changePage function runs whenever the button is clicked on - you can see where it's being 'called' in line 34 and 35 below.

function changePage() {
  // 'toggle' means swop between adding and removing the class from the class list for the HTML element. You will be able to see this happening in the web developer tools.
  document.documentElement.classList.toggle("js-modify-page");
}

// create a click event on our new button that runs a function whenever the button is clicked

listenForInteraction.addEventListener("click", changePage);

