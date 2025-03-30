# Bug

- when I was clicking items from the menu drop down, sometimes the page wouldn't load until I clicked it a second time
- this was because of the `onClick` being set at the <div> level that surrounds the `<ul>` itself. Since this resulted in `setIsOpen(!isOpen)`, occasionally the menu would close before the `Link` would get processed.

# Fix

- set the `onClick` to be on the Link itself

--> 3/30 This still occurs!... not sure why. I think it has to do with Link interacting with the state process.
