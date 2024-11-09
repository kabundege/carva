export default {
  DEFAULT: '#000000',
  PRIMARY: '#459D68',
  PRIMARY_VARIANT: '#677F71',
  PRIMARY_80: convertHexToRGBA('#459D68CC', 0.8),
  PRIMARY_70: convertHexToRGBA('#459D68CC', 0.7),
  PRIMARY_LIGHT: convertHexToRGBA('#459D68CC', 0.2),
  DANGER: '#BD062D',
  DANGER_LIGHT: convertHexToRGBA('#BD062D', 0.2),
  DANGER_VARIANT_2: '#BD062D0F',
  BACKGROUND: '#FCFCFC',
  WHITE: '#FFFFFF',
  DARK_INDIGO: '#2A3548',
  LIGHT_INDIGO: '#2A354826',
  BRIGHT_GRAY: '#EAEFF2',
  LIGHT_SILVER: '#D8D8D8',
  PLACEHOLDER_TEXT: '#697283',
  DARK_SILVER: '#707070',
  AUROMETALSAURUS: '#697283',
  LIGHT_BLACK: '#00000029',
  BRIGHT_BLACK: '#0000001C',
  Overlay_30: 'rgba(0,0,0,.3)',
  White_Overlay_30: 'rgba(255,255,255,.3)',
  ORANGE: '#ED7818',
  LIGHT_ORANGE: '#ED781826',
  YELLOW: '#FFC107',
  LIGHT_YELLOW: '#FFC10726',
  GREEN: 'green',
  DARK_GUNMETAL: '#18202E',
  DARKBLUE: '#2A3548',
  LIGHTBLUE: '#EAEFF2',
  WILDBLUE: '#A2B3D1',
  SUCCESS: '#CDDF00',
  TRANSPARENT: 'transparent',
  LIGHT_GRAY: '#EDF0F6',
  GRAY_BG: '#F0F2F0',
  BORDER: '#DAE3DC',
};

/**
 * Converts a hex color to RGBA format with a specified alpha level.
 * @param hex The hex color code (e.g., "#RRGGBB").
 * @param alpha The alpha level (0-1) for the color's opacity.
 * @returns The RGBA color string.
 */
function convertHexToRGBA(hex: string, alpha: number): string {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');
  // Parse the r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  // Return the RGBA color
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
