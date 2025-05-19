// components/layout/BusinessLayout.js
import React from 'react';
import { Fragment } from 'react';
import BusinessHeader from './BusinessHeader';
import Footer from './Footer';

function BusinessLayout({ children }) {
    return (
        <Fragment>
            <BusinessHeader />
            {children}
            <Footer />
        </Fragment>
    );
}

export default BusinessLayout;