"use strict";

let currentLanguage = "English";

function changeToSpanish() {
  currentLanguage = "mainPageSpanish";
  displayScreen(mainPageSpanish);
}

function changeToEnglish() {
  currentLanguage = "mainPageEnlgish";
  displayScreen(mainPageEnglish);
}

function changeToDari() {
  currentLanguage = "mainPageDari";
  displayScreen(mainPageDari);
}

function changeToPashto() {
  currentLanguage = "mainPagePashto";
  displayScreen(mainPagePashto);
}

function changeToHindi() {
  currentLanguage = "mainPageHindi";
  displayScreen(mainPageHindi);
}

function changeToUrdu() {
  currentLanguage = "mainPageUrdu";
  displayScreen(mainPAgeUrdu);
}

function changeToFarsi() {
  currentLanguage = "mainPAgeFarsi";
  displayScreen(mainPageFarsi);
}

function displayScreen(currentLanguage) {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  let myHeader = document.getElementById("mainHeader");
  let myFooter = document.getElementById("mainFooter");
  // Change the content of the paragraph
  paragraph.innerHTML = currentLanguage.content;
  myTitle.innerHTML = currentLanguage.title;
  myHeader.innerHTML = currentLanguage.header;
  myFooter.innerHTML = currentLanguage.footer;
  event.preventDefault();
}

// Object that contains the elements of the main page in Spanish
const mainPageSpanish = {
  content: "Contenido en Español (Content in Spanish)",
  title: "Titulo en Español (Title in Spanish)",
  header: "Encabezado en Español Header in Spanish",
  footer: "Footer in Spanish",
};

// Object that contains the elements of the main page in English
const mainPageEnglish = {
  content: "Content in English",
  title: "Title in English",
  header: "Header in English",
  footer: "Footer in English",
};

// Object that contains the elements of the main page in Dari
const mainPageDari = {
  content: "محتوا در دری  (Content in Dari)",
  title: " (عنوان دری Title to Dari)",
  header: "Header in Dari",
  footer: "Footer in Dari",
};

// Object that contains the elements of the main page in Pashto
const mainPagePashto = {
  content: "مواد په پښتو ژبه (Content in Pashto)",
  title: "سرلیک په پښتو ژبه (Title in Pashto)",
  header: "Header in Pashto",
  footer: "Footer in Pashto",
};

// Object that contains the elements of the main page in Hindi
const mainPageHindi = {
  content: "हिंदी में सामग्री (Content in Hindi)",
  title: "हिंदी में शीर्षक (Title in Hindi)",
  header: "Header in Hindi",
  footer: "Footer in Hindi",
};

// Object that contains the elements of the main page in Urdu
const mainPAgeUrdu = {
  content: "اردو میں مواد (Content in Urdu)",
  title: "اردو میں عنوان  (Title in Urdu)",
  header: "Header in Urdu",
  footer: "Footer in Urdu",
};

// Object that contains the elements of the main page in Farsi
const mainPageFarsi = {
  content: "مطالب به زبان فارسی   (Content in Farsi)",
  title: "عنوان به فارسی  (Title in Farsi)",
  header: "Header in Farsi",
  footer: "Footer in Farsi",
};
