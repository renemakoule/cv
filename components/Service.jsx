import React from 'react'
import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './ui/card'
import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
}from 'react-icons/ri'

const serviceData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: ['Web development is a constantly evolving discipline, influenced by the emergence of new technologies, new web standards, and changing expectations for performance and user experience.'],
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Data Analyst in Excel',
        description: ['A data analyst in Excel combines a deep understanding of data with technical skills to extract valuable insights and help businesses make informed decisions.'],
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'System Administration',
        description: ['System administrators are vital for maintaining operational continuity by quickly addressing technical issues and preventing service interruptions.'],
    },
]

const Service = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
               <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>

            {/**grid item */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {serviceData.map((item, index) => {
                    return <Card key={index} className='w-full max-w-[420px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                {item.icon}
                            </div>
                        </CardHeader>
                        <CardContent className='text-center mt-12'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>
                                 <ul className='list-disc pl-5'>
                                      {item.description.map((desc, index) => (
                                      <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </CardDescription>

                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default Service