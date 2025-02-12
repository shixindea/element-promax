export const rightRichTextSponsors = []

export const rightBigLogoSponsors = [
  {
    name: 'CRMEB',
    img: '/element-promax-docs/CRMEB.png',
    imgL: '/element-promax-docs/CRMEB-l.png',
    url: 'http://github.crmeb.net/u/Elementyouce',
    slogan: 'High-quality open source mall system',
    slogan_cn: '高品质开源商城系统 累计服务40W+开发者',
    slogan_index: '高品质开源商城系统累计服务40W+开发者',
  },
]

export const rightLogoSmallSponsors = [
  {
    name: 'BuildAdmin',
    img: '/element-promax-docs/buildadmin.png',
    imgL: '/element-promax-docs/buildadmin-l.png',
    url: 'https://doc.buildadmin.com/?from=element-plus',
    slogan: 'Vue3 open source admin system',
    slogan_cn: 'Vue3企业级开源后台管理系统',
  },
  {
    name: '百搭云',
    img: '/element-promax-docs/baidayun-logo.png',
    imgL: '/element-promax-docs/baidayun.png',
    url: 'http://www.i-renderer.love/home/index',
    slogan: 'Fast and elegant low-code dev platform',
    slogan_cn: '快速且优雅的低代码平台',
  },
  {
    name: 'bit',
    img: '/element-promax-docs/bit.svg',
    imgL: '/element-promax-docs/bit-l.png',
    url: 'https://bit.dev/?from=element-ui',
    slogan: 'Share Code',
    isDark: true, // dark theme
  },
]

export const leftCustomImgSponsors = [
  {
    name: '袁果锅笔记',
    img: 'https://shixindea.github.io/guoguo-notes/assets/logo-C3kglBc_.png',
    url: 'https://shixindea.github.io/guoguo-notes/',
    slogan: "Yuan Guoguo's Personal Notes",
    slogan_cn: '袁果锅个人笔记',
    banner_img:
      'https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/guoguo_note_logo_banner.jpeg',
  },
  {
    name: '广告位恰饭',
    img: 'https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/element-promax-guanggaowei.png',
    url: 'https://shixindea.github.io/guoguo-notes/',
    slogan: 'Enterprise-level low-code development platform',
    slogan_cn: 'Advertising space is perfect for meals',
    banner_img:
      'https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/element-promax-guanggaowei.png',
  },
]

export const platinumSponsors = [
  ...leftCustomImgSponsors,
  ...rightBigLogoSponsors,
  ...rightRichTextSponsors,
]

export const leftLogoSponsors = []

export const goldSponsors = [...rightLogoSmallSponsors, ...leftLogoSponsors]
