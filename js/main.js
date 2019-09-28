let menuOpened = false;
document.getElementById("menuToggle").addEventListener("click", () => {
  if (menuOpened) {
    menuOpened = false;
    document.getElementById("menu").style.transform = "";
  } else {
    menuOpened = true;
    document.getElementById("menu").style.transform = "none";
  }
});
