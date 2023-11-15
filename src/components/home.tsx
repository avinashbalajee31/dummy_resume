import React from 'react'
import portfolio_image from '../assets/portfolio_image.png'

export function Home() {
  return (
    <div>
      <div className="bg-slate-950 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="gap-3 flex flex-col justify-between md:items-center">
          <h1 className="text-4xl font-normal text-slate-300">Hello...!</h1>
          <p className=" lg:text-lg text-[12px] font-thin text-slate-300">
            This is Avinash, Software Engineer
          </p>
          <p className=" lg:text-lg text-[12px] font-thin text-slate-300">
            I'm a skilled software engineer with a passion for creating
            efficient and innovative solutions.
          </p>
          <p className=" lg:text-lg text-[12px] font-thin text-slate-300">
            {' '}
            Proficient in diverse programming languages and developing
            user-friendly applications.
          </p>
        </div>
        <img
          src={portfolio_image}
          alt={'portfolio_image'}
          className="lg:w-[320px] lg:h-[320px] rounded-full object-cover w-[180px] h-[180px]"
        />
      </div>
      <div>
        
      </div>
    </div>
  )
}
