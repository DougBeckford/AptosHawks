// export const candyMachineAddress = "0x6bd0bd2e06121d64df27f9472430c6cda02542a396d20d57a997a12eaf7d5b21";
export const candyMachineAddress = "0xf6813afef3ced561e4707fd38782facfe597e23a5729a91dfa2eb1e2530337b2";

export const collectionName = "Test101"; // Case sensitive!
export const MaxMint = 100
export const COLLECTION_SIZE = 10 

// To remove the background of the dapp to a solid color just delete the "collectionCoverUrl" url below
// Any hosted image can be used
export const collectionCoverUrl = "https://r2aa42v3uaweghlsqfqb4d3vr6vh7egqqhnb3fqxhnigfxkxlcya.arweave.net/joAOarugLEMdcoFgHg91j6p_kNCB2h2WFztQYt1XWLA";
// export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/Qmf1rv2WN9Nw4FuSsZYZ3pchmXPSK8GsRX53QJYWJjCoef"
export const collectionBackgroundUrl = "https://6wnm7eahnmrz3w3a55pu627ibxus563nsfaykske3uuteyj5h77q.arweave.net/9ZrPkAdrI53bYO9fT2voDeku-22RQYVJRN0pMmE9P_8";

export const mode = "test"; // "dev" or "test" or "mainnet"
export let NODE_URL;
export const CONTRACT_ADDRESS = "0x5b71b400de0767bcec88464c33a0c74c839737206883a9379252f4907b8bf30e";
export const SERVICE_NAME = "ftmpad"
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
