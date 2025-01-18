export function rgbToHex(rgb: string): string {
  const [r, g, b] = rgb
    .replace(/^rgba?\(|\s+|\)$/g, "")
    .split(",")
    .map(Number);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export function normalizeHex(color: string): string {
  if (color.length === 4) {
    return `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
  }
  return color.toLowerCase();
}
