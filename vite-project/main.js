import '/theme.css';
import '/products.css';



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

const cardData = [
    { header: 'ewwww', imgSrc: 'brothaeugh.jpg', price: 'smelly', category: 'B' },
    { header: 'GADZOOKS', imgSrc: 'WHATINTHE.jpg', price: 'GEE WILLICKERS', category: 'A' },
    { header: 'el', imgSrc: 'elgato.webp', price: 'el gato', category: 'B' },
    { header: 'this one', imgSrc: 'vexed.jpg', price: 'this one mad', category: 'B' },
    { header: 'cat', imgSrc: 'smudge.jpg', price: 'D:', category: 'B' },
    { header: 'ayo', imgSrc: 'sideeye.jpg', price: 'bro?', category: 'A' },
    { header: 'eugh', imgSrc: 'disheveledlittleguy.jpg', price: 'man', category: 'B' },
    { header: 'huh', imgSrc: 'huh.jpg', price: '?', category: 'A' },
    { header: 'JUMPIN JAHOSAPHATS', imgSrc: 'WHATISTHIS.jpg', price: 'WOWZERS', category: 'A' },
    { header: 'die', imgSrc: 'catpawnch.jpg', price: 'now', category: 'B' },
    { header: 'JESUS', imgSrc: 'bro.jpg', price: 'GOD', category: 'B' },
    { header: 'going to', imgSrc: 'imgoingtoharmyou.jpg', price: 'hurt you severely', category: 'B' },
    { header: 'isnt this', imgSrc: 'teehee.jpg', price: 'the same dog as the shiver me timbers one', category: 'A' },
    { header: 'look at this thing', imgSrc: 'manwhat.jpg', price: 'i dont even have anything funny to add to this what is this', category: 'A' },
    { header: 'honk', imgSrc: 'honkshoo.jpg', price: 'mimimimimi', category: 'B' },
    { header: ':3', imgSrc: 'colonthree.jpg', price: ':3', category: 'B' },
    { header: 'huh', imgSrc: 'excuseme.jpg', price: 'what', category: 'A' },
    { header: 'sephiroth has nothing on this guy', imgSrc: 'finalboss.jpg', price: 'bottom text', category: 'A' },
    { header: ':0', imgSrc: 'gadzooks.jpg', price: ':0', category: 'B' },
    { header: 'mad', imgSrc: 'angry.jpg', price: 'very angry', category: 'B' }
  ];

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