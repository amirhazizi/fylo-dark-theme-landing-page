/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      maxWidth: {
        custom: "95rem",
        custom_2: "90rem",
      },
      // ## Colors
      colors: {
        // ### Primary
        clDarkBlue_1: "hsl(217, 28%, 15%)", //intro and email sign up background
        clDarkBlue_2: "hsl(218, 28%, 13%)", //main background
        clDarkBlue_3: "hsl(216, 53%, 9%)", //footer background
        clDarkBlue_4: "hsl(219, 30%, 18%)", //testimonials background

        // ### Accent
        clCyan: "hsl(176, 68%, 64%)", //inside call-to-action gradient
        clBlue: "hsl(198, 60%, 50%)", //inside call-to-action gradient
        clLightRed: "hsl(0, 100%, 63%)", //error
        // ### Neutral
        clWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}
