import Typography from '@mui/material/Typography';
//import { LineChart } from '@mui/x-charts/LineChart';
import { LineChart } from '@mui/x-charts/LineChart';

import { useEffect, useState } from 'react';
import { setStreaks } from '../../authendicationSlice/streakSlice';
import { useDispatch } from 'react-redux';



export default function BasicLineChart() {

    interface contribution{
        date:string,
        count:number
    }

    interface apiResponse{
        total:Record<string,number>;
        contributions:contribution[];
    }
    const [datas,setDatas]=useState<apiResponse | null>(null);
    const [error,setError]=useState<string>('');

    async function contributionFetched(){
        const fetchUrl:string=`https://github-contributions-api.jogruber.de/v4/KISHORE-SKY`;

        try{
            const response = await fetch(fetchUrl)
            if(!response.ok){
                throw new Error(`couldn't fetch contributions: ${response.status}`)
            }
            const result=await response.json();
            setDatas(result);
           // console.log(result);
            
        }
        catch(err){
            setError(`can't fetch datas`);
            console.log(error);
        }
    }

    useEffect(()=>{
        contributionFetched();
    },[])

     const lastThreeMonths=datas?.contributions.slice(0,30) ?? [];
     //console.log(lastThreeMonths);
    
    const xAxis=lastThreeMonths.map(item=>
        new Date(item.date).getDate()
    );
    const series=lastThreeMonths.map(item=>item.count)
    let currentStreak=0;
    const dispatch=useDispatch();
    useEffect(()=>{
        for(let i=series.length-1;i>=0;i--){
            if(series[i]>0){
                currentStreak++;
            }
            else{
                break;
            }
        }

        
        dispatch(setStreaks(currentStreak));
    },[series])

  return (
    <>
        <div className='flex flex-col items-center w-full px-2 py-4 gap-4 sm:w-[500px] lg:w-[650px] sm:p-4'>
            <div>
                <Typography variant='h6' component='h6' sx={{fontSize:'23px'}}>
                    Last 30 days Contributions
                </Typography>
            </div>
            <LineChart
                xAxis={[{ data: xAxis }]}
            series={[
            {
                data: series,
                color:'#007a75'
            },
        ]}
        height={300}
        sx={{boxShadow:'4px 0px 15px 1px rgba(0,0,0,0.3)',borderRadius:'10px',width:'auto'}}
                className='bg-cart-admin rounded-lg self-center pr-2'/>

        </div>

    </>
  );
}
