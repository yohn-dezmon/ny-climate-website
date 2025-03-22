# CSS Position

- static
- relative
- fixed
- absolute
- sticky

The position property influences the page layout.

- a relative position moves the element, but still consumes some space in the original position
- an absolute or fixed position moves the element, but does not consume any layout space

https://dev.to/efpage/css-positioning-absolute-is-absolute-relative-eea#:~:text=In%20practice%2C%20things%20are%20not,not%20consume%20any%20layout%20space.

https://www.youtube.com/watch?v=jx5jmI0UlXU

with `top` and `left` without a position, those values are ignored.

- with absolute... I think it literally moves the div to start at where top and left are, disregarding other divs already rendered.

# absolute

- absolute position in CSS is only absolute if each parent does not have a position set.
- in that case, the body is used as the anchor.
- if there is positioning on the parent, then absolute is actually relative to the parent

# static

- static is the default position
- computed tab in the browser!

# relative

- similar to static
- `position: relative`
- you can change the top, left, right, and bottom of this element
- (you can't do that with static)
- `left: 10px` -- this will shift the div 10px away from the left side
- "relative" allows you to move the element relative to where it would be with static
- results in overflowing... (e.g. the div will overlap other divs)
- to get divs not to overlap, you'd have to apply the same left, top, right, bottom to the following divs...
- even though it supports top/left/right/bottom, it isn't often used due to above bullet point.
- most common usecase for relative is for a PARENT CONTAINER! such that absolute will work within it.

# absolute

- the position of one div will not affect the position of other divs with just `absolute`
- absolutely positions some element within some parent container
- the default container is the <body> element
- if you use absolute on a div, and its parent does not have a position set to relative/absolute/sticky/fixed, <body> will be the parent container

# fixed

