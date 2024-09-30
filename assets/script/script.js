function btnMenu() {
  let menuMobile = document.querySelector(".navbar")

  if (menuMobile.classList.contains("mostra_navbar")){
    menuMobile.classList.remove("mostra_navbar")
} else{
      menuMobile.classList.add("mostra_navbar")
      menuMobile.style.background = "#121212"
  }
}

function toggleScreens(btnId, activeScreenId, inactiveScreenId) {
    document.getElementById(btnId).addEventListener('click', function() {
        document.getElementById(inactiveScreenId).classList.remove('ativa');
        document.getElementById(activeScreenId).classList.add('ativa');
    });
}

toggleScreens('btnTelaFrontend', 'telaFrontend', 'telaDesign');
toggleScreens('btnTelaDesign', 'telaDesign', 'telaFrontend');
