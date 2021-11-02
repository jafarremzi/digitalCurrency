 function
  showMenu(){
	const menu = document.querySelector("#menu")
	if (menu.className==="header-menu") {
		menu.className += " show"
	} else {
		menu.className = "header-menu"
	}
}
