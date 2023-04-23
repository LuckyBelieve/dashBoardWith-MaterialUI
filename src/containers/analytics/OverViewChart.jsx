import { Box, Tab, Tabs } from "@mui/material";
import { useState ,forwardRef} from "react";
import AnalyticsTabHead from "./AnalyticsTabHead";
import { ArrowDropDownCircleSharp, ArrowDropUp } from "@mui/icons-material";
import TabPanel from "../../components/tabPanel"
import { Bar, Line } from "react-chartjs-2";
import { getMainChatData, mainChartOptions } from "./ChartConfig";

const ViewTabHead = forwardRef((props,ref)=><AnalyticsTabHead {...props}
title='views'
icon={<ArrowDropDownCircleSharp/>}
value='21.4k'
subtitle={'700 less than usual'}/> )
const watchTime = forwardRef((props,ref)=><AnalyticsTabHead {...props}
title='watchTime'
icon={<ArrowDropUp />}
value='21.4k'
subtitle={'700 less than usual'}/> )
const subscribers = forwardRef((props,ref)=><AnalyticsTabHead {...props}
title='subscribers'
icon={<ArrowDropDownCircleSharp/>}
value='21.4k'
subtitle={'700 less than usual'}/> )
const revenue = forwardRef((props,ref)=><AnalyticsTabHead {...props}
title='revenue'
icon={<ArrowDropDownCircleSharp/>}
value='21.4k'
subtitle={'700 less than usual'}/> )
const OverViewChart = () => {
    const [value,setValue] = useState(0)
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    }
    return (
        <Box sx={styles.container}>
            <Tabs value={value} onChange={handleChange}>
                <Tab component={ViewTabHead} id="tab-0"/>
                <Tab component={watchTime} id="tab-1"/>
                <Tab component={subscribers} id="tab-2"/>
                <Tab component={revenue} id="tab-3"/>
            </Tabs>
            <TabPanel value={value} index={0} mr={0}>
                <Box sx={styles.mainChart}>
                    <Bar options={mainChartOptions} data={getMainChatData()}/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1} mr={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChatData()}/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2} mr={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChatData()}/>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={3} mr={0}>
                <Box sx={styles.mainChart}>
                    <Line options={mainChartOptions} data={getMainChatData()}/>
                </Box>
            </TabPanel>
        </Box>
    );
}
/** @type {import("@mui/material").SxProps}   */
 
const styles = {
    container:{
        mt:4,
        width:'100%'
    },
    mainChart:{
        height:250,
        border:1,
        borderColor:'neutral.medium',
        pt:4,
        borderTop:'none',
        borderRadius:1 
    },
}
export default OverViewChart;