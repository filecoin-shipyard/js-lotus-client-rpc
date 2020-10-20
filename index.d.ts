declare type Cid = { '/': string }

declare class LotusRPC {
  authNew (permissions: string[]): string
  authVerify (str: string): string[]
  beaconGetEntry (epoch: number): { Round: number, Data: string }
  chainDeleteObj (cid: Cid): void
  chainExport (handler: (bytes: string) => {}, epoch: number, bool: boolean, tipSetKey: Cid[]): [() => {}, Promise<void>]
  chainGetBlock (cid: Cid): any
  chainGetBlockMessages (cid: Cid): any
  chainGetGenesis (): any
  chainGetMessage (cid: Cid): any
  chainGetNode (str: string): { Cid: Cid, Obj: any }
  chainGetParentMessages (cid: Cid): Array<{ Cid: Cid, Message: any }>
  chainGetParentReceipts (cid: Cid): Array<{ ExitCode: number, Return: string, GasUsed: number }>
  chainGetPath (tipSetKey: Cid[], tipSetKey1: Cid[]): Array<{ Type: string, Val: any }>
  chainGetRandomnessFromBeacon (tipSetKey: Cid[], tag: number, epoch: number, bytes: string): string
  chainGetRandomnessFromTickets (tipSetKey: Cid[], tag: number, epoch: number, bytes: string): string
  chainGetTipSet (tipSetKey: Cid[]): any
  chainGetTipSetByHeight (epoch: number, tipSetKey: Cid[]): any
  chainHasObj (cid: Cid): boolean
  chainHead (): any
  chainNotify (handler: (_: any) => {}): [() => {}, Promise<void>]
  chainReadObj (cid: Cid): string
  chainSetHead (tipSetKey: Cid[]): void
  chainStatObj (cid: Cid, cid1: Cid): any
  chainTipSetWeight (tipSetKey: Cid[]): any
  clientCalcCommP (str: string): any
  clientDataTransferUpdates (handler: (_: any) => {}): [() => {}, Promise<void>]
  clientDealSize (cid: Cid): any
  clientFindData (cid: Cid, _: any): any
  clientGenCar (fileRef: any, str: string): void
  clientGetDealInfo (cid: Cid): any
  clientGetDealUpdates (handler: (_: any) => {}): [() => {}, Promise<void>]
  clientHasLocal (cid: Cid): boolean
  clientImport (fileRef: any): any
  clientListDataTransfers (): any
  clientListDeals (): any
  clientListImports (): any
  clientMinerQueryOffer (addr: string, cid: Cid, _: any): any
  clientQueryAsk (id: any, addr: string): any
  clientRemoveImport (storeID: any): void
  clientRestartDataTransfer (transferID: any, id: any, bool: boolean): void
  clientRetrieve (retrievalOrder: any, _: any): void
  clientRetrieveTryRestartInsufficientFunds (addr: string): void
  clientRetrieveWithEvents (handler: (_: any) => {}, retrievalOrder: any, _: any): [() => {}, Promise<void>]
  clientStartDeal (_: any): any
  closing (handler: (_: any) => {}): [() => {}, Promise<void>]
  createBackup (str: string): void
  gasEstimateFeeCap (msg: any, int64: any, tipSetKey: Cid[]): any
  gasEstimateGasLimit (msg: any, tipSetKey: Cid[]): any
  gasEstimateGasPremium (num: number, addr: string, int64: any, tipSetKey: Cid[]): any
  gasEstimateMessageGas (msg: any, _: any, tipSetKey: Cid[]): any
  id (): any
  logList (): any
  logSetLevel (str: string, str1: string): void
  marketEnsureAvailable (addr: string, addr1: string, int: any): Cid
  minerCreateBlock (_: any): any
  minerGetBaseInfo (addr: string, epoch: number, tipSetKey: Cid[]): any
  mpoolClear (bool: boolean): void
  mpoolGetConfig (): any
  mpoolGetNonce (addr: string): number
  mpoolPending (tipSetKey: Cid[]): any
  mpoolPush (_: any): Cid
  mpoolPushMessage (msg: any, _: any): any
  mpoolPushUntrusted (_: any): Cid
  mpoolSelect (tipSetKey: Cid[], float64: any): any
  mpoolSetConfig (_: any): void
  mpoolSub (handler: (_: any) => {}): [() => {}, Promise<void>]
  msigAddApprove (addr: string, addr1: string, num: number, addr2: string, addr3: string, bool: boolean): Cid
  msigAddCancel (addr: string, addr1: string, num: number, addr2: string, bool: boolean): Cid
  msigAddPropose (addr: string, addr1: string, addr2: string, bool: boolean): Cid
  msigApprove (addr: string, num: number, addr1: string): Cid
  msigApproveTxnHash (addr: string, num: number, addr1: string, addr2: string, int: any, addr3: string, num1: number, bytes: string): Cid
  msigCancel (addr: string, num: number, addr1: string, int: any, addr2: string, num1: number, bytes: string): Cid
  msigCreate (num: number, _: any, epoch: number, int: any, addr: string, int1: any): Cid
  msigGetAvailableBalance (addr: string, tipSetKey: Cid[]): any
  msigGetVested (addr: string, tipSetKey: Cid[], tipSetKey1: Cid[]): any
  msigGetVestingSchedule (addr: string, tipSetKey: Cid[]): any
  msigPropose (addr: string, addr1: string, int: any, addr2: string, num: number, bytes: string): Cid
  msigRemoveSigner (addr: string, addr1: string, addr2: string, bool: boolean): Cid
  msigSwapApprove (addr: string, addr1: string, num: number, addr2: string, addr3: string, addr4: string): Cid
  msigSwapCancel (addr: string, addr1: string, num: number, addr2: string, addr3: string): Cid
  msigSwapPropose (addr: string, addr1: string, addr2: string, addr3: string): Cid
  netAddrsListen (): any
  netAgentVersion (id: any): string
  netAutoNatStatus (): any
  netBandwidthStats (): any
  netBandwidthStatsByPeer (): any
  netBandwidthStatsByProtocol (): any
  netConnect (addrInfo: any): void
  netConnectedness (id: any): any
  netDisconnect (id: any): void
  netFindPeer (id: any): any
  netPeers (): any
  netPubsubScores (): any
  paychAllocateLane (addr: string): number
  paychAvailableFunds (addr: string): any
  paychAvailableFundsByFromTo (addr: string, addr1: string): any
  paychCollect (addr: string): Cid
  paychGet (addr: string, addr1: string, int: any): any
  paychGetWaitReady (cid: Cid): string
  paychList (): any
  paychNewPayment (addr: string, addr1: string, _: any): any
  paychSettle (addr: string): Cid
  paychStatus (addr: string): any
  paychVoucherAdd (addr: string, _: any, bytes: string, int: any): any
  paychVoucherCheckSpendable (addr: string, _: any, bytes: string, bytes1: string): boolean
  paychVoucherCheckValid (addr: string, _: any): void
  paychVoucherCreate (addr: string, int: any, num: number): any
  paychVoucherList (addr: string): any
  paychVoucherSubmit (addr: string, _: any, bytes: string, bytes1: string): Cid
  shutdown (): void
  stateAccountKey (addr: string, tipSetKey: Cid[]): string
  stateAllMinerFaults (epoch: number, tipSetKey: Cid[]): any
  stateCall (msg: any, tipSetKey: Cid[]): any
  stateChangedActors (cid: Cid, cid1: Cid): any
  stateCirculatingSupply (tipSetKey: Cid[]): any
  stateCompute (epoch: number, _: any, tipSetKey: Cid[]): any
  stateDealProviderCollateralBounds (paddedPieceSize: any, bool: boolean, tipSetKey: Cid[]): any
  stateGetActor (addr: string, tipSetKey: Cid[]): any
  stateGetReceipt (cid: Cid, tipSetKey: Cid[]): any
  stateListActors (tipSetKey: Cid[]): any
  stateListMessages (msg: any, tipSetKey: Cid[], epoch: number): any
  stateListMiners (tipSetKey: Cid[]): any
  stateLookupID (addr: string, tipSetKey: Cid[]): string
  stateMarketBalance (addr: string, tipSetKey: Cid[]): any
  stateMarketDeals (tipSetKey: Cid[]): any
  stateMarketParticipants (tipSetKey: Cid[]): any
  stateMarketStorageDeal (dealID: any, tipSetKey: Cid[]): any
  stateMinerActiveSectors (addr: string, tipSetKey: Cid[]): any
  stateMinerAvailableBalance (addr: string, tipSetKey: Cid[]): any
  stateMinerDeadlines (addr: string, tipSetKey: Cid[]): any
  stateMinerFaults (addr: string, tipSetKey: Cid[]): any
  stateMinerInfo (addr: string, tipSetKey: Cid[]): any
  stateMinerInitialPledgeCollateral (addr: string, sectorPreCommitInfo: any, tipSetKey: Cid[]): any
  stateMinerPartitions (addr: string, num: number, tipSetKey: Cid[]): any
  stateMinerPower (addr: string, tipSetKey: Cid[]): any
  stateMinerPreCommitDepositForPower (addr: string, sectorPreCommitInfo: any, tipSetKey: Cid[]): any
  stateMinerProvingDeadline (addr: string, tipSetKey: Cid[]): any
  stateMinerRecoveries (addr: string, tipSetKey: Cid[]): any
  stateMinerSectorCount (addr: string, tipSetKey: Cid[]): any
  stateMinerSectors (addr: string, _: any, tipSetKey: Cid[]): any
  stateMsgGasCost (cid: Cid, tipSetKey: Cid[]): any
  stateNetworkName (): any
  stateNetworkVersion (tipSetKey: Cid[]): any
  stateReadState (addr: string, tipSetKey: Cid[]): any
  stateReplay (tipSetKey: Cid[], cid: Cid): any
  stateSearchMsg (cid: Cid): any
  stateSectorExpiration (addr: string, sectorNumber: any, tipSetKey: Cid[]): any
  stateSectorGetInfo (addr: string, sectorNumber: any, tipSetKey: Cid[]): any
  stateSectorPartition (addr: string, sectorNumber: any, tipSetKey: Cid[]): any
  stateSectorPreCommitInfo (addr: string, sectorNumber: any, tipSetKey: Cid[]): any
  stateVMCirculatingSupplyInternal (tipSetKey: Cid[]): any
  stateVerifiedClientStatus (addr: string, tipSetKey: Cid[]): any
  stateVerifiedRegistryRootKey (tipSetKey: Cid[]): string
  stateVerifierStatus (addr: string, tipSetKey: Cid[]): any
  stateWaitMsg (cid: Cid, num: number): any
  stateWaitMsgLimited (cid: Cid, num: number, epoch: number): any
  syncCheckBad (cid: Cid): string
  syncCheckpoint (tipSetKey: Cid[]): void
  syncIncomingBlocks (handler: (_: any) => {}): [() => {}, Promise<void>]
  syncMarkBad (cid: Cid): void
  syncState (): any
  syncSubmitBlock (_: any): void
  syncUnmarkAllBad (): void
  syncUnmarkBad (cid: Cid): void
  syncValidateTipset (tipSetKey: Cid[]): boolean
  version (): any
  walletBalance (addr: string): any
  walletDefaultAddress (): string
  walletDelete (addr: string): void
  walletExport (addr: string): any
  walletHas (addr: string): boolean
  walletImport (_: any): string
  walletList (): any
  walletNew (keyType: any): string
  walletSetDefault (addr: string): void
  walletSign (addr: string, bytes: string): any
  walletSignMessage (addr: string, msg: any): any
  walletValidateAddress (str: string): string
  walletVerify (addr: string, bytes: string, _: any): boolean
}

export { LotusRPC, Cid }
