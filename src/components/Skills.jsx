import React from 'react'

const mySkills = [
  {
    tool: "Adobe Photoshop",
    percentage: "99"
  },
  {
    tool: "Adobe Illustrator",
    percentage: "95"
  },
  {
    tool: "Adobe After Effect",
    percentage: "95"
  },
  {
    tool: "Adobe XD",
    percentage: "95"
  },
  {
    tool: "Corel Draw",
    percentage: "95"
  },
  {
    tool: "Adobe Premiere",
    percentage: "95"
  },
  {
    tool: "Cinema 4D",
    percentage: "99"
  },
  {
    tool: "Autodesk 3Ds Max",
    percentage: "95"
  },
]
const Skills = () => {
  return (
    <section className='min-h-screen w-full flex flex-col justify-around md:gap-0 px-2 lg:px-20 pb-20 lg:pb-0 text-dimWhite z-10'>
      <h1 className='text-center text-xl font-extrabold text_gradient'>Skills</h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {
          mySkills.map((item, index) => (
            <div key={index} className="flex justify-between items-center gap-2 w-full font-bold">
              <span className='basis-1/4 text-center'>{item.tool}</span>
              <div className={`basis-1/2 h-[10px] flex btn bg-[#fa725a] rounded`}>
              </div>
              <span className='basis-1/4 text-center'>{item.percentage}%</span>
            </div>
          ))
        }
      </div>


    </section>
  )
}

export default Skills