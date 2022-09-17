let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Last Updated: ${modifyDate}`;

const copyright = document.querySelector('#copyright-year');
const today = new Date();
let currentYear = today.getFullYear();
copyright.textContent = `${currentYear}`;