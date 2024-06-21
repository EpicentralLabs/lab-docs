import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Epicentral Labs",
  description: "Documentation",
  ignoreDeadLinks: true,
  srcDir: './src',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '0.0.2-beta',
        items: [
          { text: 'Docs Changlogs', link: '/lab-updates/docs-changelog'}
        ]
       }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About Us', link: '/introduction/about-us' }
        ]
      },
      {
        text: 'Vault-Program',
        items: [
          { text: 'About', link: '/vault-program-docs/vault-programs' }
        ]
      },
      {
        text: 'Links',
        items: [
          { text: 'Epicentral Labs Website', link: 'https://www.vaultifi.org/' },
          { text: 'X (Twitter)', link: 'https://x.com/EpicentralLabs' },
          { text: 'GitHub', link: 'https://github.com/EpicentralLabs' }
        ]
      },
      {
        text: 'Lab Updates',
        items: [
          { text: 'Changelog[Docs]', link: '/lab-updates/docs-changelog' },
          { text: 'Changelog[Website]', link: '/lab-updates/website-changelog' },
          { text: 'Changelog[Vault-Programs]', link: '/lab-updates/vault-program-changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: `https://x.com/VaultiFi`},
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})