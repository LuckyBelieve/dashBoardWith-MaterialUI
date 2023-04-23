import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelAnalytics = (props) => {
    return (
        <Card {...props}>
        <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h3">4,414</Typography>
            <Typography variant="h7">+77 in last {78} days</Typography>
            <Divider sx={styles.divider}/>
            <Typography variant="cardTitle">Summary</Typography>
            <Typography variant="h8">Last {28} days</Typography>
            <Box sx={styles.summary}>
                <Typography variant="h7">views</Typography>
                <Typography variant="h7">225k</Typography>
            </Box>
            <Box sx={styles.summary}>
                <Typography variant="h7">Watch time (hours)</Typography>
                <Typography variant="h7">22k</Typography>
            </Box>
            <Box sx={styles.summary}>
                <Typography variant="h7">Estimated Revenue</Typography>
                <Typography variant="h7">${450.00}</Typography>
            </Box>
            <Divider sx={styles.divider}/>
            <Typography variant="cardTitle">Top Videos</Typography>
            <Typography variant="h8">Last {48} hours . Views</Typography>
            <Box sx={styles.summary}>
                <Typography variant="h7">How to become a software developer in 2023</Typography>
                <Typography variant="h7">225k</Typography>
            </Box>
            <Box sx={styles.summary}>
                <Typography variant="h7">CSS grids:How to use css grid to make awasome userinteface</Typography>
                <Typography variant="h7">25k</Typography>
            </Box>
            <Box sx={styles.summary}>
                <Typography variant="h7">call APIs in React native: Practical guide</Typography>
                <Typography variant="h7">225k</Typography>
            </Box>
            <Typography sx={styles.link} variant="link">GO TO VIDEO ANALYTICS</Typography>
        </CardContent>
    </Card>
    );
}
 /** @type {import("@mui/material").SxProps}   */
 const styles = {
    divider:{
        my:2
    },
    summary:{
        display:"flex",
        justifyContent:"space-between",
        mt:2,
        "&:hover":{
            color:"primary.main",
            cursor:"pointer"
        }
    },
    link:{
        mt:2
    }
  
 }
export default ChannelAnalytics;