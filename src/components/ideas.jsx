import { Box, Card, CardContent, Typography } from "@mui/material";

const Ideas = (props) => {
    return (  
        <Card {...props}>
            <CardContent sx={styles.ideaContent}>
                <Box sx={styles.ideas}>
                    <Typography variant="cardTitle">Ideas For you</Typography>
                    <Typography variant="h6">ready to get business ivvy</Typography>
                    <Typography variant="h7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas cumque corporis repellendus sint, deleniti unde ut doloribus exercitationem tenetur quam vero temporibus atque  </Typography>
                    <Typography variant="link">GET STARTED NOW</Typography>
                </Box>
                <Box sx={styles.contentImage} component={'img'} src="/src/assets/books1.jpeg"/>
            </CardContent>
        </Card>
      
    );
}
/** @type {import("@mui/material").SxProps}   */
 
const styles = {
    ideaContent:{
        display:"flex",
    },
    contentImage:{
        width:80,
        alignSelf:"center",
        height:80,
        ml:"auto"
    },
    ideas:{
        display:"flex",
        flexDirection:"column",
        gap:2,
        width:"60%"
    }
}
export default Ideas;