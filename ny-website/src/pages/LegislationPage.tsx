import Table from '../components/Table';

function LegislationPage() {

    let textBlockStyle = "mb-4 text-[8px]";
    const listItemStyle = "marker:text-black";

    // TODO: make these into lists of divs? put text into an object instead so it is more concise.
    // TODO: use a backend to fill in this data?
    // TODO: add bullet points to li's

    // I should break these down into components! e.g. text block
    // then feed the data into them via props...
    const NYHeatActRows = [{"criticism": "Could potentially lead to higher energy costs per household",
                            "response": "It will likely lead to lower costs per household due to not needing to subsidize gas infrastructure expansion."
                            }];
    return(
        <div className="relative flex flex-col relative ml-4"> 
            <h1 className="text-center">NY Climate Legislation</h1>
            <h2 className="text-[24px] text-center">Bills Under Consideration<br></br>(as of 2025)</h2>
            <h3 className="">NY Heat Act</h3>
            <div className={textBlockStyle}>     
                <ul className="list-disc">
                    <li className={listItemStyle}>
                        Remove the “100-foot rule” which currently requires that utilities provide gas service to new customers within 100 feet of existing gas lines. This results in the subsidization of gas infrastructure.
                    </li>
                    <li>
                        Cap energy bills at 6% of household income
                    </li>
                </ul>
            </div> 
            <Table columnNames={['Criticisms', "Responses"]} rows={NYHeatActRows} />
            <h3 className="">Cap and Invest</h3>
            <div className={textBlockStyle}>     
                
            </div> 

            <h2 className="text-[24px] text-center">Enacted Climate Legislation </h2>
            <h3 className="">Climate Leadership and Communities Protection Act (CLCPA) (2019)</h3>
            <div className={textBlockStyle}>     
                <ul>
                    <li>
                        Provides the ground work for a Cap and Invest program.
                    </li>
                </ul>
            </div> 
            <h3 className="">Cap and Invest (2023)</h3>
            <div className={textBlockStyle}>     
                <ul className="list-disc">
                    <li>
                        While no specific legislation has been passed to establish a Cap and Invest system,
                        the 2023-2024 NY State Budget officially authorized the Department of Environmental Conservation (DEC) 
                        and NYSERDA to design and implement a Cap-and-Invest program.
                    </li>
                </ul>
            </div> 

            <h3 className="">Climate Change Superfund Act (2024)</h3>
            <div className={textBlockStyle}>     
                <ul className="list-disc">
                    <li>
                        Law Holds Fossil Fuel Companies Responsible for Impact of Pollution on New York Communities.
                    </li>
                </ul>
            </div> 

            <h3 className="">Build Public Renewables Act (2023)</h3>
            <div className={textBlockStyle}>     
                <ul className="list-disc">
                    <li>
                        (A00279/S04134)
                    </li>
                    <li>
                        New York Power Authority (NYPA) authorized to...
                    </li>
                </ul>
            </div> 

        </div>
       
    ) 
}

export default LegislationPage;
