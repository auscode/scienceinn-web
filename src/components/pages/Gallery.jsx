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
            console.log(data);
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
        <div className='bg-black text-white'>
            <div className='text-4xl font-bold text-center p-20 pb-10'>Gallery</div>
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
            <div className='flex justify-center itms-center'>
                <div className='font-bold flex justify-center items-center text-6xl p-4 w-1/2'>
                    Location of the Iss is tracked Here
                </div>
                <div className='m-4 border-2 rounded-xl w-1/2'>
                    <ISSGlobe />
                </div>

            </div>
            <div className='gallery-data m-4'>
                {error && <div className='text-red-500 text-center'>{`Error: ${error}`}</div>}
                <div className='grid grid-cols-3 gap-4'>
                    {images.map((image, index) => (
                        <div key={index} className='border rounded-lg overflow-hidden p-2'>
                            <img src={image.url} alt={image.title} className='object-cover rounded-lg' />
                            <div className='font-bold text-xl'>{image.title}</div>
                            <div className='font-semibold text-gray-300'>{truncateDescription(image.description, 30)}</div>
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
