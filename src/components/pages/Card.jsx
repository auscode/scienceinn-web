import React from 'react';
const Topmenu = React.lazy(() => import('../Topmenu'));
const Footer = React.lazy(() => import('../Footer'));

export default function Card() {
    return (
        <div>
            <Topmenu />
        
            <Footer />
        </div>
    );
}