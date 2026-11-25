---
title: Network / RPC
description: Client for Soroban RPC — simulate, send, and poll Soroban smart-contract transactions.
---

# Network / RPC

## rpc.Api.QUERY_EVENTS_INVALID_PARAMS

JSON-RPC error code for every `queryEvents` rejection with typed data.

```ts
const QUERY_EVENTS_INVALID_PARAMS: -32602
```

**Source:** [src/rpc/api.ts:459](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L459)

## rpc.Api.isQueryEventsError

Checks whether a value thrown by `queryEvents` is a JSON-RPC error with
typed `queryEvents` error data.

```ts
isQueryEventsError(err: unknown): err is { code: number; data: QueryEventsErrorData; message?: string }
```

**Parameters**

- **`err`** — `unknown` (required)

**Source:** [src/rpc/api.ts:485](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L485)

## rpc.Api.isSimulationError

Checks if a simulation response indicates an error.

```ts
isSimulationError(sim: SimulateTransactionResponse): sim is SimulateTransactionErrorResponse
```

**Parameters**

- **`sim`** — `SimulateTransactionResponse` (required) — The simulation response to check.

**Returns**

True if the response indicates an error, false otherwise.

**Source:** [src/rpc/api.ts:634](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L634)

## rpc.Api.isSimulationRaw

Checks if a simulation response is in raw (unparsed) form.

```ts
isSimulationRaw(sim: SimulateTransactionResponse | RawSimulateTransactionResponse): sim is RawSimulateTransactionResponse
```

**Parameters**

- **`sim`** — `SimulateTransactionResponse | RawSimulateTransactionResponse` (required) — The simulation response to check.

**Returns**

True if the response is raw, false otherwise.

**Source:** [src/rpc/api.ts:671](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L671)

## rpc.Api.isSimulationRestore

Checks if a simulation response indicates that a restoration is needed.

```ts
isSimulationRestore(sim: SimulateTransactionResponse): sim is SimulateTransactionRestoreResponse
```

**Parameters**

- **`sim`** — `SimulateTransactionResponse` (required) — The simulation response to check.

**Returns**

True if the response indicates a restoration is needed, false otherwise.

**Source:** [src/rpc/api.ts:656](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L656)

## rpc.Api.isSimulationSuccess

Checks if a simulation response indicates success.

```ts
isSimulationSuccess(sim: SimulateTransactionResponse): sim is SimulateTransactionSuccessResponse
```

**Parameters**

- **`sim`** — `SimulateTransactionResponse` (required) — The simulation response to check.

**Returns**

True if the response indicates success, false otherwise.

**Source:** [src/rpc/api.ts:645](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L645)

## rpc.BasicSleepStrategy

```ts
const BasicSleepStrategy: SleepStrategy
```

**Source:** [src/rpc/server.ts:234](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L234)

## rpc.LinearSleepStrategy

```ts
const LinearSleepStrategy: SleepStrategy
```

**Source:** [src/rpc/server.ts:237](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L237)

## rpc.Server

Handles the network connection to a Soroban RPC instance, exposing an
interface for requests to that instance.

```ts
class Server {
  constructor(serverURL: string, opts: Options = {});
  readonly httpClient: HttpClient;
  readonly serverURL: URL;
  _getEvents(request: GetEventsRequest): Promise<RawGetEventsResponse>;
  _getLatestLedger(): Promise<RawGetLatestLedgerResponse>;
  _getLedgerEntries(...keys: LedgerKey[]): Promise<RawGetLedgerEntriesResponse>;
  _getLedgers(request: GetLedgersRequest): Promise<RawGetLedgersResponse>;
  _getTransaction(hash: string): Promise<RawGetTransactionResponse>;
  _getTransactions(request: GetTransactionsRequest): Promise<RawGetTransactionsResponse>;
  _queryEvents(request: RawQueryEventsRequest): Promise<RawQueryEventsResponse>;
  _sendTransaction(transaction: Transaction | FeeBumpTransaction): Promise<RawSendTransactionResponse>;
  _simulateTransaction(transaction: Transaction | FeeBumpTransaction, addlResources?: ResourceLeeway, authMode?: SimulationAuthMode, useUpgradedAuth: boolean = true): Promise<RawSimulateTransactionResponse>;
  fundAddress(address: string, friendbotUrl?: string): Promise<GetSuccessfulTransactionResponse>;
  getAccount(address: string): Promise<Account>;
  getAccountEntry(address: string): Promise<AccountEntry>;
  getAssetBalance(address: string | Address | Contract, asset: Asset, networkPassphrase?: string): Promise<BalanceResponse>;
  getClaimableBalance(id: string): Promise<ClaimableBalanceEntry>;
  getContractData(contract: string | Address | Contract, key: ScVal, durability: Durability = Durability.Persistent): Promise<LedgerEntryResult>;
  getContractInstance(contractId: string): Promise<ScContractInstance>;
  getContractMethods(contractId: string, networkPassphrase?: string): Promise<ContractMethod[]>;
  getContractWasmByContractId(contractId: string): Promise<Uint8Array<ArrayBufferLike>>;
  getContractWasmByHash(wasmHash: string | Uint8Array<ArrayBufferLike>, format: "hex" | "base64" | undefined = undefined): Promise<Uint8Array<ArrayBufferLike>>;
  getEvents(request: GetEventsRequest): Promise<GetEventsResponse>;
  getExternalRefWasmHash(ref: ContractExecutableExternalRef): Promise<Uint8Array<ArrayBufferLike>>;
  getFeeStats(): Promise<GetFeeStatsResponse>;
  getHealth(): Promise<GetHealthResponse>;
  getLatestLedger(): Promise<GetLatestLedgerResponse>;
  getLedgerEntries(...keys: LedgerKey[]): Promise<GetLedgerEntriesResponse>;
  getLedgerEntry(key: LedgerKey): Promise<LedgerEntryResult>;
  getLedgers(request: GetLedgersRequest): Promise<GetLedgersResponse>;
  getNetwork(): Promise<GetNetworkResponse>;
  getSACBalance(address: string | Address, sac: Asset, networkPassphrase?: string): Promise<BalanceResponse>;
  getTransaction(hash: string): Promise<GetTransactionResponse>;
  getTransactions(request: GetTransactionsRequest): Promise<GetTransactionsResponse>;
  getTrustline(account: string, asset: Asset): Promise<TrustLineEntry>;
  getVersionInfo(): Promise<GetVersionInfoResponse>;
  pollTransaction(hash: string, opts?: PollingOptions): Promise<GetTransactionResponse>;
  prepareTransaction(tx: Transaction | FeeBumpTransaction, useUpgradedAuth: boolean = true): Promise<Transaction>;
  queryContract<T = any>(contractId: string, method: string, args: Record<string, unknown> | null = {}, networkPassphrase?: string): Promise<{ isReadCall: boolean; result: T }>;
  queryEvents(request: QueryEventsRequest): Promise<QueryEventsResponse>;
  requestAirdrop(address: string | Pick<Account, "accountId">, friendbotUrl?: string): Promise<Account>;
  sendTransaction(transaction: Transaction | FeeBumpTransaction): Promise<SendTransactionResponse>;
  simulateTransaction(tx: Transaction | FeeBumpTransaction, addlResources?: ResourceLeeway, authMode?: SimulationAuthMode, useUpgradedAuth: boolean = true): Promise<SimulateTransactionResponse>;
}
```

**See also**

- `API reference docs`

**Source:** [src/rpc/server.ts:84](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L84)

### `new Server(serverURL, opts)`

```ts
constructor(serverURL: string, opts: Options = {});
```

**Parameters**

- **`serverURL`** — `string` (required)
- **`opts`** — `Options` (optional) (default: `{}`)

**Source:** [src/rpc/server.ts:344](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L344)

### `server.httpClient`

HTTP client instance for making requests to Horizon.
Exposes interceptors, defaults, and other configuration options.

```ts
readonly httpClient: HttpClient;
```

**Example**

```ts
// Add authentication header
server.httpClient.defaults.headers['Authorization'] = 'Bearer token';

// Add request interceptor
server.httpClient.interceptors.request.use((config) => {
  console.log('Request:', config.url);
  return config;
});
```

**Source:** [src/rpc/server.ts:343](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L343)

### `server.serverURL`

```ts
readonly serverURL: URL;
```

**Source:** [src/rpc/server.ts:326](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L326)

### `server._getEvents(request)`

```ts
_getEvents(request: GetEventsRequest): Promise<RawGetEventsResponse>;
```

**Parameters**

- **`request`** — `GetEventsRequest` (required)

**Source:** [src/rpc/server.ts:1423](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1423)

### `server._getLatestLedger()`

```ts
_getLatestLedger(): Promise<RawGetLatestLedgerResponse>;
```

**Source:** [src/rpc/server.ts:1537](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1537)

### `server._getLedgerEntries(keys)`

```ts
_getLedgerEntries(...keys: LedgerKey[]): Promise<RawGetLedgerEntriesResponse>;
```

**Parameters**

- **`...keys`** — `LedgerKey[]` (required)

**Source:** [src/rpc/server.ts:1188](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1188)

### `server._getLedgers(request)`

```ts
_getLedgers(request: GetLedgersRequest): Promise<RawGetLedgersResponse>;
```

**Parameters**

- **`request`** — `GetLedgersRequest` (required)

**Source:** [src/rpc/server.ts:2162](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L2162)

### `server._getTransaction(hash)`

```ts
_getTransaction(hash: string): Promise<RawGetTransactionResponse>;
```

**Parameters**

- **`hash`** — `string` (required)

**Source:** [src/rpc/server.ts:1311](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1311)

### `server._getTransactions(request)`

```ts
_getTransactions(request: GetTransactionsRequest): Promise<RawGetTransactionsResponse>;
```

**Parameters**

- **`request`** — `GetTransactionsRequest` (required)

**Source:** [src/rpc/server.ts:1362](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1362)

### `server._queryEvents(request)`

```ts
_queryEvents(request: RawQueryEventsRequest): Promise<RawQueryEventsResponse>;
```

**Parameters**

- **`request`** — `RawQueryEventsRequest` (required)

**Source:** [src/rpc/server.ts:1478](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1478)

### `server._sendTransaction(transaction)`

```ts
_sendTransaction(transaction: Transaction | FeeBumpTransaction): Promise<RawSendTransactionResponse>;
```

**Parameters**

- **`transaction`** — `Transaction | FeeBumpTransaction` (required)

**Source:** [src/rpc/server.ts:1797](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1797)

### `server._simulateTransaction(transaction, addlResources, authMode, useUpgradedAuth)`

```ts
_simulateTransaction(transaction: Transaction | FeeBumpTransaction, addlResources?: ResourceLeeway, authMode?: SimulationAuthMode, useUpgradedAuth: boolean = true): Promise<RawSimulateTransactionResponse>;
```

**Parameters**

- **`transaction`** — `Transaction | FeeBumpTransaction` (required)
- **`addlResources`** — `ResourceLeeway` (optional)
- **`authMode`** — `SimulationAuthMode` (optional)
- **`useUpgradedAuth`** — `boolean` (optional) (default: `true`)

**Source:** [src/rpc/server.ts:1624](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1624)

### `server.fundAddress(address, friendbotUrl)`

Fund an address using the network's Friendbot faucet, if any.

This method supports both account (G...) and contract (C...) addresses.

```ts
fundAddress(address: string, friendbotUrl?: string): Promise<GetSuccessfulTransactionResponse>;
```

**Parameters**

- **`address`** — `string` (required) — The address to fund. Can be either a Stellar
     account (G...) or contract (C...) address.
- **`friendbotUrl`** — `string` (optional) — (optional) Optionally, an explicit Friendbot URL
     (by default: this calls the Stellar RPC
     [`getNetwork`](#servergetnetwork) method to try to
     discover this network's Friendbot url).

**Returns**

The transaction
   response from the Friendbot funding transaction.

**Throws**

- If Friendbot is not configured on this network or the
   funding transaction fails.

**Example**

```ts
// Funding an account (G... address)
const tx = await server.fundAddress("GBZC6Y2Y7...");
console.log("Funded! Hash:", tx.txHash);
// If you need the Account object:
const account = await server.getAccount("GBZC6Y2Y7...");
```

**Example**

```ts
// Funding a contract (C... address)
const tx = await server.fundAddress("CBZC6Y2Y7...");
console.log("Contract funded! Hash:", tx.txHash);
```

**See also**

- `Friendbot docs`

**Source:** [src/rpc/server.ts:1917](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1917)

### `server.getAccount(address)`

Fetch a minimal set of current info about a Stellar account.

Needed to get the current sequence number for the account so you can build
a successful transaction with [`TransactionBuilder`](/reference/core-transactions/#transactionbuilder).

```ts
getAccount(address: string): Promise<Account>;
```

**Parameters**

- **`address`** — `string` (required) — The public address of the account to load.

**Returns**

A promise which resolves to the [`Account`](/reference/core-transactions/#account)
object with a populated sequence number

**Example**

```ts
const accountId = "GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4";
server.getAccount(accountId).then((account) => {
  console.log("sequence:", account.sequence);
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:386](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L386)

### `server.getAccountEntry(address)`

Fetch the full account entry for a Stellar account.

```ts
getAccountEntry(address: string): Promise<AccountEntry>;
```

**Parameters**

- **`address`** — `string` (required) — The public address of the account to load.

**Returns**

Resolves to the full on-chain account
   entry

**Example**

```ts
const accountId = "GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4";
server.getAccountEntry(accountId).then((account) => {
  console.log("sequence:", account.balance().toString());
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:409](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L409)

### `server.getAssetBalance(address, asset, networkPassphrase)`

Fetch the balance of an asset held by an account or contract.

The `address` argument may be provided as a string (as a [`StrKey`](/reference/core-keys/#strkey)),
[`Address`](/reference/core-soroban-primitives/#address), or [`Contract`](/reference/core-soroban-primitives/#contract).

```ts
getAssetBalance(address: string | Address | Contract, asset: Asset, networkPassphrase?: string): Promise<BalanceResponse>;
```

**Parameters**

- **`address`** — `string | Address | Contract` (required) — The account or contract whose
     balance should be fetched.
- **`asset`** — `Asset` (required) — The asset whose balance you want to inspect.
- **`networkPassphrase`** — `string` (optional) — (optional) optionally, when requesting the
     balance of a contract, the network passphrase to which this token
     applies. If omitted and necessary, a request about network information
     will be made (see [`getNetwork`](#servergetnetwork)), since contract IDs for assets are
     specific to a network. You can refer to [`Networks`](/reference/core-transactions/#networks) for a list of
     built-in passphrases, e.g., `Networks.TESTNET`.

**Returns**

Resolves with balance entry details
   when available.

**Throws**

- If the supplied `address` is not a valid account or contract
   strkey, or is a muxed address (`M...` or `W...`).

**Example**

```ts
const usdc = new Asset(
  "USDC",
  "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5"
);
const balance = await server.getAssetBalance("GD...", usdc);
console.log(balance.balanceEntry?.amount);
```

**Source:** [src/rpc/server.ts:569](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L569)

### `server.getClaimableBalance(id)`

Fetch the full claimable balance entry for a Stellar account.

```ts
getClaimableBalance(id: string): Promise<ClaimableBalanceEntry>;
```

**Parameters**

- **`id`** — `string` (required) — The strkey (`B...`) or hex (`00000000abcde...`) (both
     IDs with and without the 000... version prefix are accepted) of the
     claimable balance to load

**Returns**

Resolves to the full on-chain
   claimable balance entry

**Example**

```ts
const id = "00000000178826fbfe339e1f5c53417c6fedfe2c05e8bec14303143ec46b38981b09c3f9";
server.getClaimableBalance(id).then((entry) => {
  console.log(`Claimable balance {id.substr(0, 12)} has:`);
  console.log(`  asset:  ${Asset.fromOperation(entry.asset).toString()}`);
  console.log(`  amount: ${entry.amount.toString()}`);
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:501](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L501)

### `server.getContractData(contract, key, durability)`

Reads the current value of contract data ledger entries directly.

Allows you to directly inspect the current state of a contract. This is a
backup way to access your contract data which may not be available via
events or [`rpc.Server.simulateTransaction`](#serversimulatetransactiontx-addlresources-authmode-useupgradedauth).

```ts
getContractData(contract: string | Address | Contract, key: ScVal, durability: Durability = Durability.Persistent): Promise<LedgerEntryResult>;
```

**Parameters**

- **`contract`** — `string | Address | Contract` (required) — The contract ID containing the
     data to load as a strkey (`C...` form), a [`Contract`](/reference/core-soroban-primitives/#contract), or an
     [`Address`](/reference/core-soroban-primitives/#address) instance
- **`key`** — `ScVal` (required) — The key of the contract data to load
- **`durability`** — `Durability` (optional) (default: `Durability.Persistent`) — (optional) The "durability
     keyspace" that this ledger key belongs to, which is either 'temporary'
     or 'persistent' (the default), see [`rpc.Durability`](#rpcdurability).

**Returns**

The current data value

**Throws**

- If `contract` is a muxed address, or `key` contains a muxed
   address (`M...` or `W...`).

**Warning:** If the data entry in question is a 'temporary' entry, it's
entirely possible that it has expired out of existence.

**Example**

```ts
const contractId = "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5";
const key = xdr.ScVal.scvSymbol("counter");
server.getContractData(contractId, key, Durability.Temporary).then(data => {
  console.log("value:", data.val);
  console.log("liveUntilLedgerSeq:", data.liveUntilLedgerSeq);
  console.log("lastModified:", data.lastModifiedLedgerSeq);
  console.log("latestLedger:", data.latestLedger);
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:675](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L675)

### `server.getContractInstance(contractId)`

Retrieves the deployed contract instance for a given contract ID.

The instance describes the contract's executable — either a Wasm hash or
the built-in Stellar Asset Contract — along with its instance storage.

```ts
getContractInstance(contractId: string): Promise<ScContractInstance>;
```

**Parameters**

- **`contractId`** — `string` (required) — The contract ID (`C...`) to look up

**Returns**

The contract's `xdr.ScContractInstance`

**Throws**

- If the contract instance cannot be found on the network.

**Example**

```ts
const instance = await server.getContractInstance(
  "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5",
);
console.log(instance.executable.type);
```

**Source:** [src/rpc/server.ts:768](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L768)

### `server.getContractMethods(contractId, networkPassphrase)`

Lists a contract's callable methods and their signatures.

A discovery helper for tooling, dapps, and agents that need to inspect an
arbitrary contract without knowing its interface up front. It resolves the
contract's spec (embedded in the Wasm for regular contracts, or the
built-in spec for Stellar Asset Contracts — see [`contract.Client.from`](/reference/contracts-client/#clientfromoptions))
and reports each declared function's name, inputs, and outputs. No method
is invoked or simulated; this performs only the spec lookup.

The complement to [`queryContract`](#serverquerycontractcontractid-method-args-networkpassphrase): list methods here, then call a
read-only one with `server.queryContract(contractId, method, args?)`.
Each entry also says which `contract.Client` method calls the function
(`clientMethod`), or why the client has none (`noMethodReason`). A
`reserved` or `shared` function can still be called with
`contract.Client.invoke()`; the constructor runs only on deploy.

```ts
getContractMethods(contractId: string, networkPassphrase?: string): Promise<ContractMethod[]>;
```

**Parameters**

- **`contractId`** — `string` (required) — the contract to inspect (`C...`)
- **`networkPassphrase`** — `string` (optional) — (optional) the network passphrase. If omitted, a
     request about network information will be made (see [`getNetwork`](#servergetnetwork)).
     You can refer to [`Networks`](/reference/core-transactions/#networks) for a list of built-in passphrases,
     e.g., `Networks.TESTNET`.

**Returns**

The contract's methods, in the order they appear in the spec

**Example**

```ts
const methods = await server.getContractMethods(
  "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5",
);
// [
//   { name: "decimals", inputs: [], outputs: ["U32"], clientMethod: "decimals" },
//   { name: "balance", inputs: [{ name: "id", type: "Address" }], outputs: ["I128"], clientMethod: "balance" },
//   { name: "transfer", inputs: [...], outputs: [], clientMethod: "transfer" },
// ]
```

**Source:** [src/rpc/server.ts:1097](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1097)

### `server.getContractWasmByContractId(contractId)`

Retrieves the WASM bytecode for a given contract.

This method allows you to fetch the WASM bytecode associated with a contract
deployed on the Soroban network. The WASM bytecode represents the executable
code of the contract.

This only works for Wasm-based contracts, including one created from a
CAP-85 external executable reference, whose reference is resolved to a Wasm
hash first (see [`getExternalRefWasmHash`](#servergetexternalrefwasmhashref)). A built-in Stellar Asset
Contract (SAC) has no Wasm bytecode on-chain, so this throws for a SAC; use
[`contract.Client.from`](/reference/contracts-client/#clientfromoptions) to build a client from the embedded SAC spec.

```ts
getContractWasmByContractId(contractId: string): Promise<Uint8Array<ArrayBufferLike>>;
```

**Parameters**

- **`contractId`** — `string` (required) — The contract ID containing the WASM bytecode to retrieve

**Returns**

A Uint8Array containing the WASM bytecode

**Throws**

- If the contract or its associated WASM bytecode cannot be
found on the network, or if the contract is a Stellar Asset Contract (SAC).

**Example**

```ts
const contractId = "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5";
server.getContractWasmByContractId(contractId).then(wasmBytes => {
  console.log("WASM bytecode length:", wasmBytes.length);
  // ... do something with the WASM bytecode ...
}).catch(err => {
  console.error("Error fetching WASM bytecode:", err);
});
```

**Source:** [src/rpc/server.ts:894](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L894)

### `server.getContractWasmByHash(wasmHash, format)`

Retrieves the WASM bytecode for a given contract hash.

This method allows you to fetch the WASM bytecode associated with a contract
deployed on the Soroban network using the contract's WASM hash. The WASM bytecode
represents the executable code of the contract.

```ts
getContractWasmByHash(wasmHash: string | Uint8Array<ArrayBufferLike>, format: "hex" | "base64" | undefined = undefined): Promise<Uint8Array<ArrayBufferLike>>;
```

**Parameters**

- **`wasmHash`** — `string | Uint8Array<ArrayBufferLike>` (required) — The WASM hash of the contract
- **`format`** — `"hex" | "base64" | undefined` (optional) (default: `undefined`)

**Returns**

A Uint8Array containing the WASM bytecode

**Throws**

- If the contract or its associated WASM bytecode cannot be
found on the network.

**Example**

```ts
const wasmHash = hexToUint8Array("...");
server.getContractWasmByHash(wasmHash).then(wasmBytes => {
  console.log("WASM bytecode length:", wasmBytes.length);
  // ... do something with the WASM bytecode ...
}).catch(err => {
  console.error("Error fetching WASM bytecode:", err);
});
```

**Source:** [src/rpc/server.ts:949](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L949)

### `server.getEvents(request)`

Fetch all events that match a given set of filters.

The given filters (see [`Api.EventFilter`](#rpcapieventfilter)
for detailed fields) are combined only in a logical OR fashion, and all of
the fields in each filter are optional.

To page through events, use the `pagingToken` field on the relevant
[`Api.EventResponse`](#rpcapieventresponse) object to set the `cursor` parameter.

```ts
getEvents(request: GetEventsRequest): Promise<GetEventsResponse>;
```

**Parameters**

- **`request`** — `GetEventsRequest` (required) — Event filters [`Api.GetEventsRequest`](#rpcapigeteventsrequest),

**Returns**

A paginatable set of the events
matching the given event filters

**Example**

```ts

server.getEvents({
   startLedger: 1000,
   endLedger: 2000,
   filters: [
    {
     type: "contract",
     contractIds: [ "deadb33f..." ],
     topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==", "AAAAAQB6Mcc=", "*" ]]
    }, {
     type: "system",
     contractIds: [ "...c4f3b4b3..." ],
     topics: [[ "*" ], [ "*", "AAAAAQB6Mcc=" ]]
    }, {
     contractIds: [ "...c4f3b4b3..." ],
     topics: [[ "AAAABQAAAAh0cmFuc2Zlcg==" ]]
    }, {
     type: "diagnostic",
     topics: [[ "AAAAAQB6Mcc=" ]]
    }
   ],
   limit: 10,
});
```

**See also**

- `getEvents docs`

**Source:** [src/rpc/server.ts:1417](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1417)

### `server.getExternalRefWasmHash(ref)`

Resolves a CAP-85 external executable reference to the Wasm hash it names.

A contract created with an external reference does not carry its own code
hash. Instead the reference names an owner contract and a tag, and the
owner holds a *persistent* contract data entry keyed by that tag whose
value is the 32-byte hash of an existing Wasm. This performs exactly that
lookup — the owner contract is not invoked.

```ts
getExternalRefWasmHash(ref: ContractExecutableExternalRef): Promise<Uint8Array<ArrayBufferLike>>;
```

**Parameters**

- **`ref`** — `ContractExecutableExternalRef` (required) — the external reference, e.g. from the
     `contractExecutableExternalRef` arm of a contract instance's executable

**Returns**

the 32-byte Wasm hash the reference resolves to

**Throws**

- If the owner is not a contract, the tag entry is missing or
   archived, or the entry does not hold a 32-byte hash.

**Example**

```ts
const instance = await server.getContractInstance(contractId);
if (instance.executable.type === "contractExecutableExternalRef") {
  const hash = await server.getExternalRefWasmHash(
    instance.executable.externalRef,
  );
  const wasm = await server.getContractWasmByHash(hash);
}
```

**Source:** [src/rpc/server.ts:823](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L823)

### `server.getFeeStats()`

Provides an analysis of the recent fee stats for regular and smart
contract operations.

```ts
getFeeStats(): Promise<GetFeeStatsResponse>;
```

**Returns**

the fee stats

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getFeeStats

**Source:** [src/rpc/server.ts:1963](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1963)

### `server.getHealth()`

General node health check.

```ts
getHealth(): Promise<GetHealthResponse>;
```

**Returns**

A promise which resolves to the
[`Api.GetHealthResponse`](#rpcapigethealthresponse) object with the status of the
server (e.g. "healthy").

**Example**

```ts
server.getHealth().then((health) => {
  console.log("status:", health.status);
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:630](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L630)

### `server.getLatestLedger()`

Fetch the latest ledger meta info from network which this Soroban RPC
server is connected to.

```ts
getLatestLedger(): Promise<GetLatestLedgerResponse>;
```

**Returns**

metadata about the
   latest ledger on the network that this RPC server is connected to

**Example**

```ts
server.getLatestLedger().then((response) => {
  console.log("hash:", response.id);
  console.log("sequence:", response.sequence);
  console.log("protocolVersion:", response.protocolVersion);
});
```

**See also**

- `getLatestLedger docs`

**Source:** [src/rpc/server.ts:1533](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1533)

### `server.getLedgerEntries(keys)`

Reads the current value of arbitrary ledger entries directly.

Allows you to directly inspect the current state of contracts, contract's
code, accounts, or any other ledger entries.

To fetch a contract's WASM byte-code, built the appropriate
`xdr.LedgerKeyContractCode` ledger entry key (or see
[`Contract.getFootprint`](/reference/core-soroban-primitives/#contractgetfootprint)).

```ts
getLedgerEntries(...keys: LedgerKey[]): Promise<GetLedgerEntriesResponse>;
```

**Parameters**

- **`...keys`** — `LedgerKey[]` (required) — One or more ledger entry keys to load

**Returns**

The current on-chain
values for the given ledger keys

**Example**

```ts
const contractId = "CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2KM";
const key = xdr.LedgerKey.contractData(new xdr.LedgerKeyContractData({
  contractId: StrKey.decodeContract(contractId),
  key: xdr.ScVal.scvSymbol("counter"),
}));

server.getLedgerEntries([key]).then(response => {
  const ledgerData = response.entries[0];
  console.log("key:", ledgerData.key);
  console.log("value:", ledgerData.val);
  console.log("liveUntilLedgerSeq:", ledgerData.liveUntilLedgerSeq);
  console.log("lastModified:", ledgerData.lastModifiedLedgerSeq);
  console.log("latestLedger:", response.latestLedger);
});
```

**See also**

- - `getLedgerEntries docs`
 - RpcServer._getLedgerEntries

**Source:** [src/rpc/server.ts:1184](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1184)

### `server.getLedgerEntry(key)`

```ts
getLedgerEntry(key: LedgerKey): Promise<LedgerEntryResult>;
```

**Parameters**

- **`key`** — `LedgerKey` (required)

**Source:** [src/rpc/server.ts:1199](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1199)

### `server.getLedgers(request)`

Fetch a detailed list of ledgers starting from a specified point.

Returns ledger data with support for pagination as long as the requested
pages fall within the history retention of the RPC provider.

```ts
getLedgers(request: GetLedgersRequest): Promise<GetLedgersResponse>;
```

**Parameters**

- **`request`** — `GetLedgersRequest` (required) — The request parameters for fetching ledgers. [`Api.GetLedgersRequest`](#rpcapigetledgersrequest)

**Returns**

A promise that resolves to the
   ledgers response containing an array of ledger data and pagination info. [`Api.GetLedgersResponse`](#rpcapigetledgersresponse)

**Throws**

- If startLedger is less than the oldest ledger stored in this
   node, or greater than the latest ledger seen by this node.

**Example**

```ts
// Fetch ledgers starting from a specific sequence number
server.getLedgers({
  startLedger: 36233,
  pagination: {
    limit: 10
  }
}).then((response) => {
  console.log("Ledgers:", response.ledgers);
  console.log("Latest Ledger:", response.latestLedger);
  console.log("Cursor:", response.cursor);
});
```

**Example**

```ts
// Paginate through ledgers using cursor
const firstPage = await server.getLedgers({
  startLedger: 36233,
  pagination: {
    limit: 5
  }
});

const nextPage = await server.getLedgers({
  pagination: {
    cursor: firstPage.cursor,
    limit: 5
  }
});
```

**See also**

- `getLedgers docs`

**Source:** [src/rpc/server.ts:2146](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L2146)

### `server.getNetwork()`

Fetch metadata about the network this Soroban RPC server is connected to.

```ts
getNetwork(): Promise<GetNetworkResponse>;
```

**Returns**

Metadata about the current
network this RPC server is connected to

**Example**

```ts
server.getNetwork().then((network) => {
  console.log("friendbotUrl:", network.friendbotUrl);
  console.log("passphrase:", network.passphrase);
  console.log("protocolVersion:", network.protocolVersion);
});
```

**See also**

- `getNetwork docs`

**Source:** [src/rpc/server.ts:1507](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1507)

### `server.getSACBalance(address, sac, networkPassphrase)`

**Deprecated.** Use [`getAssetBalance`](#servergetassetbalanceaddress-asset-networkpassphrase), instead

Returns a contract's balance of a particular SAC asset, if any.

This is a convenience wrapper around [`Server.getLedgerEntries`](#servergetledgerentrieskeys).

```ts
getSACBalance(address: string | Address, sac: Asset, networkPassphrase?: string): Promise<BalanceResponse>;
```

**Parameters**

- **`address`** — `string | Address` (required) — the contract (string `C...`) whose balance of
     `sac` you want to know
- **`sac`** — `Asset` (required) — the built-in SAC token (e.g. `USDC:GABC...`) that
     you are querying from the given `contract`.
- **`networkPassphrase`** — `string` (optional) — (optional) optionally, the network passphrase to
     which this token applies. If omitted, a request about network
     information will be made (see [`getNetwork`](#servergetnetwork)), since contract IDs
     for assets are specific to a network. You can refer to [`Networks`](/reference/core-transactions/#networks)
     for a list of built-in passphrases, e.g., `Networks.TESTNET`.

**Returns**

, which will contain the balance
   entry details if and only if the request returned a valid balance ledger
   entry. If it doesn't, the `balanceEntry` field will not exist.

**Throws**

- If `address` is not a valid contract ID (`C...`).

**Example**

```ts
// assume `address` is some contract or account with an XLM balance
// assume server is an instantiated `Server` instance.
const entry = (await server.getSACBalance(
  new Address(address),
  Asset.native(),
  Networks.PUBLIC
));

// assumes BigInt support:
console.log(
  entry.balanceEntry ?
  BigInt(entry.balanceEntry.amount) :
  "Address has no XLM");
```

**See also**

- - getLedgerEntries
 - https://developers.stellar.org/docs/tokens/stellar-asset-contract

**Source:** [src/rpc/server.ts:2027](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L2027)

### `server.getTransaction(hash)`

Fetch the details of a submitted transaction.

After submitting a transaction, clients should poll this to tell when the
transaction has completed.

```ts
getTransaction(hash: string): Promise<GetTransactionResponse>;
```

**Parameters**

- **`hash`** — `string` (required) — Hex-encoded hash of the transaction to check

**Returns**

The status, result, and
   other details about the transaction

**Example**

```ts
const transactionHash = "c4515e3bdc0897f21cc5dbec8c82cf0a936d4741cb74a8e158eb51b9fb00411a";
server.getTransaction(transactionHash).then((tx) => {
  console.log("status:", tx.status);
  console.log("envelopeXdr:", tx.envelopeXdr);
  console.log("resultMetaXdr:", tx.resultMetaXdr);
  console.log("resultXdr:", tx.resultXdr);
});
```

**See also**

- `getTransaction docs`

**Source:** [src/rpc/server.ts:1284](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1284)

### `server.getTransactions(request)`

Fetch transactions starting from a given start ledger or a cursor. The end ledger is the latest ledger
in that RPC instance.

```ts
getTransactions(request: GetTransactionsRequest): Promise<GetTransactionsResponse>;
```

**Parameters**

- **`request`** — `GetTransactionsRequest` (required) — The request parameters.

**Returns**

- A promise that resolves to the transactions response.

**Example**

```ts
server.getTransactions({
  startLedger: 10000,
  limit: 10,
}).then((response) => {
  console.log("Transactions:", response.transactions);
  console.log("Latest Ledger:", response.latestLedger);
  console.log("Cursor:", response.cursor);
});
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getTransactions

**Source:** [src/rpc/server.ts:1344](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1344)

### `server.getTrustline(account, asset)`

**Deprecated.** Use [`getAssetBalance`](#servergetassetbalanceaddress-asset-networkpassphrase), instead

Fetch the full trustline entry for a Stellar account.

```ts
getTrustline(account: string, asset: Asset): Promise<TrustLineEntry>;
```

**Parameters**

- **`account`** — `string` (required) — The public address of the account whose trustline it is
- **`asset`** — `Asset` (required) — The trustline's asset

**Returns**

Resolves to the full on-chain trustline
   entry

**Example**

```ts
const accountId = "GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4";
const asset = new Asset(
 "USDC",
 "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5"
);
server.getTrustline(accountId, asset).then((entry) => {
  console.log(`{asset.toString()} balance for ${accountId}:", entry.balance().toString());
});
```

**See also**

- `getLedgerEntries docs`

**Source:** [src/rpc/server.ts:453](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L453)

### `server.getVersionInfo()`

Provides information about the current version details of the Soroban RPC and captive-core

```ts
getVersionInfo(): Promise<GetVersionInfoResponse>;
```

**Returns**

the version info

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getVersionInfo

**Source:** [src/rpc/server.ts:1977](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1977)

### `server.pollTransaction(hash, opts)`

Poll for a particular transaction with certain parameters.

After submitting a transaction, clients can use this to poll for
transaction completion and return a definitive state of success or failure.

```ts
pollTransaction(hash: string, opts?: PollingOptions): Promise<GetTransactionResponse>;
```

**Parameters**

- **`hash`** — `string` (required) — the transaction you're polling for
- **`opts`** — `PollingOptions` (optional) — (optional) polling options
    - `attempts` (optional): (optional) the number of attempts to make
     before returning the last-seen status. By default or on invalid inputs,
     try 5 times.
    - `sleepStrategy` (optional): (optional) the amount of time
     to wait for between each attempt. By default, sleep for 1 second between
     each attempt.

**Returns**

the response after a "found"
   response (which may be success or failure) or the last response obtained
   after polling the maximum number of specified attempts.

**Example**

```ts
const h = "c4515e3bdc0897f21cc5dbec8c82cf0a936d4741cb74a8e158eb51b9fb00411a";
const txStatus = await server.pollTransaction(h, {
   attempts: 100, // I'm a maniac
   sleepStrategy: rpc.LinearSleepStrategy
}); // this will take 5,050 seconds to complete
```

**Source:** [src/rpc/server.ts:1237](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1237)

### `server.prepareTransaction(tx, useUpgradedAuth)`

Submit a trial contract invocation, first run a simulation of the contract
invocation as defined on the incoming transaction, and apply the results to
a new copy of the transaction which is then returned. Setting the ledger
footprint and authorization, so the resulting transaction is ready for
signing & sending.

The returned transaction will also have an updated fee that is the sum of
fee set on incoming transaction with the contract resource fees estimated
from simulation. It is advisable to check the fee on returned transaction
and validate or take appropriate measures for interaction with user to
confirm it is acceptable.

You can call the [`rpc.Server.simulateTransaction`](#serversimulatetransactiontx-addlresources-authmode-useupgradedauth) method
directly first if you want to inspect estimated fees for a given
transaction in detail first, then re-assemble it manually or via
[`rpc.assembleTransaction`](#rpcassembletransaction).

```ts
prepareTransaction(tx: Transaction | FeeBumpTransaction, useUpgradedAuth: boolean = true): Promise<Transaction>;
```

**Parameters**

- **`tx`** — `Transaction | FeeBumpTransaction` (required) — the transaction to
     prepare. It should include exactly one operation, which must be one of
     `xdr.InvokeHostFunctionOp`, `xdr.ExtendFootprintTtlOp`,
     or `xdr.RestoreFootprintOp`.
  
     Any provided footprint will be overwritten. However, if your operation
     has existing auth entries, they will be preferred over ALL auth entries
     from the simulation. In other words, if you include auth entries, you
     don't care about the auth returned from the simulation. Other fields
     (footprint, etc.) will be filled as normal.
- **`useUpgradedAuth`** — `boolean` (optional) (default: `true`) — (optional) whether the underlying simulation
     records v2 address credentials (CAP-71) instead of the legacy v1
     address credentials. Defaults to `true`; pass `false` to ask for the
     legacy v1 format. It only affects the recording auth modes.
  
     **Deprecated**: this flag is transitional. Once the RPC server returns v2
     credentials by default (protocol 28), it becomes a no-op — do not rely
     on passing `false` to keep receiving the legacy v1 format.

**Returns**

A copy of the
   transaction with the expected authorizations (in the case of
   invocation), resources, and ledger footprints added. The transaction fee
   will also automatically be padded with the contract's minimum resource
   fees discovered from the simulation.

**Throws**

- *    If simulation fails

**Example**

```ts
const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
const contract = new StellarSdk.Contract(contractId);

// Your max inclusion fee per operation. BASE_FEE is the network minimum
// and gets outbid when the network is busy.
const fee = "<your max inclusion fee per operation, in stroops>";
const transaction = new StellarSdk.TransactionBuilder(account, { fee })
  // Uncomment the following line to build transactions for the live network. Be
  // sure to also change the horizon hostname.
  //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
  .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
  .setTimeout(30) // valid for the next 30s
  // Add an operation to call increment() on the contract
  .addOperation(contract.call("increment"))
  .build();

const preparedTransaction = await server.prepareTransaction(transaction);

// Sign this transaction with the secret key
// NOTE: signing is transaction is network specific. Test network transactions
// won't work in the public network. To switch networks, use the Network object
// as explained above (look for StellarSdk.Network).
const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
preparedTransaction.sign(sourceKeypair);

server.sendTransaction(transaction).then(result => {
  console.log("hash:", result.hash);
  console.log("status:", result.status);
  console.log("errorResultXdr:", result.errorResultXdr);
});
```

**See also**

- - module:rpc.assembleTransaction
 - `simulateTransaction docs`

**Source:** [src/rpc/server.ts:1727](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1727)

### `server.queryContract(contractId, method, args, networkPassphrase)`

Performs a read-only call to a contract method and returns the decoded result.

This is a convenience wrapper for one-line contract state queries: it builds
a [`contract.Client`](/reference/contracts-client/#contractclient) for the contract, simulates the method call, and
returns the spec-decoded return value — no manual transaction assembly,
signing, or submission required.

Works for both Wasm contracts and built-in Stellar Asset Contracts (SACs):
the embedded SAC spec is used automatically for SACs (see
[`contract.Client.from`](/reference/contracts-client/#clientfromoptions)). The query reuses this server's transport
(headers, interceptors, `allowHttp`).

```ts
queryContract<T = any>(contractId: string, method: string, args: Record<string, unknown> | null = {}, networkPassphrase?: string): Promise<{ isReadCall: boolean; result: T }>;
```

**Parameters**

- **`contractId`** — `string` (required) — the contract to query (`C...`)
- **`method`** — `string` (required) — the contract method to call
- **`args`** — `Record<string, unknown> | null` (optional) (default: `{}`) — named arguments for the method, keyed by parameter name
     (omit, or pass `null`, for methods that take no arguments)
- **`networkPassphrase`** — `string` (optional) — (optional) the network passphrase. If omitted, a
     request about network information will be made (see [`getNetwork`](#servergetnetwork)).
     You can refer to [`Networks`](/reference/core-transactions/#networks) for a list of built-in passphrases,
     e.g., `Networks.TESTNET`.

**Returns**

An object with the method's decoded return value (`result`) and
   `isReadCall`: whether this specific call is a side-effect-free read that
   needs no signature (it wrote no state and required no authorization).
   `isReadCall` is per-call, not per-method: it reflects the given `args`.
   Since `queryContract` never signs or sends, `isReadCall: false` means the
   `result` is a simulation preview of a call that would change state.

**Throws**

- If the contract has no such method, or if the simulation fails.

**Example**

```ts
const { result: decimals, isReadCall } = await server.queryContract<number>(
  "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5",
  "decimals",
);
const { result: balance } = await server.queryContract<bigint>(
  "CCJZ5DGASBWQXR5MPFCJXMBI333XE5U3FSJTNQU7RIKE3P5GN2K2WYD5",
  "balance",
  { id: "GA7QYNF7SOWQ3GLR2BGMZEHXAVIRZA4KVWLTJJFC7MGXUA74P7UJVSGZ" },
);
```

**Source:** [src/rpc/server.ts:1032](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1032)

### `server.queryEvents(request)`

Fetch one page of contract and system events with the `queryEvents`
method, which only the archival RPC node serves (in beta). To page, send
`{ cursor, limit }` from the response while `scanStatus` is `HAS_MORE`,
wait and retry on `WAITING_FOR_LEDGERS`, and stop on `OLDEST_REACHED` or
`COMPLETE`.

```ts
queryEvents(request: QueryEventsRequest): Promise<QueryEventsResponse>;
```

**Parameters**

- **`request`** — `QueryEventsRequest` (required) — a ledger range query or a cursor continuation

**Returns**

one page of parsed events and the scan status

**Example**

```ts
let res = await server.queryEvents({ minLedger: 1000, limit: 50 });
for (;;) {
  handle(res.events);
  if (res.scanStatus === rpc.Api.QueryEventsScanStatus.WAITING_FOR_LEDGERS) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  } else if (res.scanStatus !== rpc.Api.QueryEventsScanStatus.HAS_MORE) {
    break;
  }
  res = await server.queryEvents({ cursor: res.cursor!, limit: 50 });
}
```

**Source:** [src/rpc/server.ts:1470](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1470)

### `server.requestAirdrop(address, friendbotUrl)`

**Deprecated.** Use [`Server.fundAddress`](#serverfundaddressaddress-friendboturl) instead, which supports both
   account (G...) and contract (C...) addresses.

Fund a new account using the network's Friendbot faucet, if any.

```ts
requestAirdrop(address: string | Pick<Account, "accountId">, friendbotUrl?: string): Promise<Account>;
```

**Parameters**

- **`address`** — `string | Pick<Account, "accountId">` (required) — The address or account instance that we
     want to create and fund with Friendbot
- **`friendbotUrl`** — `string` (optional) — (optional) Optionally, an explicit address for
     friendbot (by default: this calls the Soroban RPC
     [`getNetwork`](#servergetnetwork) method to try to
     discover this network's Friendbot url).

**Returns**

An [`Account`](/reference/core-transactions/#account) object for the created
   account, or the existing account if it's already funded with the
   populated sequence number (note that the account will not be "topped
   off" if it already exists)

**Throws**

- If Friendbot is not configured on this network or request failure

**Example**

```ts
server
   .requestAirdrop("GBZC6Y2Y7Q3ZQ2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4QZJ2XZ3Z5YXZ6Z7Z2Y4")
   .then((accountCreated) => {
     console.log("accountCreated:", accountCreated);
   }).catch((error) => {
     console.error("error:", error);
   });
```

**See also**

- - `Friendbot docs`
 - [`Friendbot.Api.Response`](/reference/network-friendbot/#friendbotapiresponse)

**Source:** [src/rpc/server.ts:1842](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1842)

### `server.sendTransaction(transaction)`

Submit a real transaction to the Stellar network.

Unlike Horizon, RPC does not wait for transaction completion. It
simply validates the transaction and enqueues it. Clients should call
[`rpc.Server.getTransaction`](#servergettransactionhash) to learn about transaction
success/failure.

```ts
sendTransaction(transaction: Transaction | FeeBumpTransaction): Promise<SendTransactionResponse>;
```

**Parameters**

- **`transaction`** — `Transaction | FeeBumpTransaction` (required) — to submit

**Returns**

the
   transaction id, status, and any error if available

**Example**

```ts
const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
const contract = new StellarSdk.Contract(contractId);

// Your max inclusion fee per operation. BASE_FEE is the network minimum
// and gets outbid when the network is busy.
const fee = "<your max inclusion fee per operation, in stroops>";
const transaction = new StellarSdk.TransactionBuilder(account, { fee })
  // Uncomment the following line to build transactions for the live network. Be
  // sure to also change the horizon hostname.
  //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
  .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
  .setTimeout(30) // valid for the next 30s
  // Add an operation to call increment() on the contract
  .addOperation(contract.call("increment"))
  .build();

// Sign this transaction with the secret key
// NOTE: signing is transaction is network specific. Test network transactions
// won't work in the public network. To switch networks, use the Network object
// as explained above (look for StellarSdk.Network).
const sourceKeypair = StellarSdk.Keypair.fromSecret(sourceSecretKey);
transaction.sign(sourceKeypair);

server.sendTransaction(transaction).then((result) => {
  console.log("hash:", result.hash);
  console.log("status:", result.status);
  console.log("errorResultXdr:", result.errorResultXdr);
});
```

**See also**

- - `transaction docs`
 - `sendTransaction docs`

**Source:** [src/rpc/server.ts:1791](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1791)

### `server.simulateTransaction(tx, addlResources, authMode, useUpgradedAuth)`

Submit a trial contract invocation to get back return values, expected
ledger footprint, expected authorizations, and expected costs.

```ts
simulateTransaction(tx: Transaction | FeeBumpTransaction, addlResources?: ResourceLeeway, authMode?: SimulationAuthMode, useUpgradedAuth: boolean = true): Promise<SimulateTransactionResponse>;
```

**Parameters**

- **`tx`** — `Transaction | FeeBumpTransaction` (required) — the transaction to simulate,
     which should include exactly one operation (one of
     `xdr.InvokeHostFunctionOp`, `xdr.ExtendFootprintTtlOp`, or
     `xdr.RestoreFootprintOp`). Any provided footprint or auth
     information will be ignored.
- **`addlResources`** — `ResourceLeeway` (optional) — (optional) any additional resources
     to add to the simulation-provided ones, for example if you know you will
     need extra CPU instructions
- **`authMode`** — `SimulationAuthMode` (optional) — (optional) optionally, specify the type of
     auth mode to use for simulation: `enforce` for enforcement mode,
     `record` for recording mode, or `record_allow_nonroot` for recording
     mode that allows non-root authorization
- **`useUpgradedAuth`** — `boolean` (optional) (default: `true`) — (optional) whether simulation records v2 address
     credentials (CAP-71) instead of the legacy v1 address credentials.
     Defaults to `true`; pass `false` to ask for the legacy v1 format.
     It only affects the recording auth modes.
  
     **Deprecated**: this flag is transitional. Once the network returns v2
     credentials by default (protocol 28), it becomes a no-op — do not rely
     on passing `false` to keep receiving the legacy v1 format.

**Returns**

An object with the
   cost, footprint, result/auth requirements (if applicable), and error of
   the transaction

**Example**

```ts
const contractId = 'CA3D5KRYM6CB7OWQ6TWYRR3Z4T7GNZLKERYNZGGA5SOAOPIFY6YQGAXE';
const contract = new StellarSdk.Contract(contractId);

// Your max inclusion fee per operation. BASE_FEE is the network minimum
// and gets outbid when the network is busy.
const fee = "<your max inclusion fee per operation, in stroops>";
const transaction = new StellarSdk.TransactionBuilder(account, { fee })
  // Uncomment the following line to build transactions for the live network. Be
  // sure to also change the horizon hostname.
  //.setNetworkPassphrase(StellarSdk.Networks.PUBLIC)
  .setNetworkPassphrase(StellarSdk.Networks.FUTURENET)
  .setTimeout(30) // valid for the next 30s
  // Add an operation to call increment() on the contract
  .addOperation(contract.call("increment"))
  .build();

server.simulateTransaction(transaction).then((sim) => {
  console.log("cost:", sim.cost);
  console.log("result:", sim.result);
  console.log("error:", sim.error);
  console.log("latestLedger:", sim.latestLedger);
});
```

**See also**

- - `transaction docs`
 - `simulateTransaction docs`
 - `authorization modes`
 - module:rpc.Server#prepareTransaction
 - module:rpc.assembleTransaction

**Source:** [src/rpc/server.ts:1610](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L1610)

## rpc.assembleTransaction

Combines the given raw transaction alongside the simulation results.
If the given transaction already has authorization entries in a host
function invocation (see [`Operation.invokeHostFunction`](/reference/core-transactions/#operationinvokehostfunction)), **the
simulation entries are ignored**.

If the given transaction already has authorization entries in a host function
invocation (see [`Operation.invokeHostFunction`](/reference/core-transactions/#operationinvokehostfunction)), **the simulation
entries are ignored**.

```ts
assembleTransaction(raw: Transaction | FeeBumpTransaction, simulation: SimulateTransactionResponse | RawSimulateTransactionResponse): TransactionBuilder
```

**Parameters**

- **`raw`** — `Transaction | FeeBumpTransaction` (required) — the initial transaction, w/o simulation applied
- **`simulation`** — `SimulateTransactionResponse | RawSimulateTransactionResponse` (required) — the Soroban RPC simulation result (see [`rpc.Server.simulateTransaction`](#serversimulatetransactiontx-addlresources-authmode-useupgradedauth))

**Returns**

a new, cloned transaction with the proper auth and resource (fee, footprint) simulation data applied

**Throws**

- If the transaction's `resourceFee` is below 0 or above 2^50.

**See also**

- - [`rpc.Server.simulateTransaction`](#serversimulatetransactiontx-addlresources-authmode-useupgradedauth)
 - [`rpc.Server.prepareTransaction`](#serverpreparetransactiontx-useupgradedauth)

**Source:** [src/rpc/transaction.ts:46](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/transaction.ts#L46)

## rpc.inspectChargedFees

Reports what a landed transaction declared and was charged, with the Soroban
resource fee split out. It makes no network calls.

The inclusion fee and refund are read from the fee events in meta v4. Without
them (before protocol 23) the inclusion fee is the fee charged less the
resource fee consumed. If core skipped the refund, that counts the kept
refund as inclusion fee, or gives `null` for both when it passes the
declared inclusion fee.

```ts
inspectChargedFees(tx: ChargedFeesInput): ChargedFees
```

**Parameters**

- **`tx`** — `ChargedFeesInput` (required) — a `getTransaction` response with status `SUCCESS` or `FAILED`,
  or a `getTransactions` entry

**Throws**

- if `tx` has no envelope, result or meta, as a `NOT_FOUND` response

**Source:** [src/rpc/fees.ts:70](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L70)

## rpc.parseRawEvents

Parse and return the retrieved events, if any, from a raw response from a
RPC server.

```ts
parseRawEvents(raw: RawGetEventsResponse): GetEventsResponse
```

**Parameters**

- **`raw`** — `RawGetEventsResponse` (required) — the raw `getEvents` response from the
     RPC server to parse

**Returns**

events parsed from the RPC server's
   response

**Source:** [src/rpc/parsers.ts:113](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/parsers.ts#L113)

## rpc.parseRawQueryEvents

Parse a raw `queryEvents` response. It needs base64 events, so it throws on
a response fetched with `xdrFormat: "json"`.

```ts
parseRawQueryEvents(raw: RawQueryEventsResponse): QueryEventsResponse
```

**Parameters**

- **`raw`** — `RawQueryEventsResponse` (required) — the raw `queryEvents` response from the RPC server to parse

**Returns**

the page of events parsed from the RPC server's response

**Source:** [src/rpc/parsers.ts:149](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/parsers.ts#L149)

## rpc.parseRawSimulation

Converts a raw response schema into one with parsed XDR fields and a simplified interface.

**Warning:** This API is only exported for testing purposes and should not be relied on or considered "stable".

```ts
parseRawSimulation(sim: SimulateTransactionResponse | RawSimulateTransactionResponse): SimulateTransactionResponse
```

**Parameters**

- **`sim`** — `SimulateTransactionResponse | RawSimulateTransactionResponse` (required) — the raw response schema (parsed ones are allowed, best-effort
     detected, and returned untouched)

**Returns**

the original parameter (if already parsed), parsed otherwise

**Source:** [src/rpc/parsers.ts:282](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/parsers.ts#L282)

## Types

### rpc.Api.BalanceResponse

```ts
interface BalanceResponse {
  balanceEntry?: { amount: string; authorized: boolean; authorizedToMaintainLiabilities?: boolean; clawback: boolean; lastModifiedLedgerSeq?: number; liveUntilLedgerSeq?: number; revocable?: boolean };
  latestLedger: number;
}
```

**Source:** [src/rpc/api.ts:752](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L752)

#### `balanceResponse.balanceEntry`

present only on success, otherwise request malformed or no balance

```ts
balanceEntry?: { amount: string; authorized: boolean; authorizedToMaintainLiabilities?: boolean; clawback: boolean; lastModifiedLedgerSeq?: number; liveUntilLedgerSeq?: number; revocable?: boolean };
```

**Source:** [src/rpc/api.ts:755](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L755)

#### `balanceResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:753](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L753)

### rpc.Api.BaseSendTransactionResponse

```ts
interface BaseSendTransactionResponse {
  hash: string;
  latestLedger: number;
  latestLedgerCloseTime: number;
  status: SendTransactionStatus;
}
```

**Source:** [src/rpc/api.ts:544](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L544)

#### `baseSendTransactionResponse.hash`

```ts
hash: string;
```

**Source:** [src/rpc/api.ts:546](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L546)

#### `baseSendTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:547](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L547)

#### `baseSendTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:548](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L548)

#### `baseSendTransactionResponse.status`

```ts
status: SendTransactionStatus;
```

**Source:** [src/rpc/api.ts:545](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L545)

### rpc.Api.BaseSimulateTransactionResponse

```ts
interface BaseSimulateTransactionResponse {
  _parsed: boolean;
  events: DiagnosticEvent[];
  id: string;
  latestLedger: number;
}
```

**Source:** [src/rpc/api.ts:576](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L576)

#### `baseSimulateTransactionResponse._parsed`

a private field to mark the schema as parsed

```ts
_parsed: boolean;
```

**Source:** [src/rpc/api.ts:591](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L591)

#### `baseSimulateTransactionResponse.events`

The field is always present, but may be empty in cases where:
  - you didn't simulate an invocation or
  - there were no events

```ts
events: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:588](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L588)

#### `baseSimulateTransactionResponse.id`

always present: the JSON-RPC request ID

```ts
id: string;
```

**Source:** [src/rpc/api.ts:578](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L578)

#### `baseSimulateTransactionResponse.latestLedger`

always present: the LCL known to the server when responding

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:581](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L581)

### rpc.Api.ContractMethod

A callable method declared in a contract's spec, as returned by
`RpcServer.getContractMethods`.

```ts
interface ContractMethod {
  clientMethod?: string;
  doc?: string;
  inputs: ContractMethodInput[];
  name: string;
  noMethodReason?: "constructor" | "reserved" | "shared";
  outputs: string[];
}
```

**Source:** [src/rpc/api.ts:883](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L883)

#### `contractMethod.clientMethod`

The property name of the method that `contract.Client` attaches for
this function, such as `delete_` for `delete`. Absent when the client
attaches no method. Generated bindings also reserve `fromJson` and
`fromJSON`, so they have no method for a function with either name.

```ts
clientMethod?: string;
```

**Source:** [src/rpc/api.ts:898](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L898)

#### `contractMethod.doc`

the method's spec doc string, when the contract declares one

```ts
doc?: string;
```

**Source:** [src/rpc/api.ts:891](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L891)

#### `contractMethod.inputs`

the method's parameters, in declaration order

```ts
inputs: ContractMethodInput[];
```

**Source:** [src/rpc/api.ts:887](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L887)

#### `contractMethod.name`

the on-chain method name

```ts
name: string;
```

**Source:** [src/rpc/api.ts:885](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L885)

#### `contractMethod.noMethodReason`

Why `contract.Client` attaches no method for this function: it is the
`constructor`, its method name is `reserved` (a client member or a name
such as `then` or `toString`), or another function `shared` the method
name. Call a `reserved` or `shared` function with
`contract.Client.invoke()`. The constructor runs only on deploy, through
`contract.Client.deploy()`.

```ts
noMethodReason?: "constructor" | "reserved" | "shared";
```

**Source:** [src/rpc/api.ts:907](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L907)

#### `contractMethod.outputs`

human-readable return type name(s); empty when the method returns void

```ts
outputs: string[];
```

**Source:** [src/rpc/api.ts:889](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L889)

### rpc.Api.ContractMethodInput

A single input parameter of a [`ContractMethod`](#rpcapicontractmethod).

```ts
interface ContractMethodInput {
  name: string;
  type: string;
}
```

**Source:** [src/rpc/api.ts:872](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L872)

#### `contractMethodInput.name`

the declared parameter name

```ts
name: string;
```

**Source:** [src/rpc/api.ts:874](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L874)

#### `contractMethodInput.type`

a human-readable type name, e.g. `U32`, `Address`, or a UDT's name

```ts
type: string;
```

**Source:** [src/rpc/api.ts:876](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L876)

### rpc.Api.EventFilter

```ts
interface EventFilter {
  contractIds?: string[];
  topics?: string[][];
  type?: EventType;
}
```

**Source:** [src/rpc/api.ts:249](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L249)

#### `eventFilter.contractIds`

```ts
contractIds?: string[];
```

**Source:** [src/rpc/api.ts:251](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L251)

#### `eventFilter.topics`

```ts
topics?: string[][];
```

**Source:** [src/rpc/api.ts:252](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L252)

#### `eventFilter.type`

```ts
type?: EventType;
```

**Source:** [src/rpc/api.ts:250](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L250)

### rpc.Api.EventResponse

```ts
interface EventResponse extends BaseEventResponse {
  contractId?: Contract;
  id: string;
  inSuccessfulContractCall?: boolean;
  ledger: number;
  ledgerClosedAt: string;
  operationIndex: number;
  topic: ScVal[];
  transactionIndex: number;
  txHash: string;
  type: EventType;
  value: ScVal;
}
```

**Source:** [src/rpc/api.ts:325](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L325)

#### `eventResponse.contractId`

```ts
contractId?: Contract;
```

**Source:** [src/rpc/api.ts:326](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L326)

#### `eventResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:337](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L337)

#### `eventResponse.inSuccessfulContractCall`

**Deprecated.** Newer RPC servers no longer return this field; it will be
removed no earlier than v19.0.0.

```ts
inSuccessfulContractCall?: boolean;
```

**Source:** [src/rpc/api.ts:347](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L347)

#### `eventResponse.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:339](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L339)

#### `eventResponse.ledgerClosedAt`

```ts
ledgerClosedAt: string;
```

**Source:** [src/rpc/api.ts:340](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L340)

#### `eventResponse.operationIndex`

```ts
operationIndex: number;
```

**Source:** [src/rpc/api.ts:342](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L342)

#### `eventResponse.topic`

```ts
topic: ScVal[];
```

**Source:** [src/rpc/api.ts:327](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L327)

#### `eventResponse.transactionIndex`

```ts
transactionIndex: number;
```

**Source:** [src/rpc/api.ts:341](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L341)

#### `eventResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:348](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L348)

#### `eventResponse.type`

```ts
type: EventType;
```

**Source:** [src/rpc/api.ts:338](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L338)

#### `eventResponse.value`

```ts
value: ScVal;
```

**Source:** [src/rpc/api.ts:328](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L328)

### rpc.Api.EventType

```ts
type EventType = "contract" | "system"
```

**Source:** [src/rpc/api.ts:247](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L247)

### rpc.Api.GetEventsRequest

Request parameters for fetching events from the Stellar network.

**Important**: This type enforces mutually exclusive pagination modes:
- **Ledger range mode**: Use `startLedger` and `endLedger` (cursor must be omitted)
- **Cursor pagination mode**: Use `cursor` (startLedger and endLedger must be omitted)

```ts
type GetEventsRequest = { cursor?: never; endLedger?: number; filters: Api.EventFilter[]; limit?: number; startLedger: number } | { cursor: string; endLedger?: never; filters: Api.EventFilter[]; limit?: number; startLedger?: never }
```

**Example**

```ts
// ✅ Correct: Ledger range mode
const rangeRequest: GetEventsRequest = {
  filters: [],
  startLedger: 1000,
  endLedger: 2000,
  limit: 100
};
```

**Example**

```ts
// ✅ Correct: Cursor pagination mode
const cursorRequest: GetEventsRequest = {
  filters: [],
  cursor: "some-cursor-value",
  limit: 100
};
```

**Example**

```ts
// ❌ Invalid: Cannot mix cursor with ledger range
const invalidRequest = {
  filters: [],
  startLedger: 1000,  // ❌ Cannot use with cursor
  endLedger: 2000,    // ❌ Cannot use with cursor
  cursor: "cursor",   // ❌ Cannot use with ledger range
  limit: 100
};
```

**See also**

- `getEvents API reference`

**Source:** [src/rpc/api.ts:304](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L304)

### rpc.Api.GetEventsResponse

```ts
interface GetEventsResponse extends RetentionState {
  cursor: string;
  events: EventResponse[];
  latestLedger: number;
  latestLedgerCloseTime: string;
  oldestLedger: number;
  oldestLedgerCloseTime: string;
}
```

**Source:** [src/rpc/api.ts:320](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L320)

#### `getEventsResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:322](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L322)

#### `getEventsResponse.events`

```ts
events: EventResponse[];
```

**Source:** [src/rpc/api.ts:321](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L321)

#### `getEventsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:256](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L256)

#### `getEventsResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:258](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L258)

#### `getEventsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:257](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L257)

#### `getEventsResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:259](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L259)

### rpc.Api.GetFailedTransactionResponse

```ts
interface GetFailedTransactionResponse extends GetAnyTransactionResponse {
  applicationOrder: number;
  createdAt: number;
  diagnosticEventsXdr?: DiagnosticEvent[];
  envelopeXdr: TransactionEnvelope;
  events: TransactionEvents;
  feeBump: boolean;
  latestLedger: number;
  latestLedgerCloseTime: number;
  ledger: number;
  oldestLedger: number;
  oldestLedgerCloseTime: number;
  resultMetaXdr: TransactionMeta;
  resultXdr: TransactionResult;
  status: FAILED;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:118](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L118)

#### `getFailedTransactionResponse.applicationOrder`

```ts
applicationOrder: number;
```

**Source:** [src/rpc/api.ts:123](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L123)

#### `getFailedTransactionResponse.createdAt`

```ts
createdAt: number;
```

**Source:** [src/rpc/api.ts:122](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L122)

#### `getFailedTransactionResponse.diagnosticEventsXdr`

```ts
diagnosticEventsXdr?: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:128](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L128)

#### `getFailedTransactionResponse.envelopeXdr`

```ts
envelopeXdr: TransactionEnvelope;
```

**Source:** [src/rpc/api.ts:125](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L125)

#### `getFailedTransactionResponse.events`

```ts
events: TransactionEvents;
```

**Source:** [src/rpc/api.ts:129](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L129)

#### `getFailedTransactionResponse.feeBump`

```ts
feeBump: boolean;
```

**Source:** [src/rpc/api.ts:124](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L124)

#### `getFailedTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:108](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L108)

#### `getFailedTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:109](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L109)

#### `getFailedTransactionResponse.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:121](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L121)

#### `getFailedTransactionResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:110](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L110)

#### `getFailedTransactionResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:111](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L111)

#### `getFailedTransactionResponse.resultMetaXdr`

```ts
resultMetaXdr: TransactionMeta;
```

**Source:** [src/rpc/api.ts:127](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L127)

#### `getFailedTransactionResponse.resultXdr`

```ts
resultXdr: TransactionResult;
```

**Source:** [src/rpc/api.ts:126](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L126)

#### `getFailedTransactionResponse.status`

```ts
status: FAILED;
```

**Source:** [src/rpc/api.ts:119](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L119)

#### `getFailedTransactionResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:107](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L107)

### rpc.Api.GetFeeStatsResponse

```ts
interface GetFeeStatsResponse {
  inclusionFee: FeeDistribution;
  latestLedger: number;
  sorobanInclusionFee: FeeDistribution;
}
```

**Source:** [src/rpc/api.ts:726](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L726)

#### `getFeeStatsResponse.inclusionFee`

```ts
inclusionFee: FeeDistribution;
```

**Source:** [src/rpc/api.ts:728](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L728)

#### `getFeeStatsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:729](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L729)

#### `getFeeStatsResponse.sorobanInclusionFee`

```ts
sorobanInclusionFee: FeeDistribution;
```

**Source:** [src/rpc/api.ts:727](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L727)

### rpc.Api.GetHealthResponse

```ts
interface GetHealthResponse {
  latestLedger: number;
  ledgerRetentionWindow: number;
  oldestLedger: number;
  status: "healthy";
}
```

**Source:** [src/rpc/api.ts:22](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L22)

#### `getHealthResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:23](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L23)

#### `getHealthResponse.ledgerRetentionWindow`

```ts
ledgerRetentionWindow: number;
```

**Source:** [src/rpc/api.ts:24](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L24)

#### `getHealthResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:25](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L25)

#### `getHealthResponse.status`

```ts
status: "healthy";
```

**Source:** [src/rpc/api.ts:26](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L26)

### rpc.Api.GetLatestLedgerResponse

```ts
interface GetLatestLedgerResponse {
  closeTime: string;
  headerXdr: LedgerHeader;
  id: string;
  metadataXdr: LedgerCloseMeta;
  protocolVersion: string;
  sequence: number;
}
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLatestLedger

**Source:** [src/rpc/api.ts:73](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L73)

#### `getLatestLedgerResponse.closeTime`

```ts
closeTime: string;
```

**Source:** [src/rpc/api.ts:77](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L77)

#### `getLatestLedgerResponse.headerXdr`

```ts
headerXdr: LedgerHeader;
```

**Source:** [src/rpc/api.ts:78](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L78)

#### `getLatestLedgerResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:74](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L74)

#### `getLatestLedgerResponse.metadataXdr`

```ts
metadataXdr: LedgerCloseMeta;
```

**Source:** [src/rpc/api.ts:79](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L79)

#### `getLatestLedgerResponse.protocolVersion`

```ts
protocolVersion: string;
```

**Source:** [src/rpc/api.ts:76](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L76)

#### `getLatestLedgerResponse.sequence`

```ts
sequence: number;
```

**Source:** [src/rpc/api.ts:75](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L75)

### rpc.Api.GetLedgerEntriesResponse

An XDR-parsed version of [`RawLedgerEntryResult`](#rpcapirawledgerentryresult)

```ts
interface GetLedgerEntriesResponse {
  entries: LedgerEntryResult[];
  latestLedger: number;
}
```

**Source:** [src/rpc/api.ts:54](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L54)

#### `getLedgerEntriesResponse.entries`

```ts
entries: LedgerEntryResult[];
```

**Source:** [src/rpc/api.ts:55](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L55)

#### `getLedgerEntriesResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:56](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L56)

### rpc.Api.GetLedgersRequest

Request parameters for fetching a sequential list of ledgers.

This type supports two distinct pagination modes that are mutually exclusive:
- **Ledger-based pagination**: Use `startLedger` to begin fetching from a specific ledger sequence
- **Cursor-based pagination**: Use `cursor` to continue from a previous response's pagination token

```ts
type GetLedgersRequest = { pagination?: { cursor?: never; limit?: number }; startLedger: number } | { pagination: { cursor: string; limit?: number }; startLedger?: never }
```

**Example**

```ts
// Ledger-based pagination - start from specific ledger
const ledgerRequest: GetLedgersRequest = {
  startLedger: 36233,
  pagination: {
    limit: 10
  }
};
```

**Example**

```ts
// Cursor-based pagination - continue from previous response
const cursorRequest: GetLedgersRequest = {
  pagination: {
    cursor: "36234",
    limit: 5
  }
};
```

**See also**

- `getLedgers API reference`

**Source:** [src/rpc/api.ts:799](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L799)

### rpc.Api.GetLedgersResponse

```ts
interface GetLedgersResponse {
  cursor: string;
  latestLedger: number;
  latestLedgerCloseTime: number;
  ledgers: LedgerResponse[];
  oldestLedger: number;
  oldestLedgerCloseTime: number;
}
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgers

**Source:** [src/rpc/api.ts:835](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L835)

#### `getLedgersResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:841](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L841)

#### `getLedgersResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:837](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L837)

#### `getLedgersResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:838](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L838)

#### `getLedgersResponse.ledgers`

```ts
ledgers: LedgerResponse[];
```

**Source:** [src/rpc/api.ts:836](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L836)

#### `getLedgersResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:839](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L839)

#### `getLedgersResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:840](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L840)

### rpc.Api.GetMissingTransactionResponse

```ts
interface GetMissingTransactionResponse extends GetAnyTransactionResponse {
  latestLedger: number;
  latestLedgerCloseTime: number;
  oldestLedger: number;
  oldestLedgerCloseTime: number;
  status: NOT_FOUND;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:114](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L114)

#### `getMissingTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:108](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L108)

#### `getMissingTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:109](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L109)

#### `getMissingTransactionResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:110](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L110)

#### `getMissingTransactionResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:111](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L111)

#### `getMissingTransactionResponse.status`

```ts
status: NOT_FOUND;
```

**Source:** [src/rpc/api.ts:115](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L115)

#### `getMissingTransactionResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:107](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L107)

### rpc.Api.GetNetworkResponse

```ts
interface GetNetworkResponse {
  friendbotUrl?: string;
  passphrase: string;
  protocolVersion: string;
}
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getNetwork

**Source:** [src/rpc/api.ts:66](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L66)

#### `getNetworkResponse.friendbotUrl`

```ts
friendbotUrl?: string;
```

**Source:** [src/rpc/api.ts:67](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L67)

#### `getNetworkResponse.passphrase`

```ts
passphrase: string;
```

**Source:** [src/rpc/api.ts:68](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L68)

#### `getNetworkResponse.protocolVersion`

```ts
protocolVersion: string;
```

**Source:** [src/rpc/api.ts:69](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L69)

### rpc.Api.GetSuccessfulTransactionResponse

```ts
interface GetSuccessfulTransactionResponse extends GetAnyTransactionResponse {
  applicationOrder: number;
  createdAt: number;
  diagnosticEventsXdr?: DiagnosticEvent[];
  envelopeXdr: TransactionEnvelope;
  events: TransactionEvents;
  feeBump: boolean;
  latestLedger: number;
  latestLedgerCloseTime: number;
  ledger: number;
  oldestLedger: number;
  oldestLedgerCloseTime: number;
  resultMetaXdr: TransactionMeta;
  resultXdr: TransactionResult;
  returnValue?: ScVal;
  status: SUCCESS;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:132](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L132)

#### `getSuccessfulTransactionResponse.applicationOrder`

```ts
applicationOrder: number;
```

**Source:** [src/rpc/api.ts:137](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L137)

#### `getSuccessfulTransactionResponse.createdAt`

```ts
createdAt: number;
```

**Source:** [src/rpc/api.ts:136](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L136)

#### `getSuccessfulTransactionResponse.diagnosticEventsXdr`

```ts
diagnosticEventsXdr?: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:142](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L142)

#### `getSuccessfulTransactionResponse.envelopeXdr`

```ts
envelopeXdr: TransactionEnvelope;
```

**Source:** [src/rpc/api.ts:139](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L139)

#### `getSuccessfulTransactionResponse.events`

```ts
events: TransactionEvents;
```

**Source:** [src/rpc/api.ts:145](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L145)

#### `getSuccessfulTransactionResponse.feeBump`

```ts
feeBump: boolean;
```

**Source:** [src/rpc/api.ts:138](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L138)

#### `getSuccessfulTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:108](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L108)

#### `getSuccessfulTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:109](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L109)

#### `getSuccessfulTransactionResponse.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:135](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L135)

#### `getSuccessfulTransactionResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:110](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L110)

#### `getSuccessfulTransactionResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:111](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L111)

#### `getSuccessfulTransactionResponse.resultMetaXdr`

```ts
resultMetaXdr: TransactionMeta;
```

**Source:** [src/rpc/api.ts:141](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L141)

#### `getSuccessfulTransactionResponse.resultXdr`

```ts
resultXdr: TransactionResult;
```

**Source:** [src/rpc/api.ts:140](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L140)

#### `getSuccessfulTransactionResponse.returnValue`

```ts
returnValue?: ScVal;
```

**Source:** [src/rpc/api.ts:144](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L144)

#### `getSuccessfulTransactionResponse.status`

```ts
status: SUCCESS;
```

**Source:** [src/rpc/api.ts:133](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L133)

#### `getSuccessfulTransactionResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:107](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L107)

### rpc.Api.GetTransactionResponse

```ts
type GetTransactionResponse = GetSuccessfulTransactionResponse | GetFailedTransactionResponse | GetMissingTransactionResponse
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getTransaction

**Source:** [src/rpc/api.ts:100](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L100)

### rpc.Api.GetTransactionStatus

```ts
enum GetTransactionStatus
```

**Source:** [src/rpc/api.ts:93](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L93)

### rpc.Api.GetTransactionsRequest

```ts
type GetTransactionsRequest = { pagination?: { cursor?: never; limit?: number }; startLedger: number } | { pagination: { cursor: string; limit?: number }; startLedger?: never }
```

**Source:** [src/rpc/api.ts:170](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L170)

### rpc.Api.GetTransactionsResponse

```ts
interface GetTransactionsResponse {
  cursor: string;
  latestLedger: number;
  latestLedgerCloseTimestamp: number;
  oldestLedger: number;
  oldestLedgerCloseTimestamp: number;
  transactions: TransactionInfo[];
}
```

**Source:** [src/rpc/api.ts:229](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L229)

#### `getTransactionsResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:235](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L235)

#### `getTransactionsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:231](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L231)

#### `getTransactionsResponse.latestLedgerCloseTimestamp`

```ts
latestLedgerCloseTimestamp: number;
```

**Source:** [src/rpc/api.ts:232](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L232)

#### `getTransactionsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:233](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L233)

#### `getTransactionsResponse.oldestLedgerCloseTimestamp`

```ts
oldestLedgerCloseTimestamp: number;
```

**Source:** [src/rpc/api.ts:234](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L234)

#### `getTransactionsResponse.transactions`

```ts
transactions: TransactionInfo[];
```

**Source:** [src/rpc/api.ts:230](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L230)

### rpc.Api.GetVersionInfoResponse

```ts
interface GetVersionInfoResponse {
  build_timestamp: string;
  buildTimestamp: string;
  captive_core_version: string;
  captiveCoreVersion: string;
  commit_hash: string;
  commitHash: string;
  protocol_version: number;
  protocolVersion: number;
  version: string;
}
```

**Source:** [src/rpc/api.ts:709](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L709)

#### `getVersionInfoResponse.build_timestamp`

```ts
build_timestamp: string;
```

**Source:** [src/rpc/api.ts:719](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L719)

#### `getVersionInfoResponse.buildTimestamp`

```ts
buildTimestamp: string;
```

**Source:** [src/rpc/api.ts:712](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L712)

#### `getVersionInfoResponse.captive_core_version`

```ts
captive_core_version: string;
```

**Source:** [src/rpc/api.ts:721](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L721)

#### `getVersionInfoResponse.captiveCoreVersion`

```ts
captiveCoreVersion: string;
```

**Source:** [src/rpc/api.ts:713](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L713)

#### `getVersionInfoResponse.commit_hash`

```ts
commit_hash: string;
```

**Source:** [src/rpc/api.ts:717](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L717)

#### `getVersionInfoResponse.commitHash`

```ts
commitHash: string;
```

**Source:** [src/rpc/api.ts:711](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L711)

#### `getVersionInfoResponse.protocol_version`

```ts
protocol_version: number;
```

**Source:** [src/rpc/api.ts:723](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L723)

#### `getVersionInfoResponse.protocolVersion`

```ts
protocolVersion: number;
```

**Source:** [src/rpc/api.ts:714](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L714)

#### `getVersionInfoResponse.version`

```ts
version: string;
```

**Source:** [src/rpc/api.ts:710](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L710)

### rpc.Api.LedgerEntryChange

```ts
interface LedgerEntryChange {
  after: LedgerEntry | null;
  before: LedgerEntry | null;
  key: LedgerKey;
  type: number;
}
```

**Source:** [src/rpc/api.ts:513](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L513)

#### `ledgerEntryChange.after`

```ts
after: LedgerEntry | null;
```

**Source:** [src/rpc/api.ts:517](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L517)

#### `ledgerEntryChange.before`

```ts
before: LedgerEntry | null;
```

**Source:** [src/rpc/api.ts:516](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L516)

#### `ledgerEntryChange.key`

```ts
key: LedgerKey;
```

**Source:** [src/rpc/api.ts:515](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L515)

#### `ledgerEntryChange.type`

```ts
type: number;
```

**Source:** [src/rpc/api.ts:514](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L514)

### rpc.Api.LedgerEntryResult

```ts
interface LedgerEntryResult {
  ext?: LedgerEntryExt;
  key: LedgerKey;
  lastModifiedLedgerSeq?: number;
  liveUntilLedgerSeq?: number;
  val: LedgerEntryData;
}
```

**Source:** [src/rpc/api.ts:29](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L29)

#### `ledgerEntryResult.ext`

Ledger-entry extension, if the RPC server returned it.

```ts
ext?: LedgerEntryExt;
```

**Source:** [src/rpc/api.ts:34](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L34)

#### `ledgerEntryResult.key`

```ts
key: LedgerKey;
```

**Source:** [src/rpc/api.ts:31](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L31)

#### `ledgerEntryResult.lastModifiedLedgerSeq`

```ts
lastModifiedLedgerSeq?: number;
```

**Source:** [src/rpc/api.ts:30](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L30)

#### `ledgerEntryResult.liveUntilLedgerSeq`

```ts
liveUntilLedgerSeq?: number;
```

**Source:** [src/rpc/api.ts:35](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L35)

#### `ledgerEntryResult.val`

```ts
val: LedgerEntryData;
```

**Source:** [src/rpc/api.ts:32](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L32)

### rpc.Api.LedgerResponse

```ts
interface LedgerResponse {
  hash: string;
  headerXdr: LedgerHeaderHistoryEntry;
  ledgerCloseTime: string;
  metadataXdr: LedgerCloseMeta;
  sequence: number;
}
```

**Source:** [src/rpc/api.ts:853](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L853)

#### `ledgerResponse.hash`

```ts
hash: string;
```

**Source:** [src/rpc/api.ts:854](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L854)

#### `ledgerResponse.headerXdr`

```ts
headerXdr: LedgerHeaderHistoryEntry;
```

**Source:** [src/rpc/api.ts:857](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L857)

#### `ledgerResponse.ledgerCloseTime`

```ts
ledgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:856](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L856)

#### `ledgerResponse.metadataXdr`

```ts
metadataXdr: LedgerCloseMeta;
```

**Source:** [src/rpc/api.ts:858](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L858)

#### `ledgerResponse.sequence`

```ts
sequence: number;
```

**Source:** [src/rpc/api.ts:855](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L855)

### rpc.Api.QueryEventsCursorRequest

```ts
type QueryEventsCursorRequest = QueryEventsPaging & { cursor: string; filters?: never; maxLedger?: never; minLedger?: never; order?: never }
```

**Source:** [src/rpc/api.ts:389](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L389)

### rpc.Api.QueryEventsErrorData

```ts
type QueryEventsErrorData = { reason: "invalid_params"; termBudget?: number; termsUsed?: number } | { latestLedger: number; missingLedger: number; oldestLedger: number; reason: "ledger_out_of_range" } | { latestLedger: number; oldestLedger: number; reason: "cursor_malformed" }
```

**Source:** [src/rpc/api.ts:461](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L461)

### rpc.Api.QueryEventsFilter

One `queryEvents` filter. Each topic is base64 XDR or an `ScVal`.

```ts
interface QueryEventsFilter {
  contractId?: string;
  topic0?: string | ScVal;
  topic1?: string | ScVal;
  topic2?: string | ScVal;
  topic3?: string | ScVal;
  type?: EventType;
}
```

**Source:** [src/rpc/api.ts:360](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L360)

#### `queryEventsFilter.contractId`

```ts
contractId?: string;
```

**Source:** [src/rpc/api.ts:362](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L362)

#### `queryEventsFilter.topic0`

```ts
topic0?: string | ScVal;
```

**Source:** [src/rpc/api.ts:363](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L363)

#### `queryEventsFilter.topic1`

```ts
topic1?: string | ScVal;
```

**Source:** [src/rpc/api.ts:364](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L364)

#### `queryEventsFilter.topic2`

```ts
topic2?: string | ScVal;
```

**Source:** [src/rpc/api.ts:365](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L365)

#### `queryEventsFilter.topic3`

```ts
topic3?: string | ScVal;
```

**Source:** [src/rpc/api.ts:366](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L366)

#### `queryEventsFilter.type`

```ts
type?: EventType;
```

**Source:** [src/rpc/api.ts:361](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L361)

### rpc.Api.QueryEventsOrder

```ts
type QueryEventsOrder = "asc" | "desc"
```

**Source:** [src/rpc/api.ts:357](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L357)

### rpc.Api.QueryEventsRangeRequest

```ts
type QueryEventsRangeRequest = QueryEventsPaging & { cursor?: never; filters?: QueryEventsFilter[]; maxLedger?: number; minLedger?: number; order?: QueryEventsOrder }
```

**Source:** [src/rpc/api.ts:377](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L377)

### rpc.Api.QueryEventsRequest

A `queryEvents` request: a ledger range query or a cursor continuation.

```ts
type QueryEventsRequest = QueryEventsRangeRequest | QueryEventsCursorRequest
```

**Source:** [src/rpc/api.ts:398](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L398)

### rpc.Api.QueryEventsResponse

```ts
interface QueryEventsResponse {
  cursor?: string;
  events: EventResponse[];
  latestLedger: number;
  oldestLedger: number;
  scannedLedger: number;
  scanStatus: QueryEventsScanStatus;
}
```

**Source:** [src/rpc/api.ts:430](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L430)

#### `queryEventsResponse.cursor`

Absent only when `scanStatus` is `COMPLETE`.

```ts
cursor?: string;
```

**Source:** [src/rpc/api.ts:433](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L433)

#### `queryEventsResponse.events`

```ts
events: EventResponse[];
```

**Source:** [src/rpc/api.ts:431](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L431)

#### `queryEventsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:437](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L437)

#### `queryEventsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:436](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L436)

#### `queryEventsResponse.scannedLedger`

```ts
scannedLedger: number;
```

**Source:** [src/rpc/api.ts:435](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L435)

#### `queryEventsResponse.scanStatus`

```ts
scanStatus: QueryEventsScanStatus;
```

**Source:** [src/rpc/api.ts:434](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L434)

### rpc.Api.QueryEventsScanStatus

How far a `queryEvents` scan got. A `switch` over it needs a `default`
branch, since the server may add statuses.

```ts
enum QueryEventsScanStatus
```

**Source:** [src/rpc/api.ts:423](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L423)

### rpc.Api.RawEventResponse

```ts
interface RawEventResponse extends BaseEventResponse {
  contractId: string;
  id: string;
  inSuccessfulContractCall?: boolean;
  ledger: number;
  ledgerClosedAt: string;
  operationIndex: number;
  topic?: string[];
  transactionIndex: number;
  txHash: string;
  type: EventType;
  value: string;
}
```

**Source:** [src/rpc/api.ts:351](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L351)

#### `rawEventResponse.contractId`

```ts
contractId: string;
```

**Source:** [src/rpc/api.ts:352](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L352)

#### `rawEventResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:337](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L337)

#### `rawEventResponse.inSuccessfulContractCall`

**Deprecated.** Newer RPC servers no longer return this field; it will be
removed no earlier than v19.0.0.

```ts
inSuccessfulContractCall?: boolean;
```

**Source:** [src/rpc/api.ts:347](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L347)

#### `rawEventResponse.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:339](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L339)

#### `rawEventResponse.ledgerClosedAt`

```ts
ledgerClosedAt: string;
```

**Source:** [src/rpc/api.ts:340](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L340)

#### `rawEventResponse.operationIndex`

```ts
operationIndex: number;
```

**Source:** [src/rpc/api.ts:342](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L342)

#### `rawEventResponse.topic`

```ts
topic?: string[];
```

**Source:** [src/rpc/api.ts:353](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L353)

#### `rawEventResponse.transactionIndex`

```ts
transactionIndex: number;
```

**Source:** [src/rpc/api.ts:341](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L341)

#### `rawEventResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:348](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L348)

#### `rawEventResponse.type`

```ts
type: EventType;
```

**Source:** [src/rpc/api.ts:338](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L338)

#### `rawEventResponse.value`

```ts
value: string;
```

**Source:** [src/rpc/api.ts:354](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L354)

### rpc.Api.RawGetEventsResponse

```ts
interface RawGetEventsResponse extends RetentionState {
  cursor: string;
  events: RawEventResponse[];
  latestLedger: number;
  latestLedgerCloseTime: string;
  oldestLedger: number;
  oldestLedgerCloseTime: string;
}
```

**Source:** [src/rpc/api.ts:331](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L331)

#### `rawGetEventsResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:333](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L333)

#### `rawGetEventsResponse.events`

```ts
events: RawEventResponse[];
```

**Source:** [src/rpc/api.ts:332](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L332)

#### `rawGetEventsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:256](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L256)

#### `rawGetEventsResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:258](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L258)

#### `rawGetEventsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:257](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L257)

#### `rawGetEventsResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:259](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L259)

### rpc.Api.RawGetLatestLedgerResponse

```ts
interface RawGetLatestLedgerResponse {
  closeTime: string;
  headerXdr: string;
  id: string;
  metadataXdr: string;
  protocolVersion: string;
  sequence: number;
}
```

**Source:** [src/rpc/api.ts:82](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L82)

#### `rawGetLatestLedgerResponse.closeTime`

```ts
closeTime: string;
```

**Source:** [src/rpc/api.ts:86](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L86)

#### `rawGetLatestLedgerResponse.headerXdr`

a base-64 encoded `LedgerHeader` instance

```ts
headerXdr: string;
```

**Source:** [src/rpc/api.ts:88](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L88)

#### `rawGetLatestLedgerResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:83](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L83)

#### `rawGetLatestLedgerResponse.metadataXdr`

a base-64 encoded `LedgerCloseMeta` instance

```ts
metadataXdr: string;
```

**Source:** [src/rpc/api.ts:90](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L90)

#### `rawGetLatestLedgerResponse.protocolVersion`

```ts
protocolVersion: string;
```

**Source:** [src/rpc/api.ts:85](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L85)

#### `rawGetLatestLedgerResponse.sequence`

```ts
sequence: number;
```

**Source:** [src/rpc/api.ts:84](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L84)

### rpc.Api.RawGetLedgerEntriesResponse

```ts
interface RawGetLedgerEntriesResponse {
  entries?: RawLedgerEntryResult[];
  latestLedger: number;
}
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/getLedgerEntries

**Source:** [src/rpc/api.ts:60](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L60)

#### `rawGetLedgerEntriesResponse.entries`

```ts
entries?: RawLedgerEntryResult[];
```

**Source:** [src/rpc/api.ts:61](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L61)

#### `rawGetLedgerEntriesResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:62](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L62)

### rpc.Api.RawGetLedgersResponse

```ts
interface RawGetLedgersResponse {
  cursor: string;
  latestLedger: number;
  latestLedgerCloseTime: number;
  ledgers: RawLedgerResponse[];
  oldestLedger: number;
  oldestLedgerCloseTime: number;
}
```

**Source:** [src/rpc/api.ts:844](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L844)

#### `rawGetLedgersResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:850](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L850)

#### `rawGetLedgersResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:846](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L846)

#### `rawGetLedgersResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:847](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L847)

#### `rawGetLedgersResponse.ledgers`

```ts
ledgers: RawLedgerResponse[];
```

**Source:** [src/rpc/api.ts:845](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L845)

#### `rawGetLedgersResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:848](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L848)

#### `rawGetLedgersResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:849](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L849)

### rpc.Api.RawGetTransactionResponse

```ts
interface RawGetTransactionResponse {
  applicationOrder?: number;
  createdAt?: number;
  diagnosticEventsXdr?: string[];
  envelopeXdr?: string;
  events?: RawTransactionEvents;
  feeBump?: boolean;
  latestLedger: number;
  latestLedgerCloseTime: number;
  ledger?: number;
  oldestLedger: number;
  oldestLedgerCloseTime: number;
  resultMetaXdr?: string;
  resultXdr?: string;
  status: GetTransactionStatus;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:148](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L148)

#### `rawGetTransactionResponse.applicationOrder`

```ts
applicationOrder?: number;
```

**Source:** [src/rpc/api.ts:157](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L157)

#### `rawGetTransactionResponse.createdAt`

```ts
createdAt?: number;
```

**Source:** [src/rpc/api.ts:160](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L160)

#### `rawGetTransactionResponse.diagnosticEventsXdr`

```ts
diagnosticEventsXdr?: string[];
```

**Source:** [src/rpc/api.ts:165](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L165)

#### `rawGetTransactionResponse.envelopeXdr`

```ts
envelopeXdr?: string;
```

**Source:** [src/rpc/api.ts:162](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L162)

#### `rawGetTransactionResponse.events`

```ts
events?: RawTransactionEvents;
```

**Source:** [src/rpc/api.ts:167](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L167)

#### `rawGetTransactionResponse.feeBump`

```ts
feeBump?: boolean;
```

**Source:** [src/rpc/api.ts:158](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L158)

#### `rawGetTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:150](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L150)

#### `rawGetTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:151](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L151)

#### `rawGetTransactionResponse.ledger`

```ts
ledger?: number;
```

**Source:** [src/rpc/api.ts:159](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L159)

#### `rawGetTransactionResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:152](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L152)

#### `rawGetTransactionResponse.oldestLedgerCloseTime`

```ts
oldestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:153](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L153)

#### `rawGetTransactionResponse.resultMetaXdr`

```ts
resultMetaXdr?: string;
```

**Source:** [src/rpc/api.ts:164](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L164)

#### `rawGetTransactionResponse.resultXdr`

```ts
resultXdr?: string;
```

**Source:** [src/rpc/api.ts:163](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L163)

#### `rawGetTransactionResponse.status`

```ts
status: GetTransactionStatus;
```

**Source:** [src/rpc/api.ts:149](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L149)

#### `rawGetTransactionResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:154](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L154)

### rpc.Api.RawGetTransactionsResponse

```ts
interface RawGetTransactionsResponse {
  cursor: string;
  latestLedger: number;
  latestLedgerCloseTimestamp: number;
  oldestLedger: number;
  oldestLedgerCloseTimestamp: number;
  transactions: RawTransactionInfo[] | null;
}
```

**Source:** [src/rpc/api.ts:238](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L238)

#### `rawGetTransactionsResponse.cursor`

```ts
cursor: string;
```

**Source:** [src/rpc/api.ts:244](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L244)

#### `rawGetTransactionsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:240](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L240)

#### `rawGetTransactionsResponse.latestLedgerCloseTimestamp`

```ts
latestLedgerCloseTimestamp: number;
```

**Source:** [src/rpc/api.ts:241](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L241)

#### `rawGetTransactionsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:242](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L242)

#### `rawGetTransactionsResponse.oldestLedgerCloseTimestamp`

```ts
oldestLedgerCloseTimestamp: number;
```

**Source:** [src/rpc/api.ts:243](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L243)

#### `rawGetTransactionsResponse.transactions`

```ts
transactions: RawTransactionInfo[] | null;
```

**Source:** [src/rpc/api.ts:239](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L239)

### rpc.Api.RawLedgerEntryResult

```ts
interface RawLedgerEntryResult {
  extXdr?: string;
  key: string;
  lastModifiedLedgerSeq?: number;
  liveUntilLedgerSeq?: number;
  xdr: string;
}
```

**Source:** [src/rpc/api.ts:38](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L38)

#### `rawLedgerEntryResult.extXdr`

A base64-encoded `LedgerEntryExt`, if available.

```ts
extXdr?: string;
```

**Source:** [src/rpc/api.ts:45](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L45)

#### `rawLedgerEntryResult.key`

a base-64 encoded `LedgerKey` instance

```ts
key: string;
```

**Source:** [src/rpc/api.ts:41](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L41)

#### `rawLedgerEntryResult.lastModifiedLedgerSeq`

```ts
lastModifiedLedgerSeq?: number;
```

**Source:** [src/rpc/api.ts:39](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L39)

#### `rawLedgerEntryResult.liveUntilLedgerSeq`

optional, a future ledger number upon which this entry will expire
 based on https://github.com/stellar/soroban-tools/issues/1010

```ts
liveUntilLedgerSeq?: number;
```

**Source:** [src/rpc/api.ts:50](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L50)

#### `rawLedgerEntryResult.xdr`

a base-64 encoded `LedgerEntryData` instance

```ts
xdr: string;
```

**Source:** [src/rpc/api.ts:43](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L43)

### rpc.Api.RawLedgerResponse

```ts
interface RawLedgerResponse {
  hash: string;
  headerXdr: string;
  ledgerCloseTime: string;
  metadataXdr: string;
  sequence: number;
}
```

**Source:** [src/rpc/api.ts:861](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L861)

#### `rawLedgerResponse.hash`

```ts
hash: string;
```

**Source:** [src/rpc/api.ts:862](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L862)

#### `rawLedgerResponse.headerXdr`

a base-64 encoded `LedgerHeaderHistoryEntry` instance

```ts
headerXdr: string;
```

**Source:** [src/rpc/api.ts:866](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L866)

#### `rawLedgerResponse.ledgerCloseTime`

```ts
ledgerCloseTime: string;
```

**Source:** [src/rpc/api.ts:864](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L864)

#### `rawLedgerResponse.metadataXdr`

a base-64 encoded `LedgerCloseMeta` instance

```ts
metadataXdr: string;
```

**Source:** [src/rpc/api.ts:868](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L868)

#### `rawLedgerResponse.sequence`

```ts
sequence: number;
```

**Source:** [src/rpc/api.ts:863](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L863)

### rpc.Api.RawQueryEventResponse

```ts
interface RawQueryEventResponse extends BaseEventResponse {
  contractId: string;
  id: string;
  inSuccessfulContractCall?: boolean;
  ledger: number;
  ledgerClosedAt: string;
  operationIndex: number;
  topic?: string[];
  topicJson?: unknown[];
  transactionIndex: number;
  txHash: string;
  type: EventType;
  value?: string;
  valueJson?: unknown;
}
```

**Source:** [src/rpc/api.ts:440](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L440)

#### `rawQueryEventResponse.contractId`

`""` for events without a contract.

```ts
contractId: string;
```

**Source:** [src/rpc/api.ts:442](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L442)

#### `rawQueryEventResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:337](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L337)

#### `rawQueryEventResponse.inSuccessfulContractCall`

**Deprecated.** Newer RPC servers no longer return this field; it will be
removed no earlier than v19.0.0.

```ts
inSuccessfulContractCall?: boolean;
```

**Source:** [src/rpc/api.ts:347](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L347)

#### `rawQueryEventResponse.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:339](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L339)

#### `rawQueryEventResponse.ledgerClosedAt`

```ts
ledgerClosedAt: string;
```

**Source:** [src/rpc/api.ts:340](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L340)

#### `rawQueryEventResponse.operationIndex`

```ts
operationIndex: number;
```

**Source:** [src/rpc/api.ts:342](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L342)

#### `rawQueryEventResponse.topic`

```ts
topic?: string[];
```

**Source:** [src/rpc/api.ts:443](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L443)

#### `rawQueryEventResponse.topicJson`

```ts
topicJson?: unknown[];
```

**Source:** [src/rpc/api.ts:445](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L445)

#### `rawQueryEventResponse.transactionIndex`

```ts
transactionIndex: number;
```

**Source:** [src/rpc/api.ts:341](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L341)

#### `rawQueryEventResponse.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:348](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L348)

#### `rawQueryEventResponse.type`

```ts
type: EventType;
```

**Source:** [src/rpc/api.ts:338](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L338)

#### `rawQueryEventResponse.value`

```ts
value?: string;
```

**Source:** [src/rpc/api.ts:444](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L444)

#### `rawQueryEventResponse.valueJson`

```ts
valueJson?: unknown;
```

**Source:** [src/rpc/api.ts:446](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L446)

### rpc.Api.RawQueryEventsFilter

```ts
interface RawQueryEventsFilter {
  contractId?: string;
  topic0?: string;
  topic1?: string;
  topic2?: string;
  topic3?: string;
  type?: EventType;
}
```

**Source:** [src/rpc/api.ts:401](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L401)

#### `rawQueryEventsFilter.contractId`

```ts
contractId?: string;
```

**Source:** [src/rpc/api.ts:403](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L403)

#### `rawQueryEventsFilter.topic0`

```ts
topic0?: string;
```

**Source:** [src/rpc/api.ts:404](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L404)

#### `rawQueryEventsFilter.topic1`

```ts
topic1?: string;
```

**Source:** [src/rpc/api.ts:405](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L405)

#### `rawQueryEventsFilter.topic2`

```ts
topic2?: string;
```

**Source:** [src/rpc/api.ts:406](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L406)

#### `rawQueryEventsFilter.topic3`

```ts
topic3?: string;
```

**Source:** [src/rpc/api.ts:407](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L407)

#### `rawQueryEventsFilter.type`

```ts
type?: EventType;
```

**Source:** [src/rpc/api.ts:402](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L402)

### rpc.Api.RawQueryEventsRequest

The `queryEvents` wire params, posted as is by `_queryEvents`.

```ts
type RawQueryEventsRequest = ((Omit<QueryEventsRangeRequest, "filters"> & { filters?: RawQueryEventsFilter[]; xdrInputFormat?: "base64" | "json" }) | QueryEventsCursorRequest) & { xdrFormat?: "base64" | "json" }
```

**Source:** [src/rpc/api.ts:411](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L411)

### rpc.Api.RawQueryEventsResponse

```ts
interface RawQueryEventsResponse {
  cursor?: string;
  events: RawQueryEventResponse[] | null;
  latestLedger: number;
  oldestLedger: number;
  scannedLedger: number;
  scanStatus: QueryEventsScanStatus;
}
```

**Source:** [src/rpc/api.ts:449](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L449)

#### `rawQueryEventsResponse.cursor`

```ts
cursor?: string;
```

**Source:** [src/rpc/api.ts:451](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L451)

#### `rawQueryEventsResponse.events`

```ts
events: RawQueryEventResponse[] | null;
```

**Source:** [src/rpc/api.ts:450](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L450)

#### `rawQueryEventsResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:455](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L455)

#### `rawQueryEventsResponse.oldestLedger`

```ts
oldestLedger: number;
```

**Source:** [src/rpc/api.ts:454](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L454)

#### `rawQueryEventsResponse.scannedLedger`

```ts
scannedLedger: number;
```

**Source:** [src/rpc/api.ts:453](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L453)

#### `rawQueryEventsResponse.scanStatus`

```ts
scanStatus: QueryEventsScanStatus;
```

**Source:** [src/rpc/api.ts:452](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L452)

### rpc.Api.RawSendTransactionResponse

```ts
interface RawSendTransactionResponse extends BaseSendTransactionResponse {
  diagnosticEventsXdr?: string[];
  errorResultXdr?: string;
  hash: string;
  latestLedger: number;
  latestLedgerCloseTime: number;
  status: SendTransactionStatus;
}
```

**Source:** [src/rpc/api.ts:528](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L528)

#### `rawSendTransactionResponse.diagnosticEventsXdr`

This is a base64-encoded instance of an array of
`DiagnosticEvent`s, set only when `status` is `"ERROR"` and
diagnostic events are enabled on the server.

```ts
diagnosticEventsXdr?: string[];
```

**Source:** [src/rpc/api.ts:541](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L541)

#### `rawSendTransactionResponse.errorResultXdr`

This is a base64-encoded instance of `TransactionResult`, set
only when `status` is `"ERROR"`.

It contains details on why the network rejected the transaction.

```ts
errorResultXdr?: string;
```

**Source:** [src/rpc/api.ts:535](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L535)

#### `rawSendTransactionResponse.hash`

```ts
hash: string;
```

**Source:** [src/rpc/api.ts:546](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L546)

#### `rawSendTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:547](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L547)

#### `rawSendTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:548](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L548)

#### `rawSendTransactionResponse.status`

```ts
status: SendTransactionStatus;
```

**Source:** [src/rpc/api.ts:545](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L545)

### rpc.Api.RawSimulateTransactionResponse

```ts
interface RawSimulateTransactionResponse {
  error?: string;
  events?: string[];
  id: string;
  latestLedger: number;
  minResourceFee?: string;
  restorePreamble?: { minResourceFee: string; transactionData: string };
  results?: RawSimulateHostFunctionResult[];
  stateChanges?: RawLedgerEntryChange[];
  transactionData?: string;
}
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction

**Source:** [src/rpc/api.ts:685](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L685)

#### `rawSimulateTransactionResponse.error`

```ts
error?: string;
```

**Source:** [src/rpc/api.ts:688](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L688)

#### `rawSimulateTransactionResponse.events`

These are DiagnosticEvents in base64

```ts
events?: string[];
```

**Source:** [src/rpc/api.ts:692](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L692)

#### `rawSimulateTransactionResponse.id`

```ts
id: string;
```

**Source:** [src/rpc/api.ts:686](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L686)

#### `rawSimulateTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:687](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L687)

#### `rawSimulateTransactionResponse.minResourceFee`

```ts
minResourceFee?: string;
```

**Source:** [src/rpc/api.ts:693](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L693)

#### `rawSimulateTransactionResponse.restorePreamble`

Present if succeeded but has expired ledger entries

```ts
restorePreamble?: { minResourceFee: string; transactionData: string };
```

**Source:** [src/rpc/api.ts:700](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L700)

#### `rawSimulateTransactionResponse.results`

This will only contain a single element if present, because only a single
invokeHostFunctionOperation is supported per transaction.

```ts
results?: RawSimulateHostFunctionResult[];
```

**Source:** [src/rpc/api.ts:698](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L698)

#### `rawSimulateTransactionResponse.stateChanges`

State difference information

```ts
stateChanges?: RawLedgerEntryChange[];
```

**Source:** [src/rpc/api.ts:706](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L706)

#### `rawSimulateTransactionResponse.transactionData`

This is an SorobanTransactionData in base64

```ts
transactionData?: string;
```

**Source:** [src/rpc/api.ts:690](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L690)

### rpc.Api.RawTransactionEvents

```ts
interface RawTransactionEvents {
  contractEventsXdr?: string[][];
  transactionEventsXdr?: string[];
}
```

**Source:** [src/rpc/api.ts:186](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L186)

#### `rawTransactionEvents.contractEventsXdr`

```ts
contractEventsXdr?: string[][];
```

**Source:** [src/rpc/api.ts:188](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L188)

#### `rawTransactionEvents.transactionEventsXdr`

```ts
transactionEventsXdr?: string[];
```

**Source:** [src/rpc/api.ts:187](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L187)

### rpc.Api.RawTransactionInfo

```ts
interface RawTransactionInfo {
  applicationOrder: number;
  createdAt: number;
  diagnosticEventsXdr?: string[];
  envelopeXdr?: string;
  events?: RawTransactionEvents;
  feeBump: boolean;
  ledger: number;
  resultMetaXdr?: string;
  resultXdr?: string;
  status: GetTransactionStatus;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:191](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L191)

#### `rawTransactionInfo.applicationOrder`

```ts
applicationOrder: number;
```

**Source:** [src/rpc/api.ts:195](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L195)

#### `rawTransactionInfo.createdAt`

```ts
createdAt: number;
```

**Source:** [src/rpc/api.ts:194](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L194)

#### `rawTransactionInfo.diagnosticEventsXdr`

```ts
diagnosticEventsXdr?: string[];
```

**Source:** [src/rpc/api.ts:202](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L202)

#### `rawTransactionInfo.envelopeXdr`

```ts
envelopeXdr?: string;
```

**Source:** [src/rpc/api.ts:199](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L199)

#### `rawTransactionInfo.events`

```ts
events?: RawTransactionEvents;
```

**Source:** [src/rpc/api.ts:204](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L204)

#### `rawTransactionInfo.feeBump`

```ts
feeBump: boolean;
```

**Source:** [src/rpc/api.ts:196](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L196)

#### `rawTransactionInfo.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:193](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L193)

#### `rawTransactionInfo.resultMetaXdr`

```ts
resultMetaXdr?: string;
```

**Source:** [src/rpc/api.ts:201](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L201)

#### `rawTransactionInfo.resultXdr`

```ts
resultXdr?: string;
```

**Source:** [src/rpc/api.ts:200](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L200)

#### `rawTransactionInfo.status`

```ts
status: GetTransactionStatus;
```

**Source:** [src/rpc/api.ts:192](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L192)

#### `rawTransactionInfo.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:197](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L197)

### rpc.Api.SendTransactionResponse

```ts
interface SendTransactionResponse extends BaseSendTransactionResponse {
  diagnosticEvents?: DiagnosticEvent[];
  errorResult?: TransactionResult;
  hash: string;
  latestLedger: number;
  latestLedgerCloseTime: number;
  status: SendTransactionStatus;
}
```

**Source:** [src/rpc/api.ts:523](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L523)

#### `sendTransactionResponse.diagnosticEvents`

```ts
diagnosticEvents?: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:525](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L525)

#### `sendTransactionResponse.errorResult`

```ts
errorResult?: TransactionResult;
```

**Source:** [src/rpc/api.ts:524](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L524)

#### `sendTransactionResponse.hash`

```ts
hash: string;
```

**Source:** [src/rpc/api.ts:546](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L546)

#### `sendTransactionResponse.latestLedger`

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:547](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L547)

#### `sendTransactionResponse.latestLedgerCloseTime`

```ts
latestLedgerCloseTime: number;
```

**Source:** [src/rpc/api.ts:548](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L548)

#### `sendTransactionResponse.status`

```ts
status: SendTransactionStatus;
```

**Source:** [src/rpc/api.ts:545](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L545)

### rpc.Api.SendTransactionStatus

```ts
type SendTransactionStatus = "PENDING" | "DUPLICATE" | "TRY_AGAIN_LATER" | "ERROR"
```

**Source:** [src/rpc/api.ts:520](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L520)

### rpc.Api.SimulateHostFunctionResult

```ts
interface SimulateHostFunctionResult {
  auth: SorobanAuthorizationEntry[];
  retval: ScVal;
}
```

**Source:** [src/rpc/api.ts:551](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L551)

#### `simulateHostFunctionResult.auth`

```ts
auth: SorobanAuthorizationEntry[];
```

**Source:** [src/rpc/api.ts:552](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L552)

#### `simulateHostFunctionResult.retval`

```ts
retval: ScVal;
```

**Source:** [src/rpc/api.ts:553](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L553)

### rpc.Api.SimulateTransactionErrorResponse

Includes details about why the simulation failed

```ts
interface SimulateTransactionErrorResponse extends BaseSimulateTransactionResponse {
  _parsed: boolean;
  error: string;
  events: DiagnosticEvent[];
  id: string;
  latestLedger: number;
}
```

**Source:** [src/rpc/api.ts:607](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L607)

#### `simulateTransactionErrorResponse._parsed`

a private field to mark the schema as parsed

```ts
_parsed: boolean;
```

**Source:** [src/rpc/api.ts:591](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L591)

#### `simulateTransactionErrorResponse.error`

```ts
error: string;
```

**Source:** [src/rpc/api.ts:608](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L608)

#### `simulateTransactionErrorResponse.events`

The field is always present, but may be empty in cases where:
  - you didn't simulate an invocation or
  - there were no events

```ts
events: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:609](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L609)

#### `simulateTransactionErrorResponse.id`

always present: the JSON-RPC request ID

```ts
id: string;
```

**Source:** [src/rpc/api.ts:578](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L578)

#### `simulateTransactionErrorResponse.latestLedger`

always present: the LCL known to the server when responding

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:581](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L581)

### rpc.Api.SimulateTransactionResponse

Simplifies [`RawSimulateTransactionResponse`](#rpcapirawsimulatetransactionresponse) into separate interfaces
based on status:
  - on success, this includes all fields, though `result` is only present
    if an invocation was simulated (since otherwise there's nothing to
    "resultify")
  - if there was an expiration error, this includes error and restoration
    fields
  - for all other errors, this only includes error fields

```ts
type SimulateTransactionResponse = SimulateTransactionSuccessResponse | SimulateTransactionRestoreResponse | SimulateTransactionErrorResponse
```

**See also**

- https://developers.stellar.org/docs/data/rpc/api-reference/methods/simulateTransaction

**Source:** [src/rpc/api.ts:571](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L571)

### rpc.Api.SimulateTransactionRestoreResponse

Includes simplified fields only present on success.

```ts
interface SimulateTransactionRestoreResponse extends SimulateTransactionSuccessResponse {
  _parsed: boolean;
  events: DiagnosticEvent[];
  id: string;
  latestLedger: number;
  minResourceFee: string;
  restorePreamble: { minResourceFee: string; transactionData: SorobanDataBuilder };
  result: SimulateHostFunctionResult;
  stateChanges?: LedgerEntryChange[];
  transactionData: SorobanDataBuilder;
}
```

**Source:** [src/rpc/api.ts:612](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L612)

#### `simulateTransactionRestoreResponse._parsed`

a private field to mark the schema as parsed

```ts
_parsed: boolean;
```

**Source:** [src/rpc/api.ts:591](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L591)

#### `simulateTransactionRestoreResponse.events`

The field is always present, but may be empty in cases where:
  - you didn't simulate an invocation or
  - there were no events

```ts
events: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:588](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L588)

#### `simulateTransactionRestoreResponse.id`

always present: the JSON-RPC request ID

```ts
id: string;
```

**Source:** [src/rpc/api.ts:578](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L578)

#### `simulateTransactionRestoreResponse.latestLedger`

always present: the LCL known to the server when responding

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:581](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L581)

#### `simulateTransactionRestoreResponse.minResourceFee`

```ts
minResourceFee: string;
```

**Source:** [src/rpc/api.ts:597](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L597)

#### `simulateTransactionRestoreResponse.restorePreamble`

Indicates that a restoration is necessary prior to submission.

In other words, seeing a restoration preamble means that your invocation
was executed AS IF the required ledger entries were present, and this
field includes information about what you need to restore for the
simulation to succeed.

```ts
restorePreamble: { minResourceFee: string; transactionData: SorobanDataBuilder };
```

**Source:** [src/rpc/api.ts:623](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L623)

#### `simulateTransactionRestoreResponse.result`

present only for invocation simulation

```ts
result: SimulateHostFunctionResult;
```

**Source:** [src/rpc/api.ts:613](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L613)

#### `simulateTransactionRestoreResponse.stateChanges`

State Difference information

```ts
stateChanges?: LedgerEntryChange[];
```

**Source:** [src/rpc/api.ts:603](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L603)

#### `simulateTransactionRestoreResponse.transactionData`

```ts
transactionData: SorobanDataBuilder;
```

**Source:** [src/rpc/api.ts:596](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L596)

### rpc.Api.SimulateTransactionSuccessResponse

Includes simplified fields only present on success.

```ts
interface SimulateTransactionSuccessResponse extends BaseSimulateTransactionResponse {
  _parsed: boolean;
  events: DiagnosticEvent[];
  id: string;
  latestLedger: number;
  minResourceFee: string;
  result?: SimulateHostFunctionResult;
  stateChanges?: LedgerEntryChange[];
  transactionData: SorobanDataBuilder;
}
```

**Source:** [src/rpc/api.ts:595](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L595)

#### `simulateTransactionSuccessResponse._parsed`

a private field to mark the schema as parsed

```ts
_parsed: boolean;
```

**Source:** [src/rpc/api.ts:591](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L591)

#### `simulateTransactionSuccessResponse.events`

The field is always present, but may be empty in cases where:
  - you didn't simulate an invocation or
  - there were no events

```ts
events: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:588](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L588)

#### `simulateTransactionSuccessResponse.id`

always present: the JSON-RPC request ID

```ts
id: string;
```

**Source:** [src/rpc/api.ts:578](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L578)

#### `simulateTransactionSuccessResponse.latestLedger`

always present: the LCL known to the server when responding

```ts
latestLedger: number;
```

**Source:** [src/rpc/api.ts:581](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L581)

#### `simulateTransactionSuccessResponse.minResourceFee`

```ts
minResourceFee: string;
```

**Source:** [src/rpc/api.ts:597](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L597)

#### `simulateTransactionSuccessResponse.result`

present only for invocation simulation

```ts
result?: SimulateHostFunctionResult;
```

**Source:** [src/rpc/api.ts:600](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L600)

#### `simulateTransactionSuccessResponse.stateChanges`

State Difference information

```ts
stateChanges?: LedgerEntryChange[];
```

**Source:** [src/rpc/api.ts:603](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L603)

#### `simulateTransactionSuccessResponse.transactionData`

```ts
transactionData: SorobanDataBuilder;
```

**Source:** [src/rpc/api.ts:596](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L596)

### rpc.Api.SimulationAuthMode

```ts
type SimulationAuthMode = "enforce" | "record" | "record_allow_nonroot"
```

**Source:** [src/rpc/api.ts:556](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L556)

### rpc.Api.TransactionEvents

```ts
interface TransactionEvents {
  contractEventsXdr: ContractEvent[][];
  transactionEventsXdr: TransactionEvent[];
}
```

**Source:** [src/rpc/api.ts:207](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L207)

#### `transactionEvents.contractEventsXdr`

```ts
contractEventsXdr: ContractEvent[][];
```

**Source:** [src/rpc/api.ts:209](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L209)

#### `transactionEvents.transactionEventsXdr`

```ts
transactionEventsXdr: TransactionEvent[];
```

**Source:** [src/rpc/api.ts:208](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L208)

### rpc.Api.TransactionInfo

```ts
interface TransactionInfo {
  applicationOrder: number;
  createdAt: number;
  diagnosticEventsXdr?: DiagnosticEvent[];
  envelopeXdr: TransactionEnvelope;
  events: TransactionEvents;
  feeBump: boolean;
  ledger: number;
  resultMetaXdr: TransactionMeta;
  resultXdr: TransactionResult;
  returnValue?: ScVal;
  status: GetTransactionStatus;
  txHash: string;
}
```

**Source:** [src/rpc/api.ts:212](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L212)

#### `transactionInfo.applicationOrder`

```ts
applicationOrder: number;
```

**Source:** [src/rpc/api.ts:216](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L216)

#### `transactionInfo.createdAt`

```ts
createdAt: number;
```

**Source:** [src/rpc/api.ts:215](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L215)

#### `transactionInfo.diagnosticEventsXdr`

```ts
diagnosticEventsXdr?: DiagnosticEvent[];
```

**Source:** [src/rpc/api.ts:224](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L224)

#### `transactionInfo.envelopeXdr`

```ts
envelopeXdr: TransactionEnvelope;
```

**Source:** [src/rpc/api.ts:220](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L220)

#### `transactionInfo.events`

```ts
events: TransactionEvents;
```

**Source:** [src/rpc/api.ts:226](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L226)

#### `transactionInfo.feeBump`

```ts
feeBump: boolean;
```

**Source:** [src/rpc/api.ts:217](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L217)

#### `transactionInfo.ledger`

```ts
ledger: number;
```

**Source:** [src/rpc/api.ts:214](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L214)

#### `transactionInfo.resultMetaXdr`

```ts
resultMetaXdr: TransactionMeta;
```

**Source:** [src/rpc/api.ts:222](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L222)

#### `transactionInfo.resultXdr`

```ts
resultXdr: TransactionResult;
```

**Source:** [src/rpc/api.ts:221](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L221)

#### `transactionInfo.returnValue`

```ts
returnValue?: ScVal;
```

**Source:** [src/rpc/api.ts:223](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L223)

#### `transactionInfo.status`

```ts
status: GetTransactionStatus;
```

**Source:** [src/rpc/api.ts:213](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L213)

#### `transactionInfo.txHash`

```ts
txHash: string;
```

**Source:** [src/rpc/api.ts:218](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/api.ts#L218)

### rpc.ChargedFees

The fees a transaction declared and was charged, in stroops, as decimal strings.

```ts
interface ChargedFees {
  charged: { inclusion: string | null; resource: { nonRefundable: string; refundable: string; rent: string; total: string } | null; total: string };
  declared: { inclusion: string; max: string; resource: string | null };
  refunded: string | null;
}
```

**Source:** [src/rpc/fees.ts:21](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L21)

#### `chargedFees.charged`

the charged fees. `total` is what the fee source paid, after any refund.
`resource` is what the transaction consumed, and is `null` when the meta
has no Soroban fee breakdown or one that doesn't fit the declared
resource fee. `inclusion` is `null` when it can't be worked out or falls
outside the declared one. For a classic transaction, `inclusion` is the
total. `rent` is part of `refundable`.

```ts
charged: { inclusion: string | null; resource: { nonRefundable: string; refundable: string; rent: string; total: string } | null; total: string };
```

**Source:** [src/rpc/fees.ts:36](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L36)

#### `chargedFees.declared`

the declared fees. `inclusion` is `max - resource`, and is negative if
the envelope declares a resource fee above `max`. For a fee bump, `max`
is the outer fee and `resource` comes from the inner transaction.

```ts
declared: { inclusion: string; max: string; resource: string | null };
```

**Source:** [src/rpc/fees.ts:27](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L27)

#### `chargedFees.refunded`

the resource fee core paid back, or `null` when unknown or for a classic
transaction. Core skips the refund if the fee source was merged in the
same ledger or its liabilities block the credit. With fee events this is
then `"0"`, and `charged.total` is above `inclusion` plus `resource.total`
by the lost amount.

```ts
refunded: string | null;
```

**Source:** [src/rpc/fees.ts:53](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L53)

### rpc.ChargedFeesInput

The input to [`inspectChargedFees`](#rpcinspectchargedfees): a `getTransaction` response with
status `SUCCESS` or `FAILED`, or a `getTransactions` entry.

```ts
interface ChargedFeesInput {
  envelopeXdr: TransactionEnvelope;
  resultMetaXdr: TransactionMeta;
  resultXdr: TransactionResult;
}
```

**Source:** [src/rpc/fees.ts:14](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L14)

#### `chargedFeesInput.envelopeXdr`

```ts
envelopeXdr: TransactionEnvelope;
```

**Source:** [src/rpc/fees.ts:15](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L15)

#### `chargedFeesInput.resultMetaXdr`

```ts
resultMetaXdr: TransactionMeta;
```

**Source:** [src/rpc/fees.ts:17](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L17)

#### `chargedFeesInput.resultXdr`

```ts
resultXdr: TransactionResult;
```

**Source:** [src/rpc/fees.ts:16](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/fees.ts#L16)

### rpc.Durability

Specifies the durability namespace of contract-related ledger entries.

```ts
enum Durability
```

**See also**

- - `State Archival docs`
 - `Rust SDK Storage docs`

**Source:** [src/rpc/server.ts:79](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L79)

### rpc.Server.GetEventsRequest

**Deprecated.** Use `Api.GetEventsRequest` instead.

```ts
type GetEventsRequest = Api.GetEventsRequest
```

**See also**

- [`Api.GetEventsRequest`](#rpcapigeteventsrequest)

**Source:** [src/rpc/server.ts:89](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L89)

### rpc.Server.Options

Options for configuring connections to RPC servers.

```ts
interface Options {
  allowHttp?: boolean;
  headers?: Record<string, string>;
  timeout?: number;
}
```

**Source:** [src/rpc/server.ts:107](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L107)

#### `options.allowHttp`

Allow connecting to http servers, default: `false`. This must be set to false in production deployments! You can also use [`Config`](/reference/cross-cutting/#config) class to set this globally.

```ts
allowHttp?: boolean;
```

**Source:** [src/rpc/server.ts:109](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L109)

#### `options.headers`

Additional headers that should be added to any requests to the RPC server. A redirect to another origin can receive these headers. In the Fetch build, set `maxRedirects` on `server.httpClient.defaults` to strip them in Node, or `maxRedirects: 0` to refuse redirects.

```ts
headers?: Record<string, string>;
```

**Source:** [src/rpc/server.ts:113](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L113)

#### `options.timeout`

Timeout for each request, in whole milliseconds, at most 2147483647. `0` or unset means no limit.

```ts
timeout?: number;
```

**Source:** [src/rpc/server.ts:111](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L111)

### rpc.Server.PollingOptions

```ts
interface PollingOptions {
  attempts?: number;
  sleepStrategy?: SleepStrategy;
}
```

**Source:** [src/rpc/server.ts:91](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L91)

#### `pollingOptions.attempts`

```ts
attempts?: number;
```

**Source:** [src/rpc/server.ts:92](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L92)

#### `pollingOptions.sleepStrategy`

```ts
sleepStrategy?: SleepStrategy;
```

**Source:** [src/rpc/server.ts:93](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L93)

### rpc.Server.ResourceLeeway

Describes additional resource leeways for transaction simulation.

```ts
interface ResourceLeeway {
  cpuInstructions: number;
}
```

**Source:** [src/rpc/server.ts:99](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L99)

#### `resourceLeeway.cpuInstructions`

Simulate the transaction with more CPU instructions available.

```ts
cpuInstructions: number;
```

**Source:** [src/rpc/server.ts:101](https://github.com/stellar/js-stellar-sdk/blob/main/src/rpc/server.ts#L101)
