CSS RGB Colors

rgb(red, green, blue)<br />
Each parameter (red, green, and blue) defines the intensity of the color between 0 to 255.<br />
rgb(255, 0, 0) is displayed as red<br />
rgb(0,0,0) -> black<br />
rgb(255,255,255) -> white<br />

RGBA Value<br />
RGBA color values are an extension of RGB color values with an alpha channel - which specifies the opacity for a color.<br />
rgba(red, green, blue, alpha)<br />
The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all)<br />

CSS HEX Colors

A hexadecimal color is specified with: #RRGGBB, where the RR (red), GG (green) and BB (blue) hexadecimal integers specify the components of the color.<br />
#FF FF FF red green blue<br />
hexadecimal values between 00 and ff.<br />
#ff0000 is displayed as red<br />

There's no differences between a RGB and hex color. hex to decimal : FF = 255 => #FFFFFF = rgb(255,255,255)

3-Digit HEX value<br />
The 3-digit hex code is a shorthand for 6-digit hex codes.<br />

body<br /> {
  background-color: #fc9; /* same as #ffcc99 */<br />
}
