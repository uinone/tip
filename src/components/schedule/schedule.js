import infos from "../../infos/infos.json";

const TableColumn = ({time, title, authors, paperNumber, isLast}) => {
    return <>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: "14px"}}>{time}</div>
        <div style={{display: "flex", flexDirection: "column"}}>
            <span style={{fontSize: "15px", lineHeight: "1.4", fontWeight: "450"}}>{title}</span>
            <span style={{fontSize: "13px", lineHeight: "1.3", fontWeight:"350", marginTop: "5px"}}>{authors}</span>
        </div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px"}}>{paperNumber}</div>
        {!isLast && <div style={{gridColumn :"span 3", backgroundColor: "#c3c3c3", height:"1px", marginTop: "15px", marginBottom: "15px"}}></div>}
    </>
}

const Schedule = () => {
    return (
        <div className="section">
            <h2>Schedule</h2>
            <span style={{fontSize: "20px", marginTop: "20px"}}>18 Sep 2025</span>
            <div style={{
                display: "grid",
                gridTemplateColumns: "0.5fr 1fr 3.5fr 1fr",
                columnGap: "15px",
                marginTop: "20px",
            }}>
                <div></div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700"}}>Time</div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700"}}>Paper</div>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", textAlign: "center"}}>Paper number</div>
                <div style={{gridColumn :"span 4", backgroundColor: "#132048", height:"1px", marginTop: "10px", marginBottom: "15px"}}></div>
                {infos.schedules.map((schedule, i) => (
                    <>
                    {schedule.map((program, j) => {
                        const paperData = infos.papers.find((p) => p.number === program.number);

                        return (
                            <>
                            {j==0 && (
                                <div style={{
                                    gridRow: `span ${schedule.length*2}`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    height: "100%"
                                }}>
                                    <span style={{fontWeight: "600"}}>Session {i+1}</span>
                                </div>
                            )}
                            <TableColumn 
                                key={`${i}-${j}`}
                                time={program.time}
                                title={paperData.title}
                                authors={paperData.authors}
                                paperNumber={paperData.number}
                                isLast={j === schedule.length-1}
                            />
                            </>
                        )
                    })}
                    {i == infos.schedules.length-1 ? <div style={{gridColumn :"span 4", backgroundColor: "#132048", height:"1px", marginTop: "15px", marginBottom: "15px"}}></div> : <div style={{
                        gridColumn :"span 4", 
                        backgroundColor: 
                        "#132048",
                        marginTop: "15px", 
                        marginBottom: "15px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        color: "white",
                        lineHeight: "1.5",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <span style={{fontWeight: "600"}}>Break time</span>
                        <span style={{fontSize: "14px"}}>(15:00 ~ 15:30)</span>
                    </div>}
                    </>
                ))}
            </div>
        </div>
    );
};



export default Schedule;