let hamburger = document.querySelector('.hamburger');
let header = document.querySelector('.header__container');

hamburger.addEventListener('click', function(e) {
	e.stopPropagation();
	header.classList.toggle('active');
		if (header.classList.contains('active')) {
        hamburger.textContent = '✕';
		} else {
			hamburger.textContent = '☰';
		}
});

document.addEventListener('click', function(e) {
	if (!header.contains(e.target)) {
		header.classList.remove('active');
	}
});