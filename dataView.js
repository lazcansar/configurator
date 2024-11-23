/*
Step 1 Start
 */
document.addEventListener('DOMContentLoaded', () => {

    // JSON verisi
    const stepOneData = {
        "data_one": {
            "id": 1,
            "image": "https://static.vecteezy.com/system/resources/previews/009/886/742/non_2x/brown-paper-box-file-png.png",
            "title": "Flat bottom pouch",
            "description": "Our flat bottom pouch is the perfect solution for your daily needs. It is made of 100% recycled paper and is suitable for all types of food. Loremin ipsum dolor sit amet, consectetur adipiscing elit.",
            "price": "0,510 - 0,930 €",
            "time": "4-7 weeks"
        },
        "data_two": {
            "id": 2,
            "image": "https://5.imimg.com/data5/SELLER/Default/2022/4/ZZ/CN/PK/11312186/htb1scsijz7nbknjszle762xcfxas-500x500.png",
            "title": "Standup pouch | Doypack",
            "description": "The Packiro Doypack is a perfect solution for your daily needs. It is made of 100% recycled paper and is suitable for all types of food. Loremin ipsum dolor sit amet, consectetur adipiscing elit.",
            "price": "0,510 - 0,930 €",
            "time": "4-7 weeks"
        },
        "data_three": {
            "id": 3,
            "image": "https://static.vecteezy.com/system/resources/previews/009/886/742/non_2x/brown-paper-box-file-png.png",
            "title": "Standup pouch | Doypack",
            "description": "The Packiro Doypack is a perfect solution for your daily needs. It is made of 100% recycled paper and is suitable for all types of food. Loremin ipsum dolor sit amet, consectetur adipiscing elit.",
            "price": "0,510 - 0,930 €",
            "time": "4-7 weeks"
        }
    };

    // HTML içinde kapsayıcı div'i seç
    const container = document.getElementById("step-one-container");

    if (container) {
        // JSON verisini döngüyle HTML'ye ekle
        Object.values(stepOneData).forEach((item) => {
            const box = document.createElement("div");
            box.className = "col-md-4 p-4"; // Bootstrap sütun sınıfları
            box.innerHTML = `
        <div class="p-4 rounded-3 d-flex justify-content-between main-box-item gap-4 h-100">
          <div class="main-box-item-image">
            <img src="${item.image}" width="64" height="64" alt="${item.title}">
          </div>
          <div class="main-box-item-content d-flex flex-column justify-content-between">
            <div class="main-box-item-title">
              ${item.title}
            </div>
            <div class="main-box-item-description mt-2">
              ${item.description}
            </div>
            <div class="main-box-item-information mt-5">
              <span>Price per unit: ${item.price}</span>
              <span>Production time: ${item.time}</span>
            </div>
          </div>
        </div>
      `;
            container.appendChild(box); // Yeni kutuyu kapsayıcıya ekle
        });
    }



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

            // Value Set
            const titleElement = item.querySelector('.main-box-item-title');
            if (titleElement) {
                const titleValue = titleElement.textContent.trim(); // Başlık içeriği
                console.log(titleValue); // Konsola yazdır
                localStorage.setItem('stepOne', titleValue);

            } else {
                console.log('Main-box-item-title bulunamadı.');
            }


        });
    });


});
/*
Step 1 Finish
 */
/*




Step 2 Start
 */
document.addEventListener('DOMContentLoaded', () => {

    // JSON verisi
    const stepTwoData = {
        data_one: {
            image: 'https://packiro.com/assets/heros/toni.svg',
            title: 'Transparent Toni',
            content: 'Recyclable mono plastic',
            link: 'Show Details',
            featureOne: 'Oxygen',
            featureTwo: 'UV-protection',
            feateurThree: 'Humidity',

            summaryImage: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fheros-materials%2Fmaterial-step-configurator%2Ftoni-material-packiro.png&w=160&q=70',
            summaryListOne: 'Idel protection against moisture & oxygen',
            summaryListTwo: 'Efficient protection against UV radiation',
            summaryListThree: 'Fully recyclable: certified by "Made for Recycling" seal',
            summaryListFour: 'Possibility to add transparent elements',
            summaryParagraph: 'Plastic mono-material (polypropylene) with ALox-based inner layer: Excellent for products that need particularly high oxygen protection (e.g. granola, pet food and snacks).',
            summaryAddonsOne: '"Made for Recycling"-certification',
            summaryAddonsOneToolsTip: 'Certification for Recyclability',
            summaryAddonsTwo: 'Zipper',
            summaryAddonsTwoToolsTip: 'Zipper ToolsTip',
            summaryAddonsThree: 'Eurohole',
            summaryAddonsThreeToolsTip: 'Eurohole ToolsTip'
        },
        data_two: {
            image: 'https://packiro.com/assets/heros/toni.svg',
            title: 'Transparent Joe',
            content: 'Recyclable mono plastic',
            link: 'Show Details',
            featureOne: 'Oxygen',
            featureTwo: 'UV-protection',
            feateurThree: 'Humidity',

            summaryImage: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fheros-materials%2Fmaterial-step-configurator%2Ftoni-material-packiro.png&w=160&q=70',
            summaryListOne: 'Idel protection against moisture & oxygen',
            summaryListTwo: 'Efficient protection against UV radiation',
            summaryListThree: 'Fully recyclable: certified by "Made for Recycling" seal',
            summaryListFour: 'Possibility to add transparent elements',
            summaryParagraph: 'Plastic mono-material (polypropylene) with ALox-based inner layer: Excellent for products that need particularly high oxygen protection (e.g. granola, pet food and snacks).',
            summaryAddonsOne: '"Made for Recycling"-certification',
            summaryAddonsOneToolsTip: 'Certification for Recyclability',
            summaryAddonsTwo: 'Zipper',
            summaryAddonsTwoToolsTip: 'Zipper ToolsTip',
            summaryAddonsThree: 'Eurohole',
            summaryAddonsThreeToolsTip: 'Eurohole ToolsTip'
        },
        data_three: {
            image: 'https://packiro.com/assets/heros/toni.svg',
            title: 'Transparent Jimmy',
            content: 'Recyclable mono plastic',
            link: 'Show Details',
            featureOne: 'Oxygen',
            featureTwo: 'UV-protection',
            feateurThree: 'Humidity',

            summaryImage: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fheros-materials%2Fmaterial-step-configurator%2Ftoni-material-packiro.png&w=160&q=70',
            summaryListOne: 'Idel protection against moisture & oxygen',
            summaryListTwo: 'Efficient protection against UV radiation',
            summaryListThree: 'Fully recyclable: certified by "Made for Recycling" seal',
            summaryListFour: 'Possibility to add transparent elements',
            summaryParagraph: 'Plastic mono-material (polypropylene) with ALox-based inner layer: Excellent for products that need particularly high oxygen protection (e.g. granola, pet food and snacks).',
            summaryAddonsOne: '"Made for Recycling"-certification',
            summaryAddonsOneToolsTip: 'Certification for Recyclability',
            summaryAddonsTwo: 'Zipper',
            summaryAddonsTwoToolsTip: 'Zipper ToolsTip',
            summaryAddonsThree: 'Eurohole',
            summaryAddonsThreeToolsTip: 'Eurohole ToolsTip'
        },
        data_four: {
        }



    };

// Ana kapsayıcıyı seçin
    const containerStepTwo = document.querySelector('.step-two-container');

// JSON verisini döngüyle işleme
    Object.values(stepTwoData).forEach((item, index, array) => {
        // Yeni bir kart oluştur
        const card = document.createElement('div');
        card.className = 'main-box-card p-4 rounded-3 my-3';
        if (index === array.length - 1) {
            card.style.display = 'none'; // Son elemanı gizle
        }
        card.innerHTML = `
    <div class="d-flex justify-content-between align-items-center">
      <div class="main-box-card-left d-flex gap-3">
        <div class="main-box-card-left-image">
          <img src="${item.image}" alt="">
        </div>
        <div class="main-box-card-left-text">
          <div class="main-box-card-left-text-title">${item.title}</div>
          <div class="main-box-card-left-content mt-1">${item.content}</div>
          <div class="main-box-card-left-text-link mt-2"><button href="">${item.link}</button></div>
        </div>
      </div>

      <div class="main-box-card-right d-flex align-items-center">
        <div class="main-box-card-right-spec">
          <div class="main-box-card-right-spec-title">${item.featureOne}</div>
          <div class="main-box-card-right-spec-symbol">
            <i class="bi bi-wind"></i><i class="bi bi-wind"></i><i class="bi bi-wind"></i>
          </div>
        </div>
        <div class="main-box-card-right-spec">
          <div class="main-box-card-right-spec-title">${item.featureTwo}</div>
          <div class="main-box-card-right-spec-symbol">
            <i class="bi bi-brightness-high"></i>
          </div>
        </div>
        <div class="main-box-card-right-spec">
          <div class="main-box-card-right-spec-title">${item.feateurThree}</div>
          <div class="main-box-card-right-spec-symbol">
            <i class="bi bi-droplet"></i><i class="bi bi-droplet"></i><i class="bi bi-droplet"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Area -->
    <div class="d-flex gap-4 main-box-card-summary mt-5 d-none">
      <div class="main-box-card-summary-image">
        <img src="${item.summaryImage}" class="rounded-3 border border-2">
      </div>
      <div class="main-box-card-summary-content">
        <ul class="list-unstyled">
          <li><i class="bi bi-check-lg"></i> ${item.summaryListOne}</li>
          <li><i class="bi bi-check-lg"></i> ${item.summaryListTwo}</li>
          <li><i class="bi bi-check-lg"></i> ${item.summaryListThree}</li>
          <li><i class="bi bi-check-lg"></i> ${item.summaryListFour}</li>
        </ul>
        <div class="main-box-card-summary-content-paragraph">${item.summaryParagraph}</div>
        <div class="main-box-card-summary-content-addons mt-3">
          <strong>Possible add-ons</strong>
          <ul class="list-unstyled d-flex gap-3 mt-2">
            <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${item.summaryAddonsOneToolsTip}">${item.summaryAddonsOne} <i class="bi bi-info-circle-fill"></i></li>
            <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${item.summaryAddonsTwoToolsTip}">${item.summaryAddonsTwo} <i class="bi bi-info-circle-fill"></i></li>
            <li data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${item.summaryAddonsThreeToolsTip}">${item.summaryAddonsThree} <i class="bi bi-info-circle-fill"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Summary Area -->
  `;
        document.querySelectorAll('.main-box-card').forEach(item => {
            item.addEventListener('click', function(e) {

                // Mevcut seçili durumu kaldırın
                document.querySelectorAll('.main-box-card').forEach(el => el.classList.remove('selected'));

                // Tıklanan elemana 'selected' sınıfını ekleyin
                this.classList.add('selected');
                console.log(this);


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


                const stepTwoTitleElement = this.querySelector('.main-box-card-left-text-title'); // Tıklanan kartın içindeki title
                if (stepTwoTitleElement) {
                    const titleValue = stepTwoTitleElement.textContent.trim();
                    console.log(titleValue); // Doğru title verisini konsola yazdır
                    localStorage.setItem('stepTwoTitle', titleValue); // Veriyi localStorage'a kaydet
                } else {
                    console.warn('main-box-card-left-text-title element not found');
                }


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

        // Kartı kapsayıcıya ekle
        containerStepTwo.appendChild(card);
    });
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




});
/*
Step 2 Finish
 */


    /*
    Step 3 Start
     */
document.addEventListener('DOMContentLoaded', () => {

    const stepThreeData = {
        "data_one": {
            sizeSymbol: 'XXS',
            sizeText: '85 <i class="bi bi-x"></i> 100 mm',
            sizeRightText: '15 ml'
        },
        "data_two": {
            sizeSymbol: 'XS',
            sizeText: '85 <i class="bi bi-x"></i> 150 mm',
            sizeRightText: '60 ml'
        },
        "data_three": {
            sizeSymbol: 'S',
            sizeText: '100 <i class="bi bi-x"></i> 160 mm',
            sizeRightText: '75 ml'
        },
        "data_four": {
            sizeSymbol: 'M',
            sizeText: '120 <i class="bi bi-x"></i> 190 mm',
            sizeRightText: '180 ml'
        },
        "data_five": {
            sizeSymbol: 'L',
            sizeText: '160 <i class="bi bi-x"></i> 230 mm',
            sizeRightText: '600 ml'
        },
        "data_six": {
            sizeSymbol: 'XL',
            sizeText: '190 <i class="bi bi-x"></i> 270 mm',
            sizeRightText: '950 ml'
        },
        "data_seven": {
            sizeSymbol: 'XXL',
            sizeText: '300 <i class="bi bi-x"></i> 350 mm',
            sizeRightText: '3500 ml'
        }
    };
    const containerStepThree = document.querySelector('.main-box-sizing-list');

    // Kapsayıcı elemanın varlığını teyit et
    if (containerStepThree) {
        // JSON verisini döngüyle HTML'ye ekle
        Object.values(stepThreeData).forEach((item) => {
            const box = document.createElement('div');
            box.className = 'main-box-sizing-list-item d-flex align-items-center justify-content-between rounded-3 p-3';
            box.id = item.sizeSymbol; // Her bir eleman için benzersiz ID
            box.innerHTML = `
                <div class="main-box-sizing-list-item-left d-flex align-items-center gap-3">
                    <div class="main-box-sizing-list-item-left-symbol border border-2 border-dark rounded-3">${item.sizeSymbol}</div>
                    <div class="main-box-sizing-list-item-left-text">${item.sizeText}</div>
                </div>
                <div class="main-box-sizing-list-item-right">
                    <div class="main-box-sizing-list-item-right-text">${item.sizeRightText}</div>
                </div>
            `;
            // Kapsayıcıya ekle
            containerStepThree.appendChild(box);
        });
    }



    document.querySelectorAll('.main-box-sizing-list-item').forEach(item => {
        const imageContainer = document.querySelector('.image-container');
        const images = {
            XXS: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xxs-configurator-all-sizes-packiro.png&w=750&q=70',
            XS: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xs-configurator-all-sizes-packiro.png&w=750&q=70',
            S: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-s-configurator-all-sizes-packiro.png&w=750&q=70',
            M: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-m-configurator-all-sizes-packiro.png&w=750&q=70',
            L: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-l-configurator-all-sizes-packiro.png&w=750&q=70',
            XL: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xl-configurator-all-sizes-packiro.png&w=750&q=70',
            XXL: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2F1zu1%2Fstand-up-pouches-configurator%2Fnew-sizes-step-configurator%2Fsup-xxl-configurator-all-sizes-packiro.png&w=750&q=70',
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

            const stepThreeSymbol = item.querySelector('.main-box-sizing-list-item-left-symbol');
            if (stepThreeSymbol) {
                const symbolValue = stepThreeSymbol.textContent.trim();
                console.log(symbolValue);
                localStorage.setItem('stepThreeSymbol', symbolValue);
            }


        });
    });


});
    /*
    Step 3 Finish
     */




    /*
    Step 4 Start
     */

    document.addEventListener('DOMContentLoaded', () => {
        const stepFourData = {
            "data_one": {
                quantity: '500',
                discount: '0',
                unitPrice: '1,100 €',
                totalAmount: '550,00 €',
                numberOfDesigns: '1',
            },
            "data_two": {
                quantity: '1.000',
                discount: '<span>-12%</span>',
                unitPrice: '0,570 €',
                totalAmount: '570,00 €',
                numberOfDesigns: 'up to 2 designs',
            },
            "data_three": {
                quantity: '1.500',
                discount: '<span>-15%</span>',
                unitPrice: '0,550 €',
                totalAmount: '825,00 €',
                numberOfDesigns: 'up to 3 designs',
            },
            "data_four": {
                quantity: '1.500',
                discount: '<span>-15%</span>',
                unitPrice: '0,550 €',
                totalAmount: '825,00 €',
                numberOfDesigns: 'up to 3 designs',
            },
            "data_five": {
                quantity: '1.500',
                discount: '<span>-15%</span>',
                unitPrice: '0,550 €',
                totalAmount: '825,00 €',
                numberOfDesigns: 'up to 3 designs',
            },
            "data_six": {
                quantity: '1.500',
                discount: '<span>-15%</span>',
                unitPrice: '0,550 €',
                totalAmount: '825,00 €',
                numberOfDesigns: 'up to 3 designs',
            },
        };

        // HTML kapsayıcıyı seç
        const containerStepFour = document.querySelector('.row.flex-column.gap-2');

        if (containerStepFour) {
            // JSON verisini döngüyle işleyerek HTML'ye ekle
            Object.values(stepFourData).forEach((item) => {
                const box = document.createElement('div');
                box.className =
                    'quantity-box-item d-flex justify-content-between align-items-center rounded-3 py-2 px-4';

                box.innerHTML = `
        <div class="quantity-box-item-list quantity">${item.quantity}</div>
        <div class="quantity-box-item-list">${item.discount}</div>
        <div class="quantity-box-item-list unitprice">${item.unitPrice}</div>
        <div class="quantity-box-item-list">${item.totalAmount}</div>
        <div class="quantity-box-item-list">${item.numberOfDesigns}</div>
      `;

                // Kapsayıcıya ekle
                containerStepFour.appendChild(box);
            });
        }

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

                const fourQuantity = item.querySelector('.quantity');
                const fourunitprice = item.querySelector('.unitprice');
                if (fourQuantity && fourunitprice) {
                    const quantityValue = fourQuantity.textContent.trim();
                    const unitpriceValue = fourunitprice.textContent.trim();
                    console.log(quantityValue);
                    console.log(unitpriceValue);
                    localStorage.setItem('stepFourQuantity', quantityValue);
                    localStorage.setItem('stepFourDiscount', unitpriceValue);
                }



            });
        });





    });

    /*
    Step 4 Finish
     */


/*
Step 5 Start
 */

document.addEventListener('DOMContentLoaded', () => {
    const stepFiveData = {
        "data_one": {
            image: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2Fflat-bottom-pouch-generic-front-design-packiro.png&w=160&q=70',
            title: '1. Front and back side',
            text: 'You have chosen a quantity of <strong>1000 pieces.</strong> This allows you to add <strong>up to 2 designs</strong> to your order.',
            selectMessage: 'Set the number of designs you want:',
            selectOptions: [
                {
                    value: '1',
                    text: '1 design'
                },
                {
                    value: '2',
                    text: '2 designs'
                },
            ],
        },
        "data_two": {
            image: 'https://packiro.com/_next/image?url=https%3A%2F%2Fpackiro-content-prod.s3.eu-central-1.amazonaws.com%2Fgeneric-packaging%2Fflat-bottom-pouch-generic-front-design-packiro.png&w=160&q=70',
            title: '2. Sides & Bottoms',
            text: 'You have chosen a <strong>Flat-bottom pouch</strong> and a quantity of <strong>under 2.500 pieces.</strong> You can print the bottom and sides in black or white.',
            selectMessage: 'Set design:',
            selectOptions: [
                {
                    value: '1',
                    text: 'White'
                },
                {
                    value: '2',
                    text: 'Black'
                },
            ],
        }
    };

// HTML kapsayıcı elemanını seç
    const containerStepFive = document.querySelector('.design-container');

    if (containerStepFive) {
        // JSON verisini döngüyle işleyerek HTML'ye ekle
        Object.values(stepFiveData).forEach((item) => {
            const designBox = document.createElement('div');
            designBox.className = 'col-md-5 design-box';

            designBox.innerHTML = `
        <div class="design-box-item d-flex gap-4">
          <div class="design-box-left-item">
            <div class="design-box-left-item-image">
              <img src="${item.image}" class="rounded-3">
            </div>
          </div>
          <div class="design-box-right-item">
            <div class="design-box-right-item-title font-600">${item.title}</div>
            <div class="design-box-right-item-text font-400">${item.text}</div>
            <div class="design-box-right-ask-select mt-4 font-500">${item.selectMessage}</div>
            <select class="form-select mt-2">
              ${item.selectOptions
                .map(
                    (option) => `<option value="${option.value}">${option.text}</option>`
                )
                .join('')}
            </select>
          </div>
        </div>
      `;

            // Kapsayıcıya ekle
            containerStepFive.appendChild(designBox);

            const selectElements = containerStepFive.querySelectorAll('select');
            selectElements.forEach((select, index) => {
               select.addEventListener('change', function(e) {
                   const selectedOption = e.target.options[event.target.selectedIndex].text;
                   console.log(`Select ${index + 1}: ${selectedOption}`); //
                   const storageKey = `stepFive_${index + 1}`;
                   localStorage.setItem(storageKey, selectedOption);
               })
            });






        });


    }

});

/*
Step 5 Finish
 */

/*
Step 6 Start
 */

document.addEventListener('DOMContentLoaded', () => {


});



/*
Step 6 Start
 */
/*
Step 7 Start
 */

document.addEventListener('DOMContentLoaded', () => {

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

});


/*
Step 7 Finish
 */