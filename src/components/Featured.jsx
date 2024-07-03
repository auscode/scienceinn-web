import podcast from "../assets/podcast.webp";
import insta from "../assets/insta.webp";
import yt from "../assets/yt.webp";

export default function Featured() {
    return (
        <><div className="bg-featuredbg featuredbg text-white py-[5em]">
            <h1 className="text-8xl font-bold text-center mb-8 text-white py-8">Featured</h1>
            <div className="flex flex-row items-center justify-center gap-10">
                <div className="card bg-black shadow-lg hover:shadow-white rounded-xl overflow-hidden border-2">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Instagram</h2>
                        <img src={insta} alt="Placeholder Image" className="mb-4 rounded-lg h-[300px] object-cover" />
                        <a href="https://www.instagram.com/scienceinn/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gray-200 text-black px-4 py-2 font-bold rounded hover:bg-white transition duration-300">
                                Visit Instagram page
                            </button>
                        </a>
                    </div>
                </div>
                <div className="card bg-black shadow-lg hover:shadow-white rounded-xl overflow-hidden border-2">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">YouTube</h2>
                        <img src={yt} alt="Placeholder Image" className="mb-4 rounded-lg h-[300px] object-cover" />
                        <a href="https://www.youtube.com/scienceinn" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gray-200 text-black px-4 py-2 font-bold rounded hover:bg-white transition duration-300">
                                Visit YouTube page
                            </button>
                        </a>
                    </div>
                </div>
                <div className="card bg-black shadow-lg hover:shadow-white rounded-xl overflow-hidden border-2">
                    <div className="p-4">
                        <h2 className="text-2xl font-bold mb-2">Podcasts</h2>
                        <img src={podcast} alt="Placeholder Image" className="mb-4 rounded-lg h-[300px] object-cover" />
                        <a href="https://podcasters.spotify.com/pod/show/scienceinn" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gray-200 text-black px-4 py-2 font-bold rounded hover:bg-white transition duration-300">
                                Visit podcasts page
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
        </>
    );
}
