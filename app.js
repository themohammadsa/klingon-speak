var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/klingon.json";



function getTranslationURL (text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server");
}

function clickHandler() {
    // outputDiv.innerText = "aaaa" + txtInput.value;
    var inputText = txtInput.value;
    
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputDiv.innerText =  translatedTxt;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

