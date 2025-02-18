const formatDateToLong = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]} ${date.getFullYear()}`;
};


const TableRow = ({info, index}) => {
    let backgroundColor = index % 2 === 0 ? "white" : "lightgray";

    if (index === -1) {
        backgroundColor = "#a7e0fc"
    }

    return (
        <div className="tablerow" style={{ backgroundColor }}>
            <span style={{
                width: "350px",
                padding: "5px"
            }}>{info.event_name}</span>
            <div style={{
                width: "100px",
                padding: "5px"
            }}>
                <span>{formatDateToLong(info.deadline)}</span>
            </div>
        </div>
    );
};

export default TableRow;