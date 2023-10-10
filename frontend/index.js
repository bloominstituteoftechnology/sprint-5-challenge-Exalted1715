async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`



function createLearnerCards(fullName, email, mentors){



//creating the containers & items
let container = document.createElement('div')
let learner = document.createElement('h3')
let emailAddress = document.createElement('div')
let mentorToggle = document.createElement('h4')
let mentorTitle = document.createElement('ul')
let listofMentors = document.createElement('li')

//adding classlists & Toggles
container.classList.add('.card')
container.classList.add('.entry')
mentorToggle.classList.add('.closed')

//adding text
learner.textContent = `${data.learners.fullName}`
emailAddress.textContent = `${data.learners. email}`
mentorTitle.textContent = '▶ Mentors'
listofMentors.textContent = `${data.learners.mentors}`

//appending
document.querySelector('section').append(container)
container.appendChild(fullName)
container.appendChild(emailAddress)
container.appendChild(mentorToggle)
container.appendChild(mentorTitle)
container.appendChild(listofMentors)
console.log(container)

//interaction 
container.addEventListener('click', ()=> {
  container.classList.toggle('selected')
})

return container

}



// API Fetch
const res = axios.get('<http://localhost:3003/api/learners>')
  .then(res => {
   let {data} = res
    let fullName = data.learners.fullName
    let email = data.learners.email
    let mentors = data.learners.mentors
    const container = createLearnerCards(fullName, email, mentors)
    entryPoint.appendChild(container)
    console.log(res)
  })
  .catch(err =>{
    console.error(err)
  })
  .finally(()=> console.log('its finally loaded'))

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
