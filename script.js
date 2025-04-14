/*
I used the Random Useless Facts API available at https://uselessfacts.jsph.pl/ for this project.
I chose this API because it's fun and provides random, quirky facts that add an element of surprise.
Technically, I'm interacting with the API using JavaScript's fetch() method to perform a GET request to:
"https://uselessfacts.jsph.pl/random.json?language=en".
My project works by waiting for the user to click the "Get a Fact" button, then fetching a random fact
and displaying it on the page in the designated output area.
If I were to extend this project, I might add more interactivity or allow users to share their favorite facts.
*/

document.getElementById("factBtn").addEventListener("click", fetchFact);

function fetchFact() {
  const factOutput = document.getElementById("factOutput");
  factOutput.textContent = "Loading...";

  const apiURL = "https://uselessfacts.jsph.pl/random.json?language=en";

  fetch(apiURL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then((data) => {
      factOutput.textContent = data.text;
    })
    .catch((error) => {
      console.error("Error:", error);
      factOutput.textContent = "Error";
    });
}
