const portofolioKegiatan = [
  {
    judul: 'IMUN Online Conference',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2023',
    warna: 'secondary',
    status: 'Belum Diajukan',
    tautan: null
  },
  {
    judul: 'Intrepreneurship Seminar',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2023',
    warna: 'warning',
    status: 'Revisi',
    tautan: '#detail-portofolio-kegiatan-revisi'
  },
  {
    judul: 'Schematics ITS 2023',
    jenis: 'Kepanitiaan',
    lokasi: 'Kota Surabaya',
    tahun: '2023',
    warna: 'info',
    status: 'Menunggu Verifikasi',
    tautan: null
  },
  {
    judul: 'Hammer Talk Volume 3',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2023',
    warna: 'info',
    status: 'Menunggu Verifikasi',
    tautan: null
  },
  {
    judul: 'Webinar Gundala 1.0',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2023',
    warna: 'info',
    status: 'Menunggu Verifikasi',
    tautan: null
  },
  {
    judul: 'LeadTalk and JobFair 2022',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2022',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'SONITS 2022',
    jenis: 'Seminar',
    lokasi: 'Kota Surabaya',
    tahun: '2022',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Kompetisi UI Design',
    jenis: 'Kegiatan Lainnya',
    lokasi: 'Online',
    tahun: '2022',
    warna: 'danger',
    status: 'Ditolak',
    tautan: '#detail-portofolio-kegiatan-ditolak'
  },
  {
    judul: 'YLO Festival 2022',
    jenis: 'Kepanitiaan',
    lokasi: 'Kota Pekanbaru',
    tahun: '2022',
    warna: 'danger',
    status: 'Ditolak',
    tautan: null
  },
  {
    judul: 'Webinar Nasional',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2021',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Seminar NST 2021',
    jenis: 'Seminar',
    lokasi: 'Kota Surabaya',
    tahun: '2021',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Schematics REEVA 2021',
    jenis: 'Kepanitiaan',
    lokasi: 'Kota Surabaya',
    tahun: '2021',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Webinar GM MUN 8',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2020',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Workshop Digital Marketing',
    jenis: 'Seminar',
    lokasi: 'Online',
    tahun: '2020',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
  {
    judul: 'Schematics ITS 2020',
    jenis: 'Kepanitiaan',
    lokasi: 'Kota Surabaya',
    tahun: '2020',
    warna: 'success',
    status: 'Disetujui',
    tautan: null
  },
]

const jadwalSkim = [
  {
    judul: 'ITS Youth Technopreneur 2023',
    mulai: '20 Feb 2023',
    selesai: '27 Mei 2023',
    tautan: '#informasi-skim'
  },
  {
    judul: 'Inovasi Wirausaha Digital Mahasiswa (IWDM2022)',
    mulai: '16 Aug 2022',
    selesai: '21 Sep 2022',
    tautan: null
  },
  {
    judul: 'Program Pembinaan Mahasiswa Wirausaha',
    mulai: '20 Feb 2023',
    selesai: '27 Mei 2023',
    tautan: null
  },
  {
    judul: 'ITS Youth Technopreneur 2023',
    mulai: '20 Feb 2023',
    selesai: '27 Mei 2023',
    tautan: null
  },
  {
    judul: 'ITS Youth Technopreneur 2023',
    mulai: '20 Feb 2023',
    selesai: '27 Mei 2023',
    tautan: null
  },
]

let headerData = {
  title: "Judul Situs"
};

let footerData = {
  year: new Date().getFullYear()
};

function renderPage(pagePath, data) {
  fetch(pagePath)
      .then((response) => response.text())
      .then((pageContent) => {
          var template = Handlebars.compile(pageContent);
          var result = template(data);
          document.getElementById("content").innerHTML = result;

          initPage();
      })
      .catch((error) => {
          console.error('Gagal memuat halaman:', error);
      });
}

fetch('layouts/header.html')
  .then((response) => response.text())
  .then((headerContent) => {
      let headerTemplate = Handlebars.compile(headerContent);
      let headerResult = headerTemplate(headerData);
      document.getElementById("header").innerHTML = headerResult;

      fetch('layouts/footer.html')
          .then((response) => response.text())
          .then((footerContent) => {
              let footerTemplate = Handlebars.compile(footerContent);
              let footerResult = footerTemplate(footerData);
              document.getElementById("footer").innerHTML = footerResult;

              renderPage('pages/beranda.html', { title: 'Beranda' });
              // renderPage('pages/detail-kompetisi.html', { title: 'Beranda', jadwalSkim, portofolioKegiatan });
          })
          .catch((error) => {
              console.error('Gagal memuat footer:', error);
          });
  })
  .catch((error) => {
      console.error('Gagal memuat header:', error);
  });

function initPage() {
  window.scrollTo({ top: 0, behavior: 'instant' });
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
      renderPage('pages/' + pageName + '.html', { 
        title: pageName,
        portofolioKegiatan,
        jadwalSkim
      });
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

  // Fungsi untuk menampilkan atau menyembunyikan item berdasarkan status
  function filterItems(status) {
    const items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        if (status === "Semua" || items[i].getAttribute("data-status") === status) {
            items[i].classList.remove("d-none");
        } else {
            items[i].classList.add("d-none");
        }
    }
  }

  // Event listener untuk tombol filter
  const filterButtons = document.getElementsByClassName("filter-btn");
  for (let i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener("click", function() {
          const statusFilter = this.getAttribute("data-status");
          filterItems(statusFilter);
      });
  }

}


