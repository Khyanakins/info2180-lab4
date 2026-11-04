document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("Search");
  const resultDiv = document.getElementById("Result");

  searchBtn.addEventListener("click", (event) => {
    // Stop the form from submitting and reloading the page
    event.preventDefault();

    fetch("http://localhost/info2180-lab4/superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        // Keeps the heading and divider, and appends/updates the PHP content below them
        resultDiv.innerHTML = `
          <p id="rheading">RESULT</p>
          <hr class="hr">
          ${data}
        `;
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
        resultDiv.innerHTML += `<p style="color: red;">Failed to load results.</p>`;
      });
  });
});