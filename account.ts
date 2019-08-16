import BigNumber from "bignumber.js";
import { kit } from "./root"
import {listenToSignedTxs, requestTxSig, requestAccountAddress } from "@celo/dappkit"
import { Linking } from "expo"
import { ValidatorsWrapper } from "@celo/contractkit/lib/wrappers/Validators";
import { TransactionObject } from "web3/eth/types";

export async function getDeposits(address: string) {
  const bondedDeposits = await kit._web3Contracts.getBondedDeposits()
  return bondedDeposits.getDeposits(address)
}

// TODO(asa): Add weight to `Deposit` in contractkit
export async function getDepositMultiplier(value: any, noticePeriod: any) {
  const bondedDeposits = await kit.contracts.getBondedDeposits()
  const weight = await bondedDeposits.methods.getDepositWeight(value.toString(), noticePeriod.toString()).call()
  return weight / value
}

export async function deposit(value: number, noticePeriod: number) {
  await createAccount()
  const bondedDeposits = await kit._web3Contracts.getBondedDeposits()
  const tx = bondedDeposits.methods.deposit(noticePeriod.toString())
  const meta = {dappName: "governance", requestId: "something", callback: Linking.makeUrl("/foo")}
  listenToSignedTxs(async (signedTxs) => {
    await Promise.all(signedTxs.map((tx) => kit.web3.eth.sendSignedTranaction(tx)))
  })
  requestTxSig(kit.web3, [{tx, txId: 0, from: '0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95', to: bondedDeposits.options.address, value: value.toString(), gasCurrency: null}], meta)
}

async function createAccount() {
  const bondedDeposits = await kit._web3Contracts.getBondedDeposits()
  const tx = bondedDeposits.methods.createAccount()
  const meta = {dappName: "governance", requestId: "something", callback: Linking.makeUrl("/foo")}
  listenToSignedTxs(async (signedTxs) => {
    await Promise.all(signedTxs.map((tx) => kit.web3.eth.sendSignedTranaction(tx)))
  })
  requestTxSig(kit.web3, [{tx, txId: 0, from: '0x47e172f6cfb6c7d01c1574fa3e2be7cc73269d95', to: bondedDeposits.options.address, gasCurrency: null}], meta)

}

export async function getValidatorGroups() {
  const validators: ValidatorsWrapper = await kit.contracts.getValidators()
  return validators.getRegisteredValidatorGroups()
}

export async function vote(validatorGroup: string) {
  const validators: ValidatorsWrapper = await kit.contracts.getValidators()
  const validatorsWeb3 = await kit._web3Contracts.getValidators()
  const tx = validators.vote(validatorGroup)
  const meta = {dappName: "governance", requestId: "something", callback: Linking.makeUrl("/foo")}
  listenToSignedTxs(async (signedTxs) => {
    await Promise.all(signedTxs.map((tx) => kit.web3.eth.sendSignedTranaction(tx)))
  })
  requestTxSig(kit.web3, [{tx, txId: 0, from: requestAccountAddress, to: validatorsWeb3.options.address, gasCurrency: null}], meta)
}

export async function revokeVote() {
  const validators: ValidatorsWrapper = await kit.contracts.getValidators()
  const validatorsWeb3 = await kit._web3Contracts.getValidators()
  const tx = validators.revokeVote()
  const meta = {dappName: "governance", requestId: "something", callback: Linking.makeUrl("/foo")}
  listenToSignedTxs(async (signedTxs) => {
    await Promise.all(signedTxs.map((tx) => kit.web3.eth.sendSignedTranaction(tx)))
  })
  requestTxSig(kit.web3, [{tx, txId: 0, from: requestAccountAddress, to: validatorsWeb3.options.address, gasCurrency: null}], meta)
}
