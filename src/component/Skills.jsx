// import { Cat } from "lucide-react";
// import { useState } from "react"

// const skillList=[

//   //frontend
//   {name:"HTML/CSS" , category:"frontend"},
//   {name:"JavaScript" , category:"frontend"},
//   {name:"React" , category:"frontend"},
//   {name:"Tailwind CSS" , category:"frontend"},
//   {name:"BootStrap" , category:"frontend"},

//   //Backend
//   {name:"Node.js" , category:"backend"},
//   {name:"Mongodb" , category:"backend"},
//   {name:"MYSQL" , category:"backend"},
//   {name:"Express.js" , category:"backend"},
  
//   //Tools
//   {name:"GitHUb" , category:"tools"},
//   {name:"VS Code" , category:"tools"},
//   {name:"MongoDB Atlas" , category:"tools"},
//   {name:"Postman" , category:"tools"},
//   {name:"AWS EC2" , category:"tools"},
// ];

// const categories=["All" , "Frontend" , "Backend", "Tools"]

//  const filteredSkills =
//     category === "All"
//       ? skillList
//       : skillList.filter(skill => skill.category === category.toLowerCase())

// export const Skills=()=>{

//   const[category,setCategory]=useState("All")
//   return(
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className=" container mx-auto mx-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
//           <span className="text-purple-400"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((cat,key)=> (
//             <button key={key} 
//             onClick={() => setCategory(cat)}
//             className="rounded-full bg-purple cosmic-button">
//               {cat}


//             </button>
//           ))}

//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill , key)=>(
//             <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover bg-purple-400"><h3 className="font-semibold text-lg text-center">{skill.name}</h3></div>

//           ))}

//         </div>

//       </div>

//     </section>
//   )
// }


import { useState } from "react"

const skillList = [

  {name:"HTML/CSS", category:"frontend"},
  {name:"JavaScript", category:"frontend"},
  {name:"React", category:"frontend"},
  {name:"Tailwind CSS", category:"frontend"},
  {name:"Bootstrap", category:"frontend"},

  {name:"Node.js", category:"backend"},
  {name:"MongoDB", category:"backend"},
  {name:"MySQL", category:"backend"},
  {name:"Express.js", category:"backend"},

  {name:"GitHub", category:"tools"},
  {name:"VS Code", category:"tools"},
  {name:"MongoDB Atlas", category:"tools"},
  {name:"Postman", category:"tools"},
  {name:"AWS EC2", category:"tools"},
];

const categories = ["All","Frontend","Backend","Tools"]

export const Skills = () => {

  const [category,setCategory] = useState("All")

  const filteredSkills =
    category === "All"
      ? skillList
      : skillList.filter(skill => skill.category === category.toLowerCase())

  return(
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">

      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat,key)=>(
            <button
              key={key}
              onClick={() => setCategory(cat)}
              className="rounded-full px-4 py-2 bg-purple-500 text-white"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill,key)=>(
            <div key={key} className="bg-card p-6 rounded-lg bg-purple-400 shadow-xs card-hover">
              <h3 className="font-semibold text-lg text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}