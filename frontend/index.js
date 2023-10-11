async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`







//creating the containers & items
let container = document.createElement('div')
let learnerName = document.createElement('h3')
let emailAddress = document.createElement('div')
let mentorToggle = document.createElement('h4')
let mentorTitle = document.createElement('ul')
let listofMentors = document.createElement('li')

//adding classlists & Toggles
container.classList.add('card')
container.classList.add('entry')
mentorToggle.classList.add('closed')




//adding text
learnerName.textContent = `Mitchell B. Hammond`
emailAddress.textContent = `dummyemail@gmail.com`
mentorToggle.textContent = 'Mentors'
listofMentors.textContent = `mentor 1`

//appending
document.querySelector('div').append(container)
container.appendChild(learnerName)
container.appendChild(emailAddress)
container.appendChild(mentorToggle)
mentorTitle.appendChild(listofMentors)
container.appendChild(mentorTitle)



//interaction 
learnerName.addEventListener('click', ()=> {
// make changes to learnerName.textContent = `${data}, ${id}`
  container.classList.toggle('selected')
})
emailAddress.addEventListener('click', ()=> {
  // make changes to learnerName.textContent = `${data}, ${id}`
    container.classList.toggle('selected')
  })


mentorToggle.addEventListener('click', ()=> {
  mentorToggle.classList.toggle('closed')
  mentorToggle.classList.toggle('open')
  container.classList.add('selected')
})


let endPointA = "http://localhost:3003/api/learners"
let endPointB = "http://localhost:3003/api/mentors"



// API Fetch
axios.get(`${endPointA}`)
  .then(res => {
    console.log(res)
  })
  .catch(error =>{
    console.log(error)
  })

  axios.get(`${endPointB}`)
  .then(res => {
    console.log(res)
  })
  .catch(error =>{
    console.log(error)
  })



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
