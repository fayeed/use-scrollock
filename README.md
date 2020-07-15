# use-scrollock

> Locks/ Unlock scroll for &lt;body /&gt; or other component.

[![NPM](https://img.shields.io/npm/v/use-scrollock.svg)](https://www.npmjs.com/package/use-scrollock) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using npm:

```bash
npm install --save use-scrollock
```

Using yarn:

```bash
yarn add use-scrollock
```

## Usage

```tsx
import * as React from "react";

import { useClipboard } from "use-scrollock";

const Example = () => {
  const { scrollock, toggleScrollock } = useClipboard();

  return <div style={{ height: "100vh", background: "purple" }}>hello</div>;
};
```

## API

### `UseScrollockProps(options: UseScrollockProps): UseScrollockReturnType`

#### `UseScrollockProps`

- `disableHorizontalScroll` - Disables horizontal scroll. Defaults to `true`.
- `disableVerticalScroll` - Disables vertical scroll. Defaults to `true`.
- `padScrollbarSpace` - Should the scroll bar space be preserved. Defaults to `false`.
- `ref` - Provide reference to a component other than body.

#### `UseScrollockReturntype`

- `scrollock` - Incicates the current scrollock state.
- `toggleScrollock(value: boolean)` - toggles the scrollock state, you can manually set the value too.

## [Live Demo](https://use-scrollock.now.sh)

## Found this project useful? ❤️

If you found this project useful, then please consider giving it a ⭐️ on Github and sharing it with your friends via social media.

## Issues and feedback 💭

If you have any suggestion for including a feature or if something doesn't work, feel free to open a Github [issue](https://github.com/fayeed/use-clipboard/issues) for us to have a discussion on it.

## License

MIT © [fayeed](https://github.com/fayeed/use-scrollockd/blob/master/LICENSE)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
