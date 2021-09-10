import { workWithData } from './workWithData'

export function fetchExample() {
  fetch('https://hp-api.herokuapp.com/api/characters/students', {
    mode: 'cors',
  })
    .then(response => response.json())
    .then(allData => {
      workWithData(allData)
      console.log(
        'Fetch hat funktioniert und Daten wurden an WorkWithData übermittelt'
      )
    })
    .catch(error => {
      console.log('an error occurred', error)
    })
}
