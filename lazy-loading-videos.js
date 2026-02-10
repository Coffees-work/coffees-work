document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy-video"));

    if ("IntersectionObserver" in window) {
        var videoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                var video = entry.target;

                if (entry.isIntersecting) {
                    // 1. NASTAVENÍ ZDROJE (pouze pokud ještě není nastaven)
                    var sources = video.querySelectorAll("source");
                    var needsLoad = false;

                    sources.forEach(function(source) {
                        if (source.dataset.src && !source.src) {
                            source.src = source.dataset.src;
                            needsLoad = true;
                        }
                    });

                    if (needsLoad) {
                        video.load();
                    }

                    // 2. SPUŠTĚNÍ VIDEA
                    video.play().catch(function(error) {
                        // Prevence chyb u některých prohlížečů
                        console.log("Autoplay blocked or interrupted");
                    });
                } else {
                    // 3. ZASTAVENÍ VIDEA (pokud není vidět)
                    // Tímhle ulevíme procesoru telefonu
                    if (!video.paused) {
                        video.pause();
                    }
                }
            });
        }, { threshold: 0.1 }); // Spustí se, když je vidět aspoň 10 % videa

        lazyVideos.forEach(function(lazyVideo) {
            videoObserver.observe(lazyVideo);
        });
    }
});