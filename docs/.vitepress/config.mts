import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Epicentral Labs",
  description: "Accelerate Project Incentives",
  ignoreDeadLinks: true,
  srcDir: './src',
  themeConfig: {
    lastUpdated: {
      text: 'Last Updated'
    },
    nav: [
      { text: 'Menu',
        items: [
          { text: 'Home', link: '/' },
          { text: 'EpicentralDAO', link: '/epicentral-dao/introduction' },
          { text: 'LABS Token', link: '/labs-token/labstoken-about' },
          { text: 'Vault-Programs', link: '/vault-program-docs/introduction' },
          { text: 'Lab Updates', link: '/lab-updates/introduction.md' },
          { text: 'Extras', link: '/terminology' },
        ]
       },
      { text: 'v1.2.1', link: '/lab-updates/website-changelog' }//current version of the site.
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'About Us', link: '/introduction/about-us' },
          { text: 'Roadmap', link: '/introduction/roadmap' }
        ]
      },
      {
        text: 'Epicentral DAO',
        items: [
          { text: 'Introduction', link: '/epicentral-dao/introduction' },
          { text: `New Proposal Guide`, link: '/epicentral-dao/proposal-guide' },
          { text: `Voting Guide`, link: '/epicentral-dao/voting-guide' }
        ]
      },
      {
        text: 'LABS Token',
        items: [
          { text: 'What are LABS?', link: '/labs-token/labstoken-about' },
          { text: 'Token Details', link: '/labs-token/labstoken-details' },
          { text: 'Tokenomics', link: '/labs-token/labstoken-tokenomics' },
          { text: 'Vesting Schedule', link: '/labs-token/labstoken-vesting' }
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
        text: 'Lab Updates',
        items: [
          { text: 'Introduction', link: '/lab-updates/introduction.md' },
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
      },
      {
        text: 'Links',
        items: [
          { text: 'X (Twitter)', link: 'https://x.com/EpicentralLabs' },
          { text: 'Discord', link: 'https://discord.gg/5asAuY2sR8' },
          { text: 'GitHub', link: 'https://github.com/EpicentralLabs' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: `https://x.com/EpicentralLabs` },
      { icon: 'github', link: 'https://github.com/EpicentralLabs' },
      { icon: 'discord', link: 'https://discord.gg/5asAuY2sR8' },
      { icon: 'youtube', link: 'https://www.youtube.com/@EpicentralLabs/featured' },
    ]
  }
})