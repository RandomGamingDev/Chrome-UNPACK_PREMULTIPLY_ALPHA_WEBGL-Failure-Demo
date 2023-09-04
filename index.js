"use strict";

function main() {
  // Get A WebGL context
  var canvas = document.querySelector("#c");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    console.log("Failed to create the WebGL2 instance!");
    return;
  }

  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
  
  const tex = gl.createTexture();
  let data = new Uint16Array(8 * 8 * 4);
  
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA16UI,
        8,
        8,
        0,
        gl.RGBA_INTEGER,
        gl.UNSIGNED_SHORT,
        data
  );
  console.log(gl.getError());
}
main();
