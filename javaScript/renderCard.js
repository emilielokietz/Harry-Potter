export function renderCard(allData) {
  const main = document.querySelector('main')

  allData.forEach(data => {
    const section = document.createElement('section')
    main.appendChild(section)

    const image = document.createElement('img')
    image.classList.add('image')
    image.src = data.image
    section.appendChild(image)

    const firstInfo = document.createElement('div')
    firstInfo.classList.add('first_Information')
    section.appendChild(firstInfo)

    const liste = document.createElement('ul')
    firstInfo.appendChild(liste)

    const name = document.createElement('li')
    name.textContent = 'name: ' + data.name
    liste.appendChild(name)

    const birthday = document.createElement('li')
    birthday.textContent = 'birthday: ' + data.dateOfBirth
    liste.appendChild(birthday)

    const house = document.createElement('li')
    house.textContent = 'house: ' + data.house
    liste.appendChild(house)

    const actor = document.createElement('li')
    actor.textContent = 'played by: ' + data.actor
    liste.appendChild(actor)

    const secondInfo = document.createElement('div')
    secondInfo.classList.add('second_information')
    section.appendChild(secondInfo)

    const liste2 = document.createElement('ul')
    secondInfo.appendChild(liste2)

    const species = document.createElement('li')
    species.textContent = 'species: ' + data.species
    liste2.appendChild(species)

    const ancestry = document.createElement('li')
    ancestry.textContent = 'ancestry: ' + data.ancestry
    liste2.appendChild(ancestry)

    const gender = document.createElement('li')
    gender.textContent = 'gender: ' + data.gender
    liste2.appendChild(gender)

    const patronus = document.createElement('li')
    patronus.textContent = 'patronus: ' + data.patronus
    liste2.appendChild(patronus)
  })
}
