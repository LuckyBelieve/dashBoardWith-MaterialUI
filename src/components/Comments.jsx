import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";

const Comments = (props) => {
    return (
        <Card {...props}>
            <CardContent>
                <Typography variant="cardTitle">Latest Comments</Typography>
                <Typography variant="h7">Channel Comments i haven't responded to</Typography>
                <Box sx={styles.commentRow}>
                    <Avatar  src="/src/assets/metime.jpg"/>
                    <Box>
                        <Box sx={styles.commentDetailSection} >
                           <Typography variant="h7">Hazy Horizons</Typography>
                           <Typography variant="h7">{2} weeks ago</Typography>
                        </Box>
                        <Typography sx={styles.commentText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, excepturi!</Typography>
                    </Box>
                    <Box sx={styles.contentImage} component={'img'} src="/src/assets/chat.webp"/>
                </Box>
                <Divider sx={styles.divider}/>
                <Box sx={styles.commentRow}>
                    <Avatar  src="/src/assets/metime.jpg"/>
                    <Box>
                        <Box sx={styles.commentDetailSection} >
                           <Typography variant="h7">Hazy Horizons</Typography>
                           <Typography variant="h7">{2} weeks ago</Typography>
                        </Box>
                        <Typography sx={styles.commentText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, excepturi!</Typography>
                    </Box>
                    <Box sx={styles.contentImage} component={'img'} src="/src/assets/chat.webp"/>
                </Box>
                <Divider sx={styles.divider}/>
                <Box sx={styles.commentRow}>
                    <Avatar  src="/src/assets/metime.jpg"/>
                    <Box>
                        <Box sx={styles.commentDetailSection} >
                           <Typography variant="h7">Hazy Horizons</Typography>
                           <Typography variant="h7">{2} weeks ago</Typography>
                        </Box>
                        <Typography sx={styles.commentText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, excepturi!</Typography>
                    </Box>
                    <Box sx={styles.contentImage} component={'img'} src="/src/assets/chat.webp"/>
                </Box>
                <Divider sx={styles.divider}/>
                <Typography sx={styles.link} variant="link">VIEW MORE</Typography>
            </CardContent>
        </Card>
    );
}
/** @type {import("@mui/material").SxProps} */
 const styles = {
    avatarContent:{
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
        gap:2,
        my:2
    },
    contentImage:{
        width:80,
        ml:"auto"
    },
    commentRow:{
        display:"flex",
        alignItems:"flex-start",
        mt:2,
        gap:2
    },
    commentDetailSection:{
            display:"flex",
            alignItems:'center',
            gap:2
    },
    commentText:{
        fontSize:'0.8rem',
        mt:0.5,
        mr:2
    },
    divider:{
        mt:2
    },
    link:{
        mt:2
    }
 }
export default Comments;