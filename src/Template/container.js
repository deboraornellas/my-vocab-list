import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import NavDrawer from '../NavDrawer/component'
import {Header} from '../Template/style'
import {Link} from 'react-router-dom'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

class Template extends Component {

  render() {
    return (
      <MuiThemeProvider
        theme={theme}
      >
        <NavDrawer categories={this.props.categories}/>
        <Header>
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>My Vocabulary List</Link>
        </Header>
      </MuiThemeProvider>
    )
  }
}

export default Template
