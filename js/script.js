

function runTypingEffect(){
    const text = 'I am Faiz Qureshi'
    const typingElem = document.getElementById('typing-text');
    const typingDelay = 120;

    typeText(text, typingElem, typingDelay);
}

function typeText(text, typingElem, typingDelay){
    let count = 0
    for (let i in text) {
       setTimeout(() => { 
        typingElem.textContent +=  text.charAt(i)
       }, typingDelay * count);
       count++;
    }
}


document.addEventListener('DOMContentLoaded', runTypingEffect)

function redirectToStart() {
    // Check if the page is being reloaded
    const entries = performance.getEntriesByType("navigation");
    if (entries.length && entries[0].type === "reload") {
        // Replace 'index.html' with the URL or path of your start page
        window.location.href = 'index.html';
    }
}

// Call the function on page load
window.onload = redirectToStart;



