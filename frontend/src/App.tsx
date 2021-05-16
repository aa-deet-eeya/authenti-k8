
import * as React from "react"
// eslint-disable-next-line 
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react"
import {CSSReset } from "@chakra-ui/react";
import Header from "./components/Header";
import customTheme from "./utils/theme";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateRetailer from "./CreateRetailer";
import CreateCode from "./CreateCode";
import About from "./About"

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Router>
              <Header />
              <div className="content">
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/CreateRetailer">
                      <CSSReset />
                      <CreateRetailer />
                  </Route>
                  <Route path="/CreateCode">
                    <CreateCode />
                  </Route>
                  <Route path="/About">
                    <About />
                  </Route>
                </Switch>
              </div>
            </Router>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>

  );
}

export default App;