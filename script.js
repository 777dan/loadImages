window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imgCoords = img.getBoundingClientRect();
        const imgCoordsY = imgCoords.top;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= imgCoordsY && img.dataset.src !== '') {
            const newSrc = img.getAttribute("data-src");
            img.src = newSrc;
            img.dataset.src = '';
        }
    });
});
