declare type Cid = { '/': string }

declare class LotusRPC {
  authNew (permissions: string[]): Promise<string>
  authVerify (str: string): Promise<string[]>
  beaconGetEntry (epoch: number): Promise<{ Round: number, Data: string }>
  chainDeleteObj (cid: Cid): Promise<void>
  chainExport (handler: (bytes: string) => {}, epoch: number, bool: boolean, tipSetKey: Cid[]): [() => {}, Promise<void>]
  chainGetBlock (cid: Cid): Promise<any>
  chainGetBlockMessages (cid: Cid): Promise<any>
  chainGetGenesis (): Promise<any>
  chainGetMessage (cid: Cid): Promise<any>
  chainGetNode (str: string): Promise<{ Cid: Cid, Obj: any }>
  chainGetParentMessages (cid: Cid): Promise<Array<{ Cid: Cid, Message: any }>>
  chainGetParentReceipts (cid: Cid): Promise<Array<{ ExitCode: number, Return: string, GasUsed: number }>>
  chainGetPath (tipSetKey: Cid[], tipSetKey1: Cid[]): Promise<Array<{ Type: string, Val: any }>>
  chainGetRandomnessFromBeacon (tipSetKey: Cid[], tag: number, epoch: number, bytes: string): Promise<string>
  chainGetRandomnessFromTickets (tipSetKey: Cid[], tag: number, epoch: number, bytes: string): Promise<string>
  chainGetTipSet (tipSetKey: Cid[]): Promise<any>
  chainGetTipSetByHeight (epoch: number, tipSetKey: Cid[]): Promise<any>
  chainHasObj (cid: Cid): Promise<boolean>
  chainHead (): Promise<any>
  chainNotify (handler: (_: any) => {}): [() => {}, Promise<void>]
  chainReadObj (cid: Cid): Promise<string>
  chainSetHead (tipSetKey: Cid[]): Promise<void>
  chainStatObj (cid: Cid, cid1: Cid): Promise<any>
  chainTipSetWeight (tipSetKey: Cid[]): Promise<any>
  clientCalcCommP (str: string): Promise<any>
  clientDataTransferUpdates (handler: (_: any) => {}): [() => {}, Promise<void>]
  clientDealSize (cid: Cid): Promise<any>
  clientFindData (cid: Cid, _: any): Promise<any>
  clientGenCar (fileRef: any, str: string): Promise<void>
  clientGetDealInfo (cid: Cid): Promise<any>
  clientGetDealUpdates (handler: (_: any) => {}): [() => {}, Promise<void>]
  clientHasLocal (cid: Cid): Promise<boolean>
  clientImport (fileRef: any): Promise<any>
  clientListDataTransfers (): Promise<any>
  clientListDeals (): Promise<any>
  clientListImports (): Promise<any>
  clientMinerQueryOffer (addr: string, cid: Cid, _: any): Promise<any>
  clientQueryAsk (id: any, addr: string): Promise<any>
  clientRemoveImport (storeID: any): Promise<void>
  clientRestartDataTransfer (transferID: any, id: any, bool: boolean): Promise<void>
  clientRetrieve (retrievalOrder: any, _: any): Promise<void>
  clientRetrieveTryRestartInsufficientFunds (addr: string): Promise<void>
  clientRetrieveWithEvents (handler: (_: any) => {}, retrievalOrder: any, _: any): [() => {}, Promise<void>]
  clientStartDeal (_: any): Promise<any>
  closing (handler: (_: any) => {}): [() => {}, Promise<void>]
  createBackup (str: string): Promise<void>
  gasEstimateFeeCap (msg: any, int64: any, tipSetKey: Cid[]): Promise<any>
  gasEstimateGasLimit (msg: any, tipSetKey: Cid[]): Promise<any>
  gasEstimateGasPremium (num: number, addr: string, int64: any, tipSetKey: Cid[]): Promise<any>
  gasEstimateMessageGas (msg: any, _: any, tipSetKey: Cid[]): Promise<any>
  id (): Promise<any>
  logList (): Promise<any>
  logSetLevel (str: string, str1: string): Promise<void>
  marketEnsureAvailable (addr: string, addr1: string, int: any): Promise<Cid>
  minerCreateBlock (_: any): Promise<any>
  minerGetBaseInfo (addr: string, epoch: number, tipSetKey: Cid[]): Promise<any>
  mpoolClear (bool: boolean): Promise<void>
  mpoolGetConfig (): Promise<any>
  mpoolGetNonce (addr: string): Promise<number>
  mpoolPending (tipSetKey: Cid[]): Promise<any>
  mpoolPush (_: any): Promise<Cid>
  mpoolPushMessage (msg: any, _: any): Promise<any>
  mpoolPushUntrusted (_: any): Promise<Cid>
  mpoolSelect (tipSetKey: Cid[], float64: any): Promise<any>
  mpoolSetConfig (_: any): Promise<void>
  mpoolSub (handler: (_: any) => {}): [() => {}, Promise<void>]
  msigAddApprove (addr: string, addr1: string, num: number, addr2: string, addr3: string, bool: boolean): Promise<Cid>
  msigAddCancel (addr: string, addr1: string, num: number, addr2: string, bool: boolean): Promise<Cid>
  msigAddPropose (addr: string, addr1: string, addr2: string, bool: boolean): Promise<Cid>
  msigApprove (addr: string, num: number, addr1: string): Promise<Cid>
  msigApproveTxnHash (addr: string, num: number, addr1: string, addr2: string, int: any, addr3: string, num1: number, bytes: string): Promise<Cid>
  msigCancel (addr: string, num: number, addr1: string, int: any, addr2: string, num1: number, bytes: string): Promise<Cid>
  msigCreate (num: number, _: any, epoch: number, int: any, addr: string, int1: any): Promise<Cid>
  msigGetAvailableBalance (addr: string, tipSetKey: Cid[]): Promise<any>
  msigGetVested (addr: string, tipSetKey: Cid[], tipSetKey1: Cid[]): Promise<any>
  msigGetVestingSchedule (addr: string, tipSetKey: Cid[]): Promise<any>
  msigPropose (addr: string, addr1: string, int: any, addr2: string, num: number, bytes: string): Promise<Cid>
  msigRemoveSigner (addr: string, addr1: string, addr2: string, bool: boolean): Promise<Cid>
  msigSwapApprove (addr: string, addr1: string, num: number, addr2: string, addr3: string, addr4: string): Promise<Cid>
  msigSwapCancel (addr: string, addr1: string, num: number, addr2: string, addr3: string): Promise<Cid>
  msigSwapPropose (addr: string, addr1: string, addr2: string, addr3: string): Promise<Cid>
  netAddrsListen (): Promise<any>
  netAgentVersion (id: any): Promise<string>
  netAutoNatStatus (): Promise<any>
  netBandwidthStats (): Promise<any>
  netBandwidthStatsByPeer (): Promise<any>
  netBandwidthStatsByProtocol (): Promise<any>
  netConnect (addrInfo: any): Promise<void>
  netConnectedness (id: any): Promise<any>
  netDisconnect (id: any): Promise<void>
  netFindPeer (id: any): Promise<any>
  netPeers (): Promise<any>
  netPubsubScores (): Promise<any>
  paychAllocateLane (addr: string): Promise<number>
  paychAvailableFunds (addr: string): Promise<any>
  paychAvailableFundsByFromTo (addr: string, addr1: string): Promise<any>
  paychCollect (addr: string): Promise<Cid>
  paychGet (addr: string, addr1: string, int: any): Promise<any>
  paychGetWaitReady (cid: Cid): Promise<string>
  paychList (): Promise<any>
  paychNewPayment (addr: string, addr1: string, _: any): Promise<any>
  paychSettle (addr: string): Promise<Cid>
  paychStatus (addr: string): Promise<any>
  paychVoucherAdd (addr: string, _: any, bytes: string, int: any): Promise<any>
  paychVoucherCheckSpendable (addr: string, _: any, bytes: string, bytes1: string): Promise<boolean>
  paychVoucherCheckValid (addr: string, _: any): Promise<void>
  paychVoucherCreate (addr: string, int: any, num: number): Promise<any>
  paychVoucherList (addr: string): Promise<any>
  paychVoucherSubmit (addr: string, _: any, bytes: string, bytes1: string): Promise<Cid>
  shutdown (): Promise<void>
  stateAccountKey (addr: string, tipSetKey: Cid[]): Promise<string>
  stateAllMinerFaults (epoch: number, tipSetKey: Cid[]): Promise<any>
  stateCall (msg: any, tipSetKey: Cid[]): Promise<any>
  stateChangedActors (cid: Cid, cid1: Cid): Promise<any>
  stateCirculatingSupply (tipSetKey: Cid[]): Promise<any>
  stateCompute (epoch: number, _: any, tipSetKey: Cid[]): Promise<any>
  stateDealProviderCollateralBounds (paddedPieceSize: any, bool: boolean, tipSetKey: Cid[]): Promise<any>
  stateGetActor (addr: string, tipSetKey: Cid[]): Promise<any>
  stateGetReceipt (cid: Cid, tipSetKey: Cid[]): Promise<any>
  stateListActors (tipSetKey: Cid[]): Promise<any>
  stateListMessages (msg: any, tipSetKey: Cid[], epoch: number): Promise<any>
  stateListMiners (tipSetKey: Cid[]): Promise<any>
  stateLookupID (addr: string, tipSetKey: Cid[]): Promise<string>
  stateMarketBalance (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMarketDeals (tipSetKey: Cid[]): Promise<any>
  stateMarketParticipants (tipSetKey: Cid[]): Promise<any>
  stateMarketStorageDeal (dealID: any, tipSetKey: Cid[]): Promise<any>
  stateMinerActiveSectors (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerAvailableBalance (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerDeadlines (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerFaults (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerInfo (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerInitialPledgeCollateral (addr: string, sectorPreCommitInfo: any, tipSetKey: Cid[]): Promise<any>
  stateMinerPartitions (addr: string, num: number, tipSetKey: Cid[]): Promise<any>
  stateMinerPower (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerPreCommitDepositForPower (addr: string, sectorPreCommitInfo: any, tipSetKey: Cid[]): Promise<any>
  stateMinerProvingDeadline (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerRecoveries (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerSectorCount (addr: string, tipSetKey: Cid[]): Promise<any>
  stateMinerSectors (addr: string, _: any, tipSetKey: Cid[]): Promise<any>
  stateMsgGasCost (cid: Cid, tipSetKey: Cid[]): Promise<any>
  stateNetworkName (): Promise<any>
  stateNetworkVersion (tipSetKey: Cid[]): Promise<any>
  stateReadState (addr: string, tipSetKey: Cid[]): Promise<any>
  stateReplay (tipSetKey: Cid[], cid: Cid): Promise<any>
  stateSearchMsg (cid: Cid): Promise<any>
  stateSectorExpiration (addr: string, sectorNumber: any, tipSetKey: Cid[]): Promise<any>
  stateSectorGetInfo (addr: string, sectorNumber: any, tipSetKey: Cid[]): Promise<any>
  stateSectorPartition (addr: string, sectorNumber: any, tipSetKey: Cid[]): Promise<any>
  stateSectorPreCommitInfo (addr: string, sectorNumber: any, tipSetKey: Cid[]): Promise<any>
  stateVMCirculatingSupplyInternal (tipSetKey: Cid[]): Promise<any>
  stateVerifiedClientStatus (addr: string, tipSetKey: Cid[]): Promise<any>
  stateVerifiedRegistryRootKey (tipSetKey: Cid[]): Promise<string>
  stateVerifierStatus (addr: string, tipSetKey: Cid[]): Promise<any>
  stateWaitMsg (cid: Cid, num: number): Promise<any>
  stateWaitMsgLimited (cid: Cid, num: number, epoch: number): Promise<any>
  syncCheckBad (cid: Cid): Promise<string>
  syncCheckpoint (tipSetKey: Cid[]): Promise<void>
  syncIncomingBlocks (handler: (_: any) => {}): [() => {}, Promise<void>]
  syncMarkBad (cid: Cid): Promise<void>
  syncState (): Promise<any>
  syncSubmitBlock (_: any): Promise<void>
  syncUnmarkAllBad (): Promise<void>
  syncUnmarkBad (cid: Cid): Promise<void>
  syncValidateTipset (tipSetKey: Cid[]): Promise<boolean>
  version (): Promise<any>
  walletBalance (addr: string): Promise<any>
  walletDefaultAddress (): Promise<string>
  walletDelete (addr: string): Promise<void>
  walletExport (addr: string): Promise<any>
  walletHas (addr: string): Promise<boolean>
  walletImport (_: any): Promise<string>
  walletList (): Promise<any>
  walletNew (keyType: any): Promise<string>
  walletSetDefault (addr: string): Promise<void>
  walletSign (addr: string, bytes: string): Promise<any>
  walletSignMessage (addr: string, msg: any): Promise<any>
  walletValidateAddress (str: string): Promise<string>
  walletVerify (addr: string, bytes: string, _: any): Promise<boolean>
}

export { LotusRPC, Cid }
