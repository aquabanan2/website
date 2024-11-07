// scripts.js
let experienceCounter = 0;

function addExperience() {
    const experienceList = document.getElementById('experience-list');
    
    // Create a new experience container
    const experienceDiv = document.createElement('div');
    experienceDiv.classList.add('experience-item');

    experienceCounter++;

    experienceDiv.innerHTML = `
        <h3>Experience ${experienceCounter}</h3>
        <p>Company: <input type="text" placeholder="Company Name" id="company${experienceCounter}" /></p>
        <p>Role: <input type="text" placeholder="Your Role" id="role${experienceCounter}" /></p>
        <p>Duration: <input type="text" placeholder="Duration (e.g., Jan 2020 - Dec 2022)" id="duration${experienceCounter}" /></p>
        <p>Description: <textarea placeholder="Job description..." id="description${experienceCounter}"></textarea></p>
        <button onclick="saveExperience(${experienceCounter})">Save Experience</button>
    `;
    
    experienceList.appendChild(experienceDiv);
}

function saveExperience(counter) {
    const company = document.getElementById(`company${counter}`).value;
    const role = document.getElementById(`role${counter}`).value;
    const duration = document.getElementById(`duration${counter}`).value;
    const description = document.getElementById(`description${counter}`).value;
    
    // Save or display the new experience details
    alert(`Saved Experience: ${company}, ${role}, ${duration}`);
}

