document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("Search");

  searchBtn.addEventListener("click", () => {
    // fetch('superheroes.php')
    fetch("http://localhost/info2180-lab4/superheroes.php")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        console.error("Error fetching superheroes:", error);
      });
  });
});