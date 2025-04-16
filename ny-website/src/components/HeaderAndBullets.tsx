function HeaderAndBullets({ title, bulletPoints }) {
    let textBlockStyle = "ml-6 mb-4";
    const listItemStyle = "marker:text-black";

    const bulletPointsRendered = bulletPoints.map((bulletPoint) => {
        return (
            <li className={listItemStyle}>{bulletPoint}</li>
        )
    });
    return (
        <div>
            <h2 className="text-xl">{title}</h2>
            <div className={textBlockStyle}>     
                <ul className="list-disc">
                    {bulletPointsRendered}
                </ul>
            </div>
        </div>
    )
}

export default HeaderAndBullets;
