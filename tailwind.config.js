/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      direction: {
        rtl: "rtl",
      },
      colors: {
        primary: "#003892",
        secondary: "#617d24",
        tertiary: "#fab30d",

      },
      backgroundImage: {
        'logo-img': "url('src/assets/Logo/logo2.jpg')",
        "hero-img": "url('src/assets/Hero/Handshake.jpg')",
        "work-model-img": "url('src/assets/WhatWeDo/workmodel.jpg')",
        "mission-img-1": "url('src/assets/Content/picture1.jpeg')",
        "mission-img-2": "url('src/assets/Content/picture2.jpeg')",
        "mission-img-3": "url('src/assets/Content/picture3.jpg')",
        "pic-miriam": "url('src/assets/Board/Miriam.jpg')",
        "pic-moti": "url('src/assets/Board/Moti.jpg')",
        "pic-anat": "url('src/assets/Board/Anat.jpg')",
        "pic-eti": "url('src/assets/Board/Eti.jpg')",
        "pic-hemi": "url('src/assets/Board/Hemi.jpg')",
        "pic-shlomit": "url('src/assets/Board/Shlomit.jpg')",
        "pic-shlomo": "url('src/assets/Board/Shlomo.jpg')",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "1rem",
        },
      },
    },
  },
  plugins: [],
};
