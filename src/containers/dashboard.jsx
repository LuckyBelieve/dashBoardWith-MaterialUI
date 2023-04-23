import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideo from "../components/latestVideoCard";
import ChannelAnalytics from "../components/channelAnalytics";
import Comments from "../components/Comments";
import Ideas from "../components/ideas";
import Insider from "../components/insider";


const Dashboard = () => {
    return (  
        <Box>
            <Typography variant="h5" sx={styles.pageTitle}>Channel Dashboard</Typography>
            <Box sx={styles.columnsContainer}>
                <LatestVideo sx={styles.item}/>
                <Card sx={styles.item} >
                    <CardContent>
                        <Typography variant="cardTitle">Latest Post</Typography>
                        <Box sx={styles.avatarContent}>
                            <Avatar  src="/src/assets/metime.jpg"/>
                            <Typography>HazyHorizons</Typography>
                            <Typography>jan 19,2023</Typography>
                        </Box>
                        <Typography  variant="body2">Lorem ipsum dolor sit amet    consectetur adipisicing elit. Incidunt, facilis? Lorem ipsum dolor sit.</Typography>
                        <Divider sx={styles.title}/>
                        <Box sx={styles.dataContainer}>
                            <Box sx={styles.about}>
                                <Typography variant="h6">Likes</Typography>
                                <Typography variant="h6">12K</Typography>
                            </Box>
                            <Box sx={styles.about}>
                                <Typography variant="h6">comments</Typography>
                                <Typography variant="h6">{6}</Typography>
                            </Box>
                        </Box>
                        <Typography sx={styles.link} variant="link">GO TO COMMUNITY TAB</Typography>
                    </CardContent>
                </Card>
                <ChannelAnalytics sx={styles.item}/>
                <Comments sx={styles.item}/>
                <Ideas sx={styles.item}/>
                <Insider sx={styles.item}/>
            </Box>
        </Box>
    );
}
 
/** @type {import("@mui/material").SxProps}   */
const styles = {
    pageTitle:{
        mb:2
    },
    columnsContainer:{
        columns:"280px 3",
        maxWidth:1400
    },
    item:{
        mb:2
    },
    avatarContent:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        gap:2,
        my:2

    },
    dataContainer:{
        display:"flex",
        justifyContent:"space-between"
    },
    about:{
        width:"50%",
        mt:2
    },
    link:{
        mt:2
    },
    title:{
        mt:2
    }


}
export default Dashboard;