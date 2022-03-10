import sizes from "./sizes";
export default {
    Palette: { 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column" 
    },
    Colors : {
        height: "90vh",
    },
    goBack: {
        backgroundColor: "black",
        color: "#000",
        width: "20%",
        height: "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opcacity: "1", 
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.333%"
          },
          [sizes.down("md")]: {
            width: "50%",
            height: "20%"
          },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%",
        },
        "& button": {
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
            color: "#fff",
            textTransform: "uppercase",
            textDecoration: "none"
          }      
    },
}