// Projects data (example)
const projectsData = [
  {
    title: "Project 1",
    description: "Description of project 1."
  },
  {
    title: "Project 2",
    description: "Description of project 2."
  },
  // Add more project objects as needed
];

// Function to display projects
function displayProjects() {
  const projectsList = document.getElementById("projects-list");
  
  // Loop through projects data and create list items
  projectsData.forEach(project => {
    const listItem = document.createElement("li");
    
    const title = document.createElement("h3");
    title.textContent = project.title;
    
    const description = document.createElement("p");
    description.textContent = project.description;
    
    listItem.appendChild(title);
    listItem.appendChild(description);
    
    projectsList.appendChild(listItem);
  });
}

// Form submission handling
document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");
  
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Perform form validation here
    
    // Simulate form submission (example)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Clear form fields
    contactForm.reset();
  });
});

// Function to initialize the portfolio website
function initializePortfolio() {
  displayProjects();
}

// Call the initialization function
initializePortfolio();
