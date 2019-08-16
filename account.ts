import BigNumber from "bignumber.js";
import { kit } from "./root"

export async function getDeposits(address: string) {
  const bondedDeposits = await kit.contracts.getBondedDeposits()
  return bondedDeposits.getDeposits(address)
}

export async function getValidatorGroups() {
  const validators = await kit.contracts.getValidators()
  return validators.getRegisteredValidatorGroups()
}

export async function vote(validatorGroup) {
  const validators = await kit.contracts.getValidators()
  await validators.vote(validatorGroup)
}

export async function revokeVote() {
  const validators = await kit.contracts.getValidators()
  await validators.revokeVote()
}
