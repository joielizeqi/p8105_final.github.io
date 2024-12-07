// Track the currently flipped card
let currentCard = null;

// Function to flip or unflip the clicked card
function flipCard(card) {
  const cardInner = card.querySelector(".feature_card_inner");

  // If the same card is clicked, unflip it
  if (currentCard === card) {
    cardInner.classList.remove("flip");
    currentCard = null;
  } else {
    // If a different card is clicked, unflip the previously flipped card if any
    if (currentCard) {
      currentCard.querySelector(".feature_card_inner").classList.remove("flip");
    }
    
    // Flip the new clicked card
    cardInner.classList.add("flip");
    currentCard = card;
  }
}
