import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Epicentral Labs",
  description: "Accelerate Project Incentives",
  ignoreDeadLinks: true,
  srcDir: './src',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'v0.4.0',
        items: [
          { text: 'Website Changlogs', link: '/lab-updates/website-changelog' }
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
        text: 'LABS Token',
        items: [
          { text: 'What are LABS?', link: '/introduction/labstoken' }
        ]
      },
      {
        text: 'Vault-Programs',
        items: [
          { text: 'Introduction', link: '/vault-program-docs/introduction' },
          { text: 'Vaults-Explained', link: '/vault-program-docs/understanding-vaults' },
          { text: 'Vault-Fees', link: '/vault-program-docs/vault-fees' }
        ]
      },
      {
        text: 'Links',
        items: [
          { text: 'X (Twitter)', link: 'https://x.com/EpicentralLabs' },
          { text: 'Discord', link: 'https://discord.gg/5asAuY2sR8' },
          { text: 'GitHub', link: 'https://github.com/EpicentralLabs' }
        ]
      },
      {
        text: 'Lab Updates',
        items: [
          { text: 'Understanding Lab Updates', link: '/lab-updates/understanding-lab-updates.md' },
          { text: 'Changelog [Website]', link: '/lab-updates/website-changelog' },
          { text: 'Changelog [Vault-Programs]', link: '/lab-updates/vault-program-changelog' }
        ]
      },
      {
        text: 'Extras',
        items: [
          { text: 'Terminology', link: '/terminology' },
          { text: 'Legal', link: '/legal' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: `https://x.com/EpicentralLabs` },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' }
    ]
  }
})