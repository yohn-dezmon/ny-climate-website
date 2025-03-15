
function TitleBar() {

    const boxClasses = "border p-4 bg-gray-200 flex-1 text-center";
    
    return (
        <div className="flex items-center justify-center w-full">
            <div className={boxClasses}>
                climate impacts  
            </div>
            <div className={boxClasses}>
                climate action  
            </div>
            <div className={boxClasses}>
                news 
            </div>
            <div className={boxClasses}>
                data 
            </div>
        </div>
    )
}

export default TitleBar;
