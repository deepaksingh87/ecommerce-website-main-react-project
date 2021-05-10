import React from "react";
import Sidebar from "react-sidebar";
import Header from './Header'
 import SideBarContent from './SideBarContent'
class Sidebars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <>
      <Sidebar
        sidebar={<SideBarContent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "#3A173D" ,color:"white",width:"220px",height:"100%",display:"flex",flexDirection:"column",position:"fixed"} }}
      >
        <Header onClick={() => this.onSetSidebarOpen(true)} style={{backgroundColor:"red"}}>
          Open sidebar
        </Header>
      </Sidebar>
      </>
    );
  }
}
 
export default Sidebars;