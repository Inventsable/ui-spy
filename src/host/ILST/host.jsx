console.log("Host is online");
var getActiveHexColor = function () {
    var activeColor = app.isFillActive()
        ? app.activeDocument.defaultFillColor
        : app.activeDocument.defaultStrokeColor;
    return JSON.stringify([activeColor.red, activeColor.green, activeColor.blue]);
};
