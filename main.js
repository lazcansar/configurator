import './public/css/bootstrap.min.css'
import './public/js/bootstrap.bundle.min.js'
import './style.scss'



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