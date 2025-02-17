import infos from "../../infos/infos.json";

const Introduction = () => {
    return (
        <div className="section" style={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            boxSizing: "border-box",
        }}>
            <h2>Introduction</h2>
            {infos.descriptions.map((description, index) => (
                <>
                    <p>{description}</p>
                    <br />
                    <br />
                </>
            ))}
        </div>
    );
};

export default Introduction;