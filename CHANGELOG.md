## 1.0.0 (2021-08-20)


### Features

* add generated TS declarations ([#7](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/7)) ([e52fa9c](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/e52fa9cdf76edcf6e148f4a4316fabb8f37a51c4))
* add method docs ([#8](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/8)) ([4921f7b](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/4921f7bc90fe3938baadec273161821eb51d8f8a))
* support namespaces other than Filecoin ([#10](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/10)) ([918bdc0](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/918bdc081a64b35e4ebe910c35eac5fd574e8b90))


### Bug Fixes

* add release-it to devDeps ([e885a79](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/e885a79eae25a90d7a1b0eeb61ab7746da2507a4))
* add storage miner and worker API methods ([#9](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/9)) ([086fc98](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/086fc98c5200de287cf91973aae02ce7de686a42))


### Trivial Changes

* add 0.0.13 releae docs ([33da8b7](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/33da8b7e7b4df949e3ae676e505136d42eecc797))
* add 0.0.14 changelog ([3bb977e](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/3bb977e8ce239aaad52bde274d293cb0a09e9e4e))
* add ci github actions ([#12](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/12)) ([41b5bd8](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/41b5bd81a25c1dbb1d408675ab7b908fab5c7c98))
* add releasing section to readme ([#13](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/13)) ([b23ef5a](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/b23ef5a1a08ea220daecc02d61bb1272259a9908))
* auto-releases with semantic-release ([a8b62ce](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/a8b62cea2f30b50e4d8801e1bbbc75b6fec524ec))
* clean up README ([9ea2966](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/9ea296628d8d90736fcf10f9c695b1c17954bb1c))
* update changelog ([231dc2b](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/231dc2b9460cd1cdfbf46ad40e246554d164c978))
* update deps ([0216565](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/021656564f7c829a8c3d36b98738d5c51e5220da))
* update to lotus 1.5.2 ([#11](https://github.com/filecoin-shipyard/js-lotus-client-rpc/issues/11)) ([54330d0](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/54330d03969badaf5eb38fc5571a2129e28610bf))
* update type declarations for Lotus v1.1.2 ([b7646fc](https://github.com/filecoin-shipyard/js-lotus-client-rpc/commit/b7646fc8700376ed0c94c28073b419ba19630106))

### 0.0.14

* Add missing storage miner and worker API methods to Typescript declarations.

### 0.0.13

* Adds method descriptions to Typescript declarations.

### 0.0.12

* Added Typescript declarations, generated from schema.

### 0.0.11

* Renamed .import() to .importFile() - SES (Secure ECMAScript) doesn't
  like the method named 'import', presumably because it's the same as
  the JavaScript keyword.
