// Toggle hlavního menu a overlay
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
}

// Zavření menu (např. kliknutím na overlay)
function closeMenu() {
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("overlay");

  navLinks.classList.remove("active");
  overlay.classList.remove("active");
}

// Toggle dropdownu pro Služby
document.querySelectorAll(".dropbtn").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault(); // zabrání přeskoku stránky
    const dropdown = button.parentElement;
    dropdown.classList.toggle("open");
  });
});

// Zavření menu při kliknutí na overlay
document.getElementById("overlay").addEventListener("click", closeMenu);
