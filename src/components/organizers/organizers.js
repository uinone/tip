import infos from "../../infos/infos.json";
import Card from "../card/card";

const Organizers = () => {
    return (
        <div className="section" style={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            boxSizing: "border-box",
        }}>
            <h2>Organizers</h2>
            <div style={{
                display: "flex",
                alignItems: "center",
                marginTop: "25px",
                overflowY: "hidden",
                overflowX: "auto",   
                whiteSpace: "nowrap" 
            }}>
                {infos.orginizers.map((organizer, index) => (
                    <Card info={organizer}/>
                ))}
            </div>
        </div>
    );
};

export default Organizers;