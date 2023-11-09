let ArData = {
  header: {
    menu__home: "الرئيسية",
    menu__about: "أعرف عنا",
    menu__ourGroup: "مجموعاتنا",
    menu__chairman: "أعمالنا السابقة",
    menu__mission: "مهمتنا",
    menu__vision: "رؤيتنا",
    menu__services: "الخدمات",
    menu__ourOffices: "مكاتبنا",
    menu__news: "الأخبار",
    menu__job: "الوظايف",
    menu__contact: "تواصل معنا",
    menu__lang: "اللغة",
  },
  footer: {
    footer__title: "شركة الطاقة المميزة",
    footer__description: "نحقق لك أحلامك",
    footer__subtitle1: "عنا",
    footer__link1: "الخدمات",
    footer__link2: "مهمتنا",
    footer__subtitle2: "الشركة",
    footer__link3: "المشاريع السابقة",
    footer__link4: "مجموعتنا",
    footer__subtitle3: "الدعم",
    footer__link5: "الأسئلة الشائعة",
    footer__link6: "مكاتنبا",
    footer__link7: "تواصل معنا",
    footer__copy: "© 2023 الطاقة المميزة. جميع الحقوق محفوظة.",
  },
  previous: {
    about__title: "المشاريع السابقة",
    about__description1:   "مركز قوى الامن الموحد بالمدينة المنورة ٩١١ <br />",
    about__description2:   "مشروع السلامة المرورية <br />",
    about__description3:   "استكمال طريق علي بن ابي طالب بالمدينة المنورة (سفلتة وأرصفة) <br />",
    about__description4: "استكمال تنفيذ بلدية الصويدرة <br />",   
    about__description5: "صور لمشاريعنا",    
    about__description6: "صور لمشاريعنا",
    about__description7: "صور لمشاريعنا", 
    about__description8: "صور لمشاريعنا",
  },
};


// Base
let body = document.getElementById("body");
let ar = document.getElementById("ar");
let en = document.getElementById("en");
let Mission__data = document.getElementById("Mission__data");

// header
let menu__home = document.getElementById("menu__home");
let menu__about = document.getElementById("menu__about");
let menu__ourGroup = document.getElementById("menu__ourGroup");
let menu__chairman = document.getElementById("menu__chairman");
let menu__mission = document.getElementById("menu__mission");
let menu__vision = document.getElementById("menu__vision");
let menu__services = document.getElementById("menu__services");
let menu__ourOffices = document.getElementById("menu__ourOffices");
let menu__news = document.getElementById("menu__news");
let menu__job = document.getElementById("menu__job");
let menu__contact = document.getElementById("menu__contact");
let menu__lang = document.getElementById("menu__lang");

// Previous Projects
let about__title = document.getElementById("about__title");
let about__description1 = document.getElementById("about__description1");
let about__description2 = document.getElementById("about__description2");
let about__description3 = document.getElementById("about__description3");
let about__description4 = document.getElementById("about__description4");
let about__description5 = document.getElementById("about__description5");
let about__description6 = document.getElementById("about__description6");
let about__description7 = document.getElementById("about__description7");
let about__description8 = document.getElementById("about__description8");


// footer
let footer__title = document.getElementById("footer__title");
let footer__description = document.getElementById("footer__description");
let footer__subtitle1 = document.getElementById("footer__subtitle1");
let footer__link1 = document.getElementById("footer__link1");
let footer__link2 = document.getElementById("footer__link2");
let footer__subtitle2 = document.getElementById("footer__subtitle2");
let footer__link3 = document.getElementById("footer__link3");
let footer__link4 = document.getElementById("footer__link4");
let footer__subtitle3 = document.getElementById("footer__subtitle3");
let footer__link5 = document.getElementById("footer__link5");
let footer__link6 = document.getElementById("footer__link6");
let footer__link7 = document.getElementById("footer__link7");
let footer__copy = document.getElementById("footer__copy");

ar.addEventListener("click", () => {
  setLanguage("arabic");
  localStorage.setItem("Lang", "arabic");
});

en.addEventListener("click", () => {
  setLanguage("english");
  localStorage.setItem("Lang", "english");
});

onload = () => {
  setLanguage(localStorage.getItem("Lang"));
};

function setLanguage(getLanguage) {
  if (getLanguage === "arabic") {
    body.style.direction = "rtl";
    Mission__data.style.direction = "ltr";

    // header
    menu__home.innerHTML = ArData.header.menu__home;
    menu__about.innerHTML = ArData.header.menu__about;
    menu__ourGroup.innerHTML = ArData.header.menu__ourGroup;
    menu__chairman.innerHTML = ArData.header.menu__chairman;
    menu__mission.innerHTML = ArData.header.menu__mission;
    menu__vision.innerHTML = ArData.header.menu__vision;
    menu__services.innerHTML = ArData.header.menu__services;
    menu__ourOffices.innerHTML = ArData.header.menu__ourOffices;
    menu__news.innerHTML = ArData.header.menu__news;
    menu__job.innerHTML = ArData.header.menu__job;
    menu__contact.innerHTML = ArData.header.menu__contact;
    menu__lang.innerHTML = ArData.header.menu__lang;

    // Previous Projects
    about__title.innerHTML = ArData.previous.about__title;
    about__description1.innerHTML = ArData.previous.about__description1;
    about__description2.innerHTML = ArData.previous.about__description2;
    about__description3.innerHTML = ArData.previous.about__description3;
    about__description4.innerHTML = ArData.previous.about__description4;
    about__description5.innerHTML = ArData.previous.about__description5;
    about__description6.innerHTML = ArData.previous.about__description6;
    about__description7.innerHTML = ArData.previous.about__description7;
    about__description8.innerHTML = ArData.previous.about__description8;

    // footer
    footer__title.innerHTML = ArData.footer.footer__title;
    footer__description.innerHTML = ArData.footer.footer__description;
    footer__subtitle1.innerHTML = ArData.footer.footer__subtitle1;
    footer__link1.innerHTML = ArData.footer.footer__link1;
    footer__link2.innerHTML = ArData.footer.footer__link2;
    footer__subtitle2.innerHTML = ArData.footer.footer__subtitle2;
    footer__link3.innerHTML = ArData.footer.footer__link3;
    footer__link4.innerHTML = ArData.footer.footer__link4;
    footer__subtitle3.innerHTML = ArData.footer.footer__subtitle3;
    footer__link5.innerHTML = ArData.footer.footer__link5;
    footer__link6.innerHTML = ArData.footer.footer__link6;
    footer__link7.innerHTML = ArData.footer.footer__link7;
    footer__copy.innerHTML = ArData.footer.footer__copy;
  } else if (getLanguage === "english") {
    body.style.direction = "ltr";
    Mission__data.style.direction = "rtl";

    // header
    menu__home.innerHTML = "Home";
    menu__about.innerHTML = "About Us";
    menu__ourGroup.innerHTML = "Our Group";
    menu__chairman.innerHTML = "Previous projects";
    menu__mission.innerHTML = "our mission";
    menu__vision.innerHTML = "our Vision";
    menu__services.innerHTML = "Our Services";
    menu__ourOffices.innerHTML = "Our Offices";
    menu__news.innerHTML = "News";
    menu__job.innerHTML = "Job";
    menu__contact.innerHTML = "Contact Us";
    menu__lang.innerHTML = "The Language";

    // Previous Projects
    about__title.innerHTML = "Previous projects";
    about__description1.innerHTML =
      "Unified Security Forces Center in Medina 911<br />";
    about__description2.innerHTML =
      "Traffic safety project<br />";
    about__description3.innerHTML =
      "Completion of Ali bin Abi Talib Road in Medina (asphalt and sidewalks)<br />";
    about__description4.innerHTML =
      "Completing the implementation of the Suwaydra municipality <br />";
    about__description5.innerHTML = "Pictures of our Projects <br />";
    about__description6.innerHTML = "Pictures of our Projects <br />";
    about__description7.innerHTML = "Pictures of our Projects <br />";
    about__description8.innerHTML = "Pictures of our Projects <br />";

    // footer
    footer__title.innerHTML = "Special Power";
    footer__description.innerHTML = "We make your dreams come true";
    footer__subtitle1.innerHTML = "About";
    footer__link1.innerHTML = "Services";
    footer__link2.innerHTML = "Our Mission";
    footer__subtitle2.innerHTML = "Company";
    footer__link3.innerHTML = "Previous Projects";
    footer__link4.innerHTML = "Our Group";
    footer__subtitle3.innerHTML = "Support";
    footer__link5.innerHTML = "FAQs";
    footer__link6.innerHTML = "Our Offices";
    footer__link7.innerHTML = "Contact Us";
    footer__copy.innerHTML = "&#169; 2023 Special Power. All rigths reserved.";
  }
}
