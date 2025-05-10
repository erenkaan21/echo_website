// This file maps each gallery image to a blurred placeholder (can be a tiny blurred version or a single color). Edit as needed for your assets.
// You can generate blurred base64 images using online tools or Node scripts.

const blurredPlaceholders = [
  // Example: require('../assets/blurred/still1-blur.jpg'),
  // For now, use a transparent 1x1 PNG as a fallback
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9gX5nQAAAABJRU5ErkJggg==', // still1
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9gX5nQAAAABJRU5ErkJggg==', // still2
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9gX5nQAAAABJRU5ErkJggg==', // bts1
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAn8B9gX5nQAAAABJRU5ErkJggg==', // poster
  // ...repeat for all images in galleryImages order
];

export default blurredPlaceholders;
