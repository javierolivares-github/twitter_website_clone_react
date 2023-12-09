/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-98": "hsla(200,81.8%,97.8%,1)",
        "primary-95": "hsla(205,84.6%,94.9%,1)",
        "primary-90": "hsla(205,88.2%,90%,1)",
        "primary-70": "hsla(205,86.9%,70%,1)",
        "primary-50": "hsla(205,87.5%,50%,1)",
        "primary-40": "hsla(205,87.3%,40%,1)",
        "primary-35": "hsla(205,87.7%,35.1%,1)",
        "secondary-98": "hsla(210,40%,98%,1)",
        "secondary-95": "hsla(204,38.5%,94.9%,1)",
        "secondary-50": "hsla(205,39.6%,50%,1)",
        "secondary-40": "hsla(205,40.2%,40%,1)",
        "secondary-25": "hsla(205,40.2%,24.9%,1)",
        "secondary-15": "hsla(205,40.3%,15.1%,1)",
        "gray-100": "hsla(0,0%,100%,1)",
        "gray-98": "hsla(0,0%,98%,1)",
        "gray-95": "hsla(0,0%,94.9%,1)",
        "gray-40": "hsla(0,0%,40%,1)",
        "gray-25": "hsla(0,0%,25.1%,1)",
        "transparent-25": "hsla(205,88.2%,90%,0.250)",
        "transparent-10": "hsla(200,81.8%,97.8%,0.100)",
        "success-98": "hsla(126,100%,98%,1)",
        "success-95": "hsla(129,100%,94.9%,1)",
        "success-60": "hsla(128,100%,60%,1)",
        "success-35": "hsla(128,100%,36.5%,1)",
        "alert-98": "hsla(330,100%,98%,1)",
        "alert-95": "hsla(333,92.3%,94.9%,1)",
        "alert-70": "hsla(332,94.8%,70%,1)",
        "alert-50": "hsla(332,94.9%,53.5%,1)"
      }          
    },
  },
  plugins: [],
}