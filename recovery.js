let sideMenuOpen = false;

function openSideBar(){
    if (!sideMenuOpen){
        document.getElementById("sidebar").style.width = "20vw";
        document.getElementById("navigation").style.visibility = "hidden"
        document.getElementById("filter-object").style.width = "100%";
        document.getElementById("filter-object").style.height = "100%";
        document.getElementById("side-menu-exit-icon").style.visibility = "visible"
        document.getElementById("side-menu-list").style.visibility = "visible"
        document.getElementById("side-menu-list").style.transitionDelay = ".4s"
        document.getElementById("side-menu-exit-icon").style.transitionDelay = ".4s"
        document.getElementById("navigation").style.filter = "brightness(50%)"
        document.getElementById("background-img-1").style.filter = "brightness(50%)"
        document.getElementById("background-img-text-1").style.filter = "brightness(50%)"
        document.getElementById("background-img-2").style.filter = "brightness(50%)"
        document.getElementById("background-img-text-2").style.filter = "brightness(50%)"
        document.getElementById("background-img-3").style.filter = "brightness(50%)"
        document.getElementById("background-img-text-3").style.filter = "brightness(50%)"

    }
    sideMenuOpen = true;
}

function closeSideBar(){
    if (sideMenuOpen){

        document.getElementById("sidebar").style.width = "0";
        document.getElementById("filter-object").style.width = "0";
        document.getElementById("filter-object").style.height = "0";
        document.getElementById("navigation").style.visibility = "visible";
        document.getElementById("side-menu-exit-icon").style.visibility = "hidden";
        document.getElementById("side-menu-list").style.visibility = "hidden"
        document.getElementById("side-menu-exit-icon").style.transitionDelay = "0s"
        document.getElementById("side-menu-list").style.transitionDelay = "0s"
        document.getElementById("navigation").style.filter = "none"
        document.getElementById("background-img-1").style.filter = "none"
        document.getElementById("background-img-text-1").style.filter = "none"
        document.getElementById("background-img-2").style.filter = "none"
        document.getElementById("background-img-text-2").style.filter = "none"
        document.getElementById("background-img-3").style.filter = "none"
        document.getElementById("background-img-text-3").style.filter = "none"

        document.body.style.overflowY = "visible"
    }
    sideMenuOpen = false;
}
