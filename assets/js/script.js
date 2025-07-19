// ========================================================================= >> DATALAR << ============================================================================== 

const privateSecList = [
    {
        id: 1,
        name: "kreditlər",
        items: [
            "istehlak krediti",
            "atb card kredit",
            "əmanət qarşılığında kredit"
        ]
    },
    {
        id: 2,
        name: "kartlar",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
    {
        id: 3,
        name: "ipoteka",
        items: [
            "ipoteka krediti",
            "güzəştli ipoteka krediti",
            '"MİDA" MMC xətti ilə güzəştli ipoteka'
        ]
    },
    {
        id: 4,
        name: "əmanətlər",
        items: [
            "klassik əmanət",
            "depozit qutuları"
        ]
    },
    {
        id: 5,
        name: "onlayn",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
    {
        id: 6,
        name: "digər",
        items: [
            "atb card",
            "atb card kredit",
            "atb card premium",
            "atb junior",
            "cashback",
        ]
    },
]
const moreInfo = ["bank məlumatları", "karyera mərkəzi", "məlumatların açıqlanması", "xəbərlər", "bankla əlaqə", "irad və təkliflər", "filiallar", "təhlükəsizliyiniz", "satınalmalar", "xeyriyyəçilik"];
const info = ["tariflər", "sms bildiriş", "kartlar üzrə digər xidmətlər", "kart əməliyyatlarında məhdudiyyətlər"]
const cardsArr = [
    {
        image: "percent.png",
        title: "kredit",
        desc: "sərfəli şərtlərlə nağd kredit",
        url: "https://atb.az/kredit/"
    },
    {
        image: "credit-card.png",
        title: "atb card",
        desc: "qalığa gəlir əldə edin, kartdan karta 0%-lə köçürün",
        url: "https://atb.az/atb-kart/"
    },
    {
        image: "credit-card-plus.png",
        title: "atb card kredit",
        desc: "10 000 AZN-dək kredit xətli kart sifariş edin",
        url: "https://atb.az/kredit-kart/"
    },
    {
        image: "junior.png",
        title: "atb junior",
        desc: "yeni atb junior kartı",
        url: "https://atb.az/junior/"
    },
]
const prices = {
    "azn": 1,
    "usd": 0.5882,
    "eur": 0.5063,
    "aud": 0.9052,
    "byn": 1.7443,
    "bgn": 0.991,
    "aed": 2.161,
    "czk": 12.47,
    "cny": 4.224,
    "dkk": 3.78,
    "rub": 46.02,
    "gbp": 0.4293,
    "chf": 0.456,
    "try": 23.75
}
const news = [
    {
        title: "Azər Türk Bankın 30 yaşı tamam oldu",
        date: "11.07.2025",
        desc: "30 il öncə, 1995-ci ildə Ulu Öndər Heydər Əliyev və Türkiyə Cümhuriyyətinin baş nazirinin iştirakı ilə Azər Türk Bank dövlət bankının açılış mərasimi baş tutmuşdur."
    },
    {
        title: "Azər Türk Bankın 30 yaşı tamam oldu",
        date: "11.07.2025",
        desc: "Hörmətli müştərilər, bildiririk ki,  AR Nazirlər Kabinetinin müvafiq qərarı ilə 2025-ci il 26-29 iyun tarixləri aras..."
    },
    {
        title: "Azər Türk Bankın 30 yaşı tamam oldu",
        date: "11.07.2025",
        desc: "Dövlət bankı Azər Türk Bank kampaniya ərzində fiziki şəxslərə illik 11% dərəcəsi ilə, 12 ay müddətinədək istehlak kreditl..."
    },
    {
        title: "Elvin müəllim maks bal verirmiş",
        date: "21.07.2025",
        desc: "20 si olacaq tətil qabağı yazmışam, maks bal gözlüyürəm."
    }
]
// ========================================================================= >> DOM ELEMENTS << ============================================================================== 

const sidebarList = document.querySelector(".sidebarList");
const sidebarList2 = document.querySelector(".sidebarList2");
const accordionDiv = document.querySelector(".accordion-div");
const navbarList = document.querySelector(".navbarList")
const headerDropdownMenu = document.querySelector(".headerDropdownMenu")
const header = document.getElementById('mainHeader');
const cashSection = document.querySelector("#cash-loan-section");
const depositSection = document.querySelector("#deposit-section");
const cashLoan = document.querySelector("#cash-loan");
const deposit = document.querySelector("#deposit");
const cardsContaner = document.querySelector('.cards');
const calcType = document.querySelectorAll(".calcType");
const slider = document.getElementById("amountRange");
const slider2 = document.getElementById("amountRange2");
const cashInp = document.getElementById("cashInput");
const monthInp = document.getElementById("monthInput");
const dropdownToggles = document.querySelectorAll(".dropdownToggle");
const leftInp = document.querySelector('#left-input');
const rightInp = document.querySelector('#right-input');
const fromSelect = document.querySelector('#from-currency');
const toSelect = document.querySelector('#to-currency');
const newsContainer = document.querySelector('.news-container');
const toggleMenuBtn = document.getElementById('toggleMenu');
const socialMenu = document.getElementById('socialMenu');



// ========================================================================= >> EVENT LISTENER << ============================================================================== 

// Navbar'ın scroll'u ayarlaması üçün
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.remove('bg-transparent');
        header.classList.add('bg-white');
    }
    else {
        header.classList.remove('bg-white');
        header.classList.add('bg-transparent')
    }
})
// Nağd kredit
cashLoan.addEventListener('click', () => {
    depositSection.classList.add('hidden');
    cashSection.classList.remove('hidden');
})

// Əmanət kredit
deposit.addEventListener('click', () => {
    cashSection.classList.add('hidden');
    depositSection.classList.remove('hidden');
})

// Əgər, minimum və maksimum dəyərin altında vəya üstündə yazılarsa, avtomatik sadə plana qaytarılır.
cashInp.addEventListener("change", () => {
    if (cashInp.value < 300) {
        cashInp.value = 300;
    }
    if (cashInp.value > 40000) {
        cashInp.value = 40000;
    }
    slider.value = cashInp.value;
    updateRangeBackground(slider);

});

// Əgər, minimum və maksimum dəyərin altında vəya üstündə yazılarsa, avtomatik sadə plana qaytarılır.
monthInp.addEventListener("change", () => {
    if (monthInp.value < 3) {
        monthInp.value = 3;
    }
    if (monthInp.value > 48) {
        monthInp.value = 48;
    }
    slider2.value = monthInp.value;
    updateRangeBackground(slider2);
});

// Hər resize zamanı, xəbərlər funksiyası güncəllənir və responsive hala gəlir.
window.addEventListener("resize", () => {
    renderNews();
});

// Sağ alttaki menyunu açır.
toggleMenuBtn.addEventListener('click', () => {
  const isHidden = socialMenu.classList.toggle('hidden');
  
  toggleMenuBtn.classList.toggle('hidden', !isHidden);
});

// =========================================================================== >> MAPS << =================================================================================== 

// Mobil navbar üçün elementlər
privateSecList.map(item => {
    accordionDiv.innerHTML += ` 
<div class="border-b border-slate-200">
  <button onclick="toggleAccordion(${item.id})" class="w-full flex justify-between items-center py-[9px] text-slate-800">
    <span>${item.name}</span>
    <span id="icon-${item.id}" class="text-slate-800 transition-transform duration-300 !text-[#6f0bbb]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-6 h-6">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    </span>
  </button>
  <ul id="content-${item.id}" class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
      ${item.items.map(subItem => `<li class="py-[8px] text-[15px] text-slate-500 hover:text-[#6f0bbb]"><a href="#">${subItem}</a></li>`).join("")}
  </ul>
</div>
`;

    navbarList.innerHTML += `<li><a class="hover:text-[#6f0bbb]" href="#">${item.name.toUpperCase()}</a></li>`
});

// Kart section'da olan kartlar
cardsArr.map(card => {
    cardsContaner.innerHTML += `<li class="card rounded-xl p-4 hover:translate-y-[-20px] translate-all duration-300 ease-in-out hover:shadow-xl">
                        <a target="_blank" href="${card.url}">
                            <div class="card-top">
                            <img src="assets/images/${card.image}"/> 
                        </div>
                        <div class="card-bottom">
                            <h3 class="card-title mt-[34px] mb-[6px] md:mt-[46px] text-[16px] md:text-[20px] md:mb-[14px] font-bold">${card.title}</h3>
                            <p class="font-[300] text-[12px] md:text-[18px] md:mb-[46px]">${card.desc}</p>
                        </div>
                        </a>
                    </li>`
});


// =========================================================================== >> LOOPS << =================================================================================== 

// Navbar üçün elementlər
moreInfo.forEach((item) => {
    sidebarList.innerHTML += `<li>
        <a href="#"
            class="flex items-center py-2 text-[#6F6F6F] rounded-lg hover:bg-gray-100 group">
            <span>${item}</span>
        </a>
    <li/> `;

    headerDropdownMenu.innerHTML += `<li>
                            <a href="#"
                                class="block">${item}</a>
                        </li>`
})

// Navbar üçün elementlər
info.forEach((item) => {
    sidebarList2.innerHTML += `<li>
        <a href="#"
            class="flex items-center py-2 text-[#6F6F6F] rounded-lg hover:bg-gray-100 group">
            <span>${item}</span>
        </a>
    <li/>`;
})

// Dropdown açıldığı zaman aşağı olan ox, yuxarı hərəkət edir.
dropdownToggles.forEach((toggle, index) => {
    const menu = document.querySelectorAll(".dropdownMenu")[index];
    const arrow = toggle.querySelector(".arrowIcon");
    const selected = toggle.querySelector(".selectedCurrency");

    toggle.addEventListener("click", () => {
        const isOpen = menu.classList.contains("scale-y-100");

        menu.classList.toggle("scale-y-100", !isOpen);
        menu.classList.toggle("opacity-100", !isOpen);
        menu.classList.toggle("opacity-0", isOpen);
        menu.classList.toggle("pointer-events-auto", !isOpen);
        menu.classList.toggle("pointer-events-none", isOpen);

        arrow.classList.toggle("rotate-180", !isOpen);
    });

    menu.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", () => {
            selected.innerText = li.innerText;

            menu.classList.remove("scale-y-100", "opacity-100", "pointer-events-auto");
            menu.classList.add("opacity-0", "pointer-events-none");

            arrow.classList.remove("rotate-180");
        });
    });
});

// =========================================================================== >> FUNCTIONS << =================================================================================== 

// Navbar'da ən üstdə " + " işarəsi ilə açılan elementlər.
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    const minusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
      </svg>
    `;
    const plusSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
      </svg>
    `;

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0';
        icon.innerHTML = plusSVG;
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.innerHTML = minusSVG;
    }
}

// Nağd mı, yoxa əmanət üçün mü? 
function changeCalc(e) {
    const currentElement = e.currentTarget;
    if (currentElement.classList.contains("active")) return;
    calcType.forEach((item, index) => {
        item.classList.remove("active");

    })
    currentElement.classList.add("active")
}

// Nağd kredit hesablamağımız üçün işlədilən range və cash input
function updateRangeBackground(sliderElement, event = null) {
    const min = +sliderElement.min;
    const max = +sliderElement.max;
    const val = +sliderElement.value;
    const percent = ((val - min) / (max - min)) * 100;

    sliderElement.style.background = `linear-gradient(to right, #6f0bbb 0%, #6f0bbb ${percent}%, transparent ${percent}%, transparent 100%)`;

    if (event) {
        const currentElement = event.currentTarget;
        if (currentElement.classList.contains("cashRange")) {
            cashInp.value = val;
            getValue();
        } else {
            monthInp.value = val;
            getValue();
        }
    }
}

// Aylara görə faizi təyin edir
function getDynamicPercent() {
    let time = monthInp.value;
    if (time <= 12) {
        return 11;
    } else if (time > 12 && time <= 24) {
        return 15;
    }
    else if (time > 24 && time <= 36) {
        return 16;
    } else {
        return 17;
    }
}

// Kredit faizini hesablayır
function getValue() {
    const price = cashInp.value;
    const month = monthInp.value;
    const monthlyPercentEl = document.querySelector(".monthlyPercent");
    const monthlyPaymentEl = document.querySelector(".monthlyPayment")
    let monthlyPercentVal = getDynamicPercent() / 12 / 100;

    let k = (monthlyPercentVal * (1 + monthlyPercentVal) ** month) / ((1 + monthlyPercentVal) ** month - 1);
    let monthlyPaymentVal = Math.round(k * price);

    monthlyPercentEl.innerHTML = `${getDynamicPercent()} %`
    monthlyPaymentEl.innerHTML = `${monthlyPaymentVal} ₼`
}

// Valyutaları hesablayır
function calcPrice() {
    const fromValue = leftInp.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (fromValue && prices[fromCurrency] && prices[toCurrency]) {
        const aznAmount = fromValue / prices[fromCurrency];
        const converted = aznAmount * prices[toCurrency];


        rightInp.value = converted.toFixed(3);
        if (fromCurrency == toCurrency) {
            rightInp.value = '-';
        }
    }
    else {
        rightInp.value = '-';
    }
}

// Bizim xəbərləri göstərir, mobildədirsə 2, desktopdadırsa 4
function renderNews() {
    let limit = 4;
    let isMobile = false;
    newsContainer.innerHTML = ""
    if (window.innerWidth <= 768) {
        limit = 2;
        isMobile = true;
    }

    let count = 0;

    news.slice(0, limit)
        .forEach((item) => {
            count++
            if (count == 4) {
                newsContainer.innerHTML += `
            <li id="read-all-news" 
                class="cursor-pointer bg-[#F5EEE8] p-[42px_30px_47px_20px] flex flex-col gap-[6px] w-[255px] h-[155px]
                rounded-[15px_15px_15px_0] relative items-start text-[18px] font-bold group">
                <span>bütün xəbərləri oxu</span>
                <button class="group-hover:translate-x-[10px] duration-700 transition-all"><i class="fa-solid fa-right-to-bracket text-[48px] my-[10px]"></i></button>
            </li>`
                return;
            }

            if (!isMobile) {
                newsContainer.innerHTML += `
                    <li class="bg-[#F5EEE8] p-[42px_30px_47px_20px] flex flex-col justify-between gap-[6px] w-[255px] h-[310px] rounded-[15px_15px_15px_0] relative">
                        <div class="top">
                            <h3 class="text-[18px] leading-[1.2]">
                                <a href="#">${item.title}</a>
                            </h3>
                            <p class="mt-[7px] text-[10px] font-[400] italic">${item.date}</p>
                        </div>
                        <div class="bottom">
                            <p class="text-[14px] line-clamp-3">${item.desc}</p>
                        </div>
                    </li>`;
            }
            else {
                newsContainer.innerHTML += `
                    <li class="bg-[#F5EEE8] p-[30px_15px] flex flex-col justify-between gap-[6px] w-[170px] h-[110px] rounded-[15px_15px_15px_0] relative">
                        <div class="top">
                            <h3 class="text-[14px] font-bold leading-[1.2]">
                                <a href="#">${item.title}</a>
                            </h3>
                           <p class="mt-[7px] text-[10px] font-[400] italic">${item.date}</p>
                    </li>`;
            }
        })

}

// Sağ alttaki açdığımız menyunu bağlamağa yarayır.
function closeMenu() {
  socialMenu.classList.add('hidden'); 
  toggleMenuBtn.classList.remove('hidden');
}
// ======================================================================= >> CALLED FUNCTIONS << =================================================================================== 

updateRangeBackground(slider);
updateRangeBackground(slider2);
renderNews();