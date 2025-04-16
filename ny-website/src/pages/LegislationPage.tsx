import Table from '../components/Table';
import HeaderAndBullets from '../components/HeaderAndBullets';

function LegislationPage() {

    let textBlockStyle = "ml-6 mb-4";
    const listItemStyle = "marker:text-black";

    const NYHeatActRows = [{"criticism": "Could potentially lead to higher energy costs per household",
                            "response": "It will likely lead to lower costs per household due to not needing to subsidize gas infrastructure expansion."
                            }];

    const NYHeatActBulletPoints = ['Remove the “100-foot rule” which currently requires that utilities provide gas service to new customers within 100 feet of existing gas lines. This results in the subsidization of gas infrastructure.',
                                            'Cap energy bills at 6% of household income'];
    
    const CLCPABulletPoints = ['Provides the ground work for a Cap and Invest program.'];
    
    const capAndInvestBulletPoints = ['While no specific legislation has been passed to establish a Cap and Invest system, the 2023-2024 NY State Budget officially authorized the Department of Environmental Conservation (DEC) and NYSERDA to design and implement a Cap-and-Invest program.'];
    
    const superfundBulletPoints = ['Law Holds Fossil Fuel Companies Responsible for Impact of Pollution on New York Communities.'];
    
    const publicRenewablesBulletPoints = ['(A00279/S04134)' , 'New York Power Authority (NYPA) authorized to...'];
    return(
        <div className="relative flex flex-col relative ml-4 mr-4"> 
            <h2 className="text-2xl text-center">Bills Under Consideration<br></br>(as of 2025)</h2>
            <HeaderAndBullets title={"NY Heat Act"} bulletPoints={NYHeatActBulletPoints} />
             
            <Table columnNames={['Criticisms', "Responses"]} rows={NYHeatActRows} />

            <h2 className="text-2xl text-center mb-4 mt-4">Enacted Climate Legislation </h2>
            <HeaderAndBullets title={"Climate Leadership and Communities Protection Act (CLCPA) (2019)"} bulletPoints={CLCPABulletPoints} />
            
            <HeaderAndBullets title={"Cap and Invest (2023)"} bulletPoints={capAndInvestBulletPoints} />

            <HeaderAndBullets title={"Climate Change Superfund Act (2024)"} bulletPoints={superfundBulletPoints} />

            <HeaderAndBullets title={"Build Public Renewables Act (2023)"} bulletPoints={publicRenewablesBulletPoints} />

        </div>
       
    ) 
}

export default LegislationPage;
