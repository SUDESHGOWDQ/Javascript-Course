let button = document.querySelector("button");
let textarea = document.querySelector ("textarea");
let speech = new SpeechSynthesisUtterance();
button.addEventListener ("click", () =>
{
speech.text = textarea.value;
speech.pitch = 1;
speech.volume= 1;
speech.lang ="en-US";
speech.rate = 1;
speechSynthesis.speak (speech);
});