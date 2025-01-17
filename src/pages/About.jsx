import React from 'react'

import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='w-full h-full' style={{backgroundColor: '#222222' }}>
      <section className='max-container'>
        <h1 className='head-text text-white'>
          Hello, I'm <span className='green-gradient_text font-semibold drop-shadow-sm'>Mojtaba Alizade</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="flex justify-center items-center border-2 border-gray-500 rounded-lg p-4">
            <img 
              src="src/assets/images/me.png" 
              alt="Image of Mojtaba Alizade" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col gap-3 text-white border-2 border-gray-500 rounded-lg p-4">
            <p>
              A software engineering student with a passion for programming and problem-solving.
              Coding, for me, is about turning ideas into reality. Whether it’s creating fun indie games, exploring new technologies,
              or building impactful applications for education or healthcare to support affected communities, I’m driven by the endless
              possibilities of programming and the difference it can make.
            </p>
          </div>
        </div>

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text text-white'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img src={skill.imageUrl} alt={skill.name} className='w-1/2 h-1/2 object-contain'/>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{backgroundColor: '#222222' }}>
          <h3 className='subhead-text text-white'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-white'>
            <p>Through school projects with diverse teams, my university committee role, and work experience, I’ve sharpened both my technical and interpersonal skills.
               Collaborating with people from various backgrounds has strengthened my communication and teamwork abilities, while my job has provided practical coding experience and enhanced my adaptability, problem-solving, and leadership skills. 
               As a result, these experiences have allowed me to grow into a well-rounded and effective professional.</p>
          </div>
          
          <div className='mt-12 flex'> 
              <VerticalTimeline className='text-white'>
                {experiences.map((experience) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    icon={<div className='flex justify-center items-center w-full h-full'>
                      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
                    </div>}
                    iconStyle={{background: experience.iconBg}}
                    contentStyle={{
                      borderBottom: '8px',
                      borderStyle: 'solid',
                      borderBottomColor: experience.iconBg,
                      boxShadow: 'none',
                    }}
                  >
                    <div>
                      <h3 className='text-black text-xl font-poppins font-semibold'>
                        {experience.title}
                      </h3>
                      <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                        {experience.company_name}
                      </p>
                    </div>

                    <ul className='my-5 list-disc ml-5 space-y-2'>
                      {experience.points.map((point, index) => (
                        <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>{point}</li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
          </div>  
        </div>
        <hr className='border-slate-50' />

        <CTA />
      </section>
  </section>
  )
}

export default About