// JavaScript for getting dates
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Set the current year in the footer's first paragraph
const copyrightYear = document.querySelector('footer p:nth-of-type(1)');
copyrightYear.innerHTML = `&copy; ${currentYear} Israel Brown - Jamaica`; 

// Set the last modified date in the footer's second paragraph
const lastModifiedDate = document.querySelector('#lastModified');
lastModifiedDate.textContent = `Last Modified: ${lastModified}`;
