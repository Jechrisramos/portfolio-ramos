let headerNav = Array.from(document.querySelectorAll('#headerNav a'));

const mapped_header_nav = headerNav.map(function(item, index, array){
	 	if(item.href === window.location.href){
	 		item.classList.add('active');	
	 	}else{
	 		item.classList.remove('active');	
	 	}
});

let footerNav = Array.from(document.querySelectorAll('#footerNav a'));

const mapped_footer_nav = footerNav.map(function(item, index, array){
	 	if(item.href === window.location.href){
	 		item.classList.add('active');	
	 	}else{
	 		item.classList.remove('active');	
	 	}
});