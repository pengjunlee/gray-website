
export const getWebsiteApiBaseUrl = () => {
  const { protocol, hostname, port } = window.location;
  // 判断是否是 localhost
  if (hostname === "localhost") {
    return window.blconfig.ENVS.DEV.WEBSITE_API_BASE_URI;
  }

  if (isIPHostname(hostname)) {
    return window.blconfig.ENVS.TEST.WEBSITE_API_BASE_URI;
  }
  return window.blconfig.ENVS.PROD.WEBSITE_API_BASE_URI;
  
};

export const getBlossomApiBaseUrl = () => {
  const { protocol, hostname, port } = window.location;
  // 判断是否是 localhost
  if (hostname === "localhost") {
    return window.blconfig.ENVS.DEV.BLOSSOM_API_BASE_URI;
  }

  if (isIPHostname(hostname)) {
    return window.blconfig.ENVS.TEST.BLOSSOM_API_BASE_URI;
  }
  return window.blconfig.ENVS.PROD.BLOSSOM_API_BASE_URI;
  
};

export const getDocPreviewBaseUrl = () => {
  const { protocol, hostname, port } = window.location;
  // 判断是否是 localhost
  if (hostname === "localhost") {
    return window.blconfig.ENVS.DEV.DOC_PREVIEW_BASE_URI;
  }

  if (isIPHostname(hostname)) {
    return window.blconfig.ENVS.TEST.DOC_PREVIEW_BASE_URI;
  }
  return window.blconfig.ENVS.PROD.DOC_PREVIEW_BASE_URI;
  
};

// 判断是否是 IP 地址
const isIPHostname = (hostname: string) => {
  // 判断是否是 IP 地址（IPv4）
  const ipPattern =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  // 判断 hostname 是否符合 IP 地址格式
  if (ipPattern.test(hostname)) {
    return true;
  }

  return false;
};