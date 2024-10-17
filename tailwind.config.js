/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme:{
    extend: {

      fontFamily:{
        "Onest":["Onest", "sans-serif"],
        "Bebas":["Bebas Neue", "sans-serif"]
      
      },
        

      colors: {
        
          Primary: '#A1A1AA',
          secondary:'#F26922',
          dashcolor:'#09090B',
          semiblack:'#3F3F46',
          sonicsilver:'#71717A'

         
        
      },
      
    },
  },
  plugins: [],
};

