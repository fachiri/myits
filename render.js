// Import library Handlebars jika belum melakukannya

// Fungsi untuk memuat konten halaman dari file dan menggabungkannya dengan template
function renderPage(pagePath, data) {
  fetch(pagePath)
      .then((response) => response.text())
      .then((pageContent) => {
          // Compile template halaman menjadi fungsi
          var template = Handlebars.compile(pageContent);
          // Render template halaman dengan data yang diberikan
          var result = template(data);
          // Tempelkan hasil rendering halaman ke dalam elemen dengan ID "content"
          document.getElementById("content").innerHTML = result;
          // Panggil fungsi initPage() untuk menginisialisasi JavaScript di halaman baru
          initPage();
      })
      .catch((error) => {
          console.error('Gagal memuat halaman:', error);
      });
}

// Data yang akan diisi ke dalam template header dan footer
var headerData = {
  title: "Judul Situs"
};

var footerData = {
  year: new Date().getFullYear()
};

// Render header dan footer
fetch('layouts/header.html')
  .then((response) => response.text())
  .then((headerContent) => {
      var headerTemplate = Handlebars.compile(headerContent);
      var headerResult = headerTemplate(headerData);
      document.getElementById("header").innerHTML = headerResult;

      // Render footer setelah header selesai
      fetch('layouts/footer.html')
          .then((response) => response.text())
          .then((footerContent) => {
              var footerTemplate = Handlebars.compile(footerContent);
              var footerResult = footerTemplate(footerData);
              document.getElementById("footer").innerHTML = footerResult;

              // Setelah header dan footer selesai, render halaman pertama di folder 'pages'
              renderPage('pages/beranda.html', { title: 'Beranda' });
          })
          .catch((error) => {
              console.error('Gagal memuat footer:', error);
          });
  })
  .catch((error) => {
      console.error('Gagal memuat header:', error);
  });

function initPage() {
  // Event listener untuk menangani navigasi
  const navBtns = document.querySelectorAll('.navBtn')
  navBtns.forEach(function(navBtn) {
    navBtn.addEventListener('click', function(event) {
      let target = event.target;
      if(!target.getAttribute('href')) {
        target = target.parentNode
      }
      event.preventDefault(); // Mencegah perilaku default
      // Ambil nama halaman dari atribut href
      const pageName = target.getAttribute('href').slice(1);
      
      // Render halaman yang sesuai
      renderPage('pages/' + pageName + '.html', { title: pageName });
    });
  })

  // Fungsi untuk memuat JavaScript eksternal
  function loadScript(src, callback) {
    var scriptElement = document.createElement('script');
    scriptElement.src = src;
    scriptElement.onload = callback;
    document.body.appendChild(scriptElement);
  }

  // Memuat assets/app.js
  loadScript('assets/app.js', function () {
      // Callback ini akan dipanggil setelah assets/app.js selesai dimuat
      // Di sinilah Anda bisa menggunakan kode dari assets/app.js atau melakukan inisialisasi yang diperlukan.
      // Pastikan kode dari assets/app.js telah terikat pada elemen-elemen yang ada di halaman.
  });

  // Memuat assets/perfect-scrollbar.min.js
  loadScript('assets/perfect-scrollbar.min.js', function () {
      // Callback ini akan dipanggil setelah assets/perfect-scrollbar.min.js selesai dimuat
      // Di sinilah Anda bisa menggunakan kode dari assets/perfect-scrollbar.min.js atau melakukan inisialisasi yang diperlukan.
      // Pastikan kode dari assets/perfect-scrollbar.min.js telah terikat pada elemen-elemen yang ada di halaman.
  });

  // custom js

  const buttons = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Menghapus kelas 'active' dari semua tombol
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });

      // Menambahkan kelas 'active' ke tombol yang diklik
      button.classList.add('active');

      // Menampilkan konten yang sesuai dan menyembunyikan yang lainnya
      const targetContentId = button.id.replace('tab', 'content');
      contents.forEach((content) => {
        if (content.id === targetContentId) {
          content.classList.remove('d-none');
        } else {
          content.classList.add('d-none');
        }
      });
    });
  });
}


