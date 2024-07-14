# Vaults Explained

## Introduction

Let's start with the basics! After reading the [Introduction](/vault-program-docs/introduction) page, you have come to question what "customizable interest-bearing programs" really are -- so let's get right to it. 

It is important to understand how Vaults work and how Users as well as [Vault Creators](/terminology#vault-creator) can utilize them to create rewards for themselves and their projects. All of the important terminology will be covered as you read further on this page and later pages but you can also find descriptions of certain keywords on the [Terminology page](/terminology).

## 1. Vaults

A "Vault" is a custom [Solana program](/terminology#solana-program) that acts as a savings account for participating [token programs](https://spl.solana.com/token) and behaves similarly to a staking program. A Vault [rewards](/terminology#rewards) users and spl-token projects by paying out depositors, providing project sustainability, and creating spl-token utility.

<img src="/VFI-vault-example-mock-up.png" alt="VFI-Vault_example" width="50%" height="50%" />
*VFI-Vault dApp example. This UI design concept may change. (4/8/2024)*

Every Vault will showcase important information needed for the user to know, including but not limited to:

* **Vault Name**
* **Reward Frequency ([RF](/terminology#reward-frequency))**
* **Annual Percentage Yield ([APY](/terminology#annual-percentrage-yield-apy))**
* **Token Name**
* **Rewards Remaining**
* **Total Tokens Vaulted**
* **Expected Reward**
* **Deposit Amount**

## 2. Rewards

When users deposit tokens into a Vault, they are rewarded the same token after the [Reward Frequency (RF)](/terminology#reward-frequency) timer hits zero, to which then a payout is made to the depositor based on the set APY. These rewards can be thought of similarly to how staking programs work.

::: warning
*It is important to know that the [Reward Cycle](/terminology#reward-cycle) for the **RF** timer will reset if a withdrawal occurs before the RF timer hits zero. This is to prevent users from depositing seconds before a reward is paid out followed by a quick withdrawal.* 
:::

<img src="/reward-payout-flowchart.avif" alt="Reward Payout Flowchart" width="150%" height="150%" />
*Reward Frequency / Rewards Payout Flowchart Diagram (4/8/2024)*

## 3. Vault APY

Certainly, the most interesting and enticing part of a Vault is seeing what percentage of APY a Vault pays out on a deposit. The APY is at first initially set by the Vault Creator. The [APY](/terminology#annual-percentrage-yield-apy) set by the creator can be [fixed](/terminology#fixed-annual-percentage-yield-f-apy) or [variable](/terminology#variable-annual-percentage-yield-v-apy). 

::: details Fixed APY (F-APY)
A "fixed" APY **cannot** be changed by [Vault Creators](/terminology#vault-creator). Vaults with a fixed APY can be integrated with a [DAO](/terminology#decentralized-autonomous-organization-dao) where members can vote only on changing the Reward Frequency and whether more tokens are needed to be added to the Predetermined Reward Pool from the DAO treasury.
:::

::: details Variable APY (V-APY)
A "variable" APY **can** be changed by [Vault Creators](/terminology#vault-creator). Vaults with variable APY can be integrated with a [DAO](/terminology#decentralized-autonomous-organization-dao) where members can vote on changing the Reward Frequency, APY, and whether more tokens are needed to be added to the Predetermined Reward Pool from the DAO treasury.
:::

::: tip
Vault APY **does not adjust automatically** regarding how the [associated token](/terminology#associated-token) is performing or trading much like a [yield farm](/terminology#yield-farm) would represent.
:::

## 4. Locked Vault vs. Liquid Vault

::: details Locked Vault
The initial deposit is "locked" into the Vault, similar to how a [staking program](/terminology#staking) would behave. [The User (depositor)](/terminology#the-user) must wait until the [Reward Frequency](/terminology#reward-frequency) timer has completed at least one [Reward Cycle](/terminology#reward-cycle) before being able to withdraw their initial token amount + rewards.

*Locked Vaults are meant for projects that prefer to reduce token volatility.*
:::

::: details Liquid Vault
The initial deposit can be withdrawn at any point and does not require waiting for the [Reward Frequency](/terminology#reward-frequency) to complete its Reward Cycle to withdraw the initial deposit. However, withdrawing from a Vault before at least one [Reward Cycle](/terminology#reward-cycle) is complete will not yield you Reward Tokens.

*Liquid Vaults are typical for token projects that do not mind extra volatility for their token.* 
:::

## 5. Risks

Unfortunately, risks are inevitable in the crypto and finance space. That said, it is important to understand the following risks of getting involved in a Vault. 

::: details Participating Project Risk
Any project that plans to participate in creating a Vault for its [associated token](/terminology#associated-token) can simply fail. Whether the development team bails, the project dies out with competition, or worse--gets [rug-pulled](https://www.coindesk.com/learn/crypto-rug-pulls-what-are-they-how-to-avoid-them/)--it is always very important to do proper due diligence to reduce exposure to project risk.
:::

::: details Market Risk
Vaults and their [associated tokens](/terminology#associated-token) are exposed to market risk. Since the Vault APY does not measure the performance of the associated token, it can be easy to forget that the tokens outside of the Vault are trading on the open market and therefore exposed to risky market behavior.
:::

::: details Vault Dry-Up Risk
A Vault that has too high of an [APY](/terminology#annual-percentrage-yield-apy) and does not have Reward Tokens runs the risk of Vaults not living up to its expected lifetime. It is strongly encouraged to [Vault Creators](/terminology#vault-creator) that their reward pool and APY are proportionate so that rewards are not eaten up so quickly. However, it is important to note that sometimes Vault Creators cannot correctly estimate a proportionate [reward pool](/terminology#predetermined-reward-pool) and APY due to market demand exceeding expectations. 
:::

## 6. Benefits

There of course are plenty of reasons why a Vault might be beneficial to a user or project. Here are some other listed miscellaneous benefits:

::: details Staking Programs Without the Extras
Unlike [CLMM](https://coinmarketcap.com/community/articles/65608f0cc54ab771279066a5/)s or [Liquidity Pools](https://dappradar.com/blog/what-is-liquidity-pool-and-liquidity-provider), Vaults do not require borrowing or lending, and neither do they require anything more than the token [The User](/terminology#the-user) wishes to stake at the designated Vault.
:::

::: details Earn by HODLing
[The User](/terminology#the-user) can deposit their tokens into the token-designated Vault and start earning [compound interest](/terminology#compound-interest) on their deposit. 
:::

::: details Customizable Vaults
[Vault Creators](/terminology#vault-creator) are allowed to set their desired [APY](/terminology#annual-percentrage-yield-apy) and [Reward Frequency](/terminology#reward-frequency) when initially creating a Vault. Creators will also have the choice to have the Vault be [Locked](/vault-program-docs/understanding-vaults#_4-locked-vault-vs-liquid-vault) or [Liquid](/vault-program-docs/understanding-vaults#_4-locked-vault-vs-liquid-vault).

*Creators would want to consider all variables, please read [Vault Risks](/vault-program-docs/understanding-vaults#_5-risks).*
:::

::: details Market Hedging
If for example, while exposed to [market risk](/terminology#market-risk) and the value of a Vault's [associated token](/terminology#associated-token) is diminishing in price, a depositor might not be affected as greatly due to the accumulating [rewards](/terminology#rewards) in the Vault offsetting the depositor's losses.
:::

::: details Token Leverage
Opposite from Market Hedging, if let's say a Vault's [associated token](/terminology#associated-token) is accumulating in market value, the depositor would not only be earning unrealized gains from market appreciation, but the depositor would also be gaining extra unrealized gains due to the Vault [rewards](/terminology#rewards).