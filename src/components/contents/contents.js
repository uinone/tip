import Challenge from "../challenge/challenge";
import Introduction from "../introduction/introduction";
import Organizers from "../organizers/organizers";
import PaperTrack from "../papertrack/papertrack";
import RelatedWorks from "../relatedworks/relatedworks";
import Speakers from "../speakers/speakers";

const Contents = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
        }}>
            <Introduction />
            <Speakers />
            <PaperTrack />
            <Challenge />
            <RelatedWorks />
            <Organizers />
        </div>
    );
};

export default Contents;