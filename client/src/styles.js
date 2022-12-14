import {makeStyles, rgbToHex} from "@material-ui/core";

export default makeStyles(() => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: "steelblue",
        fontFamily: "fantasy",
    },
    image: {
        marginLeft: '15px',
       // boxShadow: "0px 0px 10px grey",
    },
    workInP:{
        color: "maroon",
        fontSize: "medium",
        fontFamily: "cursive",
    }
}));