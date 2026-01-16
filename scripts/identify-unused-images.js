/**
 * Script to identify unused images in the public/images folder
 * 
 * Usage: node scripts/identify-unused-images.js
 */

const fs = require('fs');
const path = require('path');

// Images that are still being used in the codebase
const usedImages = new Set([
  'DSC_0004.webp',
  'DSC_0006.webp',
  'DSC_0008.webp',
  'DSC_0012.webp',
  'DSC_0013.webp',
  'DSC_0014.webp',
  'DSC_0016.webp',
  'DSC_0020.webp',
  'DSC_0028.webp',
  'DSC_0031.webp',
  'DSC_0034.webp',
  'DSC_0036.webp',
  'DSC_0037.webp',
  'DSC_0038.webp',
  'DSC_0040.webp',
  'DSC_0042.webp',
  'DSC_0047.webp',
  '30.webp',
]);

const imagesDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(imagesDir)) {
  console.error(`Error: Images directory not found: ${imagesDir}`);
  process.exit(1);
}

console.log('📁 Scanning images directory...\n');

const allImages = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
  .sort();

const unusedImages = allImages.filter(img => !usedImages.has(img));
const usedImagesList = allImages.filter(img => usedImages.has(img));

console.log(`Total images found: ${allImages.length}`);
console.log(`✅ Images still in use: ${usedImagesList.length}`);
console.log(`🗑️  Unused images: ${unusedImages.length}\n`);

if (unusedImages.length > 0) {
  console.log('Unused images that can be deleted:');
  console.log('=====================================');
  unusedImages.forEach(img => {
    const filePath = path.join(imagesDir, img);
    const stats = fs.statSync(filePath);
    const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`  - ${img} (${sizeInMB} MB)`);
  });
  console.log(`\nTotal space that can be freed: ${unusedImages.reduce((total, img) => {
    const filePath = path.join(imagesDir, img);
    const stats = fs.statSync(filePath);
    return total + stats.size;
  }, 0) / (1024 * 1024)} MB`);
} else {
  console.log('✅ All images are being used!');
}

console.log('\n📋 Images still in use:');
console.log('=====================');
usedImagesList.forEach(img => console.log(`  ✓ ${img}`));
