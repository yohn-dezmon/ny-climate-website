# Bug

- when I was clicking items from the menu drop down, sometimes the page wouldn't load until I clicked it a second time
- this was because of the `onClick` being set at the <div> level that surrounds the `<ul>` itself. Since this resulted in `setIsOpen(!isOpen)`, occasionally the menu would close before the `Link` would get processed.

# Fix

- set `onClick` on the `li` element
- use `useNavigate()` from `react-router-dom` instead of Link
- pass `path` into `navigate()` 
- make sure you call setIsOpen() before `navigate()`
