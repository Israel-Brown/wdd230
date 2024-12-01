// JavaScript to dynamically output the current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;