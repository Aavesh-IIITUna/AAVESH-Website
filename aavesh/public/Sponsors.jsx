import React from 'react'

const Sponsors = () => {
    return (
        <div className='text-white min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-4xl my-10 text-center md:text-5xl'>SPONSORS</h1>
            <div className='flex  items-center w-full px-4 md:px-8'>
                <div className='flex flex-col gap-10 w-full md:gap-20 md:w-[70%]'>
                    <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center'>
                        <img className='object-contain w-full md:w-[45%]' src='/public/coc.webp' alt='Sponsor 1' />
                        <img className='object-contain w-full md:w-[45%]' src='/public/coc.webp' alt='Sponsor 2' />
                    </div>
                    <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center'>
                        <img className='object-contain w-full md:w-[45%]' src='/public/coc.webp' alt='Sponsor 3' />
                        <img className='object-contain w-full md:w-[45%]' src='/public/coc.webp' alt='Sponsor 4' />
                    </div>
                </div>
                <img className='w-full md:w-[50vw] h-auto mt-10 grayscale' src='/public/armssp.jpg' alt='Main Sponsor' />
            </div>
        </div>
    )
}

export default Sponsors
