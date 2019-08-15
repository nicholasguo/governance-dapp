import { newWeb3, newKitFromWeb3 } from '@celo/contractkit'
export const web3 = newWeb3("https://alfajores-infura.celo-testnet.org");
export const kit = newKitFromWeb3(web3)
// Validator 0
export const account = '0x456f41406b32c45d59e539e4bba3d7898c3584da'

