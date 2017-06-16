// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

function getPerson(){
var img = document.createElement("img")
var first = document.createElement("h2")
var last = document.createElement("h3")
var cell = document.createElement("h1")
var email = document.createElement("h4")
var container = document.querySelector(".customers")




fetch("https://randomuser.me/api")
  .then( function(response){
    return response.json()
  })
  .then(function(json){
    console.log(json)



    img.src = json.results[0].picture.large

    first.innerHTML = json.results[0].name.first
    console.log(first)

    last.innerHTML = json.results[0].name.last
    console.log(last)

    cell.innerHTML = json.results[0].cell
    console.log(cell)

    email.innerHTML = json.results[0].email
    console.log(email)



    container.appendChild(img)
    container.appendChild(first)
    container.appendChild(last)
    container.appendChild(email)


  })




}

for (var j=0; j<=12; j++) {
  getPerson()
}

})();
