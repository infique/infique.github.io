	//mobile menu
	function myFunction() {
		var x = document.getElementById("myLinks");
		if (x.style.display === "block") {
		    x.style.display = "none";
		} else {
		    x.style.display = "block";
		  }
	}
	//hamburger animate
	document.querySelector( "#nav-toggle" )
		.addEventListener( "click", function() {
			this.classList.toggle( "active" );
	});
	//lnaguage change
	$(function () {
		   $(".nav__lang a").click(function () {
		    $(".nav__lang a").removeClass("active");
		    $(this).addClass("active");
		});
	});
