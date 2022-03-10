import sizes from "./sizes";
import bg from "./bg.svg";

export default {
    '@global': {
        ".fade-exit": {
          opacity: "1",
        },
        ".fade-exit-active": {
            opacity: "0",
            transition: "opacity 1500ms ease-out",
          },
      },
    root: {
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#88DD22",
        backgroundImage: `url(${bg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",

    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        // border: "1px solid white"
        [sizes.down("xl")]: {
            width:"80%"
        },
        [sizes.down("xs")]: {
            width: "75%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#fff",
        "& a": {
            color: "#fff"
        }

    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "Repeat(3, 1fr)",
        gridGap: "1.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "Repeat(2, 1fr)",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "1fr",
            gridGap: "1.4rem"
        },
    }
};