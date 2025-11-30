const fs = require('fs');
const path = require('path');

// 1. Fix app/layout.tsx to point to the correct CSS file
const layoutPath = path.join(__dirname, 'app/layout.tsx');
if (fs.existsSync(layoutPath)) {
    let content = fs.readFileSync(layoutPath, 'utf8');
    // Replace import './globals.css' with import '../src/styles/globals.css'
    content = content.replace(/import\s+['"]\.\/globals\.css['"];?/g, 'import "../src/styles/globals.css";');
    fs.writeFileSync(layoutPath, content);
    console.log('✅ Fixed: app/layout.tsx now points to src/styles/globals.css');
}

// 2. Create or Fix src/styles/globals.css
const stylesDir = path.join(__dirname, 'src/styles');
if (!fs.existsSync(stylesDir)) fs.mkdirSync(stylesDir, { recursive: true });

const globalsCssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 0, 0, 0;
}

body {
  color: rgb(var(--foreground-rgb));
  background: black;
}`;

fs.writeFileSync(path.join(stylesDir, 'globals.css'), globalsCssContent);
console.log('✅ Restored: src/styles/globals.css');

// 3. Delete app/globals.css (This is the file causing the build error!)
const appGlobalsPath = path.join(__dirname, 'app/globals.css');
if (fs.existsSync(appGlobalsPath)) {
    fs.unlinkSync(appGlobalsPath);
    console.log('🗑️  Deleted duplicate: app/globals.css');
}

// 4. Ensure tailwind.config.ts is correct
const tailwindConfigContent = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#D946EF',
      },
    },
  },
  plugins: [],
};
export default config;`;
fs.writeFileSync(path.join(__dirname, 'tailwind.config.ts'), tailwindConfigContent);
console.log('✅ Ensured: tailwind.config.ts');