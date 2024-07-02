export default function Footer() {
    return (
        <footer className="bg-black text-white py-6 border-t-2">
            <div className="container mx-auto flex flex-col px-5 items-center justify-between space-y-6 md:flex-row md:space-y-0">
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">ScienceInn</h1>
                </div>
                <div className="flex space-x-6">
                    <a
                        href="https://www.youtube.com/your-channel"
                        className="text-gray-400 hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        YouTube
                    </a>
                    <a
                        href="https://www.instagram.com/your-profile"
                        className="text-gray-400 hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://twitter.com/your-profile"
                        className="text-gray-400 hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        className="text-gray-400 hover:text-gray-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className="text-center mt-6 text-gray-400">
                &copy; {new Date().getFullYear()} ScienceInn. All rights reserved.
            </div>
        </footer>
    );
}
