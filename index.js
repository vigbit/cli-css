function componentToHex(c) {
  var hex = c.toString(16);
  console.log(hex);
  return hex.length == 1 ? "0" + hex : hex;

}

function rgbToHex(r, g, b) {
  var result = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  console.log(result);
}

rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]));

//alert(rgbToHex(0, 51, 255));

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    console.log(  r + "," + g + "," + b );
}

// if (process.argv[2] === "hex") {
//   hexToRgb(process.argv[3])
// }

//hexToRgb(process.argv[3]);


/*function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}*/


