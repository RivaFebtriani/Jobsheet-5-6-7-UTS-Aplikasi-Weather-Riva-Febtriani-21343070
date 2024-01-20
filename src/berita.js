// document.addEventListener("DOMContentLoaded", function() {
//     const searchInput = document.getElementById("search-input");
//     const searchButton = document.getElementById("search-button");
//     const newsContainer = document.getElementById("news-container");

//     // Fungsi untuk menambahkan berita ke halaman
//     function addNewsToPage(news, container) {
//         const newsItem = document.createElement("div");
//         newsItem.className = "news-item";
//         newsItem.innerHTML = `
//             <img src="${news.image}" alt="${news.title}">
//             <h3>${news.title}</h3>
//             <p>${news.description}</p>
//             <a href="${news.url}" target="_blank">Baca lebih lanjut</a>
//         `;
//         container.appendChild(newsItem);
//     }

//     // Fungsi untuk mengambil dan menampilkan beberapa berita saat halaman dimuat
//     function loadInitialNews() {
//         const apiKey = "6735910fcc65a2e59672800b905b361d        "; // Gantilah dengan kunci API Anda
//         const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&limit=6`; // Mengambil 6 berita pertama

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 const newsData = data.data;
//                 newsData.forEach(news => {
//                     addNewsToPage(news, newsContainer);
//                 });
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 newsContainer.innerHTML = "Gagal mengambil berita.";
//             });
//     }

//     // Panggil fungsi untuk memuat beberapa berita saat halaman dimuat
//     loadInitialNews();

//     searchButton.addEventListener("click", function () {
//         // Hapus konten berita yang ada sebelumnya
//         newsContainer.innerHTML = "";

//         const query = searchInput.value;

//         // Gantilah URL dan metode pengambilan data sesuai dengan API atau sumber data berita yang Anda gunakan
//         const apiKey = "6735910fcc65a2e59672800b905b361d        "; // Gantilah dengan kunci API Anda
//         const apiUrl = `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${query}`;

//         fetch(apiUrl)
//             .then(response => response.json())
//             .then(data => {
//                 const newsData = data.data;
//                 newsData.forEach(news => {
//                     addNewsToPage(news, newsContainer);
//                 });
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//                 newsContainer.innerHTML = "Gagal mengambil berita.";
//             });
//     });
// });