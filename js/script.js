// نسخ ال account number
function copyCode() {
    var accountNumber = document.getElementById('accountNumber');

    var textArea = document.createElement('textarea');
    textArea.value = accountNumber.innerText;

    document.body.appendChild(textArea);

    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);

    alert('تم نسخ النص: ' + textArea.value);
}
