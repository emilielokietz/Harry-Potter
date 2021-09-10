
const main = document.querySelector('main')

function renderCard(allData) {
  allData.forEach(cardData => {
    const section = document.createElement('section')
    main.appendChild(section)

    const image = document.createElement('img')
       image.classList.add('image')
    cardSection.appendChild(cardBookmark)

    const cardBookmark2 = document.createElement('button')
    cardBookmark2.classList.add('card__bookmark')
    cardBookmark2.classList.add('card__bookmark--hover')
    cardBookmark2.id = 'smallbookmark1'
    cardSection.appendChild(cardBookmark2)

    const cardQuestion = document.createElement('h2')
    cardQuestion.classList.add('card__question')
    cardQuestion.textContent = cardData.question
    cardSection.appendChild(cardQuestion)

    const cardButton = document.createElement('button')
    cardButton.classList.add('card__show__button')
    cardButton.classList.add('button__style')
    cardButton.textContent = 'Show Answer'
    cardSection.appendChild(cardButton)

    const cardAnswer = document.createElement('p')
    cardAnswer.classList.add('card__answer')
    cardAnswer.classList.add('card__answer--hidden')
    cardAnswer.textContent = cardData.answer
    cardSection.appendChild(cardAnswer)

    const cardTags = document.createElement('ul')
    cardTags.classList.add('tags')
    cardSection.appendChild(cardTags)

    cardData.tags.forEach(tag => {
      const tagItem = document.createElement('li')
      tagItem.classList.add('tags__item')
      tagItem.textContent = tag
      cardTags.appendChild(tagItem)
    })
  })
}