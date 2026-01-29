// Funkce pro otevření modálního okna s obrázkem
function openModal(imgSrc) {
	const modal = document.getElementById('imageModal');
	const modalImg = document.getElementById('modalImage');

	modalImg.src = imgSrc;
	modal.classList.remove('hide');
	modal.classList.add('show');
}

// Funkce pro zavření modálního okna
function closeModal() {
	const modal = document.getElementById('imageModal');

	modal.classList.remove('show');
	modal.classList.add('hide');

	// Počkej na dokončení animace a pak skryj modal
	setTimeout(() => {
		modal.style.display = "none";
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
