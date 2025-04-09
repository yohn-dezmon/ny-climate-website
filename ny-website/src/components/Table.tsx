function Table ({columnNames, rows}) {
    /*
    let criticismsHeaderStyle = "ml-10";
    let criticismTextStyle = "text-[8px] text-red-500"
    let responseTextStyle = "text-[8px] font-bold text-blue-500"
    */
    const columnHeaders = columnNames.map((name: string) => {
        return <th scope="col">{name}</th>
    });

    const renderedRows = rows.map((row) => {
        return(
            <tr>
                <td scope="row">{row.criticism}</td>
                <td>{row.response}</td>
            </tr>
        )
    });

    return(
        <table>
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
