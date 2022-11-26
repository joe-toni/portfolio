import React from 'react'

export default function AboutMe(){
    return(
        <>
            <section className="relative">
                <div className='  flex justify-center items-center absolute border-8 border-slate-900 rounded min-w-[60%] min-h-[300px] ml-[0%]'>
                    This section will contain the Image 
                </div>
                <div className='flex justify-center items-center absolute border-8 border-rose-900 rounded h-20  min-w-[60%] min-h-[300px] ml-[20%]'>
                    This section will contain the biography
                </div>
                <div className='flex justify-center items-center absolute border-8 border-violet-900 rounded h-20 min-w-[60%] min-h-[300px] ml-[40%]'>
                    This section will Have what ever third thing
                </div>
            </section>
        </>
    )
}