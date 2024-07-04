export default function Intro() {
    return (
        <div className="bg-intro introbg flex justify-center items-center p-6 md:p-10 text-white bg-black">
            <div className="flex flex-col lg:flex-row items-center justify-center my-10 md:my-20 space-y-10 lg:space-y-0 lg:space-x-10">
                <div className="lg:w-1/2 p-6 font-medium text-lg md:text-xl lg:text-3xl">
                    <div className="text-3xl md:text-4xl lg:text-5xl pb-6 font-bold">
                        Introduction
                    </div>
                    <p>
                        Our website is dedicated to inspiring curiosity and expanding knowledge in the fields of astronomy, astrophysics, and the cosmos.
                    </p>
                    <p className="mt-4">
                        Our mission is to make complex scientific concepts accessible and engaging for everyone, from enthusiasts to professionals.
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="aspect-w-16 aspect-h-15">
                        <iframe
                            className="w-full h-[400px] rounded-lg"
                            src="https://www.youtube.com/embed/-huuq7En8Ug?si=xyvDM7rl0AVJPe07"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
