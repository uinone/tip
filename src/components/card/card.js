const Card = ({info}) => {
    return (
        <div style={{
            display: "flex",
            width: "250px",
            flexDirection: "column",
            marginRight: "30px",
            boxSizing: "border-box"
            // alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
            }}>
                <a href={info.link} target="_blank">
                    <div style={{
                        width: "200px",
                        aspectRatio: "1 / 1",
                        borderRadius: "50%",
                        backgroundColor: "green"
                    }}></div>
                </a>
            </div>
            
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: "700",
                color: "#292929"
            }}>
                <h3>{info.name}</h3>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                fontSize: "15px",
                fontWeight: "500",
                color: "#404040"
            }}>
                <h3>{info.university}</h3>
            </div>
        </div>
    );
};

export default Card;