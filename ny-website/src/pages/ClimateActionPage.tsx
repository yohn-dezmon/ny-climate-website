function EnergyAndEmissionsPage() {
    const listItemStyle = "text-[10px] hover:underline text-blue-600 marker:text-black";

    const listItems = [
        {'url': 'https://www.nyrenews.org/', 'text': 'NY Renews'},
        {'url': 'https://350brooklyn.org/', 'text': '350 Brooklyn'},
        {'url': 'https://www.weact.org/', 'text': 'WE ACT'},
        {'url': 'https://www.nonorthbrooklynpipeline.org/', 'text': 'No North Brooklyn Pipeline'},
        {'url': 'https://citizensclimatelobby.org/chapters/NY_NYC/', 'text': 'Citizens Climate Lobby'}
        ];

    const renderedListItems = listItems.map((item) => {
        return(
            <li key={item.url} className={listItemStyle}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.text}
                </a>
            </li>
        )
    });

    return(
        <div className="relative flex flex-col relative ml-4"> 
            <h1 className="text-center">Climate Action</h1>
            <div className="ml-4 text-[10px]">     
                <ul role="list" className="list-disc">
                    {renderedListItems}
                </ul>
            </div>
                
        </div>
       
    ) 
}

export default EnergyAndEmissionsPage;
