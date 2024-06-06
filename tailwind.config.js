/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       
        Roboto : ["Roboto","sans-serif"],
        Cardo : ["Cardo" , "serif"],

      },
      colors: {
        Green: '#254336',
        MainColor : "#6B8A7A",
        MainColorrgb : "rgba(107, 138, 122,0.4)",
        Light : "#B7B597",
        morelight : "#DAD3BE",
        morelightrgba : "rgba(218, 211, 190,0.5)"
        
      },
    },
  },
  plugins: [],
}

