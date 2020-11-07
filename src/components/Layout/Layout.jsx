import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

const Layout = (props) => {
    return(
        <div className="layout">
            <Header/>
                { props.children }
            <Footer/>
        </div>
    );
}

export default Layout;