const defaultStyle = document.getElementById("inputText").style
const fancyRadio = document.getElementById("fancyRadio");
const boringRadio = document.getElementById("boringRadio");
const inputText = document.getElementById("inputText");
const moo = document.getElementById("moo");
function bigger() {
    alert("Hello, world! ")
    inputText.style.fontSize = '24px';
}
 
const fancifyButton = document.getElementById("fancifyButton");
fancifyButton.addEventListener("click", function() {
    bigger();
});

fancyRadio.addEventListener("change", function() {
    alert("fancyRadio changed to " + fancyRadio.value);
    if (fancyRadio.value == "FancyShmancy") {
        inputText.style.fontWeight = "bold";
        inputText.style.color = "blue";
        inputText.style.textDecoration = "underline";
    }
}); 

boringRadio.addEventListener("change", function() {
    alert("boringRadio changed to " + boringRadio.value);
    if (boringRadio.value == "BoringBetty") {
        inputText.style = defaultStyle;
    }
}); 

moo.addEventListener("click", function() {
    let text = inputText.value.split("\.").join("-Moo.");
    inputText.value = text;
});