# Vaults Explained

## Introduction

Let's start with the basics! After reading the [Introduction](/vault-program-docs/introduction) page, you might be wondering what "customizable interest-bearing programs" really are—so let's get right to it.

Understanding how Vaults work and how both Users and [Vault Creators](/terminology#vault-creator) can utilize them to create rewards for themselves and their projects is crucial. As you continue reading this page and others, important terminology will be covered. Additionally, descriptions of certain keywords can be found on the [Terminology page](/terminology).

## 1. Vaults

A "Vault" is a custom [Solana program](/terminology#solana-program) that acts as a savings account for participating [token programs](https://spl.solana.com/token), functioning similarly to a staking program. A Vault [rewards](/terminology#rewards) users and SPL-token projects by paying out depositors, providing project sustainability, and creating SPL-token utility.

<img src="/VFI-vault-example-mock-up.png" alt="VFI-Vault_example" width="50%" height="50%" />
*VFI-Vault dApp example. This UI design concept may change. (4/8/2024)*

Each Vault will display important information for users, including but not limited to:

* **Vault Name**
* **Reward Frequency ([RF](/terminology#reward-frequency))**
* **Annual Percentage Yield ([APY](/terminology#annual-percentrage-yield-apy))**
* **Token Name**
* **Rewards Remaining**
* **Total Tokens Vaulted**
* **Expected Reward**
* **Deposit Amount**

## 2. Rewards

When users deposit tokens into a Vault, they are rewarded with the same token after the [Reward Frequency (RF)](/terminology#reward-frequency) timer hits zero, at which point a payout is made to the depositor based on the set APY. These rewards function similarly to those in staking programs.

::: warning
*It is important to note that the [Reward Cycle](/terminology#reward-cycle) for the **RF** timer will reset if a withdrawal occurs before the RF timer hits zero. This is to prevent users from depositing seconds before a reward is paid out and then quickly withdrawing.* 
:::

<img src="/reward-payout-flowchart.avif" alt="Reward Payout Flowchart" width="150%" height="150%" />
*Reward Frequency / Rewards Payout Flowchart Diagram (4/8/2024)*

## 3. Vault APY

The most intriguing aspect of a Vault is the percentage of APY it offers on a deposit. The APY is initially set by the Vault Creator and can be [fixed](/terminology#fixed-annual-percentage-yield-f-apy) or [variable](/terminology#variable-annual-percentage-yield-v-apy).

::: details Fixed APY (F-APY)
A "fixed" APY **cannot** be changed by [Vault Creators](/terminology#vault-creator). Vaults with a fixed APY can be integrated with a [DAO](/terminology#decentralized-autonomous-organization-dao) where members can vote only on changing the Reward Frequency and whether additional tokens need to be added to the Predetermined Reward Pool from the DAO treasury.
:::

::: details Variable APY (V-APY)
A "variable" APY **can** be changed by [Vault Creators](/terminology#vault-creator). Vaults with a variable APY can be integrated with a [DAO](/terminology#decentralized-autonomous-organization-dao) where members can vote on changing the Reward Frequency, APY, and whether additional tokens need to be added to the Predetermined Reward Pool from the DAO treasury.
:::

::: tip
Vault APY **does not adjust automatically** based on how the [associated token](/terminology#associated-token) is performing or trading, unlike a [yield farm](/terminology#yield-farm).
:::

## 4. Locked Vault vs. Liquid Vault

::: details Locked Vault
The initial deposit is "locked" into the Vault, similar to how a [staking program](/terminology#staking) operates. [The User (depositor)](/terminology#the-user) must wait until the [Reward Frequency](/terminology#reward-frequency) timer has completed at least one [Reward Cycle](/terminology#reward-cycle) before being able to withdraw their initial token amount plus rewards.

*Locked Vaults are designed for projects that prefer to reduce token volatility.*
:::

::: details Liquid Vault
The initial deposit can be withdrawn at any time without waiting for the [Reward Frequency](/terminology#reward-frequency) to complete its Reward Cycle. However, withdrawing from a Vault before at least one [Reward Cycle](/terminology#reward-cycle) is complete will not yield any Reward Tokens.

*Liquid Vaults are typical for token projects that do not mind extra volatility for their token.* 
:::

## 5. Risks

Risks are an inherent part of the crypto and finance space. It is essential to understand the following risks associated with participating in a Vault.

::: details Participating Project Risk
Any project that creates a Vault for its [associated token](/terminology#associated-token) can potentially fail. Whether due to the development team abandoning the project, competition leading to the project's demise, or worse—a [rug-pull](https://www.coindesk.com/learn/crypto-rug-pulls-what-are-they-how-to-avoid-them/)—it is crucial to conduct thorough due diligence to minimize exposure to project risk.
:::

::: details Market Risk
Vaults and their [associated tokens](/terminology#associated-token) are exposed to market risk. Since the Vault APY does not account for the performance of the associated token, it is easy to overlook the fact that the tokens outside of the Vault are trading on the open market and are subject to market fluctuations.
:::

::: details Vault Dry-Up Risk
A Vault with an excessively high [APY](/terminology#annual-percentrage-yield-apy) and insufficient Reward Tokens runs the risk of depleting its rewards prematurely, leading to a shorter-than-expected lifespan. It is strongly recommended that [Vault Creators](/terminology#vault-creator) ensure their reward pool and APY are proportionate to avoid rapid depletion of rewards. However, it is important to note that market demand may exceed expectations, making it challenging for Vault Creators to accurately estimate a proportionate [reward pool](/terminology#predetermined-reward-pool) and APY.
:::

## 6. Benefits

There are numerous reasons why a Vault might be beneficial to a user or project. Here are some additional benefits:

::: details Staking Programs Without the Extras
Unlike [CLMM](https://coinmarketcap.com/community/articles/65608f0cc54ab771279066a5/)s or [Liquidity Pools](https://dappradar.com/blog/what-is-liquidity-pool-and-liquidity-provider), Vaults do not require borrowing or lending and only necessitate the token [The User](/terminology#the-user) wishes to stake at the designated Vault.
:::

::: details Earn by HODLing
[The User](/terminology#the-user) can deposit their tokens into the token-designated Vault and start earning [compound interest](/terminology#compound-interest) on their deposit.
:::

::: details Customizable Vaults
[Vault Creators](/terminology#vault-creator) have the flexibility to set their desired [APY](/terminology#annual-percentrage-yield-apy) and [Reward Frequency](/terminology#reward-frequency) when creating a Vault. Creators can also choose whether the Vault will be [Locked](/vault-program-docs/understanding-vaults#_4-locked-vault-vs-liquid-vault) or [Liquid](/vault-program-docs/understanding-vaults#_4-locked-vault-vs-liquid-vault).

*Creators should consider all variables carefully; please read [Vault Risks](/vault-program-docs/understanding-vaults#_5-risks).*
:::

::: details Market Hedging
If a Vault's [associated token](/terminology#associated-token) decreases in market value, a depositor might not be as severely impacted due to the accumulating [rewards](/terminology#rewards) in the Vault, which can offset the depositor's losses.
:::

::: details Token Leverage
Conversely, if a Vault's [associated token](/terminology#associated-token) appreciates in market value, the depositor would not only earn unrealized gains from market appreciation but also gain extra unrealized gains from the Vault [rewards](/terminology#rewards).
:::
