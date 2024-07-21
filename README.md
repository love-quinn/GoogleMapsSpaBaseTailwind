
# Google Maps SPA with React, Vite, and Tailwind CSS

Welcome to the Google Maps SPA project! This project is a single-page application built using React, Vite, and Tailwind CSS. It integrates Google Maps and displays a set location point at the MASP, Paulista Avenue SP.

## Project Overview

This project demonstrates how to:
- Set up a React project using Vite for fast development.
- Style the application using Tailwind CSS with a dark theme by default.
- Integrate Google Maps API to display a map with a marker.
- Use the Poppins font globally for a modern look.

## Features

- **Google Maps Integration:** Display a map centered at MASP, Paulista Avenue SP.
- **Dark Theme:** Default dark theme using Tailwind CSS.
- **Responsive Design:** The map is centered in a rounded container.
- **Modern Typography:** Poppins font applied globally.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm

### Installation

1. **Clone the repository:**

   \`\`\`bash
   git clone https://github.com/love-quinn/google-maps-spa.git
   cd google-maps-spa
   \`\`\`

2. **Install dependencies:**

   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables:**

   Create a \`.env\` file in the root directory and add your Google Maps API key:

   \`\`\`env
   VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   \`\`\`

4. **Run the development server:**

   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser:**

   Visit \`http://localhost:3000\` to see the application in action.

## Project Structure

\`\`\`
google-maps-spa/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .env
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
\`\`\`

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## Author

This project was created by [love-quinn](https://github.com/love-quinn/). You can visit my website at [https://love-quinn.github.io/](https://love-quinn.github.io/).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
