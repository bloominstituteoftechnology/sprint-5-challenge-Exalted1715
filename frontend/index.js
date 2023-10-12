

async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

// API Fetch


const endPointA = "http://localhost:3003/api/learners";
const endPointB = "http://localhost:3003/api/mentors";

try {
  const responseA = await axios.get(endPointA);
  const responseB = await axios.get(endPointB);

  const learners = responseA.data;
  const mentors = responseB.data;

  // Now you can access learners and mentors here.
  console.log(learners);
  console.log(mentors);

  // Rest of your code that uses learners and mentors
  // ...

//looping over the array to create new cards
learners.forEach(obj =>{
  const learnerCard = buildLearnerCard(obj)
  document.querySelector('div').appendChild(learnerCard)
  
  
  function buildLearnerCard(obj){
  
  //creating the containers & items
  let container = document.createElement('div')
  let learnerName = document.createElement('h3')
  let emailAddress = document.createElement('div')
  let mentorToggle = document.createElement('h4')
  let mentorTitle = document.createElement('ul')
  let listofMentors = document.createElement('li')
  
  //adding classlists & Toggles
  container.classList.add('card')
  
  mentorToggle.classList.add('closed')

  
  //adding text
  learnerName.textContent = `${obj.fullName}`
  emailAddress.textContent = `${obj.email}`
  mentorToggle.textContent = 'Mentors'
  // adding mentors in the li

  

  // Set the mentor names in listofMentors with separate list items
  if (obj.mentors && obj.mentors.length > 0) {
    obj.mentors.forEach(mentorId => {
      const mentorName = findMentorById(mentorId);
      const mentorItem = document.createElement('li');
      mentorItem.textContent = mentorName;
      mentorTitle.appendChild(mentorItem);
    });
  } else {
    // Only add "No Mentors" if there are no mentors
    listofMentors.textContent = 'No Mentors';
  }

  
//additional functionality with mentor id's
  function findMentorById(mentorId) {
  const mentor = mentors.find(mentor => mentor.id === mentorId);
  return mentor ? `${mentor.firstName} ${mentor.lastName}` : 'Mentor Not Found';
}

  //appending
  document.querySelector('div').append(container)
  container.appendChild(learnerName)
  container.appendChild(emailAddress)
  container.appendChild(mentorToggle)

  container.appendChild(mentorTitle)
  
  //interaction 
  let originalLearnerName = ''; // ID'less section
  let selectedCard = null; // Track the currently selected card
  
  container.addEventListener('click', () => {
    // Remove the 'selected' class from all cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove('selected');
    })
  
    if (selectedCard !== container) {
      // Set the selected card and update its content
      selectedCard = container;
      originalLearnerName = learnerName.textContent;
      learnerName.textContent = `${obj.fullName}, ID ${obj.id}`
      container.classList.add('selected')
      learnerName.classList.add('selected')
    } else {
      // Deselect the current card
      selectedCard = null;
      learnerName.textContent = originalLearnerName
      
      container.classList.remove('selected')
      learnerName.classList.remove('selected')
    }
  });
  
  mentorToggle.addEventListener('click', ()=> {
    mentorToggle.classList.toggle('closed')
    mentorToggle.classList.toggle('open')
    container.classList.add('selected')
  })
  
  return container //learnerCard
  }
  
  }) //foreach

} catch (error) {
  console.log(error);
}


  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
