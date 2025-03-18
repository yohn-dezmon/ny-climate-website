# hamburger menu

- outer div (going to put it into the titlebar)
- one div, have it fixed to the left-hand side
- I think I can use a hamburger image .svg and load it into the div
  - I think this uses the `<img>` tag...
  - oh! what was that website with all of the icons that Stephen shared?
- when I click it, I want a vertical list of divs to appear
  - I want this list to overlap any other divs on the page, and to not move the content.

# spinning

- use CSS Keyframes
- define a keyframe animation
- use a `hover` selector

# Diagramming tools

- draw.io
- whimsical
- miro
- excalidraw
- sketching on paper
- bisio
- mural
- diagrams.net
- sketch.io
- mermaid

# tailwind css stuff

`px-4`:

- `padding-inline: <value>;`
- padding-inline: <start> <end>;
- if one value is provided, it applies to both the start and end
- inline axis: direction that text flows within an element
  - LTR: left to right... inline axis runs horizontally from left to right
  - inline-start is on the left, and inline-end is on the right
- helps to center stuff horizontally

`py-2`:

- helps to center stuff vertically

`absolute`:

- position: absolute;
- position an element outside the normal flow of the document, causing neighboring elements to act as if the element doesn't exist

`top-full`:

- `top: 100%`
- it positions an element 100% down from its nearest positioned ancestor
- positions something directly below its parent element...
- in this case, directly below the hamburger icon

`left-0`:
- `left: 0;`
- positions an element at the very left (0px) of its nearest positioned ancestor
- 
