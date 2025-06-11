---
title: Button
lang: en-US
---

<!-- @format -->

# Button

Commonly used button.

## Basic usage

:::demo Use `type`, `plain`, `round` and `circle` to define Button's style.

button-pro/basic

:::

## style-3d-neonDisabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button-pro/style-3d-neon

:::

## style-3d-neonDisabled Button

The `disabled` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

button-pro/style-all

:::

## Button API

### Button Attributes

| Name              | Description                                                            | Type                     | Default   |           |          |        |                      |     |
| ----------------- | ---------------------------------------------------------------------- | ------------------------ | --------- | --------- | -------- | ------ | -------------------- | --- |
| size              | button size                                                            | ^[enum]`'large'          | 'default' | 'small'`  | —        |        |                      |     |
| type              | button type                                                            | ^[enum]`'primary'        | 'success' | 'warning' | 'danger' | 'info' | 'text' (deprecated)` | —   |
| plain             | determine whether it's a plain button                                  | ^[boolean]               | false     |           |          |        |                      |     |
| text ^(2.2.0)     | determine whether it's a text button                                   | ^[boolean]               | false     |           |          |        |                      |     |
| bg ^(2.2.0)       | determine whether the text button background color is always on        | ^[boolean]               | false     |           |          |        |                      |     |
| link ^(2.2.1)     | determine whether it's a link button                                   | ^[boolean]               | false     |           |          |        |                      |     |
| round             | determine whether it's a round button                                  | ^[boolean]               | false     |           |          |        |                      |     |
| circle            | determine whether it's a circle button                                 | ^[boolean]               | false     |           |          |        |                      |     |
| loading           | determine whether it's loading                                         | ^[boolean]               | false     |           |          |        |                      |     |
| loading-icon      | customize loading icon component                                       | ^[string] / ^[Component] | Loading   |           |          |        |                      |     |
| disabled          | disable the button                                                     | ^[boolean]               | false     |           |          |        |                      |     |
| icon              | icon component                                                         | ^[string] / ^[Component] | —         |           |          |        |                      |     |
| autofocus         | same as native button's`autofocus`                                     | ^[boolean]               | false     |           |          |        |                      |     |
| native-type       | same as native button's`type`                                          | ^[enum]`'button'         | 'submit'  | 'reset'`  | button   |        |                      |     |
| auto-insert-space | automatically insert a space between two chinese characters            | ^[boolean]               | —         |           |          |        |                      |     |
| color             | custom button color, automatically calculate`hover` and `active` color | ^[string]                | —         |           |          |        |                      |     |
| dark              | dark mode, which automatically converts`color` to dark mode colors     | ^[boolean]               | false     |           |          |        |                      |     |
| tag ^(2.3.4)      | custom element tag                                                     | ^[string] / ^[Component] | button    |           |          |        |                      |     |

### Button Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | customize default content   |
| loading | customize loading component |
| icon    | customize icon component    |

### Button Exposes

| Name           | Description          | Type                              |           |           |           |           |        |          |          |
| -------------- | -------------------- | --------------------------------- | --------- | --------- | --------- | --------- | ------ | -------- | -------- |
| ref            | button html element  | ^[object]`Ref<HTMLButtonElement>` |           |           |           |           |        |          |          |
| size           | button size          | ^[object]`ComputedRef<''          | 'small'   | 'default' | 'large'>` |           |        |          |          |
| type           | button type          | ^[object]`ComputedRef<''          | 'default' | 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'text'>` |
| disabled       | button disabled      | ^[object]`ComputedRef<boolean>`   |           |           |           |           |        |          |          |
| shouldAddSpace | whether adding space | ^[object]`ComputedRef<boolean>`   |           |           |           |           |        |          |          |

## ButtonGroup API

### ButtonGroup Attributes

| Name | Description                                      | Type              | Default   |           |          |         |     |
| ---- | ------------------------------------------------ | ----------------- | --------- | --------- | -------- | ------- | --- |
| size | control the size of buttons in this button-group | ^[enum]`'large'   | 'default' | 'small'`  | —        |         |     |
| type | control the type of buttons in this button-group | ^[enum]`'primary' | 'success' | 'warning' | 'danger' | 'info'` | —   |

### ButtonGroup Slots

| Name    | Description                    | Subtags |
| ------- | ------------------------------ | ------- |
| default | customize button group content | Button  |
