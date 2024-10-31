import '/theme.css';

const DOMSelectors = {
    button: document.querySelector(".btn"),
};

DOMSelectors.button.addEventListener("click", function (event){

    event.preventDefault();

    document.body.classList.toggle('light');
    
    console.log("Theme has been changed.");

});