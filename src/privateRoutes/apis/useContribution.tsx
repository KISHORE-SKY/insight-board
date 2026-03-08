// import { useEffect, useState } from "react";


// interface pushesContribution{
//     total:{
//         2023:number,
//         2024:number,
//         2025:number,
//         2026:number,
//     },
//     contributions:number,
// }

// function Contributions(){

//     const [datas,setDatas]=useState<pushesContribution[]>([]);
//     const [error,setError]=useState<string>('');
//     const [loading,setLoading]=useState<boolean>(false);

//     async function dataFetchHandler() {
//         const url:string=`https://github-contributions-api.jogruber.de/v4/KISHORE-SKY`;

//         try{
//             const response=await fetch(url)

//             if(!response.ok){
//                 throw new Error(`couldn't fetch the datas: ${response.status}`)
//             }
//             const result=await response.json();
//             setDatas([result]);
//             console.log(result);
//         }
//         catch(error){
//             setError(`contribution datas can't fetch`);
//             console.log(error);
//         }
//     }
//     useEffect(()=>{
//         dataFetchHandler();
//     },[])

//     return(
//         <>
//             <section>
//                 {datas.map((item,index)=>(
//                     <div key={index}>
//                         <p>{item.total[2023]}</p>
//                         <p>{item.total[2024]}</p>
//                         <p>{item.total[2025]}</p>
//                         <p>{item.total[2026]}</p>
//                     </div>
//                 ))}
//             </section>
//         </>
//     );
// }


// export default Contributions;