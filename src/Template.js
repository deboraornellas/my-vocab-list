import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import NavDrawer from './NavDrawer'
import {Header} from './styled/Template'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  // palette: {
  //   theme: 'light',
  // },
});

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider
        theme={theme}
      >
        <NavDrawer categories={this.props.categories}/>
        <Header>
          My Vocabulary List
        </Header>
      </MuiThemeProvider>
    )
  }
}

export default Template
