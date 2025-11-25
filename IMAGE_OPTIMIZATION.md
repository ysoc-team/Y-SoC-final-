# Image Optimization Guide

## Large Images Requiring Optimization

The following images in the `/public` directory should be optimized for better Lighthouse Performance scores:

### Critical (> 1MB)
- `back.mp4` (6.2M) - **Background video** - Consider:
  - Compress video to reduce file size
  - Use lower quality/resolution for background
  - Add poster image for initial load
  - Consider using animated gradient instead
  
- `12.png` (2.3M) - Compress to WebP/AVIF format, target < 200KB
- `2.png` (1.8M) - Compress to WebP/AVIF format, target < 200KB
- `Sandeep Shivam.png` (1.5M) - Compress to WebP/AVIF format, target < 150KB
- `vaibhav.jpg` (1.3M) - Compress to WebP/AVIF format, target < 150KB
- `software-engineer-headshot.png` (1.3M) - Compress to WebP/AVIF format, target < 150KB
- `sa.jpg` (1.2M) - Compress to WebP/AVIF format, target < 150KB

### High Priority (500KB - 1MB)
- `edutech-logo.png` (812K) - Compress to WebP format, target < 100KB
- `Reshmika Dhandapani.png` (720K) - Compress to WebP format, target < 100KB
- `backdrop.png` (684K) - Compress to WebP format, target < 100KB
- `developer-tools-logo.png` (620K) - Compress to WebP format, target < 100KB
- `prithvish.png` (536K) - Compress to WebP format, target < 80KB

### Medium Priority (200KB - 500KB)
- Multiple team member photos and logos

## Recommended Tools

### Online Tools
- **Squoosh.app** - Google's image compression tool
- **TinyPNG** - PNG/JPG compression
- **Compressor.io** - Multi-format compression

### Command Line Tools
```bash
# Install sharp-cli for batch optimization
npm install -g sharp-cli

# Convert and compress images
sharp -i input.jpg -o output.webp --webp quality=80

# For batch conversion
for file in *.jpg; do sharp -i "$file" -o "${file%.jpg}.webp" --webp quality=80; done
```

### Next.js Image Component
All images should use Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src="/team-member.jpg"
  alt="Description"
  width={400}
  height={400}
  loading="lazy"
  quality={80}
/>
```

## Implementation Checklist

- [ ] Compress all images > 1MB to target sizes
- [ ] Convert PNG images to WebP format where applicable
- [ ] Use Next.js Image component for all images
- [ ] Add explicit width/height to prevent layout shift
- [ ] Use loading="lazy" for below-the-fold images
- [ ] Use priority prop for above-the-fold images
- [ ] Compress and optimize video file
- [ ] Add poster image for video element

## Expected Performance Impact

- Reduced initial page load by 8-10MB
- Improved Largest Contentful Paint (LCP) by 2-3 seconds
- Better Time to Interactive (TTI)
- Reduced bandwidth usage for users
- Better Core Web Vitals scores
