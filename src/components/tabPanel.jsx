import { Box, Typography } from "@mui/material";

const TabPanel = ({children,value,index,mt = 4}) => {
    return (
        <div
        hidden = {value !== index}
        id={`simple-tabpanel-${index}`}
        >
             {value === index && (
        <Box sx={{mt}}>
          <Typography>{children}</Typography>
        </Box>
    )}
        </div>
    );
}
 
export default TabPanel;