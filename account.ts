import BigNumber from "bignumber.js";
import { kit } from "./root"

export async function getDeposits(address: string) {
  const bondedDeposits = await kit.contracts.getBondedDeposits()
  return bondedDeposits.getDeposits(address)
}
