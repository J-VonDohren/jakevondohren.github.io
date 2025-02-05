 function filterProjects() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const concepts = card.dataset.concepts.toLowerCase();
    if (concepts.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

const AspiringPositions = [
  "FULL STACK DEVELOPER",
  "SOFTWARE ENGINEER",
  "DATA ENGINEER",
  "DATA SCIENTIST",
  "MACHINE LEARNING ENGINEER",
  "AI DEVELOPER"
];

let speed = 100;
const TextElements = document.querySelector(".typewriter-text");
let TextIndex = 0;
let CharacterIndex = 0;

function TypeWriter() {
  if (CharacterIndex < AspiringPositions[TextIndex].length) {
      TextElements.innerHTML += AspiringPositions[TextIndex].charAt(CharacterIndex);
      CharacterIndex++;
      setTimeout(TypeWriter, speed);
  } else {
      setTimeout(EraseText, 1000);
  }
}

function EraseText() {
  if (TextElements.innerHTML.length > 0) {
      TextElements.innerHTML = TextElements.innerHTML.slice(0, -1);
      setTimeout(EraseText, 50);
  } else {
      TextIndex = (TextIndex + 1) % AspiringPositions.length;
      CharacterIndex = 0;
      setTimeout(TypeWriter, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  TypeWriter();
});

function filterProjects() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase().trim();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const concepts = card.dataset.concepts.toLowerCase();
    const searchTerms = searchInput.split(/\s+/); // Split input into words

    const match = searchTerms.some(term => concepts.includes(term));
    
    card.style.display = match ? "block" : "none";
  });
}

// Debounce function to improve search performance
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

document.getElementById("search-bar").addEventListener("input", debounce(filterProjects, 300));

// Adding click event to skill containers
document.querySelectorAll(".skill-Container").forEach(skill => {
  skill.addEventListener("click", () => {
    const skillName = skill.querySelector("h3").textContent.trim(); // Get skill name from h3
    const searchBar = document.getElementById("search-bar");

    searchBar.value = skillName;  // Set skill name in the search bar
    filterProjects();  // Trigger filtering

    // Scroll smoothly to the projects section
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
});
