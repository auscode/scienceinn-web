import heroImg from '../assets/hero_section.webp';

export default function Herosection() {
    return (
        <div>
            <div className='relative h-[200px] md:h-[600px] lg:h-[800px]'>
                <img src={heroImg} alt='blackhole-image-from-behence' className='w-full h-full object-cover' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                    <div className='text-4xl md:text-6xl lg:text-8xl text-white font-bold font-sans'>
                        ScienceInn
                    </div>
                    <div className='text-xl md:text-2xl lg:text-3xl text-gray-500 font-bold font-sans mt-4'>
                        Born To Learn
                    </div>
                </div>
            </div>
        </div>
    );
}
