# starlette [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/starlette.png)](https://nodei.co/npm/starlette/)

Library to grab all conceivable UI colors from any Adobe application and expose them as dynamic CSS variables which update automatically to any user-defined theme or theme changes.

- [Getting Started](#getting-started)
- [Stylesheets](#stylesheets)

| Illustrator | After Effects | Photoshop | Premiere Pro | InDesign | Audition |
| ----------- | ------------- | --------- | ------------ | -------- | -------- |
| 100%        | 100%          | 0%        | 0%           | 0%       | 0%       |

> The panel in the center is [UI Spy](https://github.com/Inventsable/ui-spy). Notice the variables changing value on the left during app theme changes, and the panel's elements being automatically recolored in the center. There's no manual handling at all -- each element has a single CSS variable and never needs to care about user theme ever again.
> ![](https://thumbs.gfycat.com/OffensiveHoarseClownanemonefish-size_restricted.gif)

> After Effects is far more consistent than other apps with it's color scheme. Notice the hover state of buttons is the same as the color of it's default text -- the button text should invert:
> ![](https://thumbs.gfycat.com/NervousRevolvingCorydorascatfish-size_restricted.gif)

---

## Getting Started

Install the package from NPM:

```bash
# Currently only supports panels bundled via Webpack (or equivalent, can use 'import'/modules)
npm install starlette
```

Now import `starlette` and call the `init()` function anywhere in your panel:

```html
<!-- In a .vue file -->
<script>
  import starlette from 'starlette'

  export default {
    name: 'yourComponent',

    mounted() {
      starlette.init();
      // Now all CSS variables are exposed and reactive.
    },
  }
```

This gives you the freedom to write concise CSS with no need for any logic about the theme, simply assign the appropriate color:

```css
.checkbox {
  /* This takes care of every theme, matching the host app exactly */
  fill: var(--color-checkbox);
}

/* Easily apply the hover state with a single line of CSS via the hover variable */
.checkbox:hover {
  fill: var(--color-checkbox-hover);
}

.checkbox-disabled {
  fill: var(--color-checkbox-disabled);
}
```

This is the literal CSS from the screen capture above, located in UI Spy's components/preview/checkbox.vue file.

---

## Stylesheets

### Illustrator (45/50 shown and `dark` is accidentally duplicated on chart (whoops, but works in real life though))

There's no need to use these hexadecimal values directly, instead use something like

```css
background-color: var(--color-bg);
```

| Variable Name                     | Darkest                                                            | Dark                                                               | Light                                                              | Lightest                                                           |
| --------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| --color-bg                        | ![#232323](https://placehold.it/15/232323/ffffff?text=+) `#232323` | ![#535353](https://placehold.it/15/535353/ffffff?text=+) `#535353` | ![#b8b8b8](https://placehold.it/15/b8b8b8/ffffff?text=+) `#b8b8b8` | ![#f0f0f0](https://placehold.it/15/f0f0f0/ffffff?text=+) `#f0f0f0` |
| --color-default                   | ![#d3d3d3](https://placehold.it/15/d3d3d3/ffffff?text=+) `#d3d3d3` | ![#d3d3d3](https://placehold.it/15/d3d3d3/ffffff?text=+) `#d3d3d3` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-text-label                | ![#a6a6a6](https://placehold.it/15/a6a6a6/ffffff?text=+) `#a6a6a6` | ![#a6a6a6](https://placehold.it/15/a6a6a6/ffffff?text=+) `#a6a6a6` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#515151](https://placehold.it/15/515151/ffffff?text=+) `#515151` |
| --color-icon                      | ![#a1a1a1](https://placehold.it/15/a1a1a1/ffffff?text=+) `#a1a1a1` | ![#a1a1a1](https://placehold.it/15/a1a1a1/ffffff?text=+) `#a1a1a1` | ![#454545](https://placehold.it/15/454545/ffffff?text=+) `#454545` | ![#6b6b6b](https://placehold.it/15/6b6b6b/ffffff?text=+) `#6b6b6b` |
| --color-selection                 | ![#46a0f5](https://placehold.it/15/46a0f5/ffffff?text=+) `#46a0f5` | ![#46a0f5](https://placehold.it/15/46a0f5/ffffff?text=+) `#46a0f5` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-divider                   | ![#2c2c2c](https://placehold.it/15/2c2c2c/ffffff?text=+) `#2c2c2c` | ![#2c2c2c](https://placehold.it/15/2c2c2c/ffffff?text=+) `#2c2c2c` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` |
| --color-btn-hover                 | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` |
| --color-btn-border                | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-btn-primary               | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-btn-disabled              | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#282828](https://placehold.it/15/282828/ffffff?text=+) `#282828` |
| --color-btn-active                | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#3b3b3b](https://placehold.it/15/3b3b3b/ffffff?text=+) `#3b3b3b` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-btn-disabled-text         | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#090909](https://placehold.it/15/090909/ffffff?text=+) `#090909` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-btn-primary-text          | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-btn-pill-hover            | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-btn-pill-active           | ![#a7a7a7](https://placehold.it/15/a7a7a7/ffffff?text=+) `#a7a7a7` | ![#a7a7a7](https://placehold.it/15/a7a7a7/ffffff?text=+) `#a7a7a7` | ![#3b3b3b](https://placehold.it/15/3b3b3b/ffffff?text=+) `#3b3b3b` | ![#515151](https://placehold.it/15/515151/ffffff?text=+) `#515151` |
| --color-btn-pill-border           | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-btn-toolbar-active        | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#101010](https://placehold.it/15/101010/ffffff?text=+) `#101010` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-btn-toolbar-active-border | ![#363636](https://placehold.it/15/363636/ffffff?text=+) `#363636` | ![#363636](https://placehold.it/15/363636/ffffff?text=+) `#363636` | ![#030303](https://placehold.it/15/030303/ffffff?text=+) `#030303` | ![#171717](https://placehold.it/15/171717/ffffff?text=+) `#171717` |
| --color-btn-toolbar-hover         | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` | ![#565656](https://placehold.it/15/565656/ffffff?text=+) `#565656` | ![#3c3c3c](https://placehold.it/15/3c3c3c/ffffff?text=+) `#3c3c3c` |
| --color-btn-toolbar-hover-border  | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-btn-icon-active           | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#2e2e2e](https://placehold.it/15/2e2e2e/ffffff?text=+) `#2e2e2e` | ![#2a2a2a](https://placehold.it/15/2a2a2a/ffffff?text=+) `#2a2a2a` | ![#282828](https://placehold.it/15/282828/ffffff?text=+) `#282828` |
| --color-btn-icon-active-border    | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#272727](https://placehold.it/15/272727/ffffff?text=+) `#272727` | ![#1f1f1f](https://placehold.it/15/1f1f1f/ffffff?text=+) `#1f1f1f` |
| --color-btn-icon-hover            | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` |
| --color-btn-icon-hover-border     | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#4b4b4b](https://placehold.it/15/4b4b4b/ffffff?text=+) `#4b4b4b` | ![#272727](https://placehold.it/15/272727/ffffff?text=+) `#272727` | ![#1f1f1f](https://placehold.it/15/1f1f1f/ffffff?text=+) `#1f1f1f` |
| --color-input-idle-bg             | ![#252525](https://placehold.it/15/252525/ffffff?text=+) `#252525` | ![#252525](https://placehold.it/15/252525/ffffff?text=+) `#252525` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-input-idle-border         | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` |
| --color-input-focus-bg            | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#5d5d5d](https://placehold.it/15/5d5d5d/ffffff?text=+) `#5d5d5d` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-input-focus-text          | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-input-focus-border        | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3468b2](https://placehold.it/15/3468b2/ffffff?text=+) `#3468b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-input-idle-text           | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-dropdown-active           | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#101010](https://placehold.it/15/101010/ffffff?text=+) `#101010` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-dropdown-idle             | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` |
| --color-dropdown-hover            | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#393939](https://placehold.it/15/393939/ffffff?text=+) `#393939` | ![#484848](https://placehold.it/15/484848/ffffff?text=+) `#484848` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` |
| --color-dropdown-border           | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` |
| --color-dropdown-item-hover       | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` |
| --color-dropdown-item-selected    | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#5b9bd3](https://placehold.it/15/5b9bd3/ffffff?text=+) `#5b9bd3` | ![#3868b2](https://placehold.it/15/3868b2/ffffff?text=+) `#3868b2` | ![#3d72b9](https://placehold.it/15/3d72b9/ffffff?text=+) `#3d72b9` |
| --color-checkbox                  | ![#a7a7a7](https://placehold.it/15/a7a7a7/ffffff?text=+) `#a7a7a7` | ![#a7a7a7](https://placehold.it/15/a7a7a7/ffffff?text=+) `#a7a7a7` | ![#3b3b3b](https://placehold.it/15/3b3b3b/ffffff?text=+) `#3b3b3b` | ![#515151](https://placehold.it/15/515151/ffffff?text=+) `#515151` |
| --color-checkbox-hover            | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#ffffff](https://placehold.it/15/ffffff/ffffff?text=+) `#ffffff` | ![#636363](https://placehold.it/15/636363/ffffff?text=+) `#636363` | ![#767676](https://placehold.it/15/767676/ffffff?text=+) `#767676` |
| --color-checkbox-disabled         | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#090909](https://placehold.it/15/090909/ffffff?text=+) `#090909` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-scrollbar                 | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#2b2b2b](https://placehold.it/15/2b2b2b/ffffff?text=+) `#2b2b2b` | ![#3e3e3e](https://placehold.it/15/3e3e3e/ffffff?text=+) `#3e3e3e` | ![#414141](https://placehold.it/15/414141/ffffff?text=+) `#414141` |
| --color-scrollbar-arrow           | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#757575](https://placehold.it/15/757575/ffffff?text=+) `#757575` | ![#171717](https://placehold.it/15/171717/ffffff?text=+) `#171717` | ![#282828](https://placehold.it/15/282828/ffffff?text=+) `#282828` |
| --color-scrollbar-thumb           | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#3f3f3f](https://placehold.it/15/3f3f3f/ffffff?text=+) `#3f3f3f` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1e1e1e](https://placehold.it/15/1e1e1e/ffffff?text=+) `#1e1e1e` |
| --color-scrollbar-thumb-hover     | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#545454](https://placehold.it/15/545454/ffffff?text=+) `#545454` | ![#090909](https://placehold.it/15/090909/ffffff?text=+) `#090909` | ![#010101](https://placehold.it/15/010101/ffffff?text=+) `#010101` |
| --color-tooltip-border            | ![#575757](https://placehold.it/15/575757/ffffff?text=+) `#575757` | ![#575757](https://placehold.it/15/575757/ffffff?text=+) `#575757` | ![#0f0f0f](https://placehold.it/15/0f0f0f/ffffff?text=+) `#0f0f0f` | ![#474747](https://placehold.it/15/474747/ffffff?text=+) `#474747` |
| --color-header                    | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#222222](https://placehold.it/15/222222/ffffff?text=+) `#222222` | ![#1c1c1c](https://placehold.it/15/1c1c1c/ffffff?text=+) `#1c1c1c` | ![#1d1d1d](https://placehold.it/15/1d1d1d/ffffff?text=+) `#1d1d1d` |
| --color-header-border             | ![#171717](https://placehold.it/15/171717/ffffff?text=+) `#171717` | ![#171717](https://placehold.it/15/171717/ffffff?text=+) `#171717` | ![#0e0e0e](https://placehold.it/15/0e0e0e/ffffff?text=+) `#0e0e0e` | ![#0e0e0e](https://placehold.it/15/0e0e0e/ffffff?text=+) `#0e0e0e` |

### After Effects (coming soon)

---

## Todo

- `init()` should assign low-specificity base rules like `font-family: 'Open Sans', sans-serif;`, assign the `<body>` tag's `background-color` to `--color-bg`, and automatically assign the scrollbar's style.
- Support for other apps
- Extend API and documentation
