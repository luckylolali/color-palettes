import chroma from "chroma-js";
import sizes from "./sizes";

export default {
    ColorBox: {
        backgroundColor: props => props.color,
        color: "#000",
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => (props.showingFullPalette ? "20%" : "33.333%")
          },
          [sizes.down("md")]: {
            width: "50%",
            height: props => (props.showingFullPalette ? "10%" : "20%")
          },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        }
    },
    copyText: {
        color: props => chroma(props.color).luminance() >= 0.7 ? "black": "white",
    },
    colorName: {
        color: props => chroma(props.color).luminance() <= 0.10 ? "white": "black",
    },
    seeMore: {
        color: props => chroma(props.color).luminance() >= 0.55 ? "rgba(0,0,0,0.6)": "white",
        position: "absolute",
        right: "0",
        bottom: "0",
        padding: "10px",
        border: "none",       
        backgroundColor: "rgba(255,255,255,.3)"
    },
    copyButton: {
        color: props => chroma(props.color).luminance() >= 0.55 ? "rgba(0,0,0,0.6)": "white",
        width: "100px",
        height: "30px",
        display: "inline-block",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
        outline: "none",
        border: "none",
        backgroundColor: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",       
        textTransform: "uppercase",
        textDecoration: "none",
        opacity: "0",
    },
    boxContent: {
        position: "absolute",
        left: "0",
        bottom: "0",
        padding: "10px",
        textTransform: "uppercase",
        letterSpacing: "1px",
        width: "fit-content",
        fontSize: "12px"
    },
    copyOverlay: {
        backgroundColor: props => props.color,
        opacity: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        transform: "scale(0.1)",
        transition: "transform .6s ease-in-out"
    },
    showOverlay: {
        opacity: 1,
        zIndex: 10,
        position: "absolute",
        transform: "scale(50)"
    },
    copyMsg: {
        opacity: 0,
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        transform: "scale(.1)",
        "& h1": {
            fontWeight: 600,
            textAlign: "center",
            textShadow: "1px 2px black",
            backgroundColor: "rgba(255,255,255,.2)",
            width: "100%",
            padding: "1rem",
            marginBottom: "0",
            textTransform: "uppercase",
            fontSize: "6rem",
            [sizes.down("xs")]: {
                fontSize: "4rem"
            }
        },
        "& > div": { 
            fontSize: "1rem", 
            fontWeight: 200 
        }
    },
    showMsg: {
        opacity: 1,
        zIndex: 20,
        transform: "scale(1)",
        transition: "transform .4s ease-in-out",
        transitionDelay: ".3s"
    }

}