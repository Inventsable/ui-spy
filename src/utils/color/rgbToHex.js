export default function rgbToHex(rgbArray) {
  while (rgbArray.length > 3) rgbArray.pop();
  return (
    '#' +
    rgbArray
      .map(c => {
        c = c < 256 ? Math.abs(c).toString(16) : 0;
        return c.length < 2 ? '0' + c : c;
      })
      .join('')
  );
}
