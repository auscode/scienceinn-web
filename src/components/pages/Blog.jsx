import React, { useEffect, useState } from 'react';


export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    // https://thespacedevs.com/snapi
    const fetchData = async (url = 'https://api.spaceflightnewsapi.net/v4/blogs/', page = 1) => {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setBlogs(data.results);
            setNext(data.next);
            setPrevious(data.previous);
            setCurrentPage(page);
            console.log(data);
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

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
        <>
            <div >
                <div className='bg-black text-white p-4 h-[100%]'>
                    <div className='text-4xl font-bold text-center p-20 pb-10'>ScienceInn Blogs</div>
                    <div>
                        
                    </div>
                    <div>
                        {error ? (
                            <div className='w-full text-center'>Error: {error}</div>
                        ) : (
                            <div className='flex flex-wrap'>
                                {blogs.map(blog => (
                                    <div key={blog.id} className='w-full md:w-1/3 p-2'>
                                        <div className='bg-black text-white rounded-lg border-2 p-4 h-full'>
                                            <div className='font-bold text-2xl mb-4'>{blog.title}</div>
                                            <div>
                                                <img
                                                    src={blog.image_url}
                                                    alt="Blog"
                                                    className="mb-4 rounded-lg w-full h-48 object-cover"
                                                />
                                            </div>
                                            <div className='font-semibold text-gray-300 mb-4'>{blog.summary}</div>
                                            <div className='text-gray-400 mb-4'>{formatDate(blog.updated_at)} </div>
                                            <div className='text-gray-400 mb-4'>Site: {blog.news_site} </div>
                                            <div><a href={blog.url} className='text-blue-400' target='_blank'>Read more...</a></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className='flex gap-2 text-black justify-center items-center mt-4'>
                            {previous && <button onClick={() => fetchData(previous, currentPage - 1)} className='btn btn-primary bg-gray-400 hover:bg-white rounded-md px-2 py-1'>Previous</button>}
                            <span className='bg-white rounded-md px-2 py-1'>Page {currentPage}</span>
                            {next && <button  onClick={() => fetchData(next, currentPage + 1)} className='btn btn-primary bg-gray-400 hover:bg-white rounded-md px-2 py-1'>Next</button>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}