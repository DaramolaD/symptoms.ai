/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'Inter': 'Inter',
          'Inter-Bold': 'Inter-Bold',
          'Inter-Medium': 'Inter-Medium',
          'Inter-SemiBold': 'Inter-SemiBold'
      }
    },
  },
  plugins: [],
}

