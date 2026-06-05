// MOSAICO
const mosaico = document.getElementById("mosaico");

if (mosaico) {
    const img = "biz.png";

    const cols = 35;
    const rows = 25;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");

            pixel.style.backgroundImage = `url(${img})`;
            pixel.style.backgroundPosition = `${-x * 18}px ${-y * 18}px`;

            mosaico.appendChild(pixel);
        }
    }
}

// SCROLL ANIMATION (AGORA VAI E VOLTA 🔥)
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

elements.forEach(el => observer.observe(el));

// TROCA DE IMAGEM DINÂMICA 🔥
const topicos = document.querySelectorAll(".topico");
const previewImg = document.getElementById("preview-img");

topicos.forEach(topico => {
    topico.addEventListener("mouseenter", () => {
        const novaImg = topico.getAttribute("data-img");
        previewImg.src = novaImg;
    });
});

topicos.forEach(topico => {
    topico.addEventListener("mouseenter", () => {
        const novaImg = topico.getAttribute("data-img");

        previewImg.style.opacity = 0;
        setTimeout(() => {
            previewImg.src = novaImg;
            previewImg.style.opacity = 1;
        }, 150);
    });
});