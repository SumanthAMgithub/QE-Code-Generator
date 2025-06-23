const qrText = document.getElementById('qrText');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrCodeContainer = document.getElementById('qrcode');

let qr;

generateBtn.addEventListener('click', () => {
  const text = qrText.value.trim();

  if (!text) {
    alert('Please enter text or URL!');
    return;
  }

  // Clear old QR
  qrCodeContainer.innerHTML = '';

  // Generate new QR
  qr = new QRCode(qrCodeContainer, {
    text: text,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Show download button
  setTimeout(() => {
    downloadBtn.style.display = 'inline-block';
  }, 500);
});

// Download QR Code
downloadBtn.addEventListener('click', () => {
  const img = qrCodeContainer.querySelector('img');
  if (img) {
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'qr_code.png';
    link.click();
  }
});
