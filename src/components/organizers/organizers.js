import infos from "../../infos/infos.json";
import Card from "../card/card";

const Organizers = () => {
    return (
        <div className="section">
            <h2>Organizers</h2>
            <div style={{
                display: "flex",
                flexWrap: "wrap", 
                gap: "50px", 
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "1070px",
                marginTop: "25px",
            }}>
                {infos.orginizers.map((organizer, index) => (
                    <Card key={index} info={organizer}/>
                ))}
            </div>
        </div>
    );
};

export default Organizers;