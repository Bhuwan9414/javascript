function showAll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'block';
    });
  }
  
  function showCard(index) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      if (i === index) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }