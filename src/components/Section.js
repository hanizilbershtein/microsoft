import React from 'react'
import SectionTitel from './SectionTitel'

const Section =() => {
    return(
        <div id="sec">

        {sections.map((post,index)=>
            <SectionTitel 
            key={index} 
            title={post.title} 
            piska={post.section}
            />
            


)}
        </div>
    )
}


let sections=[
    {   title:"EXPERIENCE",
        section:"ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got! ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"FORMATION",
        section:"ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got! ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!ASPNET 5 | TEAMLEADER | 2020-2021 Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"HOBBIES",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"PROFILE",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"SKILLE",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"PERSONALITY",
        section:"Explain the job that you have done and the resiltes that you have got!"
    },
    {
        title:"LANGUAGES",
        section:"Explain the job that you have done and the resiltes that you have got!"
    }
]



export default Section
