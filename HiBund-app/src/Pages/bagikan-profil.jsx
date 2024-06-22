import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'react-qr-code';

function ShareProfile() {
  const username = '@Bima Karunia Fajar'; // Ganti dengan nama pengguna yang diambil dari autentikasi
  const profileUrl = `https://example.com/${username.replace('@', '')}`; // URL profil pengguna
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(profileUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const svgElement = qrRef.current.querySelector('svg');
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const imgURI = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = imgURI;
      a.download = `qr-code-${username.replace('@', '')}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
    img.src = url;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Bagikan Profil Anda</h2>
        <p className="text-gray-600">Tautan profil Anda: {username}</p>
      </div>
      <div ref={qrRef} className="flex justify-center mb-6">
        <QRCode value={profileUrl} size={150} />
      </div>
      <div className="flex justify-between items-center">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline truncate"
        >
          {profileUrl}
        </a>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCopy}
        >
          {copied ? 'Disalin!' : 'Salin Tautan'}
        </button>
      </div>
      <button
        className="mt-6 w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleDownload}
      >
        Unduh QR Code
      </button>
    </div>
  );
}

export default ShareProfile;
