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
                paddingRight: "30px"
            }}>
                <ul>
                {infos.important_dates.map((event_info, index) => (
                    <li style={{
                        fontSize: "18px",
                        marginBottom: "10px"
                    }}>
                        <span style={{
                            fontWeight: "600"
                        }}>{event_info.event_name}</span>
                        : {formatDateToLong(event_info.deadline)}</li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default ImportantDates;