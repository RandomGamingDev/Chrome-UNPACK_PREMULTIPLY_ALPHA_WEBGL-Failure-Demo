# Chrome-UNPACK_PREMULTIPLY_ALPHA_WEBGL-Failure-Demo
Chrome has an issue with an invalid error (INVALID_OPERATION: texImage2D: Invalid params.format/params.type combination) being thrown when creating a RGBA16UI texture with UNPACK_PREMULTIPLY_ALPHA_WEBGL enabled. (this issue appears to also be a problem on Safari)

You can look at a demo of this issue here: https://randomgamingdev.github.io/Chrome-UNPACK_PREMULTIPLY_ALPHA_WEBGL-Failure-Demo
The result of `gl.getError()` is printed in the console. In firefox there is no error, while chromium based browsers and safari throw an error, that is inaccurate and vague.

The error thrown on Chromium based browsers & Safari is 1282/(INVALID_OPERATION: texImage2D: Invalid params.format/params.type combination).
