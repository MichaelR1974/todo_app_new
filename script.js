const addBtm = document.querySelector('#addButton')
const inputField = document.querySelector('#inputField')
//////////////////////////////////////////////////////////
addBtm.addEventListener('click', knopfDruck)
////////////////////////////Post///////////////////////////////////////
function knopfDruck() {
  var textEingabefeld = document.getElementById('inputField')
  var artikelEingabe = textEingabefeld.value
  const dataNew = {
    todos: artikelEingabe,
  }

  fetch('http://localhost:3000/data', {
    method: 'POST',

    // Adding body
    body: JSON.stringify(dataNew),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json))
}

////////////////////////////////Get////////////////////////////////
fetch('http://localhost:3000/data')
  .then((res) => res.json())
  .then((json) => {
    // Create a variable to store HTML
    let li = 'id'

    // Loop through each data and add a table row
    json.forEach((data) => {
      li += `<tr>
                <td>${data.todos} </td>
            </tr>`
    })

    // Display result
    document.getElementById('idtodos').innerHTML = li
  })
  .catch((error) => {
    console.log(error)
  })
///// Update/////////////////////////////////////////////////////////
function update() {
  fetch('http://localhost:3000/data/1', {
    method: 'PATCH',
    body: JSON.stringify({
      todos: '',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
}
// ///////////////////Delete//////////////////////////////////////////
function remove(id) {
  fetch('http://localhost:3000/data' + id, {
    method: 'DELETE', // Method itself
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    // No need to have body, because we don't send nothing to the server.
  })
  // Make the HTTP Delete call using fetch api
  fetch(url, deleteMethod)
    .then((response) => response.json())
    .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
    .catch((err) => console.log(err)) // Do something with the error
}
