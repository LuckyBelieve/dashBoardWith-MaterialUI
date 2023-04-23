import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from "../components/tabPanel";
import { DataGrid } from "@mui/x-data-grid";
import { AttachMoneyOutlined, VisibilityOutlined } from "@mui/icons-material";

const columns = [
    {
        field:'thumbnail',
        headerName:'video',
        minWidth:500,
        flex:4,
        renderCell:(params)=> <Box sx={styles.videoColumn}>
            <Box component={'img'} src={params.row.thumbnail} sx={styles.videoThumbnail}/>
            <Box sx={styles.videoDetails}>
                <Typography sx={styles.videoTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                <Typography sx={styles.videoDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
            </Box>
        </Box>
    },
    {
        field:'visibility',
        headerName:'Visibility',
        minWidth:170,
        flex:2,
        renderCell:(params)=> <Box sx={styles.iconColumn}>
            <VisibilityOutlined/>
            <Typography sx={styles.iconColumnText}>{params.row.visibility}</Typography>
        </Box>
    },
    {
        field:'monitization',
        headerName:'Monitization',
        minWidth:170,
        flex:2,
        renderCell:(params)=> <Box sx={styles.iconColumn}>
            <AttachMoneyOutlined/>
            <Typography sx={styles.iconColumnText}>{params.row.monetization}</Typography>
        </Box>
    },
    {
        field:'views',
        headerName:'Views',
        minWidth:170,
        flex:1,
    },
    {
        field:'comments',
        headerName:'Comments',
        minWidth:170,
        flex:1,
    }
]

const videos = [
    {id:1,thumbnail:'src/assets/chat.webp',visibility:"public",monetization:"on",views:200,comments:200},
    {id:2,thumbnail:'src/assets/places.jpg',visibility:"public",monetization:"on",views:400,comments:200}
]
const posts = [
    {id:1,thumbnail:'src/assets/chat.webp',visibility:"public",monetization:"on",views:200,comments:200},
    {id:2,thumbnail:'src/assets/places.jpg',visibility:"public",monetization:"on",views:400,comments:200},
    {id:3,thumbnail:'src/assets/places.jpg',visibility:"public",monetization:"on",views:500,comments:200}
]
const playlists = [
    {id:1,thumbnail:'src/assets/chat.webp',visibility:"public",monetization:"on",views:200,comments:200},
    {id:2,thumbnail:'src/assets/places.jpg',visibility:"public",monetization:"on",views:500,comments:200},
    {id:3,thumbnail:'src/assets/places.jpg',visibility:"public",monetization:"on",views:400,comments:200}
]
const lives = [
];

const Content = () => {
    const [value,setValue] = useState(0);
    const handleChange = (event,newValue)=>{
        setValue(newValue);
    }
    return ( 
        <Box>
            <Typography sx={styles.pageTitle} variant="h5">Content</Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
                <Tab label='Videos' id="tab-0"/>
                <Tab label='Live' id="tab-1"/>
                <Tab label='Posts' id="tab-2"/>
                <Tab label='Playlists' id="tab-3"/>
            </Tabs>
            <TabPanel value = {value} index = {0}>
                <DataGrid
                rows={videos}
                columns={columns}
                pageSize={[25]}
                rowPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
                />
            </TabPanel>
            <TabPanel value = {value} index = {1}>
                <DataGrid
                rows={lives}
                columns={columns}
                pageSize={[25]}
                rowPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
                />
            </TabPanel>
            <TabPanel value = {value} index = {2}>
                <DataGrid
                rows={posts}
                columns={columns}
                pageSize={[25]}
                rowPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
                />
            </TabPanel>
            <TabPanel value = {value} index = {3}>
                <DataGrid
                rows={playlists}
                columns={columns}
                pageSize={[25]}
                rowPerPageOptions={[25]}
                checkboxSelection
                autoHeight
                rowHeight={70}
                />
            </TabPanel>
            </Box>
        </Box>
    );
}
/** @type {import("@mui/material").SxProps}   */
const styles = {
    pageTitle:{
        mb:2
    },
    videoColumn:{
        width:120,
        display:"flex",
        alignItems:'center'
    },
    videoThumbnail:{
       width:120
    },
    videoDetails:{
        ml:2
    },
    videoTitle:{
        fontSize:"0.8rem",
        width:490,
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden',
        '&:hover':{
            textDecoration:'underlined',
            cursor:'pointer'
        }
    },
    videoDescription:{
        fontSize:'0.7rem',
        color:'neutral.normal',
        width:490,
        textOverflow:'ellipsis',
        whiteSpace:'nowrap',
        overflow:'hidden'

    },
    iconColumn:{
        display:"flex",
        alignItems:'center',
    },
    iconColumnText:{
        ml:1,
        fontSize:'0.9rem'
    },
   
} 
export default Content;