import infos from "../../infos/infos.json";

const Introduction = () => {
    return (
        <div className="section">
            <h2>Introduction</h2>
            {infos.descriptions.map((description, index) => (
                <>
                    <p>{description}</p>
                    <br />
                    <br />
                </>
            ))}
            <a href={infos.paper_sublission_link} target="_blank" style={{
                fontWeight: "600",
                fontSize: "18px",
                color: "red"
            }}>Workshop Paper Submission</a>
        </div>
    );
};

export default Introduction;