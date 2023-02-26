"use strict";

function changeToSpanish() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "Contenido en Español (Content in Spansih)";
  myTitle.innerHTML = "Titulo en Español (Title in Spanish)";
  event.preventDefault();
}

function changeToEnglish() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "Content in English";
  myTitle.innerHTML = "Title in English";
  event.preventDefault();
}

function changeToDari() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "محتوا در دری  (Content in Dari)";
  myTitle.innerHTML = " (عنوان دری Title to Dari)";
  event.preventDefault();
}

function changeToPashto() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "مواد په پښتو ژبه (Content in Pashto)";
  myTitle.innerHTML = "سرلیک په پښتو ژبه (Title in Pashto)";
  event.preventDefault();
}

function changeToHindi() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "हिंदी में सामग्री (Content in Hindi)";
  myTitle.innerHTML = "हिंदी में शीर्षक (Title in Hindi)";
  event.preventDefault();
}

function changeToUrdu() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "اردو میں مواد (Content in Urdu)";
  myTitle.innerHTML = "اردو میں عنوان  (Title in Urdu)";
  event.preventDefault();
}

function changeToFarsi() {
  // Get the paragraph element by its ID
  let paragraph = document.getElementById("introduction");
  let myTitle = document.getElementById("title");
  // Change the content of the paragraph
  paragraph.innerHTML = "مطالب به زبان فارسی   Content in Farsi";
  myTitle.innerHTML = "عنوان به فارسی  Title in Farsi";
  event.preventDefault();
}
