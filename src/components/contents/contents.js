import Schedule from "../schedule/schedule";
import Introduction from "../introduction/introduction";
import Organizers from "../organizers/organizers";
import ImportantDates from "../important_dates/important_dates";

const Contents = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",

        }}>
            <Introduction />
            <Schedule />
            <ImportantDates />
            <Organizers />
        </div>
    );
};

export default Contents;