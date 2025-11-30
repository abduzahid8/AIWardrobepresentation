const fs = require('fs');
const path = require('path');

// --- 1. AUTOMATICALLY ADD 'use client' & ENSURE DEFAULT EXPORTS ---
const componentsDir = path.join(__dirname, 'src/components');

if (fs.existsSync(componentsDir)) {
  const files = fs.readdirSync(componentsDir);
  
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const filePath = path.join(componentsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      let modified = false;

      // 1. Add 'use client' if missing
      if (!content.includes("'use client'") && !content.includes('"use client"')) {
        content = "'use client';\n\n" + content;
        modified = true;
        console.log(`✅ Added 'use client' to: ${file}`);
      }

      // 2. Ensure 'export default' exists (Fixes "Element type is invalid" error)
      if (!content.includes('export default')) {
        const componentName = path.basename(file, path.extname(file));
        // Only append if it looks like the component is defined in the file
        if (content.includes(`function ${componentName}`) || content.includes(`const ${componentName}`)) {
          content += `\n\nexport default ${componentName};\n`;
          modified = true;
          console.log(`✅ Added 'export default' to: ${file}`);
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
      } else {
        console.log(`👍 Component verified: ${file}`);
      }
    }
  });
} else {
  console.log('⚠️ src/components directory not found!');
}

// --- 2. FIX app/layout.tsx (Corrected Syntax) ---
const layoutPath = path.join(__dirname, 'app/layout.tsx');
const layoutJsPath = path.join(__dirname, 'app/layout.js'); 

// Remove conflicting .js file if it exists
if (fs.existsSync(layoutJsPath)) {
  fs.unlinkSync(layoutJsPath);
  console.log('🗑️ Deleted conflicting app/layout.js');
}

// Fixed the syntax error in the template string below
const layoutContent = `import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Wardrobe",
  description: "AI Stylist Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}`;
fs.writeFileSync(layoutPath, layoutContent);
console.log('✅ Fixed: app/layout.tsx');


// --- 3. FIX PACKAGE.JSON (Ensure Dependencies) ---
const packagePath = path.join(__dirname, 'package.json');
if (fs.existsSync(packagePath)) {
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  if (!pkg.dependencies) pkg.dependencies = {};
  
  const requiredDeps = {
    'lucide-react': '^0.378.0',
    'framer-motion': '^11.0.0',
    'recharts': '^2.12.0',
    'clsx': '^2.1.0',
    'tailwind-merge': '^2.2.0'
  };

  let updated = false;
  for (const [dep, version] of Object.entries(requiredDeps)) {
    if (!pkg.dependencies[dep]) {
      pkg.dependencies[dep] = version;
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2));
    console.log('✅ Updated package.json with missing dependencies');
  }
}

// --- 4. FIX app/page.tsx (Fix Invalid Element Type Error) ---
const pagePath = path.join(__dirname, 'app/page.tsx');
const pageJsPath = path.join(__dirname, 'app/page.js'); 

// Remove conflicting .js file if it exists
if (fs.existsSync(pageJsPath)) {
  fs.unlinkSync(pageJsPath);
  console.log('🗑️ Deleted conflicting app/page.js');
}

const pageContent = `import Hero from '../src/components/Hero';
import ProblemSolution from '../src/components/ProblemSolution';
import AITechStack from '../src/components/AITechStack';
import VectorSearchDemo from '../src/components/VectorSearchDemo';
import CreatorModeDemo from '../src/components/CreatorModeDemo';
import Implementation from '../src/components/Implementation';
import Team from '../src/components/Team';
import Footer from '../src/components/Footer';
import MetricsDashboard from '../src/components/MetricsDashboard';
import VectorSpaceViz from '../src/components/VectorSpaceViz';
import TechArchitecture from '../src/components/TechArchitecture';
import BusinessModel from '../src/components/BusinessModel';
import ProductWalkthrough from '../src/components/ProductWalkthrough';
import PitchDeck from '../src/components/PitchDeck';
import CTA from '../src/components/CTA';

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Hero />
      <ProblemSolution />
      <AITechStack />
      <VectorSearchDemo />
      <CreatorModeDemo />
      <Implementation />
      <MetricsDashboard />
      <VectorSpaceViz />
      <TechArchitecture />
      <BusinessModel />
      <ProductWalkthrough />
      <PitchDeck />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
`;
fs.writeFileSync(pagePath, pageContent);
console.log('✅ Fixed: app/page.tsx (Resolved component import errors)');