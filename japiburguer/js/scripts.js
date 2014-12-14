(function(){

	var button = document.getElementById('button'),
    wrapper = document.getElementById('nav-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Cerrar";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "FONACIDE";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
