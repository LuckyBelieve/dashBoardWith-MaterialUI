import { Box, Card, CardContent, Typography } from "@mui/material";

const Insider = (props) => {
    return (
        <Card {...props}>
            <CardContent sx={styles.insider}>
                <Typography variant="cardTitle">Creator Insider</Typography>
                <Box component={'img'} src="/src/assets/places.jpg"/>
                <Typography variant="h7">Ready to boost your skills using AI tools</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum doloremque error deserunt non magni, magnam tempore corrupti.</Typography>
                <Typography sx={styles.link} variant="link">WATCH ON YOUTUBE</Typography>
            </CardContent>
        </Card>
    );
}
/** @type {import("@mui/material").SxProps}   */
const styles = {
    link:{
        mt:2
    },
    insider:{
        display:"flex",
        flexDirection:"column",
        gap:2
    }
}
 
export default Insider;