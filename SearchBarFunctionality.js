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
