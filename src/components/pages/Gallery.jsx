import React, { useState, useEffect } from 'react';
import ISSGlobe from './ISSGlobe';
import Topmenu from '../Topmenu';

const Gallery = () => {
    const [query, setQuery] = useState('space');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(null);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };

    const fetchImages = async () => {
        try {
            const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}&media_type=image`);
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            const items = data.collection.items;
            const imageList = items.map(item => ({
                url: item.links[0].href,
                title: item.data[0].title,
                description: item.data[0].description,
                location: item.data[0].location,
                date: item.data[0].date_created
            }));
            setImages(imageList);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchImages();
    }, [query]);

    const handleSearch = () => {
        fetchImages();
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    return (
        <div className='bg-black text-white min-h-screen'>
            <div className='text-4xl font-bold text-center p-10 sm:p-20 pb-5 sm:pb-10'>Gallery</div>
            <div className='text-center mb-4'>
                <input
                    type="text"
                    placeholder="Search for images"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className='text-black p-2 rounded'
                />
                <button
                    onClick={handleSearch}
                    className='ml-2 p-2 rounded bg-blue-500 text-white'
                >
                    Search
                </button>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center p-4'>
                <div className='font-bold text-3xl sm:text-6xl text-center lg:text-left p-4 lg:w-1/2'>
                    Location of the ISS is tracked Here
                </div>
                <div className='m-4 border-2 rounded-xl w-full lg:w-1/2 border-2'>
                    <ISSGlobe />
                </div>
            </div>
            <div className='gallery-data m-4'>
                {error && <div className='text-red-500 text-center'>{`Error: ${error}`}</div>}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {images.map((image, index) => (
                        <div key={index} className='grid gap-4 border-2 p-2 border-white rounded-lg'>
                            <div className='h-48 w-full'>
                                <img src={image.url} alt={image.title} className='object-contain w-full h-full rounded-lg' />
                            </div>
                            <div className='font-bold text-xl'>{image.title}</div>
                            <div className='font-semibold text-gray-300'>{truncateDescription(image.description, 12)}</div>
                            {image.location && <div className=''>Location: {image.location}</div>}
                            <div className=''>{formatDate(image.date)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
