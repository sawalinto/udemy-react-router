import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const MainLayout = (props) => {
    return (
      <React.Fragment>
        <Navbar />
       <div style={con}>
       {props.children}
       </div>
        <Footer />
      </React.Fragment>
    );
}

export default MainLayout;

const con = {
    padding: '0 6rem'
}
