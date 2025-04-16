function Table ({columnNames, rows}) {
    
    let textBlockStyle = "p-2 border border-black-300";
    const columnHeaders = columnNames.map((name: string) => {
        return <th scope="col" className={"border border-black-300"}>{name}</th>
    });

    const renderedRows = rows.map((row) => {
        return(
            <tr>
                <td scope="row" className={textBlockStyle}>{row.criticism}</td>
                <td className={textBlockStyle}>{row.response}</td>
            </tr>
        )
    });

    return(
        <table className={"border border-collapse border-black-300 table-fixed w-full"}>
            <thead>
                <tr>
                {columnHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}
export default Table;
