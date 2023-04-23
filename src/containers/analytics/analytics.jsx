import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../../components/tabPanel";
import OverViewChart from "./OverViewChart";
import TopVideoList from "./TopVIdeoList";
import RealtimeChart from "./RealTimeChart";
import LatestVideo from "../../components/latestVideoCard";

const Analytics = () => {
    const [value,setValue] = useState(0);
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    }
    return ( 
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Analytics</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label='Overview' id="tab-0"/>
                <Tab label='Content' id="tab-1"/>
                <Tab label='Audience' id="tab-2"/>
                <Tab label='Revenue' id="tab-3"/>
            </Tabs>
            </Box>
            <TabPanel value = {value} index = {0}>
                <Box sx={styles.overviewContainer}>
                    <Box sx={styles.statsContainer}>
                        <Typography variant="h5">
                            your channel got 23,089 views in last 28 days
                        </Typography>
                        <OverViewChart/>
                        <Divider sx={styles.divider}/>
                        <TopVideoList/>
                    </Box>
                    <Box>
                        <RealtimeChart/>
                        <LatestVideo/>
                    </Box>
                </Box>
            </TabPanel>
            <TabPanel value = {value} index = {1}>
               
            </TabPanel>
            <TabPanel value = {value} index = {2}>
               
            </TabPanel>
            <TabPanel value = {value} index = {3}>
                
            </TabPanel>
        </Box>
    );
}
/** @type {import("@mui/material").SxProps}   */
const styles = {
    pageTitle:{
       mt:2
    },
    overviewContainer:{

    },
    statsContainer:{

    },
    divider:{

    }
}
 
export default Analytics;