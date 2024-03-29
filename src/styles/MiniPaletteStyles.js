export default {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        cursor: "pointer",
        "&:hover svg": {
            opacity: "1"
        }
    },
    colors: {
        backgroundColor: "#fff",
        height: "150px",
        width: "100%",
        borderRadius: "3px",
        overflow: "hidden"
        
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height:"25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
    delete: {

    },
    deleteIcon: {
        position: "absolute",
        right: "0",
        top: "0",
        color: "#fff",
        backgroundColor: "#eb3d30",
        padding: "5px",
        height: "30px",
        width: "30px",
        zIndex: "10",
        opacity: "0",
        transition: "opacity 500ms ease-in-out"
    }
};