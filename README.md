<p align="center">
    <a href="#"><img src="./assets/strawberry_logo.png" height="150px" /></a>
</p>

<p align="center">
    A set of Svelte components.<br/>
</p>

<p align="center">
    <a href="#install"><strong>Install</strong></a> •
    <a href="#usage"><strong>Usage</strong></a> •
    <a href="#license"><strong>❗️License❗️</strong></a>
</p>

## Installation and Usage
#### Install
```bash
npm i @kwangure/strawberry
```

#### Usage
```html
<script>
    import Button from "@kwangure/strawberry/components/Button";
</script>

<Button on:click="{() => alert('strawberry')}">
    Click me!
</Button>
```
You'll need to preprocess the components with postcss. Here's what it might look like depending on whether
you're using `@sveltejs/kit` or `rollup`.
##### @sveltejs/kit
```javascript
// svelte.config.js
const { preprocessConfig } = require("@kwangure/strawberry/config");

/** @type {import("@sveltejs/kit").Config} */
module.exports = {
    preprocess: sveltePreprocess({
        postcss: {
            plugins: [...preprocessConfig.postcss.plugins],
        }
    }),
    kit: {
        ...
    }
}
...
```
##### Rollup
```javascript
// rollup.config.js
import { preprocessConfig } from "@kwangure/strawberry/config";
import replace from "@rollup/plugin-replace";

...
plugins: [
    replace({
        // Tip: SvelteKit replaces these vars Out of the Box™
        'import.meta.env.MODE': () => JSON.stringify(process.env.NODE_ENV),
        'import.meta.env.DEV': () => String(process.env.NODE_ENV === 'development'),
        'import.meta.env.PROD': () => String(process.env.NODE_ENV === 'production'),
    }),
    // Compile strawberry
    svelte({
        ...
        preprocess: sveltePreprocess(preprocessConfig),
        include: "@kwangure/strawberry/**"
        ...
    }),
    // Compile your components
    svelte({
        ...
        exclude: "@kwangure/strawberry/**"
        ...
    }),
    ...
]
...
```

## LICENSE
**NONE!**

Yes, LBDT for now. I'm still deciding whether I want to open source this. While the package does not have an open source license, consider this a demo to learn from and nothing more.