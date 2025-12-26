# HyperUI

A collection of React UI components I've developed over the years.

## Installation

### `shadcn`

This repo contains a shadcn registry file, allowing any of the components to be installed with `npx`, `bunx` etc.. See each component's description below for the exact command.

### Manual

Copy the component files to your project. Import as regular TSX components.

Most components are self-sufficient. If you see e.g. a CSS file with the same name in the [`/components`](./components/) directory, for manual installation, you should copy it and import it to in the main component's file. Usually a simple import statement (e.g. `import "<component>.css"`, where `<component>` is the name of the file/component) would suffice.

Unless stated otherwise in the component's description, that's all you have to do.

## Components

### `<FitText />`

```bash
npx shadcn@latest add https://hyperseeker.github.io/ui/fit-text.json
```

[FitText](./components/FitText.tsx) allows text to grow in size until it fills up the width of the container.

The most obvious use is to use it in a header of your page, where it can stretch to the width of the viewport.

The optional prop `max` can constrain the width of the text to a certain CSS length: e.g. `"12rem"`, or `"800px"`.

The component calculates its width using CSS math, making it highly-performant.

The calculations are based on the work of [Roman Komarov](https://kizu.dev/fit-to-width/), with further improvements by [Andy Bell of Picalilli](https://piccalil.li/blog/riffing-on-the-latest-css-fit-text-approach/). Without their work, this component wouldn't exist. (JS-based solutions are aplenty, and they may even be quite performant, but this clever CSS method is better in almost every way.)

Examples of this component are available on the original designers' pages linked above.
