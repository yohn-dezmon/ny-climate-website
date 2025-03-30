function LegislationPage() {

    let textBlockStyle = "mb-4 text-[8px]";

    let criticismsHeaderStyle = "ml-10";
    let criticismTextStyle = "text-[8px] text-red-500"
    let responseTextStyle = "text-[8px] font-bold text-blue-500"


    return(
        <div className="relative flex flex-col relative ml-4"> 
            <h1 className="text-center">NY Climate Legislation</h1>
            <h2 className="">Bills Under Consideration (as of 2025)</h2>
            <h3 className="">NY Heat Act</h3>
            <div className={textBlockStyle}>     
                <ul>
                    <li>
                        Remove the “100-foot rule” which currently requires that utilities provide gas service to new customers within 100 feet of existing gas lines. This results in the subsidization of gas infrastructure.
                    </li>
                    <li>
                        Cap energy bills at 6% of household income
                    </li>
                </ul>
            </div> 
            <h4 className={criticismsHeaderStyle}>
                <span className="text-red-500">Criticisms</span> 
                + 
                <span className="text-blue-500">Responses</span></h4>
            <ul>
                <li className={criticismTextStyle}>
                    Could potentially lead to higher energy costs per household
                </li>
                <li className={responseTextStyle}>
                    It will likely lead to lower costs per household due to not needing to subsidize gas infrastructure expansion.
                </li>
            </ul>
            <h3 className="">Cap and Invest</h3>
            <div className={textBlockStyle}>     
                
            </div> 

            <h2 className="">Enacted Climate Legislation </h2>
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
                <ul>
                    <li>
                        While no specific legislation has been passed to establish a Cap and Invest system,
                        the 2023-2024 NY State Budget officially authorized the Department of Environmental Conservation (DEC) 
                        and NYSERDA to design and implement a Cap-and-Invest program.
                    </li>
                </ul>
            </div> 

            <h3 className="">Climate Change Superfund Act (2024)</h3>
            <div className={textBlockStyle}>     
                <ul>
                    <li>
                        Law Holds Fossil Fuel Companies Responsible for Impact of Pollution on New York Communities.
                    </li>
                </ul>
            </div> 

            <h3 className="">Build Public Renewables Act (2023)</h3>
            <div className={textBlockStyle}>     
                <ul>
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
