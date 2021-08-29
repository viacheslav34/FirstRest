(fetch("http://localhost:8080/api/bio")
.then(function (loc){
    return loc.json()
}).then((history)=>liСreation(history.data)))


function userInformation(information){
    console.log(information)
const elem = document.querySelector('.user__information')
elem.textContent = `${ information.name} ${information.phone}`
}

const ul = document.querySelector('.ul__user--information')

function liСreation(history){
  for(let key of history){
    const newLi = document.createElement('li')
    newLi.classList.add('user__information')
    newLi.innerHTML = `<span class="name">${key.name}</span> <span class="phone">${key.phone}</span>`
    ul.append(newLi)
  }
}

const enterSpan = document.querySelector('.regist__enterspan')
const inputName = document.querySelector('.input--name')
const inputPhone = document.querySelector('.input--phone')


enterSpan.addEventListener('click', function(){

    const nameValue = inputName.value
    const phoneValue = inputPhone.value

    fetch("http://localhost:8080/api/bio",{
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name:nameValue,
            email:"ivanvolcov2000@mail.com",
            phone:phoneValue,
            address:"lenina 32"
          })
    })
    inputName.value = "";
    inputPhone.value = ""
})
