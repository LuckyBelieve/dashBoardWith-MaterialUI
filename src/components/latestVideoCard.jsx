import { Box, Card, CardContent, Typography } from "@mui/material";

const LatestVideo = (props) => {
    return (  
        <Card {...props}>
            <CardContent>
                <Typography variant="cardTitle">Latest Video performance</Typography>
                <Box sx={styles.LatestVideoContainer}>
                    <Box sx={styles.latestVideoThumbnail} component={'img'} src="/src/assets/chat.webp"/>
                    <Typography sx={styles.latestVideoTitle}>Amazing places in the world</Typography>
                </Box>
                <Typography variant="h7" sx={styles.latestVideoTime}> First six hours:</Typography>
                <Box sx={styles.latestVideoStats}>
                    <Typography variant="h7">views</Typography>
                    <Typography variant="h7">255</Typography>
                </Box>
                <Box sx={styles.latestVideoStats}>
                    <Typography variant="h7">watch Time</Typography>
                    <Typography variant="h7">30</Typography>
                </Box>
                <Box sx={styles.latestVideoStats}>
                    <Typography variant="h7">Likes</Typography>
                    <Typography variant="h7">23</Typography>
                </Box>
                <Typography variant="link" sx={styles.links}>Go to Video Analytics</Typography>
                <Typography variant="link" sx={styles.links}>See comments ({12})</Typography>
            </CardContent>
        </Card>
    );
}
/** @type {import("@mui/material").SxProps}   */
const styles = {
    LatestVideoContainer:{
        width:"100%",
        position:"relative"
    },
    latestVideoThumbnail:{
        width:'100%',
        height:"200px",
        mt:1,
        filter:"brightness(20%)",
        display:"block"
    },
    latestVideoTitle:{
        position:"absolute",
        bottom:0,
        color:"neutral.light",
        left:0,
        right:0,
        textAlign:"center",
        fontWeight:"bold",
        fontSize:"1em",
        mb:2
    },
    latestVideoTime:{
        color:"neutral.normal",
        mt:2
    },
    latestVideoStats:{
        display:"flex",
        justifyContent:"space-between",
        mt:2
    },
    links:{
        mt:2,
        textTransform:"uppercase"
    }

}
 
export default LatestVideo;