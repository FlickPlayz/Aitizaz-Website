// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 9 || currenthour > 22) {
  emailmessage = "I am <strong>asleep</strong>, sorry!";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);

// For extra credit, you might now think about...
// using getTimezoneOffset(); to see if the user is in the same timezone as you, and modify the message accordingly?
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
//
// or using setInterval to check every so often what the time is for the user, if they've been on your site for an hour or so?
// 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
