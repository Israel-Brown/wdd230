// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Set the current year in the footer's first paragraph
const copyrightYear = document.querySelector('footer p:nth-of-type(1)');
copyrightYear.innerHTML = `&copy; ${currentYear} Your Name. Your Country or State`; // Replace with your actual name and country/state

// Set the last modified date in the footer's second paragraph
const lastModifiedDate = document.querySelector('#lastModified');
lastModifiedDate.textContent = `Last Modified: ${lastModified}`;
