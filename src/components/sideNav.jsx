import { AnalyticsOutlined, Dashboard, SourceOutlined, StyleOutlined } from "@mui/icons-material";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import { Sidebar,Menu,MenuItem } from "react-pro-sidebar";
import { useProSidebar } from 'react-pro-sidebar'
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
    const theme = useTheme()
    const {collapsed} = useProSidebar()
    const location = useLocation()
    return (
      <Sidebar style={{
        height:"100%",
        top:"auto"
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.light}
      >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt="channel name" src="/src/assets/metime.jpg"/>
           {!collapsed && <Typography variant="body2" sx={styles.yourChannel}>your channel</Typography>}
            {!collapsed && <Typography variant="body2">hazy horizons</Typography>}
        </Box>
        <Menu
        menuItemStyles={{
            button:({active})=>{
                return{
                    backgroundColor:active? theme.palette.neutral.medium:undefined
                }
            }
        }}
        >
            <MenuItem active={location.pathname == '/'} component={<Link to="/"/>} icon={<Dashboard/>}>
                <Typography variant="body2">Dashboard</Typography>
            </MenuItem>
            <MenuItem active={location.pathname == '/content'} component={<Link to="/content"/>} icon={<SourceOutlined/>}>
                <Typography variant="body2">Content</Typography>
            </MenuItem>
            <MenuItem active={location.pathname == '/analytics'} component={<Link to="/analytics"/>} icon={<AnalyticsOutlined/>}>
                <Typography variant="body2">Analytics</Typography>
            </MenuItem>
            <MenuItem active={location.pathname == '/customization'} component={<Link to="/customization"/>} icon={<StyleOutlined/>}>
                <Typography variant="body2">customisation</Typography>
            </MenuItem>
        </Menu>
      </Sidebar>
    );
}
 
/** @type {import("@mui/material").SxProps} */
const styles = {
        avatarContainer:{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            my:5
        },
        avatar:{
            width:"40%",
            height:'auto'
        },
        yourChannel:{
            mt:1
        }

}
export default SideNav;