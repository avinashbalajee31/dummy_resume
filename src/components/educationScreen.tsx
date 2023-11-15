import React from 'react'
import { GraduationCap } from '@phosphor-icons/react'

export function EducationScreen() {
  const educationDetails = [
    {
      title: 'HIGH SCHOOL',
      courseCompletionTimeAndScore: 'completed on 2016 with a score of 93%',
      institute: 'Velammal Maticulation Higher Secondary School',
      location: 'Chennai, Tamilnadu',
    },
    {
      title: 'HIGHER SECONDARY',
      courseCompletionTimeAndScore: 'completed on 2018 with a score of 87%',
      institute: 'Velammal Maticulation Higher Secondary School',
      location: 'Chennai, Tamilnadu',
    },
    {
      title: 'GRADUATION - BE',
      courseCompletionTimeAndScore: 'completed on 2022 with a score of 90%',
      institute: 'Meenakshi Sundararajan Engineering college',
      location: 'Chennai, Tamilnadu',
    },
  ]

  return (
    <div className='flex justify-center md:gap-20 lg:gap-28 sm:gap-5 flex-col items-center'>
      <div>
        <h1 className='text-slate-300 hidden sm:flex text-4xl font-base'>Educational Details</h1>
      </div>
      <div className="flex justify-center items-center sm:p-5 overflow-y-scroll">
        <div>
          <ol className="items-center sm:flex ">
            {educationDetails.map((educationDetail, index) => (
              <li
                key={index}
                className="relative mb-3 sm:mb-0 gap-3 flex flex-col"
              >
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                    <GraduationCap className="text-blue-300" weight="fill" />
                  </div>
                  <div
                    className={`hidden sm:flex w-[80%] bg-gray-200 h-0.5 dark:bg-gray-700`}
                  ></div>
                </div>
                <div className="mt-3 sm:pe-8 gap-2 flex flex-col">
                  <h3 className="text-lg font-base text-slate-300">
                    {educationDetail.title}
                  </h3>
                  <p className="block mb-2 text-sm font-xs leading-none text-slate-500">
                    {educationDetail.courseCompletionTimeAndScore}
                  </p>
                  <p className="block mb-2 text-sm font-xs leading-none text-slate-300">
                    {educationDetail.institute}
                  </p>
                  <p className="block mb-2 text-sm font-xs leading-none text-slate-500">
                    {educationDetail.location}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
