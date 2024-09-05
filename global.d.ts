export {}

declare global {
  interface Window {
    blconfig: {
      SYS: {
        NAME: string
        LOGO: string
        GONG_WANG_AN_BEI: string
        ICP_BEI_AN_HAO: string
        EMAIL: string
        USER_ID: string
      }
      THEME: {
        LOGO_STYLE: {
          'border-radius': string
        }
        SUBJECT_TITLE: string
      }
      LINKS: [
        {
          NAME: string
          URL: string
          LOGO: string
        }
      ]
    }
  }
}
