export default function Intro() {
    return (
        <>
            <div className="bg-intro introbg flex justify-center items-center p-10 text-white bg-black ">
                <div className="flex flex-row items-center justify-center my-20">
                    <div className="items-start p-6 font-medium text-3xl">
                        <div className="text-5xl pb-10 font-bold">Intoduction</div>
                        Our website is dedicated to inspiring curiosity and expanding knowledge in the fields of astronomy, astrophysics, and the cosmos. <br/> <br/>
                        Our mission is to make complex scientific concepts accessible and engaging for everyone, from enthusiasts to professionals.</div>
                    <div className="">
                        <iframe width="800" height="500" src="https://www.youtube.com/embed/-huuq7En8Ug?si=xyvDM7rl0AVJPe07" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{"borderRadius": "20px"}}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}