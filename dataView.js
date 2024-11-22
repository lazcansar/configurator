document.addEventListener('DOMContentLoaded', () => {
    /*
    Step 1 Start
     */
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
        });
    });

    /*
    Step 1 Finish
     */


    /*
    Step 2 Start
     */
    // JSON verisi
    const stepTwoData = {
        "data_one": {
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
        "data_two": {
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
        "data_three": {
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
        }

    };

// Ana kapsayıcıyı seçin
    const containerStepTwo = document.querySelector('.step-two-container');

// JSON verisini döngüyle işleme
    Object.values(stepTwoData).forEach((item) => {
        // Yeni bir kart oluştur
        const card = document.createElement('div');
        card.className = 'main-box-card p-4 rounded-3 my-3';

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

        // Kartı kapsayıcıya ekle
        containerStepTwo.appendChild(card);
    });

    /*
    Step 2 Finish
     */
});
