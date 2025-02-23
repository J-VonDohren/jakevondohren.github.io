const AspiringPositions = [
    "FULL STACK DEVELOPER",
    "SOFTWARE ENGINEER",
    "DATA ENGINEER",
    "DATA SCIENTIST",
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