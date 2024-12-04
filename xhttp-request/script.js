const req = new XMLHttpRequest();
const apiURL = "https://randomuser.me/api/";

// Open the request
req.open("GET", apiURL, true);

// Set up an event listener for the response
req.onload = function () {
  if (req.status === 200 && req.readyState === 4) {
    const response = JSON.parse(req.responseText);

    // Select each element inside the card
    document.getElementById(
      "image"
    ).src = `${response.results[0].picture.large}`;

    const nameElement = document.querySelector(".card .name");
    const emailElement = document.querySelector(".card .email");
    const phoneElement = document.querySelector(".card .phone");
    const cellElement = document.querySelector(".card .cell");

    // Update their content dynamically
    nameElement.textContent = `${Object.values(response.results[0].name).join(" ")}`;
    emailElement.textContent = `Email: ${response.results[0].email}`;
    phoneElement.textContent = `Phone: ${response.results[0].phone}`;
    cellElement.textContent = `Cell: ${response.results[0].cell}`;

    // Add event listeners for image hover effect
    document.getElementById("image").addEventListener("mouseenter", (e) => {
      e.target.style.transform = "scale(1.1)";
    });

    document.getElementById("image").addEventListener("mouseleave", (e) => {
      e.target.style.transform = "scale(1)";
    });

    image.style.transition = "transform 0.5s ease";
  } else {
    console.error(`Error: ${req.status} - ${req.statusText}`);
  }
};

req.onerror = function () {
  console.error("Request failed");
};

req.send();
