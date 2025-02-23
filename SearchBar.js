document.querySelectorAll(".skill-Container").forEach(skill => {
  skill.addEventListener("click", () => {
    var skillName = skill.querySelector("h3").textContent.trim();
    var encodedSkillName = encodeURIComponent(skillName); // Encode for URL safety
    window.location.href = "Projects.html?search=" + encodedSkillName;
  });
});

function filterProjects() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase().trim();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const concepts = card.dataset.concepts.toLowerCase();
    const searchTerms = searchInput.split(/\s+/);

    const match = searchTerms.some(term => concepts.includes(term));

    card.style.display = match ? "block" : "none";
  });
}

function getUrlParameter(name) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener("DOMContentLoaded", function() {
    const searchParam = getUrlParameter("search");
    if(searchParam){
        const searchBar = document.getElementById("search-bar");
        searchBar.value = searchParam;
        filterProjects();
    }
});
