import React from 'react'


export default function NavBar(){
    return(
        <>
            <header className=" flex  place-content-start place-items-center h-10 bg-gray-800 p-1 space-x-[5px]
            [&>*]:bg-white [&>*]:rounded [&>*:hover]:bg-sky-500  [&>*]:w-1/6 [&>*]:text-center">
                <a class="slidingLightBg"> Home</a>
                <a class="slidingLightBg">About Me</a>
                <a class="slidingLightBg">Projects</a>           
             </header>
        </>
        )
    }