import '/theme.css';

const DOMSelectors = {
    button: document.querySelector(".btn"),
};

DOMSelectors.button.addEventListener("click", function (event){

    event.preventDefault();

    document.body.classList.toggle('light');
    
    console.log("Theme has been changed.");

});

const cardData = [
    { header: 'ewwww', imgSrc: 'brothaeugh.jpg', price: 'smelly' },
    { header: 'GADZOOKS', imgSrc: 'WHATINTHE.jpg', price: 'GEE WILLICKERS' },
    { header: 'el', imgSrc: 'elgato.webp', price: 'el gato' },
    { header: 'this one', imgSrc: 'vexed.jpg', price: 'this one mad' },
    { header: 'cat', imgSrc: 'smudge.jpg', price: 'D:' },
    { header: 'ayo', imgSrc: 'sideeye.jpg', price: 'bro?' },
    { header: 'eugh', imgSrc: 'disheveledlittleguy.jpg', price: 'man' },
    { header: 'huh', imgSrc: 'huh.jpg', price: '?' },
    { header: 'JUMPIN JAHOSAPHATS', imgSrc: 'WHATISTHIS.jpg', price: 'WOWZERS' },
    { header: 'die', imgSrc: 'catpawnch.jpg', price: 'now' },
    { header: 'JESUS', imgSrc: 'bro.jpg', price: 'GOD' },
    { header: 'going to', imgSrc: 'imgoingtoharmyou.jpg', price: 'hurt you severely' },
    { header: 'isnt this', imgSrc: 'teehee.jpg', price: 'the same dog as the shiver me timbers one' },
    { header: 'look at this thing', imgSrc: 'manwhat.jpg', price: 'i dont even have anything funny to add to this what is this' },
    { header: 'honk', imgSrc: 'honkshoo.jpg', price: 'mimimimimi' },
    { header: ':3', imgSrc: 'colonthree.jpg', price: ':3' },
    { header: 'huh', imgSrc: 'excuseme.jpg', price: 'what' },
    { header: 'sephiroth has nothing on this guy', imgSrc: 'finalboss.jpg', price: 'bottom text' },
    { header: ':0', imgSrc: 'gadzooks.jpg', price: ':0' },
    { header: 'mad', imgSrc: 'angry.jpg', price: 'very angry' }
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
  
  // Function to add all cards to the DOM
  function renderCards() {
    const container = document.createElement('div');
    container.classList.add('container');
  
    cardData.forEach(card => {
      const cardElement = createCard(card);
      container.appendChild(cardElement);
    });
  
    // Append the container to the #app div
    const app = document.getElementById('app');
    app.appendChild(container);
  }
  
  // Call the renderCards function to populate the DOM with cards
  renderCards();