import { newWeb3, newKitFromWeb3, newKit } from '@celo/contractkit'
export const web3 = newWeb3("https://integration-infura.celo-testnet.org")
web3.eth.getBlock('latest').then(console.log)
export const kit = newKit("https://integration-infura.celo-testnet.org")
export const kit3 = newKitFromWeb3(web3)
// Validator 0
export const accountAddress = '0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95'
