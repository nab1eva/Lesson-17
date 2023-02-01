window.addEventListener("scroll", function () {
	shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	  navbar.classList.add("navbarshrink");
	} else {
		  navbar.classList.remove("navbarshrink");
	  }
  }