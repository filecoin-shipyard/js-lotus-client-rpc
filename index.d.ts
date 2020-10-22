declare type Cid = { '/': string }
declare type BeaconEntry = { Round: number, Data: string }
declare type Ticket = { VRFProof: string }
declare type ElectionProof = { WinCount: number, VRFProof: string }
declare type PoStProof = { PoStProof: number, ProofBytes: string }
declare type Signature = { Type: number, Data: string }
declare type BlockHeader = { Miner: string, Ticket: Ticket, ElectionProof: ElectionProof, BeaconEntries: Array<BeaconEntry>, WinPoStProof: Array<PoStProof>, Parents: Array<Cid>, ParentWeight: string, Height: number, ParentStateRoot: Cid, ParentMessageReceipts: Cid, Messages: Cid, BLSAggregate: Signature, Timestamp: number, BlockSig: Signature, ForkSignaling: number, ParentBaseFee: string }
declare type Message = { Version: number, To: string, From: string, Nonce: number, Value: string, GasLimit: number, GasFeeCap: string, GasPremium: string, Method: number, Params: string }
declare type SignedMessage = { Message: Message, Signature: Signature }
declare type BlockMessages = { BlsMessages: Array<Message>, SecpkMessages: Array<SignedMessage>, Cids: Array<Cid> }
declare type ExpTipSet = { Cids: Array<Cid>, Blocks: Array<BlockHeader>, Height: number }
declare type TipSet = { Cids: Array<Cid>, Blocks: Array<BlockHeader>, Height: number }
declare type IpldObject = { Cid: Cid, Obj: any }
declare type Message1 = { Cid: Cid, Message: Message }
declare type MessageReceipt = { ExitCode: number, Return: string, GasUsed: number }
declare type HeadChange = { Type: string, Val: TipSet }
declare type ObjStat = { Size: number, Links: number }
declare type CommPRet = { Root: Cid, Size: number }
declare type DataTransferChannel = { TransferID: number, Status: number, BaseCID: Cid, IsInitiator: boolean, IsSender: boolean, Voucher: string, Message: string, OtherPeer: string, Transferred: number }
declare type DataSize = { PayloadSize: number, PieceSize: number }
declare type RetrievalPeer = { Address: string, ID: string, PieceCID: Cid }
declare type QueryOffer = { Err: string, Root: Cid, Piece: Cid, Size: number, MinPrice: string, UnsealPrice: string, PaymentInterval: number, PaymentIntervalIncrease: number, Miner: string, MinerPeer: RetrievalPeer }
declare type FileRef = { Path: string, IsCAR: boolean }
declare type DataRef = { TransferType: string, Root: Cid, PieceCid: Cid, PieceSize: number }
declare type Time = {}
declare type DealInfo = { ProposalCid: Cid, State: number, Message: string, Provider: string, DataRef: DataRef, PieceCID: Cid, Size: number, PricePerEpoch: string, Duration: number, DealID: number, CreationTime: Time, Verified: boolean }
declare type ImportRes = { Root: Cid, ImportID: number }
declare type Import = { Key: number, Err: string, Root: Cid, Source: string, FilePath: string }
declare type StorageAsk = { Price: string, VerifiedPrice: string, MinPieceSize: number, MaxPieceSize: number, Miner: string, Timestamp: number, Expiry: number, SeqNo: number }
declare type RetrievalOrder = { Root: Cid, Piece: Cid, Size: number, Total: string, UnsealPrice: string, PaymentInterval: number, PaymentIntervalIncrease: number, Client: string, Miner: string, MinerPeer: RetrievalPeer }
declare type RetrievalEvent = { Event: number, Status: number, BytesReceived: number, FundsSpent: string, Err: string }
declare type StartDealParams = { Data: DataRef, Wallet: string, Miner: string, EpochPrice: string, MinBlocksDuration: number, ProviderCollateral: string, DealStartEpoch: number, FastRetrieval: boolean, VerifiedDeal: boolean }
declare type MessageSendSpec = { MaxFee: string }
declare type BlockMsg = { Header: BlockHeader, BlsMessages: Array<Cid>, SecpkMessages: Array<Cid> }
declare type BlockTemplate = { Miner: string, Parents: Cid[], Ticket: Ticket, Eproof: ElectionProof, BeaconValues: Array<BeaconEntry>, Messages: Array<SignedMessage>, Epoch: number, Timestamp: number, WinningPoStProof: Array<PoStProof> }
declare type SectorInfo = { SealProof: number, SectorNumber: number, SealedCID: Cid }
declare type MiningBaseInfo = { MinerPower: string, NetworkPower: string, Sectors: Array<SectorInfo>, WorkerKey: string, SectorSize: number, PrevBeaconEntry: BeaconEntry, BeaconEntries: Array<BeaconEntry>, EligibleForMining: boolean }
declare type MpoolConfig = { PriorityAddrs: Array<string>, SizeLimitHigh: number, SizeLimitLow: number, ReplaceByFeeRatio: number, PruneCooldown: number, GasLimitOverestimation: number }
declare type MpoolUpdate = { Type: number, Message: SignedMessage }
declare type MsigVesting = { InitialBalance: string, StartEpoch: number, UnlockDuration: number }
declare type AddrInfo = { ID: string, Addrs: Array<any> }
declare type NatInfo = { Reachability: number, PublicAddr: string }
declare type Stats = { TotalIn: number, TotalOut: number, RateIn: number, RateOut: number }
declare type TopicScoreSnapshot = { TimeInMesh: number, FirstMessageDeliveries: number, MeshMessageDeliveries: number, InvalidMessageDeliveries: number }
declare type PeerScoreSnapshot = { Score: number, Topics: { [k: string]: TopicScoreSnapshot }, AppSpecificScore: number, IPColocationFactor: number, BehaviourPenalty: number }
declare type PubsubScore = { ID: string, Score: PeerScoreSnapshot }
declare type ChannelAvailableFunds = { Channel: string, From: string, To: string, ConfirmedAmt: string, PendingAmt: string, PendingWaitSentinel: Cid, QueuedAmt: string, VoucherReedeemedAmt: string }
declare type ChannelInfo = { Channel: string, WaitSentinel: Cid }
declare type ModVerifyParams = { Actor: string, Method: number, Data: string }
declare type Merge = { Lane: number, Nonce: number }
declare type SignedVoucher = { ChannelAddr: string, TimeLockMin: number, TimeLockMax: number, SecretPreimage: string, Extra: ModVerifyParams, Lane: number, Nonce: number, Amount: string, MinSettleHeight: number, Merges: Array<Merge>, Signature: Signature }
declare type PaymentInfo = { Channel: string, WaitSentinel: Cid, Vouchers: Array<SignedVoucher> }
declare type VoucherSpec = { Amount: string, TimeLockMin: number, TimeLockMax: number, MinSettle: number, Extra: ModVerifyParams }
declare type PaychStatus = { ControlAddr: string, Direction: number }
declare type VoucherCreateResult = { Voucher: SignedVoucher, Shortfall: string }
declare type Fault = { Miner: string, Epoch: number }
declare type Loc = { File: string, Line: number, Function: string }
declare type GasTrace = { Name: string, Location: Array<Loc>, TotalGas: number, ComputeGas: number, StorageGas: number, TotalVirtualGas: number, VirtualComputeGas: number, VirtualStorageGas: number, TimeTaken: number, Extra: any, Callers: Array<number> }
declare type ExecutionTrace = { Msg: Message, MsgRct: MessageReceipt, Error: string, Duration: number, GasCharges: Array<GasTrace>, Subcalls: ExecutionTrace[] }
declare type InvocResult = { MsgCid: Cid, Msg: Message, MsgRct: MessageReceipt, ExecutionTrace: ExecutionTrace, Error: string, Duration: number }
declare type Actor = { Code: Cid, Head: Cid, Nonce: number, Balance: string }
declare type ComputeStateOutput = { Root: Cid, Trace: Array<InvocResult> }
declare type DealCollateralBounds = { Min: string, Max: string }
declare type MarketBalance = { Escrow: string, Locked: string }
declare type DealProposal = { PieceCID: Cid, PieceSize: number, VerifiedDeal: boolean, Client: string, Provider: string, Label: string, StartEpoch: number, EndEpoch: number, StoragePricePerEpoch: string, ProviderCollateral: string, ClientCollateral: string }
declare type DealState = { SectorStartEpoch: number, LastUpdatedEpoch: number, SlashEpoch: number }
declare type MarketDeal = { Proposal: DealProposal, State: DealState }
declare type SectorOnChainInfo = { SectorNumber: number, SealProof: number, SealedCID: Cid, DealIDs: Array<number>, Activation: number, Expiration: number, DealWeight: string, VerifiedDealWeight: string, InitialPledge: string, ExpectedDayReward: string, ExpectedStoragePledge: string }
declare type BitField = {}
declare type Deadline = { PostSubmissions: BitField }
declare type MinerInfo = { Owner: string, Worker: string, NewWorker: string, ControlAddresses: Array<string>, WorkerChangeEpoch: number, PeerId: string, Multiaddrs: Array<string>, SealProofType: number, SectorSize: number, WindowPoStPartitionSectors: number, ConsensusFaultElapsed: number }
declare type SectorPreCommitInfo = { SealProof: number, SectorNumber: number, SealedCID: Cid, SealRandEpoch: number, DealIDs: Array<number>, Expiration: number, ReplaceCapacity: boolean, ReplaceSectorDeadline: number, ReplaceSectorPartition: number, ReplaceSectorNumber: number }
declare type Partition = { AllSectors: BitField, FaultySectors: BitField, RecoveringSectors: BitField, LiveSectors: BitField, ActiveSectors: BitField }
declare type Claim = { RawBytePower: string, QualityAdjPower: string }
declare type MinerPower = { MinerPower: Claim, TotalPower: Claim, HasMinPower: boolean }
declare type Info = { CurrentEpoch: number, PeriodStart: number, Index: number, Open: number, Close: number, Challenge: number, FaultCutoff: number, WPoStPeriodDeadlines: number, WPoStProvingPeriod: number, WPoStChallengeWindow: number, WPoStChallengeLookback: number, FaultDeclarationCutoff: number }
declare type MinerSectors = { Live: number, Active: number, Faulty: number }
declare type MsgGasCost = { Message: Cid, GasUsed: string, BaseFeeBurn: string, OverEstimationBurn: string, MinerPenalty: string, MinerTip: string, Refund: string, TotalCost: string }
declare type ActorState = { Balance: string, State: any }
declare type MsgLookup = { Message: Cid, Receipt: MessageReceipt, ReturnDec: any, TipSet: Cid[], Height: number }
declare type SectorExpiration = { OnTime: number, Early: number }
declare type SectorLocation = { Deadline: number, Partition: number }
declare type SectorPreCommitOnChainInfo = { Info: SectorPreCommitInfo, PreCommitDeposit: string, PreCommitEpoch: number, DealWeight: string, VerifiedDealWeight: string }
declare type CirculatingSupply = { FilVested: string, FilMined: string, FilBurnt: string, FilLocked: string, FilCirculating: string }
declare type ActiveSync = { Base: TipSet, Target: TipSet, Stage: number, Height: number, Start: Time, End: Time, Message: string }
declare type SyncState = { ActiveSyncs: Array<ActiveSync>, VMApplied: number }
declare type Version = { Version: string, APIVersion: number, BlockDelay: number }
declare type KeyInfo = { Type: string, PrivateKey: string }
declare class LotusRPC {
  constructor (provider: any, options: { schema: any })
  authNew (permission: Array<string>): Promise<string>
  authVerify (str: string): Promise<Array<string>>
  beaconGetEntry (chainEpoch: number): Promise<BeaconEntry>
  chainDeleteObj (cid: Cid): Promise<void>
  chainExport (chainEpoch: number, bool: boolean, tipSetKey: Cid[]): AsyncIterable<string>
  chainGetBlock (cid: Cid): Promise<BlockHeader>
  chainGetBlockMessages (cid: Cid): Promise<BlockMessages>
  chainGetGenesis (): Promise<TipSet>
  chainGetMessage (cid: Cid): Promise<Message>
  chainGetNode (str: string): Promise<IpldObject>
  chainGetParentMessages (cid: Cid): Promise<Array<Message1>>
  chainGetParentReceipts (cid: Cid): Promise<Array<MessageReceipt>>
  chainGetPath (tipSetKey: Cid[], tipSetKey1: Cid[]): Promise<Array<HeadChange>>
  chainGetRandomnessFromBeacon (tipSetKey: Cid[], domainSeparationTag: number, chainEpoch: number, bytes: string): Promise<string>
  chainGetRandomnessFromTickets (tipSetKey: Cid[], domainSeparationTag: number, chainEpoch: number, bytes: string): Promise<string>
  chainGetTipSet (tipSetKey: Cid[]): Promise<TipSet>
  chainGetTipSetByHeight (chainEpoch: number, tipSetKey: Cid[]): Promise<TipSet>
  chainHasObj (cid: Cid): Promise<boolean>
  chainHead (): Promise<TipSet>
  chainNotify (): AsyncIterable<Array<HeadChange>>
  chainReadObj (cid: Cid): Promise<string>
  chainSetHead (tipSetKey: Cid[]): Promise<void>
  chainStatObj (cid: Cid, cid1: Cid): Promise<ObjStat>
  chainTipSetWeight (tipSetKey: Cid[]): Promise<string>
  clientCalcCommP (str: string): Promise<CommPRet>
  clientDataTransferUpdates (): AsyncIterable<DataTransferChannel>
  clientDealSize (cid: Cid): Promise<DataSize>
  clientFindData (cid: Cid, cid1: Cid): Promise<Array<QueryOffer>>
  clientGenCar (fileRef: FileRef, str: string): Promise<void>
  clientGetDealInfo (cid: Cid): Promise<DealInfo>
  clientGetDealUpdates (): AsyncIterable<DealInfo>
  clientHasLocal (cid: Cid): Promise<boolean>
  clientImport (fileRef: FileRef): Promise<ImportRes>
  clientListDataTransfers (): Promise<Array<DataTransferChannel>>
  clientListDeals (): Promise<Array<DealInfo>>
  clientListImports (): Promise<Array<Import>>
  clientMinerQueryOffer (address: string, cid: Cid, cid1: Cid): Promise<QueryOffer>
  clientQueryAsk (id: string, address: string): Promise<StorageAsk>
  clientRemoveImport (storeID: number): Promise<void>
  clientRestartDataTransfer (transferID: number, id: string, bool: boolean): Promise<void>
  clientRetrieve (retrievalOrder: RetrievalOrder, fileRef: FileRef): Promise<void>
  clientRetrieveTryRestartInsufficientFunds (address: string): Promise<void>
  clientRetrieveWithEvents (retrievalOrder: RetrievalOrder, fileRef: FileRef): AsyncIterable<RetrievalEvent>
  clientStartDeal (startDealParams: StartDealParams): Promise<Cid>
  closing (): AsyncIterable<{}>
  createBackup (str: string): Promise<void>
  gasEstimateFeeCap (message: Message, int: number, tipSetKey: Cid[]): Promise<string>
  gasEstimateGasLimit (message: Message, tipSetKey: Cid[]): Promise<number>
  gasEstimateGasPremium (uint: number, address: string, int: number, tipSetKey: Cid[]): Promise<string>
  gasEstimateMessageGas (message: Message, messageSendSpec: MessageSendSpec, tipSetKey: Cid[]): Promise<Message>
  id (): Promise<string>
  logList (): Promise<Array<string>>
  logSetLevel (str: string, str1: string): Promise<void>
  marketEnsureAvailable (address: string, address1: string, bigInt: string): Promise<Cid>
  minerCreateBlock (blockTemplate: BlockTemplate): Promise<BlockMsg>
  minerGetBaseInfo (address: string, chainEpoch: number, tipSetKey: Cid[]): Promise<MiningBaseInfo>
  mpoolClear (bool: boolean): Promise<void>
  mpoolGetConfig (): Promise<MpoolConfig>
  mpoolGetNonce (address: string): Promise<number>
  mpoolPending (tipSetKey: Cid[]): Promise<Array<SignedMessage>>
  mpoolPush (signedMessage: SignedMessage): Promise<Cid>
  mpoolPushMessage (message: Message, messageSendSpec: MessageSendSpec): Promise<SignedMessage>
  mpoolPushUntrusted (signedMessage: SignedMessage): Promise<Cid>
  mpoolSelect (tipSetKey: Cid[], num: number): Promise<Array<SignedMessage>>
  mpoolSetConfig (mpoolConfig: MpoolConfig): Promise<void>
  mpoolSub (): AsyncIterable<MpoolUpdate>
  msigAddApprove (address: string, address1: string, uint: number, address2: string, address3: string, bool: boolean): Promise<Cid>
  msigAddCancel (address: string, address1: string, uint: number, address2: string, bool: boolean): Promise<Cid>
  msigAddPropose (address: string, address1: string, address2: string, bool: boolean): Promise<Cid>
  msigApprove (address: string, uint: number, address1: string): Promise<Cid>
  msigApproveTxnHash (address: string, uint: number, address1: string, address2: string, bigInt: string, address3: string, uint1: number, bytes: string): Promise<Cid>
  msigCancel (address: string, uint: number, address1: string, bigInt: string, address2: string, uint1: number, bytes: string): Promise<Cid>
  msigCreate (uint: number, address: Array<string>, chainEpoch: number, bigInt: string, address1: string, bigInt1: string): Promise<Cid>
  msigGetAvailableBalance (address: string, tipSetKey: Cid[]): Promise<string>
  msigGetVested (address: string, tipSetKey: Cid[], tipSetKey1: Cid[]): Promise<string>
  msigGetVestingSchedule (address: string, tipSetKey: Cid[]): Promise<MsigVesting>
  msigPropose (address: string, address1: string, bigInt: string, address2: string, uint: number, bytes: string): Promise<Cid>
  msigRemoveSigner (address: string, address1: string, address2: string, bool: boolean): Promise<Cid>
  msigSwapApprove (address: string, address1: string, uint: number, address2: string, address3: string, address4: string): Promise<Cid>
  msigSwapCancel (address: string, address1: string, uint: number, address2: string, address3: string): Promise<Cid>
  msigSwapPropose (address: string, address1: string, address2: string, address3: string): Promise<Cid>
  netAddrsListen (): Promise<AddrInfo>
  netAgentVersion (id: string): Promise<string>
  netAutoNatStatus (): Promise<NatInfo>
  netBandwidthStats (): Promise<Stats>
  netBandwidthStatsByPeer (): Promise<{ [k: string]: Stats }>
  netBandwidthStatsByProtocol (): Promise<{ [k: string]: Stats }>
  netConnect (addrInfo: AddrInfo): Promise<void>
  netConnectedness (id: string): Promise<number>
  netDisconnect (id: string): Promise<void>
  netFindPeer (id: string): Promise<AddrInfo>
  netPeers (): Promise<Array<AddrInfo>>
  netPubsubScores (): Promise<Array<PubsubScore>>
  paychAllocateLane (address: string): Promise<number>
  paychAvailableFunds (address: string): Promise<ChannelAvailableFunds>
  paychAvailableFundsByFromTo (address: string, address1: string): Promise<ChannelAvailableFunds>
  paychCollect (address: string): Promise<Cid>
  paychGet (address: string, address1: string, bigInt: string): Promise<ChannelInfo>
  paychGetWaitReady (cid: Cid): Promise<string>
  paychList (): Promise<Array<string>>
  paychNewPayment (address: string, address1: string, voucherSpec: Array<VoucherSpec>): Promise<PaymentInfo>
  paychSettle (address: string): Promise<Cid>
  paychStatus (address: string): Promise<PaychStatus>
  paychVoucherAdd (address: string, signedVoucher: SignedVoucher, bytes: string, bigInt: string): Promise<string>
  paychVoucherCheckSpendable (address: string, signedVoucher: SignedVoucher, bytes: string, bytes1: string): Promise<boolean>
  paychVoucherCheckValid (address: string, signedVoucher: SignedVoucher): Promise<void>
  paychVoucherCreate (address: string, bigInt: string, uint: number): Promise<VoucherCreateResult>
  paychVoucherList (address: string): Promise<Array<SignedVoucher>>
  paychVoucherSubmit (address: string, signedVoucher: SignedVoucher, bytes: string, bytes1: string): Promise<Cid>
  shutdown (): Promise<void>
  stateAccountKey (address: string, tipSetKey: Cid[]): Promise<string>
  stateAllMinerFaults (chainEpoch: number, tipSetKey: Cid[]): Promise<Array<Fault>>
  stateCall (message: Message, tipSetKey: Cid[]): Promise<InvocResult>
  stateChangedActors (cid: Cid, cid1: Cid): Promise<{ [k: string]: Actor }>
  stateCirculatingSupply (tipSetKey: Cid[]): Promise<string>
  stateCompute (chainEpoch: number, message: Array<Message>, tipSetKey: Cid[]): Promise<ComputeStateOutput>
  stateDealProviderCollateralBounds (paddedPieceSize: number, bool: boolean, tipSetKey: Cid[]): Promise<DealCollateralBounds>
  stateGetActor (address: string, tipSetKey: Cid[]): Promise<Actor>
  stateGetReceipt (cid: Cid, tipSetKey: Cid[]): Promise<MessageReceipt>
  stateListActors (tipSetKey: Cid[]): Promise<Array<string>>
  stateListMessages (message: Message, tipSetKey: Cid[], chainEpoch: number): Promise<Array<Cid>>
  stateListMiners (tipSetKey: Cid[]): Promise<Array<string>>
  stateLookupID (address: string, tipSetKey: Cid[]): Promise<string>
  stateMarketBalance (address: string, tipSetKey: Cid[]): Promise<MarketBalance>
  stateMarketDeals (tipSetKey: Cid[]): Promise<{ [k: string]: MarketDeal }>
  stateMarketParticipants (tipSetKey: Cid[]): Promise<{ [k: string]: MarketBalance }>
  stateMarketStorageDeal (dealID: number, tipSetKey: Cid[]): Promise<MarketDeal>
  stateMinerActiveSectors (address: string, tipSetKey: Cid[]): Promise<Array<SectorOnChainInfo>>
  stateMinerAvailableBalance (address: string, tipSetKey: Cid[]): Promise<string>
  stateMinerDeadlines (address: string, tipSetKey: Cid[]): Promise<Array<Deadline>>
  stateMinerFaults (address: string, tipSetKey: Cid[]): Promise<BitField>
  stateMinerInfo (address: string, tipSetKey: Cid[]): Promise<MinerInfo>
  stateMinerInitialPledgeCollateral (address: string, sectorPreCommitInfo: SectorPreCommitInfo, tipSetKey: Cid[]): Promise<string>
  stateMinerPartitions (address: string, uint: number, tipSetKey: Cid[]): Promise<Array<Partition>>
  stateMinerPower (address: string, tipSetKey: Cid[]): Promise<MinerPower>
  stateMinerPreCommitDepositForPower (address: string, sectorPreCommitInfo: SectorPreCommitInfo, tipSetKey: Cid[]): Promise<string>
  stateMinerProvingDeadline (address: string, tipSetKey: Cid[]): Promise<Info>
  stateMinerRecoveries (address: string, tipSetKey: Cid[]): Promise<BitField>
  stateMinerSectorCount (address: string, tipSetKey: Cid[]): Promise<MinerSectors>
  stateMinerSectors (address: string, bitField: BitField, tipSetKey: Cid[]): Promise<Array<SectorOnChainInfo>>
  stateMsgGasCost (cid: Cid, tipSetKey: Cid[]): Promise<MsgGasCost>
  stateNetworkName (): Promise<string>
  stateNetworkVersion (tipSetKey: Cid[]): Promise<number>
  stateReadState (address: string, tipSetKey: Cid[]): Promise<ActorState>
  stateReplay (tipSetKey: Cid[], cid: Cid): Promise<InvocResult>
  stateSearchMsg (cid: Cid): Promise<MsgLookup>
  stateSectorExpiration (address: string, sectorNumber: number, tipSetKey: Cid[]): Promise<SectorExpiration>
  stateSectorGetInfo (address: string, sectorNumber: number, tipSetKey: Cid[]): Promise<SectorOnChainInfo>
  stateSectorPartition (address: string, sectorNumber: number, tipSetKey: Cid[]): Promise<SectorLocation>
  stateSectorPreCommitInfo (address: string, sectorNumber: number, tipSetKey: Cid[]): Promise<SectorPreCommitOnChainInfo>
  stateVMCirculatingSupplyInternal (tipSetKey: Cid[]): Promise<CirculatingSupply>
  stateVerifiedClientStatus (address: string, tipSetKey: Cid[]): Promise<string>
  stateVerifiedRegistryRootKey (tipSetKey: Cid[]): Promise<string>
  stateVerifierStatus (address: string, tipSetKey: Cid[]): Promise<string>
  stateWaitMsg (cid: Cid, uint: number): Promise<MsgLookup>
  stateWaitMsgLimited (cid: Cid, uint: number, chainEpoch: number): Promise<MsgLookup>
  syncCheckBad (cid: Cid): Promise<string>
  syncCheckpoint (tipSetKey: Cid[]): Promise<void>
  syncIncomingBlocks (): AsyncIterable<BlockHeader>
  syncMarkBad (cid: Cid): Promise<void>
  syncState (): Promise<SyncState>
  syncSubmitBlock (blockMsg: BlockMsg): Promise<void>
  syncUnmarkAllBad (): Promise<void>
  syncUnmarkBad (cid: Cid): Promise<void>
  syncValidateTipset (tipSetKey: Cid[]): Promise<boolean>
  version (): Promise<Version>
  walletBalance (address: string): Promise<string>
  walletDefaultAddress (): Promise<string>
  walletDelete (address: string): Promise<void>
  walletExport (address: string): Promise<KeyInfo>
  walletHas (address: string): Promise<boolean>
  walletImport (keyInfo: KeyInfo): Promise<string>
  walletList (): Promise<Array<string>>
  walletNew (keyType: string): Promise<string>
  walletSetDefault (address: string): Promise<void>
  walletSign (address: string, bytes: string): Promise<Signature>
  walletSignMessage (address: string, message: Message): Promise<SignedMessage>
  walletValidateAddress (str: string): Promise<string>
  walletVerify (address: string, bytes: string, signature: Signature): Promise<boolean>
}
export { LotusRPC, BeaconEntry, Ticket, ElectionProof, PoStProof, Signature, BlockHeader, Message, SignedMessage, BlockMessages, ExpTipSet, TipSet, IpldObject, Message1, MessageReceipt, HeadChange, ObjStat, CommPRet, DataTransferChannel, DataSize, RetrievalPeer, QueryOffer, FileRef, DataRef, Time, DealInfo, ImportRes, Import, StorageAsk, RetrievalOrder, RetrievalEvent, StartDealParams, MessageSendSpec, BlockMsg, BlockTemplate, SectorInfo, MiningBaseInfo, MpoolConfig, MpoolUpdate, MsigVesting, AddrInfo, NatInfo, Stats, TopicScoreSnapshot, PeerScoreSnapshot, PubsubScore, ChannelAvailableFunds, ChannelInfo, ModVerifyParams, Merge, SignedVoucher, PaymentInfo, VoucherSpec, PaychStatus, VoucherCreateResult, Fault, Loc, GasTrace, ExecutionTrace, InvocResult, Actor, ComputeStateOutput, DealCollateralBounds, MarketBalance, DealProposal, DealState, MarketDeal, SectorOnChainInfo, BitField, Deadline, MinerInfo, SectorPreCommitInfo, Partition, Claim, MinerPower, Info, MinerSectors, MsgGasCost, ActorState, MsgLookup, SectorExpiration, SectorLocation, SectorPreCommitOnChainInfo, CirculatingSupply, ActiveSync, SyncState, Version, KeyInfo }