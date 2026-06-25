let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('.header__container');

hamburger.addEventListener('click', function(e) {
	e.stopPropagation();
	header.classList.toggle('active');
		if (header.classList.contains('active')) {
        	hamburger.textContent = '✕';
	        document.body.style.overflow = 'hidden';
		} else {
			hamburger.textContent = '☰';
	        document.body.style.overflow = 'auto';
		}
});

document.addEventListener('click', function(e) {
	if (!header.contains(e.target)) {
		header.classList.remove('active');
	}
});