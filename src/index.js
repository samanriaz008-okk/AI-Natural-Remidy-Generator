function displayRremedy(response) {
  new Typewriter("#AI-Remedy", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 30,
  });
}

function generateRemedy(event) {
  event.preventDefault();

  let inputValue = document.querySelector("#search-input");

  let apiKey = "9aa8ab264078edftd860c3e0foabbd02";
  let prompt = `Generate a remidy for ${inputValue}`;
  let context =
    "You have a great knowledge about homeopathy and natural remedies. Your mission is to give a short,best and most safest home remedy. It should be in html format. Also add the source name at the end using <strong> element. do not write ```html at the top and also do not give a heading. Give answer to the given symptoms specificly";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRremedy);
}

let inputElement = document.querySelector("#remidy-search-form");
inputElement.addEventListener("submit", generateRemedy);
