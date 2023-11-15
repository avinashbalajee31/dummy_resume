import React from 'react'
import { GENERAL_TEXT } from '../constants/general-constants'
import { MetaLogo, InstagramLogo, LinkedinLogo ,GithubLogo} from '@phosphor-icons/react'

export function Footer() {
  // Function to determine if the NavLink is active
  const isActive = (path: string) => {
    // eslint-disable-next-line no-restricted-globals
    return location.pathname === path
  }

  return (
    <div className="py-2 px-4">
      <div className="navbar-container flex bg-slate-950 px-[24px] justify-between items-center py-1 rounded-full">
        <div>
          <p className="text-slate-600 font-thin lg:text-xs text-[8px]">
            &#9400; 2023 by {GENERAL_TEXT.NAME}
          </p>
        </div>
        <div className="text-slate-600 font-thin lg:text-base text-[10px] flex gap-5">
          <MetaLogo className='hover:text-white'/>
          <InstagramLogo className='hover:text-white'/>
          <LinkedinLogo  className='hover:text-white'/>
          <GithubLogo  className='hover:text-white'/>
        </div>
      </div>
    </div>
  )
}
