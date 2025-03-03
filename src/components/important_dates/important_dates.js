import infos from "../../infos/infos.json";

const formatDateToLong = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

const ImportantDates = () => {
    return (
        <div className="section">
            <h2>Important Dates</h2>

            <div style={{
                width: "100%",
                paddingLeft: "30px",
                paddingRight: "30px",
                marginTop: "5px"
            }}>
                <ul>
                {infos.important_dates.map((event_info, index) => (
                    <li style={{
                        flexDirection: "column",
                        fontSize: "18px",
                        marginBottom: "20px",
                        paddingRight: "30px"
                    }}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div>
                                <span style={{fontWeight: "550"}}>{event_info.event_name}</span>: {formatDateToLong(event_info.deadline)}
                            </div>
                            {event_info.links.map((info, index) => (
                            <>
                                <li style={{marginLeft: "30px", marginTop:"10px"}}>
                                    <a style={{color: "red", fontWeight: "600"}} href={info.link} target="_blank">{info.name}</a>
                                </li>
                            </>
                        ))}
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ImportantDates;