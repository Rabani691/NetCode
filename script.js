// Le pire générateur de memes au monde
var GLOBAL_VARIABLE_TRES_IMPORTANT = "🎉";
var IMAGES_MEME = {
    'doge': 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
    'cat': 'https://i.kym-cdn.com/entries/icons/original/000/009/471/GRUMPYCAT.jpg',
    'fine': 'https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpeg',
    'drake': 'https://i.kym-cdn.com/entries/icons/original/000/020/147/drake.jpg',
    'distracted': 'https://i.kym-cdn.com/entries/icons/original/000/017/299/DmbzJspWwAEprcQ.jpg',
    'disaster-girl': 'https://i.kym-cdn.com/entries/icons/original/000/000/043/disaster-girl.jpg',
    'success': 'https://i.kym-cdn.com/entries/icons/original/000/006/548/success.jpg',
    'aliens': 'https://i.kym-cdn.com/entries/icons/original/000/005/848/Aliens.jpg',
    'shut-up-money': 'https://i.kym-cdn.com/entries/icons/original/000/005/574/takemymoney.jpg',
    'one-does-not': 'https://i.kym-cdn.com/entries/icons/original/000/000/699/one-does-not-simply.jpg',
    'y-u-no': 'https://i.kym-cdn.com/entries/icons/original/000/004/006/y-u-no-guy.jpg'
};

var EFFETS_IMAGES = {
    'normal': '',
    'blur': 'blur(3px)',
    'hue-rotate': 'hue-rotate(90deg)',
    'invert': 'invert(100%)',
    'sepia': 'sepia(100%)',
    'saturate': 'saturate(200%)',
    'grayscale': 'grayscale(100%)'
};

// Une fonction beaucoup trop longue qui fait beaucoup trop de choses
function genererMeme() {
    // Change la couleur du fond aléatoirement parce que pourquoi pas
    document.body.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Récupère les textes avec des noms de variables pas du tout explicites
    var txtHt = document.getElementById('texte-haut').value || 'WOW';
    var txtBs = document.getElementById('texte-bas').value || 'SUCH MEME';
    
    // Sélectionne l'image avec une structure de données horrible
    var imgChoisie = IMAGES_MEME[document.getElementById('choix-image').value] || IMAGES_MEME['doge'];
    
    // Met à jour l'image de la pire façon possible
    var imgMeme = document.getElementById('meme-image');
    imgMeme.src = imgChoisie;
    imgMeme.onerror = function() {
        imgMeme.src = IMAGES_MEME['doge']; // Fallback avec Doge parce que Doge c'est la vie
        console.log("MUCH ERROR! SUCH FALLBACK!");
    };

    // Applique l'effet sélectionné
    var effet = document.getElementById('choix-effet').value;
    imgMeme.style.filter = EFFETS_IMAGES[effet];

    // Applique la rotation
    var rotation = document.getElementById('rotation').value;
    imgMeme.style.transform = 'rotate(' + rotation + 'deg)';

    // Met à jour les textes avec des effets inutiles
    setTimeout(function() { // Délai totalement inutile
        document.getElementById('texte-haut-meme').innerHTML = txtHt.toUpperCase() + ' ' + GLOBAL_VARIABLE_TRES_IMPORTANT;
        document.getElementById('texte-bas-meme').innerHTML = txtBs.toUpperCase() + ' ' + GLOBAL_VARIABLE_TRES_IMPORTANT;
    }, Math.random() * 1000);

    // Fait apparaître des emojis aléatoires
    var emojis = ["🎈", "🎉", "🎊", "🎪", "🎭", "🎨", "🎯", "🎲"];
    var nouveauDiv = document.createElement('div');
    nouveauDiv.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    nouveauDiv.style.position = 'absolute';
    nouveauDiv.style.left = Math.random() * window.innerWidth + 'px';
    nouveauDiv.style.top = Math.random() * window.innerHeight + 'px';
    nouveauDiv.style.fontSize = '50px';
    document.body.appendChild(nouveauDiv);

    // Joue un son horrible
    var audio = new Audio('data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA==');
    audio.play();

    // Fait apparaître un popup surprise
    var popup = document.getElementById('popup-surprise');
    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 2000);
}

// Suit le curseur avec une banane (parce que pourquoi pas)
document.addEventListener('mousemove', function(e) {
    var curseur = document.getElementById('curseur-troll');
    curseur.style.left = e.pageX + 'px';
    curseur.style.top = e.pageY + 'px';
});

// Change la taille du texte aléatoirement parce que c'est drôle
setInterval(function() {
    var textes = document.getElementsByClassName('meme-texte');
    for(var i = 0; i < textes.length; i++) {
        textes[i].style.fontSize = (20 + Math.random() * 30) + 'px';
    }
}, 1000);

// Easter egg très secret (pas du tout)
console.log("🎉 WOW! SUCH MEME! VERY GENERATE! 🎉");

// Bonus : fait vibrer l'image quand on passe la souris dessus
document.getElementById('meme-image').addEventListener('mouseover', function() {
    this.style.animation = 'danse 0.1s infinite';
});

document.getElementById('meme-image').addEventListener('mouseout', function() {
    this.style.animation = 'none';
});

// Fonction pour créer des confettis
function lancerConfetti() {
    for(var i = 0; i < 50; i++) {
        var confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = -20 + 'px';
        confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
        confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
        confetti.style.transition = 'all ' + (Math.random() * 2 + 1) + 's linear';
        document.body.appendChild(confetti);

        setTimeout(function(conf) {
            conf.style.top = window.innerHeight + 20 + 'px';
            setTimeout(function() {
                document.body.removeChild(conf);
            }, 2000);
        }, 50, confetti);
    }
}

// Fonction pour secouer toute la page
function shakerLaPage() {
    document.body.classList.add('shaking');
    setTimeout(function() {
        document.body.classList.remove('shaking');
    }, 1000);
}

// Événements pour les nouveaux boutons
document.getElementById('btn-confetti').addEventListener('click', lancerConfetti);
document.getElementById('btn-shake').addEventListener('click', shakerLaPage);

// Rotation en temps réel
document.getElementById('rotation').addEventListener('input', function() {
    var imgMeme = document.getElementById('meme-image');
    imgMeme.style.transform = 'rotate(' + this.value + 'deg)';
});
