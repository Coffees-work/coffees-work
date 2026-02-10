// Funkce pro otevření modálního okna s obrázkem
function openModal(imgSrc) {
	const modal = document.getElementById('imageModal');
	const modalImg = document.getElementById('modalImage');

	modalImg.src = imgSrc;
	modal.classList.remove('hide');
	modal.classList.add('show');

	document.body.classList.add('no-scroll');
}

// Funkce pro zavření modálního okna
function closeModal() {
	const modal = document.getElementById('imageModal');
	const modalImg = document.getElementById('modalImage');

	modal.classList.remove('show');
	modal.classList.add('hide');

	document.body.classList.remove('no-scroll');

	// Počkej na dokončení animace a pak skryj modal
	setTimeout(() => {
		modal.style.display = "none";
		// RESET ZOOMU: aby další otevřený obrázek nebyl rovnou zvětšený
		modalImg.classList.remove('zoomed');
	}, 300);
}

// Přidání event listeneru na obrázky
document.querySelectorAll('.gallery-img').forEach(function(image) {
	image.addEventListener('click', function () {
		const modal = document.getElementById('imageModal');
		modal.style.display = "flex"; // Musí být dřív než animace
		openModal(this.src);
	});
});

// Zavření modal okna při kliknutí mimo obrázek
document.getElementById('imageModal').addEventListener('click', function(event) {
	const modalImg = document.getElementById('modalImage');
	if (!modalImg.contains(event.target)) {
		closeModal();
	}
});

document.getElementById('modalImage').addEventListener('click', function(e) {
    // Zabráníme tomu, aby kliknutí na obrázek zavřelo celý modal
    e.stopPropagation(); 
    this.classList.toggle('zoomed');
});