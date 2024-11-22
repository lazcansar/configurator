import './public/css/bootstrap.min.css'
import './public/js/bootstrap.bundle.min.js'
import './style.scss'
import './dataView.js'


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*
Step 1
 */
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

/*
Step 2
 */
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

/*
Step 3
 */
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


/*
Step 4
 */
document.querySelectorAll('.quantity-box-item').forEach(item => {
    item.addEventListener('click', function(e) {

        // Mevcut seçili durumu kaldırın
        document.querySelectorAll('.quantity-box-item').forEach(el => el.classList.remove('selected'));

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

/*
Step 6
 */
// Tüm data-custom="summary" olan elementleri seçin.
const stepSixSummaries = document.querySelectorAll('[data-custom="summary"]');
const itemRight = document.querySelectorAll('.addon-box-item-right');

// Her bir elemana click event listener ekleyin
itemRight.forEach(stepSixSummary => {
    stepSixSummary.addEventListener('click', function(event) {
        // Olayın yayılmasını önleyin
        event.stopPropagation();

        // Tıklanan öğe içinde .addon-box-item-summary sınıfına sahip özet öğeyi bulun
        const summary = stepSixSummary.querySelector('.addon-box-item-summary');
        if (summary) {
            // d-none sınıfını göster/gizle
            summary.classList.toggle('d-none');
            console.log(summary);
        }
    });
});

document.querySelectorAll('.addon-box-item').forEach(item => {
    const addonImage = document.querySelector('.addon-hover-image');
    const images = {
        one: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Faddons%2Fadd-ons-zipper-packiro.png&w=500&q=70',
        two: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Faddons%2Fadd-ons-valve-packiro.png&w=500&q=70',
        tree: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Faddons%2Fadd-ons-fsc-seal-en-packiro.png&w=500&q=70',
    };
    const contentElement = document.querySelector('.addon-hover-content');
    const content = {
        one: {
            title: 'Zipper',
            text: 'The pocket zipper is located only on the front of the packaging. This allows you to open the pouch especially wide and filling becomes a breeze.'
        },
        two: {
            title: 'Aroma valve',
            text: 'An aroma valve allows CO2 to escape while preventing air from entering. Your contents remain protected without the packaging inflating or bursting. An absolute must for coffee packaging!'
        },
        tree: {
            title: 'FSC-certification',
            text: 'Our paper comes exclusively from FSC®-certified forest regions. With the seal of the Forest Stewardship Council® organisation, the sustainability of your packaging is directly visible to your customers! You can print the seal on your pouches in portrait or landscape format.'
        }
    };

    item.addEventListener('mouseover', function() {
        const id = this.id;
        if (images[id]) {
            // Yeni resmi eklemeden önce mevcut resmi kaldır
            addonImage.innerHTML = '';

            const img = document.createElement('img');
            img.src = images[id];
            img.alt = id;

            // Resmi ekle ve zoom efektini tetiklemek için 'show' sınıfını ekle
            addonImage.appendChild(img);
            setTimeout(() => {
                img.classList.add('show');
            }, 50); // Biraz gecikme efekti düzgün göstermeyi sağlar
        }

        if (content[id]) {
            contentElement.innerHTML = '';
            const div = document.createElement('div');
            const styledDiv = document.createElement('div');
            styledDiv.classList.add('addon-hover-content-title');
            const hr = document.createElement('hr');
            const p = document.createElement('p');
            styledDiv.innerHTML = content[id].title;
            p.innerHTML = content[id].text;
            div.appendChild(styledDiv);
            div.appendChild(hr);
            div.appendChild(p);
            contentElement.appendChild(div);


        }
    });



    item.addEventListener('click', function(e) {

        // Mevcut seçili durumu kaldırın
        document.querySelectorAll('.addon-box-item').forEach(el => el.classList.remove('selected'));

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

/*
Step 7
 */
document.querySelectorAll('.choose-box-item').forEach(item => {
    const chooseContent = document.querySelector('.choose-click-content');
    const chooseText = {
        one: {
            title: 'Standard',
            text: 'The standard production and delivery time is 4 to 6 weeks (stand-up pouches and flat pouches) or 4 to 7 weeks (flat bottom pouches) after approval of the designs.\n' +
                '\n' +
                'Expected delivery date: 3. January'
        },
        two: {
            title: 'Design check',
            text: 'Our automatic design check shows you directly after uploading your design whether it is printable or whether you should still make adjustments. You get detailed feedback on everything from colour space to image sizes.'
        },
        tree: {
            title: 'Design check',
            text: 'When you book the professional check, you put the detailed check in the hands of our experienced design team: you get feedback, for example, on whether the bila-white layer matches the artwork layer and whether the special effect you want is achieved. We also make sure that no important information is located near the seal area.'
        }

    }

    item.addEventListener('click', function(e) {
        const id = this.id;

        if (chooseText[id]) {
            chooseContent.innerHTML = '';
            const div = document.createElement('div');
            const styledDiv = document.createElement('div');
            styledDiv.classList.add('addon-hover-content-title');
            const hr = document.createElement('hr');
            const p = document.createElement('p');
            styledDiv.innerHTML = chooseText[id].title;
            p.innerHTML = chooseText[id].text;
            div.appendChild(styledDiv);
            div.appendChild(hr);
            div.appendChild(p);
            chooseContent.appendChild(div);
        }





        document.querySelectorAll('.choose-box-item').forEach(el => el.classList.remove('selected'));

        this.classList.add('selected');

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        item.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

document.querySelectorAll('.choose-box-item-design').forEach(item => {
    const chooseContent = document.querySelector('.choose-click-content');
    const chooseText = {
        two: {
            title: 'Design check',
            text: 'Our automatic design check shows you directly after uploading your design whether it is printable or whether you should still make adjustments. You get detailed feedback on everything from colour space to image sizes.'
        },
        tree: {
            title: 'Design check',
            text: 'When you book the professional check, you put the detailed check in the hands of our experienced design team: you get feedback, for example, on whether the bila-white layer matches the artwork layer and whether the special effect you want is achieved. We also make sure that no important information is located near the seal area.'
        }

    }


    item.addEventListener('click', function(e) {
        const id = this.id;

        if (chooseText[id]) {
            chooseContent.innerHTML = '';
            const div = document.createElement('div');
            const styledDiv = document.createElement('div');
            styledDiv.classList.add('addon-hover-content-title');
            const hr = document.createElement('hr');
            const p = document.createElement('p');
            styledDiv.innerHTML = chooseText[id].title;
            p.innerHTML = chooseText[id].text;
            div.appendChild(styledDiv);
            div.appendChild(hr);
            div.appendChild(p);
            chooseContent.appendChild(div);
        }


        document.querySelectorAll('.choose-box-item-design').forEach(el => el.classList.remove('selected'));

        this.classList.add('selected');

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size * 2}px`;
        ripple.style.left = `${e.clientX - rect.left - size}px`;
        ripple.style.top = `${e.clientY - rect.top - size}px`;

        item.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});
