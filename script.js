document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encrypt(inputText);
    displayMessage(encryptedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decrypt(inputText);
    displayMessage(decryptedText);
});

function encrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return result;
}

function decrypt(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        result += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return result;
}

function displayMessage(message) {
    const outputMessage = document.getElementById('outputMessage');
    if (message.trim() === '') {
        outputMessage.textContent = 'Ningún mensaje fue encontrado';
    } else {
        outputMessage.textContent = message;
    }
}
