import getAppName from "../main/getAppName";

export default function getPanelBG() {
  return getRGBArray(
    JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo
      .panelBackgroundColor.color
  );
  function getRGBArray(color) {
    // if (/AEFT/i.test(getAppName()))
    //   return [color.red - 3, color.green - 3, color.blue - 3];
    // else
    return [color.red, color.green, color.blue];
  }
}
