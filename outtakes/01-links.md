```js
    const listItems = [
        {'title': 'climate impacts', 'path': 'impacts'},
        {'title': 'climate action', 'path': 'action'},
        {'title': 'energy & emissions', 'path': 'energy'},
        {'title': 'policy', 'path': 'policy'},
        {'title': 'news', 'path': 'news'},
        {'title': 'data', 'path': 'data'}
    ]

    const renderedListItems = listItems.map((item) => {
        return(
            <li key={item.path} className={listItemStyle}>
                <Link to={`/${item.path}`}>
                    {item.title}
                </Link>
            </li>
        )

    });


     <ul className="py-2">
                        {renderedListItems}
                    </ul>
```

```js
                    <li className={listItemStyle}><Link to="/energy">energy & emissions</Link></li>

```
