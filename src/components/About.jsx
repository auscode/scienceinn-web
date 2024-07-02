export default function About() {
    return (
        <div className="about bg-about  flex flex-col justify-center min-h-screen bg-black p-6 text-white" id="about">
            <h1 className="text-6xl font-bold text-center mb-6">About Us</h1>
            <div className=" text-white p-8 rounded shadow-lg w-full max-w-3xl">
                <section className="mb-8 bg-black bg-opacity-25 rounded-2xl p-2">
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg">
                        Our mission is to inspire and educate individuals about the wonders of STEM, with a special focus on astronomy, astrophysics, and the cosmos. We aim to make complex scientific concepts accessible and engaging for everyone.
                    </p>
                </section>
                <section className="mb-8 bg-black bg-opacity-50 rounded-2xl p-2">
                    <h2 className="text-2xl font-bold mb-4 ">Our Story</h2>
                    <p className="text-lg ">
                        Founded in 2019, our journey began with a passion for exploring the universe and sharing that passion with others. Over the years, we have grown into a vibrant community of science enthusiasts, educators, and learners.
                    </p>
                </section>
                <section className="mb-8 bg-black bg-opacity-25 rounded-2xl p-2">
                    <h2 className="text-2xl font-bold mb-4 ">What We Offer</h2>
                    <ul className="list-disc list-inside text-lg ">
                        <li>Educational videos on YouTube</li>
                        <li>Engaging content on Instagram</li>
                        <li>Informative podcasts</li>
                        <li>In-depth blog articles</li>
                        <li>Interactive community events</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

