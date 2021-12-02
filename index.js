// Add your code here

const userURL = "http://localhost:3000/users"

let userData = {
  name: "Steve",
  email: "steve@steve.com"
}

let objPost = {
  method: "POST",
  headers: {
    "Content-type": 'application/json',
    "Accept": 'application/json' 
},
body: JSON.stringify(userData)
}

function submitData (){
  return fetch(userURL, objPost)
  .then(response => response.json())
  .then(getId)
  .catch(errorFunc)
}

const bodyTag = document.querySelector('body')

function getId(object){
  // document.body.innerHTML = object.id
  const li = document.createElement('li')
  li.innerHTML = object.id
  bodyTag.appendChild(li)
}

function errorFunc(error){
  // document.body.innerHTML = error.message
  const newLi = document.createElement('li')
  newLi.innerHTML = error.message
  bodyTag.appendChild(newLi)
}