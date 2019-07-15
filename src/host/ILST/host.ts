console.log("Host is online");

let getActiveHexColor = () => {
  let activeColor = app.isFillActive()
    ? app.activeDocument.defaultFillColor
    : app.activeDocument.defaultStrokeColor;
  return JSON.stringify([activeColor.red, activeColor.green, activeColor.blue]);
};
