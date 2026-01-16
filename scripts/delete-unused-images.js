/**
 * Script to delete unused images from the public/images folder
 * 
 * WARNING: This will permanently delete files!
 * 
 * Usage: node scripts/delete-unused-images.js
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

const allImages = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

const unusedImages = allImages.filter(img => !usedImages.has(img));

if (unusedImages.length === 0) {
  console.log('✅ No unused images found. All images are being used.');
  process.exit(0);
}

console.log(`⚠️  WARNING: This will delete ${unusedImages.length} unused image(s):\n`);
unusedImages.forEach(img => {
  const filePath = path.join(imagesDir, img);
  const stats = fs.statSync(filePath);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`  - ${img} (${sizeInMB} MB)`);
});

const totalSize = unusedImages.reduce((total, img) => {
  const filePath = path.join(imagesDir, img);
  const stats = fs.statSync(filePath);
  return total + stats.size;
}, 0);

console.log(`\nTotal space to be freed: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
console.log('\n⚠️  This action cannot be undone!');
console.log('Run with --confirm flag to proceed: node scripts/delete-unused-images.js --confirm\n');

if (process.argv.includes('--confirm')) {
  console.log('🗑️  Deleting unused images...\n');
  let deletedCount = 0;
  let errorCount = 0;

  unusedImages.forEach(img => {
    try {
      const filePath = path.join(imagesDir, img);
      fs.unlinkSync(filePath);
      console.log(`✓ Deleted: ${img}`);
      deletedCount++;
    } catch (error) {
      console.error(`✗ Error deleting ${img}:`, error.message);
      errorCount++;
    }
  });

  console.log(`\n✅ Deletion complete!`);
  console.log(`   Deleted: ${deletedCount}`);
  console.log(`   Errors: ${errorCount}`);
  console.log(`   Space freed: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
} else {
  console.log('💡 To actually delete these files, run:');
  console.log('   node scripts/delete-unused-images.js --confirm');
}
