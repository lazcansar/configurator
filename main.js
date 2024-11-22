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