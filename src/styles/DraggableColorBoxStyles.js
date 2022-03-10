import sizes from "./sizes";
import chroma from "chroma-js";
const styles = {
    root: {
        backgroundColor: props => props.color,
        color: "#000",
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.3)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
          },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
          },
        [sizes.down("sm")]: {
            width: "100%",
            height: "10%"
        }
    },
    boxContent: {
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
        color: props => chroma(props.color).luminance() <= 0.10 ? 
                "rgba(255,255,255,0.8)": 
                "rgba(0,0,0,0.8)",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.5s ease-in"
    }

};

export default styles;