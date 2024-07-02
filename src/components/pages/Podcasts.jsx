import React from 'react';
import Topmenu from '../Topmenu.jsx'
const Footer = React.lazy(() => import('../Footer'));

export default function Podcasts() {
    return (
        <div>
            <Topmenu />
            <h1>Podcasts Page</h1>
            {/* Your Podcasts content */}

            <Footer />
        </div>
    );
}