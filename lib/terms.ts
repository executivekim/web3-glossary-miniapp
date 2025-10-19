export type Term = {
  slug: string;
  term: string;
  enDefinition: string;
  tags: string[];
  examples?: string[];
};

export const TERMS: Term[] = [
  {
    slug: "airdrop",
    term: "Airdrop",
    enDefinition:
      "Free distribution of tokens to wallets, often to bootstrap usage or reward early adopters.",
    tags: ["token", "launch"],
  },
  {
    slug: "amm",
    term: "AMM",
    enDefinition:
      "Automated Market Maker - a protocol that provides onchain liquidity via bonding curves.",
    tags: ["dex", "liquidity"],
  },
  {
    slug: "l2",
    term: "Layer 2",
    enDefinition:
      "A scaling network built on top of a base layer (e.g., Base) to increase throughput and lower fees.",
    tags: ["scaling", "infra"],
  },
  {
    slug: "erc20",
    term: "ERC-20",
    enDefinition: "A fungible token standard on EVM-compatible chains.",
    tags: ["standard", "token"],
  },
  {
    slug: "ens",
    term: "ENS",
    enDefinition:
      "Ethereum Name Service - human-readable names for addresses (e.g., alice.eth).",
    tags: ["identity"],
  },
  {
    slug: "dao",
    term: "DAO",
    enDefinition:
      "Decentralized Autonomous Organization - a token-governed collective that coordinates onchain.",
    tags: ["governance", "community"],
  },
  {
    slug: "defi",
    term: "DeFi",
    enDefinition:
      "Decentralized Finance - financial services delivered via smart contracts without intermediaries.",
    tags: ["finance", "protocol"],
  },
  {
    slug: "dex",
    term: "DEX",
    enDefinition:
      "Decentralized exchange - a trading venue that matches orders through smart contracts.",
    tags: ["trading", "dex"],
  },
  {
    slug: "fiat-onramp",
    term: "Fiat Onramp",
    enDefinition:
      "Service that lets users swap traditional currency for crypto using cards or bank transfers.",
    tags: ["payments", "infrastructure"],
  },
  {
    slug: "gas-fee",
    term: "Gas Fee",
    enDefinition:
      "Network fee paid to validators for processing transactions and smart contract calls.",
    tags: ["fees", "infra"],
  },
  {
    slug: "governance-token",
    term: "Governance Token",
    enDefinition:
      "Token that grants voting power over upgrades, treasuries, or parameters in a protocol.",
    tags: ["governance", "token"],
  },
  {
    slug: "hot-wallet",
    term: "Hot Wallet",
    enDefinition:
      "Wallet connected to the internet, optimized for frequent transactions but higher risk surface.",
    tags: ["wallet", "security"],
  },
  {
    slug: "cold-storage",
    term: "Cold Storage",
    enDefinition:
      "Offline storage method that keeps private keys away from internet-connected devices.",
    tags: ["wallet", "security"],
  },
  {
    slug: "multi-sig",
    term: "Multi-Sig",
    enDefinition:
      "Wallet setup requiring multiple signatures to authorize a transaction, improving shared security.",
    tags: ["security", "governance"],
  },
  {
    slug: "nft",
    term: "NFT",
    enDefinition:
      "Non-fungible token representing a unique digital asset, collectible, or access right.",
    tags: ["collectibles", "token"],
  },
  {
    slug: "onchain-identity",
    term: "Onchain Identity",
    enDefinition:
      "Composable profile built from wallet activity, credentials, and social proofs recorded onchain.",
    tags: ["identity", "social"],
  },
  {
    slug: "oracle",
    term: "Oracle",
    enDefinition:
      "System that feeds offchain data into smart contracts so they can react to real-world events.",
    tags: ["data", "infrastructure"],
  },
  {
    slug: "staking",
    term: "Staking",
    enDefinition:
      "Locking tokens to secure a proof-of-stake network in exchange for block rewards.",
    tags: ["security", "yield"],
  },
  {
    slug: "stablecoin",
    term: "Stablecoin",
    enDefinition:
      "Token designed to maintain a stable value, typically pegged to a fiat currency like USD.",
    tags: ["payments", "token"],
  },
  {
    slug: "supply-cap",
    term: "Supply Cap",
    enDefinition:
      "Maximum number of tokens that can ever exist for a given crypto asset.",
    tags: ["tokenomics", "supply"],
  },
  {
    slug: "tokenomics",
    term: "Tokenomics",
    enDefinition:
      "Economic design of a token, covering issuance, incentives, distribution, and utility.",
    tags: ["tokenomics", "design"],
  },
  {
    slug: "tvl",
    term: "TVL",
    enDefinition:
      "Total Value Locked - sum of assets deposited in a DeFi protocol or ecosystem.",
    tags: ["metrics", "defi"],
  },
  {
    slug: "validator",
    term: "Validator",
    enDefinition:
      "Network participant that proposes and verifies blocks, earning rewards for honest behavior.",
    tags: ["network", "security"],
  },
  {
    slug: "wallet-seed",
    term: "Wallet Seed",
    enDefinition:
      "Mnemonic phrase of words that can recreate a wallet and all associated private keys.",
    tags: ["wallet", "security"],
  },
  {
    slug: "yield-farming",
    term: "Yield Farming",
    enDefinition:
      "Strategy of moving liquidity across protocols to optimize reward tokens or fees.",
    tags: ["defi", "yield"],
  },
];
