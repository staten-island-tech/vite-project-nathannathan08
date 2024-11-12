import './css/theme.css';
import './css/products.css';
import {cardData} from './src/products.js'; 



const DOMSelectors = {
    button: document.querySelector(".btn"),
    categoryAButton: document.getElementById("categoryA"),
    categoryBButton: document.getElementById("categoryB"),
    showAllButton: document.getElementById("showAll"),
};

DOMSelectors.button.addEventListener("click", function (event){

    event.preventDefault();

    document.body.classList.toggle('light');
    
    console.log("Theme has been changed.");

});



  // Function to create a card element
  function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    const header = document.createElement('h2');
    header.classList.add('card-header');
    header.textContent = card.header;

    const image = document.createElement('img');
    image.classList.add('card-img');
    image.src = card.imgSrc;
    image.alt = card.header;

    const price = document.createElement('h3');
    price.classList.add('card-price');
    price.textContent = card.price;

    // Append elements to the card
    cardElement.appendChild(header);
    cardElement.appendChild(image);
    cardElement.appendChild(price);

    return cardElement;
}

// Function to add cards to the DOM
function renderCards(filteredCards) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear any existing cards

    // Loop through the filteredCards array and create card elements
    filteredCards.forEach(card => {
        const cardElement = createCard(card);
        container.appendChild(cardElement);
    });
}

// Call the renderCards function to populate the DOM with all cards initially
renderCards(cardData);

// Filter cards by category when buttons are clicked
DOMSelectors.categoryAButton.addEventListener("click", () => {
    const categoryACards = cardData.filter(card => card.category === 'A'); //dogs
    renderCards(categoryACards); // Render only category A cards
});

DOMSelectors.categoryBButton.addEventListener("click", () => {
    const categoryBCards = cardData.filter(card => card.category === 'B');  //cats
    renderCards(categoryBCards); // Render only category B cards
});

DOMSelectors.showAllButton.addEventListener("click", () => {
    renderCards(cardData); // Render all cards
});