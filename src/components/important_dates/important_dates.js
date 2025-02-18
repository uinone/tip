import infos from "../../infos/infos.json";
import Card from "../card/card";
import TableRow from "./table_row";

const ImportantDates = () => {
    return (
        <div className="section">
            <h2>Important Dates</h2>

            <div style={{
                width: "100%"
            }}>
                <div className="tablerow" style={{ 
                    backgroundColor: "#a7e0fc",
                    fontWeight: "700"
                }}>
                    <span style={{
                        width: "350px",
                        padding: "6px"
                    }}>Event</span>
                    <div style={{
                        width: "100px",
                        padding: "6px"
                    }}>
                        <span>Deadline</span>
                    </div>
                </div>
                {infos.important_dates
                .filter(event_info => 
                    new Date(event_info.deadline).toISOString().split("T")[0] >= 
                    new Date().toISOString().split("T")[0]
                )
                .map((event_info, index) => (
                    <TableRow key={index} info={event_info} index={index}/>
                ))}
            </div>
        </div>
    );
};

export default ImportantDates;