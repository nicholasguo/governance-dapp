import BigNumber from "bignumber.js";
import { kit } from "./root"

export async function getDeposits(address: string) {
  const bondedDeposits = await kit.contracts.getBondedDeposits()
  return bondedDeposits.getDeposits(address)
}

// TODO(asa): Add weight to `Deposit` in contractkit
export async function getDepositMultiplier(value: any, noticePeriod: any) {
  const bondedDeposits = await kit._web3Contracts.getBondedDeposits()
  const weight = await bondedDeposits.methods.getDepositWeight(value.toString(), noticePeriod.toString()).call()
  return weight / value
}
