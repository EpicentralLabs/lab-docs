import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Epicentral Labs",
  description: "Accelerate Project Incentives",
  ignoreDeadLinks: true,
  srcDir: './src',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'v0.1.0',
        items: [
          { text: 'Docs Changlogs', link: '/lab-updates/docs-changelog'}
        ]
       }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About Us', link: '/introduction/about-us' },
          { text: 'Terminology', link: '/terminology' }
        ]
      },
      {
        text: 'Vault-Programs',
        items: [
          { text: 'Introduction', link: '/vault-program-docs/introduction' },
          { text: 'Understanding Vaults', link: '/vault-program-docs/understanding-vaults' },
          { text: 'Fees', link: '/vault-program-docs/vault-fees' },
          { text: 'FAQs', link: '/vault-program-docs/vault-faqs' }
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
          { text: 'Understanding Lab Updates', link: '/lab-updates/understanding-lab-updates.md' },
          { text: 'Changelog [Docs]', link: '/lab-updates/docs-changelog' },
          { text: 'Changelog [Website]', link: '/lab-updates/website-changelog' },
          { text: 'Changelog [Vault-Programs]', link: '/lab-updates/vault-program-changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: `https://x.com/VaultiFi`},
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})