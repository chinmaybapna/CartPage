import React from "react";
import { List, ListItem, ListItemText, Grid, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        bottom: 0,
        width: "100%",
        flexGrow: 1,
        display: 'flex',
        flex: `0 1 auto`,
        flexDirection: `row`,
        flexWrap: `wrap`,
        marginTop: 75,
        marginBotton: 0,
    },

    container: {
        margin: 'auto',
    },

    list : {
        color: 'black',
        margin: '25px',
        columnWidth: '250px',
        fontSize: '18px',
        padding: '20px',
        marginLeft: '50px',
        fontFamily: 'Roboto',
    },
    divContent : {
        color: 'white',
        width: '100%',
        float: "right",
        padding: '20px',
        textAlign:'center',
        height:'100%',
        paddingTop: '45px',
        maxWidth: '700px'
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <List className={classes.list}>
                    <ListItem style={{padding:15}}>
                        <InfoIcon style={{marginRight:'10px', fontSize: 30}}></InfoIcon>
                        About Us
                    </ListItem>
                    <ListItem style={{padding:15}}>
                        <EmailIcon style={{marginRight:'10px', fontSize: 30}}></EmailIcon>
                        indicouture@gmail.com
                    </ListItem>
                    <ListItem style={{padding:15}}>
                        <PhoneIcon style={{marginRight:'10px', fontSize: 30}}></PhoneIcon>
                        +91 9127872336
                    </ListItem>
                    <ListItem style={{padding:15}}>
                        <a href='https://www.instagram.com/_indicouture_/' style={{color: 'black'}}>
                            <InstagramIcon style={{marginRight:'10px', fontSize: 30}}></InstagramIcon>
                        </a>
                        <a href='www.facebook.com' style={{color: 'black'}}>
                            <FacebookIcon style={{marginRight:'10px', fontSize: 30}}></FacebookIcon>
                        </a>
                        <a href='www.likedin.com' style={{color: 'black'}}>
                            <LinkedInIcon style={{fontSize: 30}}></LinkedInIcon>
                        </a>
                    </ListItem>
                </List>
            </div>
        </div>
    );
}

export default Footer;
