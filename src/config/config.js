// src/config.js

const config = {
  // Thông tin Meta
  meta: {
    title: "Đám Cưới Tuấn & Sương",
    description: "Chúng tôi sắp kết hôn và rất mong muốn bạn có mặt để cùng chúng tôi chúc mừng ngày đặc biệt này.",
    ogImage: "/images/og-image.jpg",
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Tuấn",
    brideName: "Sương",
  },

  // Thông tin sự kiện
  event: {
    date: "2025-3-15",
    time: "16:22",
    timezone: "Giờ",
    dateTime: "2025-3-15", // Định dạng ISO 8601
    name: "Nhà trai",
    address: "P. Văn Hội, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
    time: "16:16 - 17:30 Giờ",
    phone: "+62 123 4567 890",
    maps_url: "https://maps.google.com/?q=YourVenueLocation",
    maps_embed: "https://www.google.com/maps/embed?pb=your-map-embed-url",
    latitude: -6.2088, // Thay bằng tọa độ thực tế
    longitude: 106.8456 // Thay bằng tọa độ thực tế
  },

  eventDetails: [{
    title: "Nhà trai",
    date: "2025-3-15",
    startTime: "16:16",
    endTime: "17:30",
    timeZone: "Asia/Jakarta",
    location: "P. Văn Hội, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
    description: "Chúng tôi mời bạn đến tham dự và chúc mừng lễ cưới của chúng tôi."
  }, {
    title: "Nhà gái",
    date: "2025-3-15",
    startTime: "16:16",
    endTime: "17:30",
    timeZone: "Asia/Jakarta",
    location: "P. Văn Hội, Đông Ngạc, Bắc Từ Liêm, Hà Nội, Việt Nam",
    description: "Chúng tôi mời bạn đến tham dự và chúc mừng lễ cưới của chúng tôi."
  }],

  audio: {
    src: "/audio/backsound.mp3",
    title: "Giai Điệu Đầy Hy Vọng",
    artist: "Nasheed",
    autoplay: true,
    loop: true,
    toastDuration: 5000,
    pauseOnInactive: true,
    resumeOnReturn: true,
  },

  bankAccounts: [
    {
      bank: 'Ngân Hàng BIDV',
      accountNumber: '1234567890',
      accountName: 'FULAN',
      logo: '/path/to/bca-logo.png'
    },
    {
      bank: 'Ngân Hàng BIDV',
      accountNumber: '0987654321',
      accountName: 'FULANA',
      logo: '/path/to/mandiri-logo.png'
    }
  ],
  qris: {
    image: "https://ypp.co.id/site/uploads/qris/5f7c6da47a380-qr-code-dana.jpg"
  }
};

export default config;
