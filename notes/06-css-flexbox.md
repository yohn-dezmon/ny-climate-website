```html
<div class="flexbox-container">
  <div class="flexbox-item flexbox-item-1"></div>
  <div class="flexbox-item flexbox-item-2"></div>
  <div class="flexbox-item flexbox-item-3"></div>
</div>
```

```css
.flexbox-container {
  display: flex;
}
```

- makes all items the same height
- makes all items show up in the same row
- you can style inner divs from the container div (!!) 

# main axis and cross axis 
- main axis: horizontal
- cross axis: veritcal 
- a flexbox container is layed out in a row (by default)
- you can switch to have it column based, and the two axes flip
- main axis will always go the same direction as your layout
- `justify-content: flex-start` -- all elements will align with the start of the main axis
- `justify
