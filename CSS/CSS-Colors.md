CSS RGB Colors

rgb(red, green, blue)
Each parameter (red, green, and blue) defines the intensity of the color between 0 to 255.
rgb(255, 0, 0) is displayed as red
rgb(0,0,0) -> black
rgb(255,255,255) -> white

RGBA Value
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.
rgba(red, green, blue, alpha)
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)

CSS HEX Colors

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.
#FF FF FF red green blue
hexadecimal values between 00 and ff.
#ff0000 is displayed as red

There's no differences between a RGB and hex color. hex to decimal : FF = 255 => #FFFFFF = rgb(255,255,255)

3-Digit HEX value
The 3-digit hex code is a shorthand for 6-digit hex codes.

body {
  background-color: #fc9; /* same as #ffcc99 */
}
