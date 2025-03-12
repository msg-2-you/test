// script.js

let currentScreen = 1;

function nextScreen(screen) {
    // Oculta a tela atual
    document.getElementById(`tela${currentScreen}`).style.display = 'none';
    // Exibe a próxima tela
    document.getElementById(`tela${screen}`).style.display = 'block';
    // Atualiza a tela atual
    currentScreen = screen;
}

// Exibe a primeira tela
document.getElementById("tela1").style.display = 'block';

function checkAnswer(isCorrect) {
    // Exibe a tela de feedback
    if (isCorrect) {
        document.getElementById("feedback").textContent = "Resposta Correta!";
        document.getElementById("feedback").style.color = "green";
        setTimeout(() => nextScreen(4), 2000); // Vai para a tela de Feliz Aniversário após 2 segundos
    } else {
        document.getElementById("feedback").textContent = "Resposta Errada! Tente novamente.";
        document.getElementById("feedback").style.color = "red";
    }
}
