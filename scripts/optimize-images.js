const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public/convert');
const QUALITY = 80;

// Optimize settings for different image types
const IMAGE_CONFIGS = {
  hero: {
    width: 1920,
    height: 1080,
    quality: 85
  },
  card: {
    width: 800,
    height: 600,
    quality: 80
  },
  icon: {
    width: 512,
    height: 512,
    quality: 90
  }
};

// Function to create WebP versions of images
async function convertToWebP(inputPath, type = 'card') {
  const config = IMAGE_CONFIGS[type];
  const filename = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(path.dirname(inputPath), `${filename}.webp`);

  try {
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: config.quality })
      .toFile(outputPath);

    console.log(`✅ Converted: ${filename}.webp`);
  } catch (error) {
    console.error(`❌ Error converting ${filename}:`, error);
  }
}

// Function to generate blur placeholder
async function generateBlurPlaceholder(inputPath) {
  const tiny = await sharp(inputPath)
    .resize(10, 10, { fit: 'inside' })
    .toBuffer();
  
  return `data:image/jpeg;base64,${tiny.toString('base64')}`;
}

// Process all images in the public directory
async function optimizeImages() {
  const files = fs.readdirSync(PUBLIC_DIR);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(PUBLIC_DIR, file);
      
      // Determine image type based on filename or directory
      let type = 'card';
      if (file.includes('hero')) type = 'hero';
      if (file.includes('icon') || file.includes('logo')) type = 'icon';
      
      await convertToWebP(inputPath, type);
      
      // Generate and log blur placeholder
      const blurHash = await generateBlurPlaceholder(inputPath);
      console.log(`Blur placeholder for ${file}:`, blurHash);
    }
  }
}

// Run the optimization
optimizeImages().catch(console.error);
