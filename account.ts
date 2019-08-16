import BigNumber from "bignumber.js";
import { kit } from "./root"
import {listenToSignedTxs, requestTxSig, requestAccountAddress } from "@celo/dappkit"
import { Linking } from "expo"
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

export async function deposit(value: any, noticePeriod: any) {
  const bondedDeposits = await kit._web3Contracts.getBondedDeposits()
  const tx = bondedDeposits.methods.deposit(noticePeriod.toString(), {value: value.toString()})
  const meta = {dappName: "governance", requestId: "something", callback: Linking.makeUrl("/foo")}
  listenToSignedTxs(async (signedTxs) => {
    await Promise.all(signedTxs.map((tx) => kit.web3.eth.sendSignedTranaction(tx)))
  })
  requestTxSig(kit.web3, [{tx, txId: 0, from: requestAccountAddress, to: bondedDeposits.options.address, gasCurrency: null}], meta)
}

