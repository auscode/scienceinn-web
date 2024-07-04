import React, { useState, useEffect } from 'react';
import fleet from '../../assets/fleet.webp';

const Missions = () => {
    const [missions, setMissions] = useState([]);
    const [error, setError] = useState(null);

    const fetchMissions = async () => {
        try {
            const response = await fetch('https://services.isrostats.in/api/futurelaunches');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMissions(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchMissions();
    }, []);

    return (
        <div className='bg-black text-white'>
            <h1 className='text-4xl font-bold text-center p-20 pb-10'>Missions</h1>
            <div className="flex flex-col md:flex-row gap-6 px-4 py-8 md:px-7 md:py-16">
                <div className="w-full md:w-1/2">
                    <div className="text-4xl md:text-6xl font-bold">NASA Science Fleet Chart</div>
                    <div className="text-sm md:text-md font-medium py-3">NASA Science missions circle the Earth, the Sun, the Moon, Mars, and many other destinations within our Solar System, including spacecraft that look out even further into our universe. The Science Fleet depicts the scope of NASA's activity and how all of the missions have permeated throughout the solar system.</div>
                    <a href="https://science.nasa.gov/wp-content/uploads/2023/05/smd-fleet-master-10-15-2023-1.jpg?w=1536&format=webp" target="_blank" rel="noopener noreferrer">
                        <div className="text-lg md:text-xl flex font-bold">
                            Learn More
                            <img width="30" height="10" src="https://img.icons8.com/ios-filled/50/0061FF/circled-right-2.png" alt="circled-right-2" className="ml-2" />
                        </div>
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <img src={fleet} alt="NASA Science Fleet" className="w-full" />
                </div>
            </div>

            {error && <div className='text-red-500 text-center'>{`Error: ${error}`}</div>}
            <h1 className='text-4xl font-bold text-center p-20 pb-10'>Upcoming ISRO Missions</h1>
            <div className='flex overflow-x-scroll pb-4 m-5 scrollbar'>
                {missions.map((mission) => (
                    <>
                        <div key={mission.UUID} className='h-50 min-w-fit text-white border border-gray-700 p-6 rounded-lg hover:bg-white hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-100'>
                            <h2 className='text-2xl font-bold mb-2'>{mission.MissionName}</h2>
                            <p className=''><span className='font-semibold'>Rocket Type:</span> {mission.RocketType}</p>
                            <p className=''><span className='font-semibold'>Tentative Date:</span> {mission.TentativeDate}</p>
                            <p className=''><span className='font-semibold'>Venue:</span> {mission.Venue}</p>
                        </div>
                        <div className='w-100 min-w-fit p-1/2 pt-10'>
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/ffffff/wavy-line.png" alt="wavy-line" />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Missions;
