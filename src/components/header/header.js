import infos from "../../infos/infos.json";

const Header = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "70px",
            paddingBottom: "70px",
            boxSizing: "border-box",
            backgroundColor: "#008080",
            color: "white"
        }}>
            <h1 style={{
                fontWeight: "800",
                fontSize: "45px",
                marginBottom: "20px"
            }}>{infos.title}</h1>

            <p style={{
                fontWeight: "500",
                fontSize: "18px"
            }}>{infos.title2}</p>
        </div>
    );
};

export default Header;