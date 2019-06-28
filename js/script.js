"use strict";

let moncontenu = document.getElementById("contenu");


// fetch('./texte.txt').then( (response) => {
//     response.text().then( (data) => moncontenu.innerHTML = data)
// });

fetch('./data.json').then( (response) => {
    response.json().then( (data) => {
        console.log(data);
        let html = "<ul>";
        for (let item of data) {
            console.log(item);
            html += "<li>" + item.nom + " " + item.prenom + "</li>";
        }
        html += "</ul>";
        moncontenu.innerHTML = html;
    })
});
