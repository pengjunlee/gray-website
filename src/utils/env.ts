import { isNull } from "@/utils/obj";

const viteBaseUrl = import.meta.env.WEBSITE_API_BASE_URI;
const print = () => {
  console.log("Graython-Website ===> 环境:", import.meta.env.MODE);
  console.log("Graython-Website ===> viteBaseUrl:", viteBaseUrl);
  if (import.meta.env.DEV) {
    console.log(window.blconfig);
  }
};

print();

export const getUserId = () => {
  if (isNull(window.blconfig.SYS.USER_ID)) {
    return 1;
  }
  return window.blconfig.SYS.USER_ID;
};

//#region ------------------------------------------- 基础信息 -------------------------------------------

export const getSysName = () => {
  if (isNull(window.blconfig.SYS.NAME)) {
    return "Blossom";
  }
  return window.blconfig.SYS.NAME;
};

export const getEmail = () => {
  if (isNull(window.blconfig.SYS.EMAIL)) {
    return "";
  }
  return window.blconfig.SYS.EMAIL;
};

export const getGwab = () => {
  if (isNull(window.blconfig.SYS.GONG_WANG_AN_BEI)) {
    return "";
  }
  return window.blconfig.SYS.GONG_WANG_AN_BEI;
};

export const getIpc = () => {
  if (isNull(window.blconfig.SYS.ICP_BEI_AN_HAO)) {
    return "";
  }
  return window.blconfig.SYS.ICP_BEI_AN_HAO;
};

//#endregion

export const getThemeLogoStyle = () => {
  if (isNull(window.blconfig.THEME.LOGO_STYLE)) {
    return {
      "border-radius": "50%",
    };
  }
  return window.blconfig.THEME.LOGO_STYLE;
};

export const getThemeSubjecTitle = () => {
  if (isNull(window.blconfig.THEME.SUBJECT_TITLE)) {
    return true;
  }
  return window.blconfig.THEME.SUBJECT_TITLE;
};

export const getLinks = () => {
  if (isNull(window.blconfig.LINKS)) {
    return [];
  }
  return window.blconfig.LINKS;
};
