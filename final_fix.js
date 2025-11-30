const fs = require('fs');
const path = require('path');

// --- 1. AUTOMATICALLY ADD 'use client' TO ALL COMPONENTS ---
// This ensures Hero3D, MetricsDashboard, and ANY new file you added works correctly.
const componentsDir = path.join(__dirname, 'src/components');

if (fs.existsSync(componentsDir)) {
  const files = fs.readdirSync(componentsDir);
  
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const filePath = path.join(componentsDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if it already has 'use client'
      if (!content.includes("'use client'") && !content.includes('"use client"')) {
        // Add 'use client' to the top
        const newContent = "'use client';\n\n" + content;
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`✅ Added 'use client' to: ${file}`);
      } else {
        console.log(`👍 Already has 'use client': ${file}`);
      }
    }
  });
} else {
  console.log('⚠️ src/components directory not found!');
}

// --- 2. FIX app/layout.tsx (Ensure CSS Path is Correct) ---
const layoutPath = path.join(__dirname, 'app/layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = `import type { Metadata } from "next";
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
}

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