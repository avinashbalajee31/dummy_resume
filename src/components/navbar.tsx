import React, { useState } from 'react'
import profile_pic from '../assets/profile_image.jpg'
import { List } from '@phosphor-icons/react'
import { GENERAL_TEXT } from '../constants/general-constants'
import { useMainComponent } from '../context/mainComponent.context'
import { MainComponentContextType } from '../constants/component-constants'

export function Navbar() {
  const mainComponent = useMainComponent()
  const [viewPicture, setViewPicture] = useState(false)

  return (
    <div>
      <div className="p-4">
        <nav className="navbar-container flex bg-slate-900 shadow px-[24px] flex-wrap justify-between items-center py-3 rounded-full">
          <div onClick={()=>{mainComponent?.reset()}} className="name-container font-light text-slate-300 lg:text-xl text-sm cursor-default">
            {GENERAL_TEXT.NAME}
          </div>
          <div className="section-container font-light text-slate-300 lg:text-base text-xs md:flex hidden">
            <ul className="flex flex-row lg:gap-20 gap-7 cursor-default text-slate-300">
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EXPERIENCE)}} className='hover:text-white'>Experience</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EDUCATION)}} className='hover:text-white'>Education</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.SKILLS)}} className='hover:text-white'>Skills</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.CONTACT)}} className='hover:text-white'>Contact</li>
            </ul>
          </div>
          <div
            className="section-container font-light text-slate-300 lg:text-base text-xs md:hidden flex"
            onClick={() => mainComponent?.setViewMobileSideBar(true)}
          >
            <List size={32} />
          </div>
          <div className="image-container" onClick={() => setViewPicture(true)}>
            <img
              src={profile_pic}
              width={40}
              height={40}
              className="rounded-full"
              alt="profile_pic"
            />
          </div>
        </nav>
      </div>
      <div
        className={`fixed inset-0 flex flex-col
       justify-center items-center transition-colors h-full w-full gap-10 ${
         viewPicture ? 'visible bg-black/70' : 'invisible'
       }`}
        onClick={() => setViewPicture(false)}
      >
        <img src={profile_pic} className="rounded-full" alt="profile_pic" />
        <h1 className="name-container font-light text-slate-300 lg:text-xl text-sm">
          {GENERAL_TEXT.NAME}
        </h1>
      </div>
      {/* {mainComponent?.viewMobileSideBar && (
        <div
          className={`fixed inset-0 flex justify-center items-center transition-colors h-full w-full visible bg-black/80 md:hidden`}
          onClick={() => setViewMobileSideBar(!viewMobileSideBar)}
        >
          <ul className="name-container font-normal text-slate-300 flex flex-col gap-10 text-base">
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EXPERIENCE)}} className='hover:text-white'>Experience</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.EDUCATION)}} className='hover:text-white'>Education</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.SKILLS)}} className='hover:text-white'>Skills</li>
              <li onClick={()=>{mainComponent?.setMainComponent(MainComponentContextType.CONTACT)}} className='hover:text-white'>Contact</li>
          </ul>
        </div>
      )} */}
    </div>
  )
}
