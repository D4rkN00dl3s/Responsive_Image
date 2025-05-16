const map = L.map('map').setView([56.9496, 24.1052], 13); // Riga, Latvia

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

L.marker([56.9496, 24.1052]).addTo(map)
  .bindPopup('Riga, Latvia')
  .openPopup();