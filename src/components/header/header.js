import infos from "../../infos/infos.json";

const Header = () => {
    return (
        <div className="wsheader">
            <h1 style={{
                fontWeight: "800",
                fontSize: "45px",
                marginBottom: "20px",
                textAlign: "center"
            }}>{infos.header.title}</h1>

            {infos.header.descriptions.map((description, index) => (
                <>
                    <p style={{
                        fontWeight: "500",
                        fontSize: "25px",
                        textAlign: "center"
                    }}>{description}</p>
                </>
            ))}
            
        </div>
    );
};

export default Header;