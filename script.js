var palabras = ["javascript", "programacion", "desafiante", "html", "anagrama"];
var palabraSecreta = '';
var anagrama = '';
var currentIndex = 0;

function shuffleWord(word) {
    return word.split('').sort(function(){return 0.5-Math.random()}).join('');
}

function getNextAnagram() {
    if (currentIndex >= palabras.length) {
        currentIndex = 0; // Reiniciar al principio si se alcanza el final de la lista
    }

    palabraSecreta = palabras[currentIndex];
    anagrama = shuffleWord(palabraSecreta);
    document.getElementById('anagramText').innerHTML = `<span style="color: red; font-weight: bold;">${anagrama}</span>`;
}

function initGame() {
    getNextAnagram();
}

function checkAnagram() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    var resultElement = document.getElementById('result');
    var faceElement = document.getElementById('face');

    if (userInput === palabraSecreta) {
        resultElement.textContent = '¡Correcto! Has resuelto el anagrama.';
        resultElement.className = 'correct';
        faceElement.innerHTML = '😊';
    } else {
        resultElement.textContent = 'Incorrecto. Sigue intentando.';
        resultElement.className = 'incorrect';
        faceElement.innerHTML = '😢';
    }
}

function nextAnagram() {
    currentIndex++;
    getNextAnagram();
    document.getElementById('userInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('face').textContent = '';
}

function retryAnagram() {
    getNextAnagram();
    document.getElementById('userInput').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('face').textContent = '';
}

// Inicializa el juego cuando se carga la página
initGame();
