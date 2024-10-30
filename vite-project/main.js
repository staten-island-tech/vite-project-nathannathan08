import "/style.css";

const DOMselectors = {
    button: document.querySelector(".btn"),
};

DOMselectors.button.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Toggle theme classes
    document.body.classList.toggle("warm");
    document.body.classList.toggle("cool");

    console.log("Theme changed!");
});
