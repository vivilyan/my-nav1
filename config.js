export default {
  // 网站基础设置
window.CONFIG = {
  title: '我的网址导航', // 改成你的网站标题
  description: '编程修行者的常用工具站', // 改成你的个人介绍
  logo: 'https://xxx.com/your-logo.png', // 可以放你的头像/二维码图片链接，也可以不改
  
  // 左侧分类菜单（和你截图里的侧边栏一样）
  menus: [
    { name: '常用推荐', icon: '🔥' },
    { name: 'AIGC', icon: '🤖' },
    { name: '工具', icon: '🛠️' },
    { name: '娱乐', icon: '🎮' },
  ],
  
  // 网站链接卡片
  links: [
    {
      title: '百度', // 网站名称
      url: 'https://www.baidu.com', // 网址
      icon: 'https://www.baidu.com/favicon.ico', // 图标（可以直接用网址的favicon）
      desc: '百度一下，你就知道', // 描述
      category: '常用推荐' // 对应上面的分类
    },
    {
      title: 'GitHub',
      url: 'https://github.com',
      icon: 'https://github.com/favicon.ico',
      desc: '开源代码社区',
      category: '工具'
    }
    // 可以照着这个格式，把你所有常用网站都加进去
  ]
}