const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('D:/SERVER/WAMP/www/development/rangpurseba/HTML/market.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously' });
setTimeout(function() {
    var doc = dom.window.document;
    var eventScroll = doc.getElementById('eventScroll');
    console.log('eventScroll found:', !!eventScroll);
    if (eventScroll) {
        console.log('Children:', eventScroll.children.length);
        if (eventScroll.children.length > 0) {
            console.log('First card HTML:', eventScroll.children[0].outerHTML.substring(0, 300));
        } else {
            console.log('HTML:', eventScroll.innerHTML.substring(0, 200));
        }
    } else {
        // Try querySelector
        console.log('All divs with eventScroll id:', doc.querySelectorAll('#eventScroll').length);
    }
    console.log('---');
    var emergencyScroll = doc.getElementById('emergencyScroll');
    console.log('emergencyScroll found:', !!emergencyScroll);
    if (emergencyScroll) console.log('Emergency children:', emergencyScroll.children.length);
    process.exit(0);
}, 3000);
