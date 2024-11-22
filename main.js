import './public/css/bootstrap.min.css'
import './public/js/bootstrap.bundle.min.js'
import './style.scss'


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.querySelectorAll('.main-box-item').forEach(item => {
    item.addEventListener('click', function(e) {

        // Mevcut seçili durumu kaldırın
        document.querySelectorAll('.main-box-item').forEach(el => el.classList.remove('selected'));

        // Tıklanan elemana 'selected' sınıfını ekleyin
        this.classList.add('selected');


        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        // Ripple'ı kutuya ekle
        item.appendChild(ripple);

        // Ripple animasyonu bittikten sonra elementi kaldır
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});


document.querySelectorAll('.main-box-card').forEach(item => {
    item.addEventListener('click', function(e) {

        // Mevcut seçili durumu kaldırın
        document.querySelectorAll('.main-box-card').forEach(el => el.classList.remove('selected'));

        // Tıklanan elemana 'selected' sınıfını ekleyin
        this.classList.add('selected');


        const ripple = document.createElement('span');
        ripple.classList.add('ripple-card');

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        // Ripple'ı kutuya ekle
        item.appendChild(ripple);

        // Ripple animasyonu bittikten sonra elementi kaldır
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});


document.querySelectorAll('.main-box-sizing-list-item').forEach(item => {
    const imageContainer = document.querySelector('.image-container');
    const images = {
        xxs: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xxs-configurator-all-sizes-packiro.png&w=750&q=70',
        xs: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xs-configurator-all-sizes-packiro.png&w=750&q=70',
        s: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-s-configurator-all-sizes-packiro.png&w=750&q=70',
        m: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-m-configurator-all-sizes-packiro.png&w=750&q=70',
        l: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-l-configurator-all-sizes-packiro.png&w=750&q=70',
        xl: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xl-configurator-all-sizes-packiro.png&w=750&q=70',
        xxl: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xxl-configurator-all-sizes-packiro.png&w=750&q=70',
    };
    item.addEventListener('mouseover', function() {
        const id = this.id;
        if (images[id]) {
            // Yeni resmi eklemeden önce mevcut resmi kaldır
            imageContainer.innerHTML = '';

            const img = document.createElement('img');
            img.src = images[id];
            img.alt = id;

            // Resmi ekle ve zoom efektini tetiklemek için 'show' sınıfını ekle
            imageContainer.appendChild(img);
            setTimeout(() => {
                img.classList.add('show');
            }, 50); // Biraz gecikme efekti düzgün göstermeyi sağlar
        }
    });

    item.addEventListener('click', function(e) {

        // Mevcut seçili durumu kaldırın
        document.querySelectorAll('.main-box-sizing-list-item').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.main-box-sizing-list-item-left-symbol').forEach(symbol => symbol.classList.remove('selected-list-item-symbol'));

        // Tıklanan elemana 'selected' sınıfını ekleyin
        this.classList.add('selected');

        const leftSymbol = this.querySelector('.main-box-sizing-list-item-left-symbol');
        if (leftSymbol) {
            leftSymbol.classList.add('selected-list-item-symbol');
        }


        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        // Ripple'ı kutuya ekle
        item.appendChild(ripple);

        // Ripple animasyonu bittikten sonra elementi kaldır
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all main-box-card elements
    const cards = document.querySelectorAll('.main-box-card');

    cards.forEach(card => {
        // Add click event listener to each card
        card.addEventListener('click', () => {
            // Find the corresponding main-box-card-summary within the clicked card
            const summary = card.querySelector('.main-box-card-summary');
            const link = card.querySelector('.main-box-card-left-text-link button');
            if (summary) {
                // Toggle the d-none class to show/hide the summary
                summary.classList.toggle('d-none');
                // Change the link text based on summary visibility
                if (summary.classList.contains('d-none')) {
                    link.textContent = 'Show Details';
                } else {
                    link.textContent = 'Hide Details';
                }
            }
        });
    });
});