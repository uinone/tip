import infos from "../../infos/infos.json";

const Header = () => {
    return (
        <div className="wsheader">
            <h1 style={{
                fontWeight: "800",
                fontSize: "45px",
                marginBottom: "20px"
            }}>{infos.header.title}</h1>
            
            <h1 style={{
                fontWeight: "800",
                fontSize: "30px",
                marginBottom: "20px",
	            textAlign: "center"
            }}>{infos.header.descriptions[0]}</h1>

            <p style={{
                fontWeight: "500",
                fontSize: "20px",
	            textAlign: "center"
            }}>{infos.header.descriptions[1]}</p>
        </div>
    );
};

export default Header;