const Card = ({info}) => {
    return (
        <div className="card">
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%"
            }}>
                <a href={info.link} target="_blank" style={{textDecoration: "none"}}>
                    <img src={`${process.env.PUBLIC_URL}${info.img_path}`} alt="" style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxSizing: "border-box"
                    }} />
                </a>
            </div>
            
            <div className="cardname">
                <h3>{info.name}</h3>
            </div>

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                fontSize: "15px",
                fontWeight: "500",
                color: "#404040",
                textWrap: "nowrap"
            }}>
                <h3>{info.university}</h3>
            </div>
        </div>
    );
};

export default Card;