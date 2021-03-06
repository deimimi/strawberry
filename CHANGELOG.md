# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.30.2](https://github.com/kwangure/strawberry/compare/v0.30.1...v0.30.2) (2021-07-07)


### Bug Fixes

* remove remnants of mistake :) ([d1e84c3](https://github.com/kwangure/strawberry/commit/d1e84c3d766fbb3f701bd12596be25399d322dff))

### [0.30.1](https://github.com/kwangure/strawberry/compare/v0.30.0...v0.30.1) (2021-07-07)


### Bug Fixes

* correct HUGE oversite :-) ([abc4154](https://github.com/kwangure/strawberry/commit/abc4154a76a51310e9541ea295288453124aa77c))

## [0.30.0](https://github.com/kwangure/strawberry/compare/v0.29.4...v0.30.0) (2021-07-07)


### ⚠ BREAKING CHANGES

* The path to importing input components has changed.

```diff
- import Input { Number, Password } from "@kwangure/strawberry/components/Input";
+import Text from "@kwangure/strawberry/components/Input/Text";
+import Number from "@kwangure/strawberry/components/Input/Number";
+import Password from "@kwangure/strawberry/components/Input/Password";
```

### Features

* switch to documenting using @kwangure/svelte-docs ([e04ac88](https://github.com/kwangure/strawberry/commit/e04ac882e91f273f5d3e27ae6a75be88944d5c4d))


### Bug Fixes

* add utils to deployed packages ([44acbb6](https://github.com/kwangure/strawberry/commit/44acbb6a4df7136375651647c0d458b851c5f81a))

### [0.29.4](https://github.com/kwangure/strawberry/compare/v0.29.3...v0.29.4) (2021-07-04)

### [0.29.3](https://github.com/kwangure/strawberry/compare/v0.29.2...v0.29.3) (2021-07-04)


### Features

* preprocess before publishing ([1b9bbbe](https://github.com/kwangure/strawberry/commit/1b9bbbe77a9eb5c8abd61a4b1300e4c3ab2d9864))

### [0.29.2](https://github.com/kwangure/strawberry/compare/v0.29.1...v0.29.2) (2021-07-03)


### Bug Fixes

* typo ([431b7c4](https://github.com/kwangure/strawberry/commit/431b7c4765754e0973073d89480a14b41dd26223))
* use 'berry-navbar' for css API ([3d057cb](https://github.com/kwangure/strawberry/commit/3d057cb16469feb23188c494aa6d1e0f7b1700dc))

### [0.29.1](https://github.com/kwangure/strawberry/compare/v0.29.0...v0.29.1) (2021-07-02)


### Bug Fixes

*  use renamed custom property ([d87ec71](https://github.com/kwangure/strawberry/commit/d87ec713115535c3cb43d8a626171258c979308b))
* add default nav padding ([5694867](https://github.com/kwangure/strawberry/commit/5694867a0e9b9f2343e6a502adfe5d9286cf598a))
* correct icon fill ([81ef92b](https://github.com/kwangure/strawberry/commit/81ef92b8a915fddf0cf10ed01617a4052794f58d))
* install svelte-preprocess as dependency ([c5f2f2b](https://github.com/kwangure/strawberry/commit/c5f2f2be5a0d43474bacd6b533c867c4aeae76a4))
* upgrade escape string regexp ([05f76cc](https://github.com/kwangure/strawberry/commit/05f76cc11575b0c10a0ffc4d52eab289c94209e4))
* use correct font custom properties ([3f3d6e1](https://github.com/kwangure/strawberry/commit/3f3d6e150fe27485140783349b62e179019f4c70))
* use correct path for inputs ([2d7acf7](https://github.com/kwangure/strawberry/commit/2d7acf72e40ffd64289804dd15013b5b2c5ccc3f))

## [0.29.0](https://github.com/kwangure/strawberry/compare/v0.28.0...v0.29.0) (2021-07-02)


### ⚠ BREAKING CHANGES

* setup preprocessing in Strawberry
* remove icon props from Button
* This removes the props `size`, `flip`, `spin`, `color` and `rotate` in
favour of the custom properties
```css
--br-icon-animation: none;
--br-icon-fill: "currentColor";
--br-icon-transform: none;

--br-icon-size: 24px;
--br-icon-height: var(--br-icon-size);
--br-icon-width: var(--br-icon-size);
```

### Features

* add CSS .berry-code API to Code ([818b355](https://github.com/kwangure/strawberry/commit/818b355c9502b7b6124450a5a9937a13ed565ec4))
* remove icon props from Button ([73e93ac](https://github.com/kwangure/strawberry/commit/73e93ac637257057347e5997567141a7e5969f11))
* setup preprocessing in Strawberry ([a438635](https://github.com/kwangure/strawberry/commit/a43863519a9d5f5b41c9df931b28b2da8883d135))
* shift headings sizes 1 font preset down ([7ec2d37](https://github.com/kwangure/strawberry/commit/7ec2d374cb9f102c7193c53d8f3f2046e3e34b94))


### Bug Fixes

* adjust to breaking Icon changes ([66536a1](https://github.com/kwangure/strawberry/commit/66536a1be8fe985d7c0503dc9abc3bd8b12b47ed))
* remove unneeded styles ([2245d21](https://github.com/kwangure/strawberry/commit/2245d2163acb8c60eb5c29e53785aea07008e9b0))
* use boer-box in all situations ([c4f313a](https://github.com/kwangure/strawberry/commit/c4f313acf01937cb8961a963210d4c5a6f6e5ca8))


* feat! switch to custom properties instead of props ([849c51c](https://github.com/kwangure/strawberry/commit/849c51c824c18f643b609e3536dcef7ca6931584))

## [0.28.0](https://github.com/kwangure/strawberry/compare/v0.27.7...v0.28.0) (2021-06-25)


### ⚠ BREAKING CHANGES

* replace `fullwidth` prop in Button with `--br-button-width`
* make config ES module
* rename padding CSS vars to match browser APIs

### Features

* add inline option to Code ([2593f6c](https://github.com/kwangure/strawberry/commit/2593f6c61d4d9882f92a0708062836913558bd9b))
* add nav component ([ab74a55](https://github.com/kwangure/strawberry/commit/ab74a55db1dc60108d41e0a6d2a9728f3ab73a53))
* add nav link ([b24850e](https://github.com/kwangure/strawberry/commit/b24850e95058bc0db802e6579365edabfe7c4d78))
* add padding around typography ([9842498](https://github.com/kwangure/strawberry/commit/98424988ac977e21486cf2e140e134350d3f3026))
* add pattern to Navbar Links ([26bf080](https://github.com/kwangure/strawberry/commit/26bf080d5079c0e78868eefe428678e1ba5625e6))
* cleanup typograph styling ([0b7d856](https://github.com/kwangure/strawberry/commit/0b7d856c781e9290b2518c34bb252988ef1223ec))
* guard against window in Node ([4793e02](https://github.com/kwangure/strawberry/commit/4793e02b33ce87edd677aff41bd2efdb42d6e73c))
* make config ES module ([6f9bf50](https://github.com/kwangure/strawberry/commit/6f9bf50b3de9e6454e597a62c854ea3457950fce))
* rename padding CSS vars to match browser APIs ([d9c349f](https://github.com/kwangure/strawberry/commit/d9c349f928f89e8e0e6981b16154cd3d1bafbffb))
* render code before highlighting ([d13297b](https://github.com/kwangure/strawberry/commit/d13297be758615d5ae0a025bf4aef425b39ff273))
* replace `fullwidth` prop in Button with `--br-button-width` ([0671740](https://github.com/kwangure/strawberry/commit/06717402e966a6e1e89acb78313626507dd42af3))


### Bug Fixes

* combine base an path correctly ([292e8e2](https://github.com/kwangure/strawberry/commit/292e8e2b92a681ce12694c371028f4fa35fdae4b))
* position Navbar calls-to-action right ([b101809](https://github.com/kwangure/strawberry/commit/b1018092fc9a5fdb962ec6ab5218f7a402899208))
* update eslint to latest svelte-kit API ([a5d8833](https://github.com/kwangure/strawberry/commit/a5d88333b2d2b2ef4db73bd55254a7bdb3a8f373))
* use base in nested root ([d022b7e](https://github.com/kwangure/strawberry/commit/d022b7ee620e82b171313bee0cd0c2cfe7a242a0))

### [0.27.7](https://github.com/kwangure/strawberry/compare/v0.27.6...v0.27.7) (2021-06-15)


### Features

* add arrow to tooltip ([d010f32](https://github.com/kwangure/strawberry/commit/d010f32a82ea075e3f4be1834a53d22db79f8bc1))

### [0.27.6](https://github.com/kwangure/strawberry/compare/v0.27.5...v0.27.6) (2021-06-11)


### Features

* add click gesture to Tooltip ([b84367d](https://github.com/kwangure/strawberry/commit/b84367de17e9ce330f99bc713b3cebe131579c22))
* add code component ([5a6130e](https://github.com/kwangure/strawberry/commit/5a6130e7bf1b51730c7aeb5cab48b72fda9dfe63))
* emit dismiss for closed `Notifications` ([21d8d16](https://github.com/kwangure/strawberry/commit/21d8d16675ebf13c6b61cfa86162c73844a1b049))
* validate number ([a41de1d](https://github.com/kwangure/strawberry/commit/a41de1da0dcde2a3c8154d6136a717342f3269ee))


### Bug Fixes

* allow multiple content types in tooltip ([0dcc27b](https://github.com/kwangure/strawberry/commit/0dcc27b26c0a9eece6afb01b90b609c5887acb1a))

### [0.27.5](https://github.com/kwangure/strawberry/compare/v0.27.4...v0.27.5) (2021-05-13)


### Features

* create link for dropdown item ([f6896c5](https://github.com/kwangure/strawberry/commit/f6896c5deb21a53dbf43d3b9b94a21be4387035f))


### Bug Fixes

* cleanup `Notification` component ([00a7234](https://github.com/kwangure/strawberry/commit/00a7234b4e80c3df177b8221ba618825294453bd))
* handle string addition and float arithmetic ([b7279e8](https://github.com/kwangure/strawberry/commit/b7279e83f834c654db80ab302fed550f6e370edf))
* prevent close dropdown race condition ([ca7339f](https://github.com/kwangure/strawberry/commit/ca7339fd94c1da64de2377074e746c0613d7c841))

### [0.27.4](https://github.com/kwangure/strawberry/compare/v0.27.3...v0.27.4) (2021-05-07)


### Bug Fixes

* add a bit more padding ([d2e1e84](https://github.com/kwangure/strawberry/commit/d2e1e84b21e94da07b11a37e13918588ec99cca0))
* switch to svelte-kit preview from start ([6b2853f](https://github.com/kwangure/strawberry/commit/6b2853f627141ec0a9b75f9d681d7890ef2ee0b7))
* use shorter placeholder ([758536a](https://github.com/kwangure/strawberry/commit/758536aa2f88be1718198a92d0c1105f628b4a48))
* work around CSS specificity issue ([6d6a633](https://github.com/kwangure/strawberry/commit/6d6a633ac79115565ca41da4db4986d0b3d3ac8d))

### [0.27.3](https://github.com/kwangure/strawberry/compare/v0.27.2...v0.27.3) (2021-05-06)


### Features

* clean-up css API & formatting ([931ab3d](https://github.com/kwangure/strawberry/commit/931ab3d8d1c8b4ab1d2126edc8370ccca068549f))

### [0.27.2](https://github.com/kwangure/strawberry/compare/v0.27.1...v0.27.2) (2021-05-06)


### Bug Fixes

* run minutes from 0 to 60 ([acbc8ef](https://github.com/kwangure/strawberry/commit/acbc8ef259f4eb48c015befe72065274c514a177))

### [0.27.1](https://github.com/kwangure/strawberry/compare/v0.27.0...v0.27.1) (2021-05-06)


### Features

* add time picker ([a93771c](https://github.com/kwangure/strawberry/commit/a93771cbc71e43f820cd1504fa061278fe78988e))
* change sidebar section title style ([95a0208](https://github.com/kwangure/strawberry/commit/95a0208d61da12a2a1fa10063d9892ad5f492384))
* color placeholder & add pointer ([35a6f0d](https://github.com/kwangure/strawberry/commit/35a6f0da32d080e9f1c5bbf2df3b132890882f59))


### Bug Fixes

* adjust section title styling ([4520c81](https://github.com/kwangure/strawberry/commit/4520c81d6ace9143c3dbd06a2f9d13ad907840b4))
* correctly add base to path ([0ee9809](https://github.com/kwangure/strawberry/commit/0ee9809ceee164dcd90ca44dda704953e85a83ab))
* guard against missing error ([4ac61de](https://github.com/kwangure/strawberry/commit/4ac61de8ec94406a351b1b574816c5a477db8a86))
* prevent circular dependency on Input ([c50d3ac](https://github.com/kwangure/strawberry/commit/c50d3ac2f7ac8de1d177f1c7e9704f571e446c26))
* remove unneeded specificity ([c59eb8c](https://github.com/kwangure/strawberry/commit/c59eb8cac7b3ccad8a314990ee05a1df49143298))
* rename to wrapper to avoid conflicts ([02b0d97](https://github.com/kwangure/strawberry/commit/02b0d97113da2afe247c3255d48a82c2082d29c0))
* use default input width ([25697cc](https://github.com/kwangure/strawberry/commit/25697cca493d28d8aabc3f3a71fba9edd12d6899))
* use proper label API ([56f810f](https://github.com/kwangure/strawberry/commit/56f810fe842f2c1a0aabb0d939d889d4c1b54d31))
* use stable postfix width ([6a1307b](https://github.com/kwangure/strawberry/commit/6a1307b567ec743d4734fcc8b5446c009a380ee8))

## [0.27.0](https://github.com/kwangure/strawberry/compare/v0.26.0...v0.27.0) (2021-04-04)


### ⚠ BREAKING CHANGES

* simplify creating tooltip
* `placement` prop is now one of
https://popper.js.org/docs/v2/constructors/#options `type Placement`
* remove head and footer `Sidebar` API

### Features

* add `Link` to Sidebar ([ce93a84](https://github.com/kwangure/strawberry/commit/ce93a84aa59278898cbd839fe45f2446b7c1ef89))
* add sidebar sections ([1ea308e](https://github.com/kwangure/strawberry/commit/1ea308e2c41b755e1a65319530d280f1c9b42058))
* remove head and footer `Sidebar` API ([0e12287](https://github.com/kwangure/strawberry/commit/0e12287b66f90a545d5feec3d9e9a884512dfced))
* show stack traces when available ([080e4b4](https://github.com/kwangure/strawberry/commit/080e4b4902f364f8b7f80ddaf96e53def84086f5))
* simplify creating tooltip ([db5a3f1](https://github.com/kwangure/strawberry/commit/db5a3f1f43a1c7875e63314e174b090df8d2595f))
* use popper.js for Dropdown & Select ([063afc0](https://github.com/kwangure/strawberry/commit/063afc01597bd356b3b8e74f6f46b5f1aefec871))


### Bug Fixes

* listen to document click correctly ([754396b](https://github.com/kwangure/strawberry/commit/754396ba68b29b8a7c65e36faafb2966af2bf05b))
* remove unneeded style ([13452dd](https://github.com/kwangure/strawberry/commit/13452ddda4572cf03c01db2b339bb1fb638c4840))
* route relative to base ([451e7cf](https://github.com/kwangure/strawberry/commit/451e7cf232dcc108d36bb00ff06d5def6bd6ebea))

## [0.26.0](https://github.com/kwangure/strawberry/compare/v0.25.0...v0.26.0) (2021-03-26)


### ⚠ BREAKING CHANGES

* change preprocess to object
* use shared eslint-config
* require the v3.35.1 svelte

### Features

* change preprocess to object ([6ae5601](https://github.com/kwangure/strawberry/commit/6ae5601332ece66030c71aedece79ac668909941))
* require the v3.35.1 svelte ([eb75d58](https://github.com/kwangure/strawberry/commit/eb75d58814444c987c62ec06c226e3372bb01d3a))
* use shared eslint-config ([ab068a3](https://github.com/kwangure/strawberry/commit/ab068a3a041a005333a87a44783991b0b5e91c53))
* use shared transition duration ([e562ef1](https://github.com/kwangure/strawberry/commit/e562ef1a17808cb308537de7f5670bbf72bc1e3d))
* use sveltekit for site ([21d4210](https://github.com/kwangure/strawberry/commit/21d4210604b12142024dc0b36642dc677466f570))


### Bug Fixes

* depend on svelte@^3.35.0 ([e68b90e](https://github.com/kwangure/strawberry/commit/e68b90ef4bdbfe004ddc9d67d413b6f685413788))

## [0.25.0](https://github.com/kwangure/strawberry/compare/v0.24.0...v0.25.0) (2021-01-24)


### ⚠ BREAKING CHANGES

* add more capable `Tooltip`

### Features

* add more capable `Tooltip` ([e77e1d9](https://github.com/kwangure/strawberry/commit/e77e1d9961ea2156ffc55679bcc3fb4ccee9f555))


### Bug Fixes

* correct `Select` CSS API ([b3a90fb](https://github.com/kwangure/strawberry/commit/b3a90fbb3e09d3bdd87ef22cb9f94fb0a27985e3))

## [0.24.0](https://github.com/kwangure/strawberry/compare/v0.23.2...v0.24.0) (2021-01-16)


### ⚠ BREAKING CHANGES

* use label slot instead of prop in `Select`

### Features

* use label slot instead of prop in `Select` ([0ee137b](https://github.com/kwangure/strawberry/commit/0ee137b22798eea7b60c7561122d403f9a68ab29))


### Bug Fixes

* check input based on initial group value ([36bd492](https://github.com/kwangure/strawberry/commit/36bd49267ba0f6944dbaa24809a4f1511ec958b2))
* use correct CSS API for inputs ([5d138e6](https://github.com/kwangure/strawberry/commit/5d138e642d3906f4b943b3b580fae44d798e64d6))

### [0.23.2](https://github.com/kwangure/strawberry/compare/v0.23.1...v0.23.2) (2021-01-15)


### Bug Fixes

* use cjs for vite.config.js ([703d02e](https://github.com/kwangure/strawberry/commit/703d02ea31abb7d6304713dfa4466dc33ce2020a))
* use relative paths instead of alias ([2b31b42](https://github.com/kwangure/strawberry/commit/2b31b42f648cb1e5805136525469ed65c8eaa4d7))

### [0.23.1](https://github.com/kwangure/strawberry/compare/v0.23.0...v0.23.1) (2021-01-15)


### Bug Fixes

* export config as cjs ([f0620eb](https://github.com/kwangure/strawberry/commit/f0620eb06ec0c7687d95a4f23e9403ee10375875))
* make package not module ([a5bb2bf](https://github.com/kwangure/strawberry/commit/a5bb2bfd9f15ec865e199d1300cfb6c36b9a46b5))
* move config deps to pkg json dependencies ([29ece48](https://github.com/kwangure/strawberry/commit/29ece48497a39d6b5f4bdb02ce7705e66e75b2b2))

## [0.23.0](https://github.com/kwangure/strawberry/compare/v0.22.0...v0.23.0) (2021-01-15)


### ⚠ BREAKING CHANGES

* `parser`, `formatter` and `invalid` props removed since
they're no longer needed.
* use group wrappers for `Checkbox` and `Radio`
* The icons added code to people who didn't use them
We may add a `slot`-based API at a later date for more generic children
* Use <element slot="label"/> to add a labels to
input components
* pass props normally to path (i.e now use
`<Path stroke="red"/>` instead of `<Path props={stroke:"red"}/>`
* instead of having a separate `units` prop in the `Icon`
include units in the size prop (i.e `size="24px"`)
* instead of using `spin=clockwise|counterclockise` on
the `Icon` component, use
spin={{direction: clockwise|counterclockise, duration: ""}}

### Features

* add `$$restProps` where necessary. ([f1152f0](https://github.com/kwangure/strawberry/commit/f1152f03a8a45664331d4cc10d106c5d607dbff4))
* add `compare` and `format` functions ([84b97e7](https://github.com/kwangure/strawberry/commit/84b97e7e958ad5149e349ff515fdd517ecc4fe3c))
* add double click event to button ([d534067](https://github.com/kwangure/strawberry/commit/d5340675d2012ada105428e285dacc61f71637b7))
* add site to demo/experiment with components ([ecc42ce](https://github.com/kwangure/strawberry/commit/ecc42ced5774d17b1906a9303f3d3147f0a9cd45))
* allow miscellaneous props on button ([b02eccd](https://github.com/kwangure/strawberry/commit/b02eccd7948b30afe50a01261d8f0d0002b61f76))
* introduce 1px border variable ([76fa58b](https://github.com/kwangure/strawberry/commit/76fa58bc4798fa47aeeb3f70a4583959e1fbee0d))
* make label a `slot` instead of `prop` ([cececd3](https://github.com/kwangure/strawberry/commit/cececd3a411f96a61624c72d20aa9b7226c23279))
* pass props to `Path` without needing a `props` object. ([03c8edc](https://github.com/kwangure/strawberry/commit/03c8edc5b278a250b87a58ea69e826b1e9a6ed0d))
* properly limit numeric characters ([010392b](https://github.com/kwangure/strawberry/commit/010392bb1b1245d145a6576a217ecbf672147a96))
* remove icon api for inputs ([ee449d9](https://github.com/kwangure/strawberry/commit/ee449d941e8d2cc21ba4df88ddd4f7fe4f7a1631))
* require object for spin prop ([685f7eb](https://github.com/kwangure/strawberry/commit/685f7eb9da7b9c95452cc7d643b2105de231b4a5))
* require units in `size` prop of `Icon` ([4708d4b](https://github.com/kwangure/strawberry/commit/4708d4bedf94b0896eb1160a68f503cf9bd2cd12))
* use a event-forwarding util to forward paths ([803585b](https://github.com/kwangure/strawberry/commit/803585b880785a74c4ea0da2aeb3ca351a20d170))
* use group wrappers for `Checkbox` and `Radio` ([239b135](https://github.com/kwangure/strawberry/commit/239b1355dbb6ca447c2433c1f9931082c6055d17))


### Bug Fixes

* clean up label api for inputs ([b420922](https://github.com/kwangure/strawberry/commit/b420922dbff92d36b462ca7d9c7131433720b33c))
* decrement on click down ([30905b3](https://github.com/kwangure/strawberry/commit/30905b300021a9cf014946870db3745ef026809e))
* fit postfix wrapper in number input ([32772b2](https://github.com/kwangure/strawberry/commit/32772b24804611d673a6611b30b474c22b038c73))
* focus inputs using action ([93740fe](https://github.com/kwangure/strawberry/commit/93740fee1eb2c7cbe11fbd876bf6547eb6a74596))
* handle `bind:group` on `Radio` specially ([6070cc7](https://github.com/kwangure/strawberry/commit/6070cc72477d1d8ac40aaee962265f5f1a760e4a))
* improve padding around modal ([8efc525](https://github.com/kwangure/strawberry/commit/8efc5254267355f3fdab8940bdd2fe3ae02dc6a0))
* only run closer if dropdown was open ([cd59966](https://github.com/kwangure/strawberry/commit/cd59966a0b822f511298413f876cd7f9d0242b3d))
* only show Sidebar header and footer if used ([600ff1b](https://github.com/kwangure/strawberry/commit/600ff1bcea88f9e1cc625dfb8c7be755e2e0da7b))
* remove problematic style ([f13ebf2](https://github.com/kwangure/strawberry/commit/f13ebf221a5f98d86b1797437adab906634a86d1))
* specify size of input container instead of input ([e12ded9](https://github.com/kwangure/strawberry/commit/e12ded903ca0f6e642b7f67a48bece87dddff515))

## [0.22.0](https://github.com/kwangure/strawberry/compare/v0.21.0...v0.22.0) (2020-10-04)


### ⚠ BREAKING CHANGES

* To import css, now use `stawberry/css/customElement` or
`strawberrycss/standardDOM` depending on your usecase

### Features

* add label slot for Checkbox and Radio component ([1dd5b34](https://github.com/kwangure/strawberry/commit/1dd5b340d7a02e0b8c23147823a3e38bcb4dcf05))
* add radio bind group ([7048897](https://github.com/kwangure/strawberry/commit/7048897029e88989162643658bb24d47912ca688))
* import css in css through postcss ([8c4ae77](https://github.com/kwangure/strawberry/commit/8c4ae77dd2a927effed2459caab5618917cfa1ca))
* modularize CSS ([c4e65f0](https://github.com/kwangure/strawberry/commit/c4e65f0c6db1e41830f112437d53c008d4e7dacb))


### Bug Fixes

* add default input margin ([2af4e84](https://github.com/kwangure/strawberry/commit/2af4e8419473b119af5baf51bfc43afd854a3c5d))
* make radio label optional ([ab68c4a](https://github.com/kwangure/strawberry/commit/ab68c4a8a4bae967a7625c877a0f1cf9bcdc209f))
* remove checkbox/radio input styling ([1118cc2](https://github.com/kwangure/strawberry/commit/1118cc24527c3564f676a247be1f847707f3f50d))
* use flex styling for Checkbox and Radio ([8dd2256](https://github.com/kwangure/strawberry/commit/8dd225695257fdd3c2fd86695f73f0c6b6c41cc7))
* use input-number css name for Number input ([499f5a4](https://github.com/kwangure/strawberry/commit/499f5a4224d54785f773db17b17d45145493e93d))

## [0.21.0](https://github.com/kwangure/strawberry/compare/v0.21.0-alpha.0...v0.21.0) (2020-10-01)


### ⚠ BREAKING CHANGES

* The `flip` prop now accepts a boolean object(e.g { horizontal: true, vertical: false })

### Features

* allow flipping icon horizontally & vertically ([7d02e63](https://github.com/kwangure/strawberry/commit/7d02e630cbb433f42a84fef9f505ca7aa99cca56))
* handle options like native select ([e2d1f6c](https://github.com/kwangure/strawberry/commit/e2d1f6cb3e4fcef657403e3b24d6e5c39bdf075c))


### Bug Fixes

* prevent rotate/scale styles overwriting ([c99d310](https://github.com/kwangure/strawberry/commit/c99d3107b5f52a6a4308c4969052349864df1cf7))
* update to reflect changed API ([4f3f75c](https://github.com/kwangure/strawberry/commit/4f3f75c864984025ccfdb161b41d47cace2126f3))

## [0.21.0-alpha.0](https://github.com/kwangure/strawberry/compare/v0.20.3-alpha.0...v0.21.0-alpha.0) (2020-09-24)


### ⚠ BREAKING CHANGES

* Options components must now have a `value` prop

### Features

* simplify select to read better ([c1f58ed](https://github.com/kwangure/strawberry/commit/c1f58edae5d73c2aa4f212cf97afe24bdfd3b538))


### Bug Fixes

* clamp value on change ([becf3c7](https://github.com/kwangure/strawberry/commit/becf3c767b1d56dcf30e9d97651ed1f5c06a65c5))
* remove conflicting style ([f1e48e9](https://github.com/kwangure/strawberry/commit/f1e48e969efb5c37d6a35bc790033416a0a60848))
* separate out container.css ([fbed852](https://github.com/kwangure/strawberry/commit/fbed852171f4e2326a6d6bd47aa6ebeed9ec2899))
* style input postfix ([d66e10d](https://github.com/kwangure/strawberry/commit/d66e10df9d99a4515e482b1c391e40650de416af))

### [0.20.3-alpha.0](https://github.com/kwangure/strawberry/compare/v0.20.2...v0.20.3-alpha.0) (2020-09-23)


### Features

* separate number component from text input ([c94b6b6](https://github.com/kwangure/strawberry/commit/c94b6b64c21e77fa4215a19ebe402b681fa2bf1c))


### Bug Fixes

* cleanup postfix styiling for Autocomplete ([8aeeb2c](https://github.com/kwangure/strawberry/commit/8aeeb2ca5bf5e24c611704b1858697f76d67fcc6))
* cleanup postfix styling ([12286df](https://github.com/kwangure/strawberry/commit/12286df5066c3ee209948125b3e35346c3838507))

### [0.20.2](https://github.com/kwangure/strawberry/compare/v0.20.1...v0.20.2) (2020-09-18)


### Features

* use text input for number ([e1ca75c](https://github.com/kwangure/strawberry/commit/e1ca75c2f396dd8d156ae117c233c65686305969))


### Bug Fixes

* remove superflous transitions ([5cdb60b](https://github.com/kwangure/strawberry/commit/5cdb60ba8535136b2ea009f01231102678c004b2))
* use JS IntMax & IntMin for Input bounds ([2e44446](https://github.com/kwangure/strawberry/commit/2e4444666b8949208fa3463323b77ed13c78b310))

### [0.20.1](https://github.com/kwangure/strawberry/compare/v0.20.0...v0.20.1) (2020-08-02)


### Bug Fixes

* export sub-components idiomatically to echo https://github.com/kwangure/strawberry/tree/29a4d78293217674ccbfe1f4f204305e439dfb05 ([922bc55](https://github.com/kwangure/strawberry/commit/922bc557c7af1f1f30fb7d832d52f1f80359823c))
* install postcss-custom-properties as depencency ([7520a43](https://github.com/kwangure/strawberry/commit/7520a43b6c9dfaeed917bfa0f455c7b28971301b))

## [0.20.0](https://github.com/kwangure/strawberry/compare/v0.19.3...v0.20.0) (2020-07-30)


### ⚠ BREAKING CHANGES

* You now need to import from components directly.
```javascript
import Select, { Option } from "@kwangure/strawberry/components/Select";
```

### Features

* remove single entry ([29a4d78](https://github.com/kwangure/strawberry/commit/29a4d78293217674ccbfe1f4f204305e439dfb05))
* require label prop in all inputs ([b63bd6e](https://github.com/kwangure/strawberry/commit/b63bd6e29540db86c58176b54d5702566b43c761))
* support IOS and Mac for list ([3d35ab7](https://github.com/kwangure/strawberry/commit/3d35ab72a4bb87801c0ef2f3926919d2fbe48666))


### Bug Fixes

* add type commonjs for compat in config ([913040e](https://github.com/kwangure/strawberry/commit/913040e388f50f81228b0f363e7ad86370f9179c))
* darken blue to increase contast ([795fdc0](https://github.com/kwangure/strawberry/commit/795fdc01d7a354054d91b75400a22bf3e21d5f29))
* update internal.js to match index.js config ([c821052](https://github.com/kwangure/strawberry/commit/c8210529f5f69e405dc8c0764de0350111940590))

### [0.19.3](https://github.com/kwangure/strawberry/compare/v0.19.2...v0.19.3) (2020-07-12)


### Bug Fixes

* only leave out image assets when publishing ([409aa32](https://github.com/kwangure/strawberry/commit/409aa32b5ccfb5d1c347d1ecf2ba13129823a4b9))

### [0.19.2](https://github.com/kwangure/strawberry/compare/v0.19.1...v0.19.2) (2020-07-12)


### Features

* temporarily disable Autocomplete; causing vite bugs ([427ac79](https://github.com/kwangure/strawberry/commit/427ac79635fff66679a65fcd86c5f7d4269d8b61))


### Bug Fixes

* stop inlining CSS vars, instead add fallback ([4b1121c](https://github.com/kwangure/strawberry/commit/4b1121cd0203b70baf8e2ca223513b0e8df4065e))

### [0.19.1](https://github.com/kwangure/strawberry/compare/v0.19.0...v0.19.1) (2020-07-10)


### Bug Fixes

* fix incorrect import of Select key ([4dcf11c](https://github.com/kwangure/strawberry/commit/4dcf11c46922aa3250c1a706300710fea048b4af))

## [0.19.0](https://github.com/kwangure/strawberry/compare/v0.18.0...v0.19.0) (2020-07-10)


### ⚠ BREAKING CHANGES

* Instead of `color` pass the `primary` prop as a Boolean
* Importing components directly now removes the `src` path. For example, what was `@kwangure/strawberry/src/components` is now  `@kwangure/strawberry/components/Button`

### Features

* deprecate `color` prop on Button in favour of `primary` ([34de027](https://github.com/kwangure/strawberry/commit/34de027a78268175eedbdd689c8bc62d0431e07b))


* remove unneeded src folder ([53795c3](https://github.com/kwangure/strawberry/commit/53795c30ba9e21077b941fe9ad0c824796fefedb))

## [0.18.0](https://github.com/kwangure/strawberry/compare/v0.17.0...v0.18.0) (2020-07-10)


### ⚠ BREAKING CHANGES

* You should now import CSS custom properties/variables via `<link/>` to use a Strawberry component

### Features

* make CSS vars available to custom components ([e0e9f51](https://github.com/kwangure/strawberry/commit/e0e9f51104883f620e5c84875245289ae2e37340))
* remove CSS imports via `[@import](https://github.com/import)` ([3f16ad5](https://github.com/kwangure/strawberry/commit/3f16ad5aeb508414c18713a5a267abff1519c481))


### Bug Fixes

* compact CSS in while preprocessing ([9813ff0](https://github.com/kwangure/strawberry/commit/9813ff07d49686665ac465cc9b86af6565b90601))
* handle hide dropdown edge case ([7f06d96](https://github.com/kwangure/strawberry/commit/7f06d9600557a083d3fc996f8f140336cd3814b6))

## [0.17.0](https://github.com/kwangure/strawberry/compare/v0.16.1...v0.17.0) (2020-06-24)


### ⚠ BREAKING CHANGES

* For easier maintaining, I've abandoned web components
* Adding `br-` prevents CSS conflicts with  Strawberry.
* The Select component now only accepts Option components via `<slot/>`.
`active` is now set automatically, similar to the browser select. `icon` has been removed.
* The dropdown component now only accepts children via `<slot/>`.
* The dropdown component now only uses declarative prop-driven changes.

### Features

* add `br-` prefix to CSS custom properties ([7fe4330](https://github.com/kwangure/strawberry/commit/7fe433086c854042a4e652d594541428de5e674d))
* remove `options`, `active`, `icon` prop from Select to simplify ([a896f34](https://github.com/kwangure/strawberry/commit/a896f345d4c1680341f5c0e46b337e60d6e7f27a))
* remove `toggle`, `open` & `close` convenience methods ([5a3a468](https://github.com/kwangure/strawberry/commit/5a3a46839fff909890d213048a0907809f20c491))
* remove nested dropdown items API to simplify ([3dc29ea](https://github.com/kwangure/strawberry/commit/3dc29ea806615c9ed67df95ee97a0f964ecf3878))
* remove support for web components ([25d3f63](https://github.com/kwangure/strawberry/commit/25d3f63bb27b6f1a40e549294233bcd39754e697))

### [0.16.1](https://github.com/kwangure/strawberry/compare/v0.16.0...v0.16.1) (2020-06-05)


### Features

* set tool tip height based on `--item-height` ([3cb2dda](https://github.com/kwangure/strawberry/commit/3cb2ddaf5e2f27cb0c86cd8addb6dc8feceb082d))


### Bug Fixes

* add "berry-"class to Dropdown component ([a0f2261](https://github.com/kwangure/strawberry/commit/a0f22610697a78455ce9bfa0a6973f3eb12903aa))
* add spacing between icon and text in button ([eee7e93](https://github.com/kwangure/strawberry/commit/eee7e93e75051f40905dfea05b5ee09ae1622dc4))
* disable border-width transition causing reflow ([2f406fe](https://github.com/kwangure/strawberry/commit/2f406fe59286d365f7b8c3c24ec812b0cf0127bb))
* use custom onChange event for select component ([3db8984](https://github.com/kwangure/strawberry/commit/3db8984d7fcd47aa11dae4d5cad4d9cba737e18c))

## [0.16.0](https://github.com/kwangure/strawberry/compare/v0.15.7...v0.16.0) (2020-05-19)


### Features

* add "berry-"classes for easier :global override ([dc6c825](https://github.com/kwangure/strawberry/commit/dc6c8255eb61d74fca72acabd9ac1955f1e0f628))


### Bug Fixes

* add spacing between icon and text in button ([a790fef](https://github.com/kwangure/strawberry/commit/a790fef75bb59adf8be528fe9ddf117cd6095ee2))
* align menu-item children center ([f49f022](https://github.com/kwangure/strawberry/commit/f49f022649cd13e166cd29710cc5b247f3717a55))

### [0.15.7](https://github.com/kwangure/strawberry/compare/v0.15.6...v0.15.7) (2020-05-16)


### Features

* add a standard way to change border-radius ([b599e42](https://github.com/kwangure/strawberry/commit/b599e42b70562b64c17319f5dc7ac9a70cb772c2))
* add disabled prop to Button component ([bdbfecd](https://github.com/kwangure/strawberry/commit/bdbfecdbc503a95061c6a692409542c44baefb0b))

### [0.15.6](https://github.com/kwangure/strawberry/compare/v0.15.5...v0.15.6) (2020-05-12)


### Features

* add a standard way to change item-height ([f5c7d6d](https://github.com/kwangure/strawberry/commit/f5c7d6dbc14868055cd93b4f1dc244cdaa19083f))


### Bug Fixes

* cleanup link styling ([812a036](https://github.com/kwangure/strawberry/commit/812a036ba45fe3f84ad0d332af70c38c70a941c5))

### [0.15.5](https://github.com/kwangure/strawberry/compare/v0.15.3...v0.15.5) (2020-04-07)


### Features

* remove path/slot restriction in Icon component ([e43f133](https://github.com/kwangure/strawberry/commit/e43f13337f3b66a6e9ff7a21a0b71625ec22445c))


### Bug Fixes

* use unique placeholder attr in autocomplete select ([a130202](https://github.com/kwangure/strawberry/commit/a13020296f58b89d4a490f32e4ebb58db0ea6113))

### [0.15.4](https://github.com/kwangure/strawberry/compare/v0.15.3...v0.15.4) (2020-02-29)

### Chores

* upgrade Svelte

### Bug Fixes

* use unique placeholder attr in autocomplete select ([a130202](https://github.com/kwangure/strawberry/commit/a13020296f58b89d4a490f32e4ebb58db0ea6113))

### [0.15.3](https://github.com/kwangure/strawberry/compare/v0.15.2...v0.15.3) (2020-02-27)

### [0.15.2](https://github.com/kwangure/strawberry/compare/v0.15.1...v0.15.2) (2020-02-27)

### Features

* add borders to list item ([49e9e43](https://github.com/kwangure/strawberry/commit/49e9e43238ce7a0094b258542e9ba1a9a7a884f5))
* add option for custom icon paths ([66d56c6](https://github.com/kwangure/strawberry/commit/66d56c6106fdea2a860209c940a782e4680394f0))
* add path component to icon ([a98742b](https://github.com/kwangure/strawberry/commit/a98742b4c1b9bf9b59a5ddedf6f8050d9210847a))
* add rotate prop to icon ([34bac81](https://github.com/kwangure/strawberry/commit/34bac81b4da867408223b2b45f41f9c05086f305))
* add selectable list component ([2034994](https://github.com/kwangure/strawberry/commit/203499410ac72651ec603839b5cb5cbc13d56871))
* add support for dynamic icon units ([c782222](https://github.com/kwangure/strawberry/commit/c7822223adbef50f3b156453efc05180cdc3a491))


### Bug Fixes

* allow embeded lists or lists= stopPropagation ([a0f6ec7](https://github.com/kwangure/strawberry/commit/a0f6ec7a0649d206f46f34fc45a46ff6aa05387c))
* avoid dirtifying external data ([20cb1cc](https://github.com/kwangure/strawberry/commit/20cb1cc7ed602ef7067f3bd95561f9a8ec0eb65d))
* cleanly export config bundling config ([34f96f2](https://github.com/kwangure/strawberry/commit/34f96f278d62ccf9f035f14e0c0648184f7211e3))
* correct border-radius styling ([a80ac75](https://github.com/kwangure/strawberry/commit/a80ac750561ca8929a0069fdc7040ca4e99f40ae))
* deselect all list items onDestroy regression ([64ba0e8](https://github.com/kwangure/strawberry/commit/64ba0e89a23e6047f2bf6626f94a3e0ee81144d3))
* export all components ([74a9c2b](https://github.com/kwangure/strawberry/commit/74a9c2b4cfa0226a80ffd968873e0af9ecb72a60))
* export preprocessConfig ([cd47680](https://github.com/kwangure/strawberry/commit/cd47680b94795db6c4a5d1f988cd200d99e50c8b))
* improve modal header styling ([98ceb10](https://github.com/kwangure/strawberry/commit/98ceb106a10a46222c94769220c6a6d1c89bd895))
* prevent css button hover overwrite ([0a09e83](https://github.com/kwangure/strawberry/commit/0a09e837da23897538f184dcf1ec788c65d368e3))
* prevent shifting up and down ([4c09d83](https://github.com/kwangure/strawberry/commit/4c09d83765504558a56bf32fff06f2152a7c91e1))
* remove event listeners when list is destroyed ([17b8400](https://github.com/kwangure/strawberry/commit/17b8400a6e1188d89227fa0fa0b0cd5f7206961e))
* round focus-ring on list item ([1c3b10d](https://github.com/kwangure/strawberry/commit/1c3b10d14239744eaeaa4a136a937277a4405239))
* use consistent button styles ([f1aa124](https://github.com/kwangure/strawberry/commit/f1aa12492475aa13bbc931aa8512d44dcb8dfa77))

# 0.15.1
* fix: fix broken css in Input components. Heaven knows strawberry need tests.

# 0.15.0
This release has a lot more changes than previous ones. Here are a few notable ones:
* feat: add ability for compiling to custom-elements
* feat: add a select component
* feat: add a notification component
* feat: add a steps/progress component for forms
* feat: add a preprocess
* fix: make all input styles more consistent by sharing css
* fix: use shared css vars across all components
* fix: clean up buttons used with icons only
* fix: improve modal positioning and scrolling
* style: enforce eslint rules
* build: rollup config exported for building Strawberry in other Svelte projects

# 0.14.0
* chore(build): export minified dist files
* chore(build): add `pkg.svelte` to allow consuming original components
* feat: export `active` and `visible` props in `dropdown` component
* feat: add regular and autocomplete `select` components
* feat: support changing `icon` component color with javascript
* fix: add `fade` transition to `modal` and `tooltip`
* fix: add `slide` transitions to list items

# 0.13.2
* fix: import change module path

# 0.13.1
* fix: import change module path

# 0.13.0
* feat: separate dropdown and sidebar items.
* feat: ability to use sidebar & dropwdown without items prop
* feat: add onclick events to checkbox & radio label
* fix: clip dropwdown menu items for border-radius.
* feat: improve styling of linked menu-items
* build: compile components before exports

## 0.12.0
* feat: add fullwidth button
* feat: add label to textarea
* feat: add onclick event for items
* fix: add base text input
* refactor: move textarea component
* style: remove style transitions from inputs
* style: fix button icon misalignment

## 0.11.2
* style: better number input styling

## 0.11.1
* fix: clamp number input onchange, not reactively
* style: clean up input border styles

## 0.11.0
* feat: add mouseover + mouseout events to buttons
* fix: clamp number input onchange, not reactively

## 0.10.1
* fix: change incorrect icon path

## 0.10.0
* fix: align flex button text horizontally
* feat: break out input into seperate components

## 0.9.3
* fix: input number capping min and max values

## 0.9.2
* fix: eliminate circular dependency in import
* fix: clamp string values in number input

## 0.9.1
* fix: properly export input

## 0.9.0
* feat: add number input component

## 0.8.1
* fix: disable closability for modal overlay

## 0.8.0
* feat: ability to hide modal close button

## 0.7.0
* feat: add ability to show modal via prop

## 0.6.0
* fix: standardize color pallete
* fix: improve textarea + input border ui
* feat: add input number component

## 0.5.0
* feat: add flip and spin to icon component

## 0.4.2
* fix: actually export dropdown component :sweat_smile:

## 0.4.1
* fix: export dropdown component

## 0.4.0
* feat: add dropdown component

## 0.3.0
* feat: make compilable to custom elements

## 0.2.1
* fix textarea component default props
* fix conflicting and remove unused button styles
* fix sidebar collapsing in flex parent
* fix button loading icon missing
* fix icon component svg view box size
* refactor sidebar

## 0.2.0
* Add textarea component
* Remove conflicting styles
* Delete modal manager owing to new modal component

## 0.1.6
* Rewrite modal component
* Upgrade Svelte dependency

## 0.1.5
* Minor button UI improvement
* Disable selection in sidebar text
* Fix modal close button
* Use @mdi/js as icon source

## 0.1.4
* Remove some unused styles
* Add installation instructions to README
* Add sidebar component

## 0.1.3
* Fix button loading icon not showing
* Fix icon component's SVG

## 0.1.2
* Fix button icon not showing

## 0.1.1
* Initial release