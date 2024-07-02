import React, { Suspense } from 'react';

const Herosection = React.lazy(() => import('./Herosection'));
const Intro = React.lazy(() => import('./Intro'));
const Featured = React.lazy(() => import('./Featured'));
const About = React.lazy(() => import('./About'));
const Contact = React.lazy(() => import('./Contact'));

export default function Homepage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='flex flex-col'>

                {/* body */}
                <Herosection />
                <Intro />
                <Featured />
                <About />
                <Contact />

            </div>
        </Suspense>
    );
}
