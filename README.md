# Responsive Image Gallery with Map

This project is a simple and responsive image gallery with an integrated interactive map using [Leaflet.js](https://leafletjs.com/). It showcases a clean layout with images and a map centered on Riga, Latvia.

## 📸 Features

- Responsive image gallery layout using **Flexbox**
- Lightweight, mobile-friendly design with **Bootstrap 5**
- Interactive map powered by **Leaflet.js** and **OpenStreetMap**
- Centered view of **Riga, Latvia** with a popup marker
- Fully responsive and accessible design

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Bootstrap 5](https://getbootstrap.com/)
- [Leaflet.js](https://leafletjs.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)

## 📂 Folder Structure

```
Responsive_Image/
├── css/
│   └── style.css           # Vietnes stila fails
├── js/
│   └── script.js        # Funkcijas priekš kartes
├── .gitignore              # Nevēlamo datņu ignorēšana
├── index.html              # Vietnes galvenais HTML
└── README.md               # Dokumentācija
```

## 📍 Map Information

The map is initialized with the following properties:

- **Location:** Riga, Latvia
- **Coordinates:** `56.9496° N, 24.1052° E`
- **Zoom Level:** 13
- A marker with a popup indicating "Riga, Latvia"

## 🖼️ Gallery Layout

Each image is displayed inside a styled container with a fixed width and height, and uses `object-fit: cover` to maintain aspect ratio without distortion.
