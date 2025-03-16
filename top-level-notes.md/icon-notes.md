# Icons

putting icons inside of the Button component.

Use a third party library:

- `react-icons`
- give access to a ton of different icons
- sets of icons

`npm install --save-exact react-icons@4.6.0`

You put the icon code within `<Button> ... </Button>`

go to "react-icons.github.io/react-icons" for docs.

you find the name of an icon and import it into your file:

`import { GoBell } from 'react-icons/go';`

```
        <Button primary rounded outline>
          <GoBell />
          primary
        </Button>
```
