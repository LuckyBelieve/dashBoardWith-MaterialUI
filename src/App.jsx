import { Box, CssBaseline, ThemeProvider, Typography } from "@mui/material"
import   theme  from './config/theme'
import React from "react"
import AppHeader from "./components/AppHeader"
import SideNav from "./components/sideNav"
import  {ProSidebarProvider} from 'react-pro-sidebar'
import { BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from "./Routes/AppRoutes"

function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ProSidebarProvider>
        <AppHeader/>
        <Box sx={styles.container}>
          <Router>
            <SideNav/>
            {/* This is the main section*/}
            <Box component={"main"} sx={styles.mainSection}>
              <AppRoutes/>
            </Box>
          </Router>
        </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}
/** @type {import("@mui/material").SxProps} */
const styles = {
    container:{
      bgcolor:'neutral.light',
      display:"flex",
      height:"calc(100% - 64px)"
    },
    mainSection:{
      p:4,
      width:'100%',
      height:"100%",
      overflow:"auto"
    }

}

export default App
