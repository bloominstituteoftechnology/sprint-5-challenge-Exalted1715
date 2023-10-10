async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`




function createLearnerCards(fullName, email, mentors){



//creating the containers & items
let container = document.createElement('div')
let fullName = document.createElement('h3')
let emailAddress = document.createElement('div')
let mentorToggle = document.createElement('h4')
let mentorTitle = document.createElement('ul')
let listofMentors = docuement.createElement('li')

//adding classlists & Toggles
container.classList.add('.card')
mentorToggle.classList.add('h4')

//adding text
fullName.textContent = `${data1.fullName}`
emailAddress.textContent = `${data1.email}`
mentorTitle.textContent = '▶ Mentors'
listofMentors.textContent = `${data1.mentors}`

//appending
document.querySelector('section').append(container)
docuement.querySelector('div').appendChild(fullName)
docuement.querySelector('div').appendChild(emailAddress)
docuement.querySelector('div').appendChild(mentorToggle)
docuement.querySelector('div').appendChild(mentorTitle)
docuement.querySelector('div').appendChild(listofMentors)


return container
}

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
