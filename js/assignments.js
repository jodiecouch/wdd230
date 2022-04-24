//This isn't formatted friendly let modifyDate = new Date(document.lastModified);
//This is one way to do it let modifyDate = new Date(document.lastModified).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"2-digit"}); 
let modifyDate = new Date(document.lastModified).toLocaleString();
const dateModified = document.querySelector('#last-update');
dateModified.textContent = `Last Updated: ${modifyDate}`;

const copyright = document.querySelector('#copyright-year');
const today = new Date();
let currentYear = today.getFullYear();
copyright.textContent=`${currentYear}`;
