import React from 'react'
import { MainComponentContextType } from '../constants/component-constants'
import { useMainComponent } from '../context/mainComponent.context'

export function MobileNavbar() {
  const context = useMainComponent()

  return (
    <div
          className={`fixed inset-0 flex justify-center items-center transition-colors h-full w-full visible bg-black/80 md:hidden`}
          onClick={() => context?.setViewMobileSideBar(false)}
        >
          <ul className="name-container font-normal text-slate-300 flex flex-col gap-10 text-base">
              <li onClick={()=>{context?.setMainComponent(MainComponentContextType.EXPERIENCE)}} className='hover:text-white'>Experience</li>
              <li onClick={()=>{context?.setMainComponent(MainComponentContextType.EDUCATION)}} className='hover:text-white'>Education</li>
              <li onClick={()=>{context?.setMainComponent(MainComponentContextType.SKILLS)}} className='hover:text-white'>Skills</li>
              <li onClick={()=>{context?.setMainComponent(MainComponentContextType.CONTACT)}} className='hover:text-white'>Contact</li>
          </ul>
        </div>
  )
}
