# Shimmer-Effect

#  Ghost.js (Adaptive Skeleton Loader)

> A lightweight, zero-dependency JavaScript library that automatically converts any website layout into a modern **Skeleton Loading Screen**.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Animations-blue?style=for-the-badge&logo=css3)
![Size](https://img.shields.io/badge/Size-2KB-green?style=for-the-badge)

**Ghost.js**, web sayfanızın DOM yapısını otomatik olarak tarar, görselleri, metinleri ve butonları algılar ve internet hızı ne olursa olsun kullanıcıya pürüzsüz bir **Shimmer (Parıltı) Efekti** sunar.

---

## 🚀 Features (Özellikler)

*   **⚡ Plug & Play:** Sadece script dosyasını ekleyin, konfigürasyon gerekmez.
*   **🧠 Smart Element Detection:**
    *   `<img>`, `<video>`, `<svg>` etiketlerini algılar ve oranlarını koruyarak gri kutulara çevirir.
    *   `<button>`, `<input>` ve `.btn` sınıflı linkleri algılar, kenarlıklarını temizler ve buton formunu korur.
    *   Metin bloklarını (`h1`, `p`, `span`) otomatik olarak satır satır iskelet yapıya dönüştürür.
*   **🎨 High Contrast UI:** Modern web standartlarına uygun, koyu gri tonlamalı ve yüksek görünürlüklü tasarım.
*   **🔒 Scroll Lock:** Yükleme sırasında sayfa kaydırmayı kilitler, yükleme bitince otomatik açar.
*   **🛡️ Glitch-Free:**
    *   Siyah kenarlıkları (borders) ve gölgeleri temizler.
    *   `placeholder` yazılarını gizler.
    *   Kayan yazıları (marquee/ticker) yükleme sırasında dondurur.
*   **⏱️ Smart Buffer:** Site tamamen yüklendikten (`window.onload`) sonra 1 saniyelik estetik bir geçiş süresi tanır.

---
*   Websitemizden örnek görseller;
<img width="1906" height="935" alt="resim" src="https://github.com/user-attachments/assets/0bb79747-0119-4e4b-adb7-109aefc4e0ca" />

<img width="1901" height="927" alt="resim" src="https://github.com/user-attachments/assets/c8e4ccb7-2d0e-4b7b-81e4-4c36086b9da1" />

---

## 📦 Installation (Kurulum)

Projeyi indirin ve `hayalet.js` dosyasını projenizin ana dizinine atın. Ardından HTML dosyanızın `<head>` etiketleri arasına şu satırı ekleyin:

```html
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
    
    <!-- CSS dosyalarınızdan SONRA, diğer scriptlerden ÖNCE ekleyin -->
    <script src="ghost.js"></script>
</head>
