document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]
  
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const updateArea = document.querySelector('.update')
  const resultDisplay = document.querySelector('#result')
  const gamesDisplay = document.querySelector('#games')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  var score = 0
  var gamesPlayed = 0

  //create your board
  function createBoard() {
    cardArray.sort(() => 0.5 - Math.random())
    for (let i = 0; i < 9; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/GreyTile.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
    cardsChosen = []
    cardsChosenId = []
    cardsWon = []
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    const updateText = document.createElement('span')

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/GreyTile.png')
      cards[optionTwoId].setAttribute('src', 'images/GreyTile.png')
      updateText.textContent = 'You have clicked the same image!'
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      updateText.textContent = 'You found a match'
      score += 1
    } else {
      cards[optionOneId].setAttribute('src', 'images/GreyTile.png')
      cards[optionTwoId].setAttribute('src', 'images/GreyTile.png')
      updateText.textContent = 'Sorry, try again'
      score -= 1
    }
    
    updateArea.appendChild(updateText)
    updateArea.appendChild(document.createElement('br'))
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = score.toString()
    if  (cardsWon.length === cardArray.length/2) {
      updateText.innerHTML = 'Congratulations! You found them all!'
      grid.innerHTML = ''
      setTimeout(createBoard, 1000)
      gamesPlayed += 1
      gamesDisplay.textContent = gamesPlayed.toString()
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  function cleanUpdateTestArea() {
  }

  createBoard()
  
})
