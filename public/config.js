window.blconfig = {
  /**
   * 基础配置
   */
  SYS: {
    // 修改该值可以改变网页左上角名称, 你可以改为你的名称
    NAME: 'Graython',
    // 公网安备号
    GONG_WANG_AN_BEI: '',
    // ICP 备案号
    ICP_BEI_AN_HAO: '',
    // 邮箱
    EMAIL: '',
    // 将该值填写你开放为博客的用户ID
    USER_ID: 1
  },
  /**
   * 博客样式，当前可设置样式如下：
   * 1. 左上角 LOGO 样式
   * 2. 专题文件夹的特殊样式显示
   */
  THEME: {
    LOGO_STYLE: {
      // 左上角 LOGO 的圆角设置
      'border-radius': '50%'
    },
    // 是否以特殊样式显示专题文件夹
    SUBJECT_TITLE: true
  },
  /**
   * 不同env环境下的特殊配置
   */
  ENVS: {
    DEV: {
      WEBSITE_API_BASE_URI: "http://192.168.192.127:8081/website-api/",
      BLOSSOM_API_BASE_URI: "http://192.168.192.66/blossom-api/",
      DOC_PREVIEW_BASE_URI: "http://192.168.192.66:8012/onlinePreview?url="
    },
    TEST: {
      WEBSITE_API_BASE_URI: "http://192.168.192.66:8081/website-api/",
      BLOSSOM_API_BASE_URI: "http://192.168.192.66/blossom-api/",
      DOC_PREVIEW_BASE_URI: "http://192.168.192.66:8012/onlinePreview?url="
    },
    PROD: {
      WEBSITE_API_BASE_URI: "https://8g76m0325.vicp.fun/website-api/",
      BLOSSOM_API_BASE_URI: "https://8g76m0325.vicp.fun/blossom-api/",
      DOC_PREVIEW_BASE_URI: "https://8g76m0325.vicp.fun/onlinePreview?url="
    }
  },
  /**
   * 可以填写你自己的网站，该信息会展示在右上角的【更多】按钮中，以及首页的【所有文章】下
   * NAME: 网站名称
   * URL: 网站地址
   * LOGO: 网站LOGO地址
   */
  LINKS: [
    // 下方是一个示例
    {
      NAME: 'Blossom 双链笔记软件',
      URL: 'https://www.wangyunf.com/blossom-doc/index.html',
      LOGO: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/head/blossom_logo.png'
    }
  ]
}
