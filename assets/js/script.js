document.addEventListener("DOMContentLoaded", () => {
  const GitHubUsername = "adr1an0s0ar3s";
  const dropdown = document.getElementById("projects-dropdown");

  fetch(`https://api.github.com/users/${GitHubUsername}/repos`)
    .then((response) => response.json())
    .then((repos) => {
      repos.forEach((repo) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
                        ${repo.name} <span class="project-info">(${repo.language || "N/A"})</span>
                    </a>
                `;
        dropdown.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching repositories:", error);
      const errorMessage = document.createElement("li");
      errorMessage.textContent = "Unable to load repositories.";
      dropdown.appendChild(errorMessage);
    });
});

const menuItems = document.querySelectorAll(".site-header .navigation ul li");

// Add click event listener to each menu item
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Close other dropdowns by removing the 'active' class
    menuItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });

    // Toggle the 'active' class on the clicked item
    item.classList.toggle("active");
  });
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
  if (!event.target.closest(".site-header .navigation")) {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  }
});
