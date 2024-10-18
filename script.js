// Toggle Sidebar Hover
const navItems = document.querySelectorAll("nav ul li a");
navItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#e0e0e0"; // Change to your preferred hover color
  });
  
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "transparent"; // Revert back to original
  });
});

// Search Bar Functionality
const searchInput = document.querySelector(".search_bar input");
const jobCards = document.querySelectorAll(".job_card");

//dark mode //
const toggleSwitch = document.querySelector("#theme-switch");
toggleSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});


searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  jobCards.forEach(card => {
    const jobTitle = card.querySelector(".job_details .text h2").textContent.toLowerCase();
    if (jobTitle.includes(searchTerm)) {
      card.style.display = "flex"; // Show job card
    } else {
      card.style.display = "none"; // Hide job card
    }
  });
});

// Add Other Functionalities as Needed
console.log("JavaScript file loaded successfully!");


