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
  OurOffices: {
    section__title: "مكاتبنا",
    OurOffice__title1: "المكتب جدة -شركة الطاقة المميز.",
    OurOffice__description1:
      "3427 طريق الملك عبدالله ,, <br > ص.ب 22231, <br > المملكة العربية السعودية",
    OurOffice__title2: ".مكتب-المدينة المنورة شركة الطاقة المميزة",
    OurOffice__description2:
      "7630 طريق الملك عبدالله، <br > المدينة المنورة, <br > المملكة العربية السعودية",
  },
};

// Base
let body = document.getElementById("body");
let ar = document.getElementById("ar");
let en = document.getElementById("en");

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

// OurOffices
let section__title = document.getElementById("section__title");
let OurOffice__title1 = document.getElementById("OurOffice__title1");
let OurOffice__description1 = document.getElementById(
  "OurOffice__description1"
);
let OurOffice__title2 = document.getElementById("OurOffice__title2");
let OurOffice__description2 = document.getElementById(
  "OurOffice__description2"
);

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

    // OurOffices
    section__title.innerHTML = ArData.OurOffices.section__title;
    OurOffice__title1.innerHTML = ArData.OurOffices.OurOffice__title1;
    OurOffice__description1.innerHTML =
      ArData.OurOffices.OurOffice__description1;
    OurOffice__title2.innerHTML = ArData.OurOffices.OurOffice__title2;
    OurOffice__description2.innerHTML =
      ArData.OurOffices.OurOffice__description2;

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

    // OurOffices
    section__title.innerHTML = "Our Offices";
    OurOffice__title1.innerHTML = "Office-Jeddah Special Power Co.";
    OurOffice__description1.innerHTML =
      "3427 king abdullah RD,<br /> P.O.BOX 22231,<br /> Kingdom of Saudi Arabia";
    OurOffice__title2.innerHTML = "Office-Medina Special Power Co.";
    OurOffice__description2.innerHTML =
      "7630 king abdullah RD,<br /> Al-Madinah al-Munawwarah,<br /> Kingdom of Saudi Arabia<br />";

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
