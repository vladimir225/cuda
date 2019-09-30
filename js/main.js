let menuOpened = false;
document.getElementById("menuToggle").addEventListener("click", () => {
  if (menuOpened) {
    menuOpened = false;
    document.getElementById("menu").style.transform = "";
    document.getElementById("menu").style.display = "none";
  } else {
    menuOpened = true;
    document.getElementById("menu").style.transform = "none";
    document.getElementById("menu").style.display = "block";
  }
});
