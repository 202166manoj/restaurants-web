// Placeholder for future interactions (e.g., filtering, searching)
console.log("Blog page ready!");

  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("pages-toggle");
    const parent = toggle.closest(".dropdown-parent");

    toggle.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent page jump
      parent.classList.toggle("open");

      // Optional: Close other dropdowns if needed
      document.querySelectorAll(".dropdown-parent").forEach(item => {
        if (item !== parent) item.classList.remove("open");
      });
    });

    // Optional: Close dropdown if user clicks outside
    document.addEventListener("click", function (e) {
      if (!parent.contains(e.target)) {
        parent.classList.remove("open");
      }
    });
  });

