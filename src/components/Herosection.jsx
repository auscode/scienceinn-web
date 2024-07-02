import heroImg from '../assets/hero_section.webp'

export default function Herosection() {
    return (
        <>
            <div >
                <div className='relative h-200px'>
                    <img src={heroImg} alt='blackhole-image-from-behence ' className='' />
                    <div className='absolute lg:top-[15em] lg:left-[6em]'>
                        <div className='text-8xl text-white font-bold font-sans'>ScienceInn</div>
                        <div className='text-3xl text-grey-500 font-bold font-sans'>Born To learn</div>
                        {/* <button></button> */}
                    </div>
                </div>
            </div>
        </>
    )
}