const topMenu = document.getElementById("dct-top-menu");
const toggleTopMenuIcon = document.getElementById("dct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    topMenu.classList.toggle("dct-topmenu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    if (topMenu.classList.contains("dct-topmenu-expanded")) {
      topMenu.classList.remove("dct-topmenu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});
