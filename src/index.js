function generateRemidy(event) {
  event.preventDefault();

  new Typewriter("#AI-Remidy", {
    strings: "Elderberry Syrup: A popular remedy for colds and flu",
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

let inputElement = document.querySelector("#remidy-search-form");
inputElement.addEventListener("submit", generateRemidy);
