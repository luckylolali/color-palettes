import sizes from "./sizes";

export default {
    Navbar: {
        display: "flex",
        height: "6vh",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        [sizes.down("sm")]: {
          flexWrap: "wrap",
          height: "auto"
        }
      },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": { 
            color: "#000", 
            textDecoration: "none" 
        },
      },
     
      Slider: { 
          width: "350px", 
          margin: "0 1rem", 
          display: "inline-block", 
          "& .rc-slider-track": { 
              backgroundColor: "transparent" 
            },
          "& .rc-slider-handle, & .rc-slider-handle:active, & .rc-slider-handle:hover,& .rc-slider-handle:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginLeft: "-7px",
            marginTop: "-3px"
          },
          "& .rc-slider-rail": { 
              height: "8px" 
            },
          [sizes.down("md")]:{
            width: "300px"
          }
        },
      SelectContainer: { 
          marginLeft: "auto", 
          marginRight: "2rem" 
        },       
}