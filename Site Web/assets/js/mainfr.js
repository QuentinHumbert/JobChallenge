let slide = new Array("./assets/images/thaumiel.jpg", "./assets/images/military.jpg", "./assets/images/weapon.jpg", "./assets/images/dodge.jpg", "./assets/images/timeslow.gif");
let slidealt = new Array("Classe SCP: Thaumiel", "Passé: Antécédents militaires", "Anomalies: Guncasting & Reserve de Munitions infinies", "Anomalies: Ciblage Parfait and Esquive de balles", "Anomalies: Audition parfaite and Manipulation de la perception du time");
let slidecaption = new Array("Classe SCP: Thaumiel", "Passé: Antécédents militaires", "Anomalies: Guncasting & Reserve de Munitions infinies", "Anomalies: Ciblage Parfait and Esquive de balles", "Anomalies: Audition parfaite and Manipulation de la perception du time");
let number = 0;
let numberalt = 0;
let numbercap = 0;

function ChangeSlide(position) {
    number += position;
    if (number < 0)
        number = slide.length - 1;
    if (number > slide.length - 1)
        number = 0;
    document.getElementById("slide").src = slide[number];

    numberalt += position;
    if (numberalt < 0)
        numberalt = slide.length - 1;
    if (numberalt > slide.length - 1)
        numberalt = 0;
    document.getElementById("slide").alt = slidealt[number];

    numbercap += position;
    if (numbercap < 0)
        numbercap = slide.length - 1;
    if (numbercap > slide.length - 1)
        numbercap = 0;
    document.getElementById("slidecaption").textContent = slidecaption[number];
}