import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

function MostLanguagesUsed() {

    interface repositaries{
        id:number,
        language:string,     
    }
    const [datas,setDatas]=useState<repositaries[]>([]);
    const [error,setError]=useState<string>('');

    async function repositariesFetch(){

        const fetchUrl:string=`https://api.github.com/users/KISHORE-SKY/repos`;
        try{
            const response=await fetch(fetchUrl)

            if(!response.ok){
                throw new Error(`could't fetch data: ${response.status}`)
            }
            const result=await response.json();
            setDatas(result);
            console.log(result);
            
        }
        catch(error){
            setError(`can't find the repos`);
            console.log(error);
        }

    }
    useEffect(()=>{
        repositariesFetch();
    },[])

    const languages={
        javaScriptCount:0,
        cSSCount:0,
        hTMLCount:0,
        typeScriptCount:0
    }

    datas.forEach(repo => {
        if(repo.language==="JavaScript") languages.javaScriptCount++;
        if(repo.language==="HTML") languages.hTMLCount++;
        if(repo.language==="CSS") languages.cSSCount++;
        if(repo.language==="TypeScript") languages.typeScriptCount++;
    });
    console.log(languages.javaScriptCount);
    const totalCount=languages.javaScriptCount+languages.cSSCount+languages.hTMLCount+languages.typeScriptCount;

    interface perentages{
        javaScript:number;
        CSS:number;
        HTML:number;
        typeScript:number
    }
    const percentageConvert:perentages={
        javaScript:Math.round((languages.javaScriptCount/totalCount)*100),
        CSS:Math.round((languages.cSSCount/totalCount)*100),
        HTML:Math.round((languages.hTMLCount/totalCount)*100),
        typeScript:Math.round((languages.typeScriptCount/totalCount)*100)
    }
    
    
    

    const data = [
        { label: 'JavaScript', value: percentageConvert.javaScript, color: '#0100a0' },
        { label: 'CSS3', value: percentageConvert.CSS, color: '#1b5800' },
        { label: 'HTML5', value: percentageConvert.HTML, color: '#660174' },
        { label: 'TypeScript', value: percentageConvert.typeScript, color: '#fff209' },
    ];

    const settings = {
        margin: { right: 5 },
        width: 300,
        height: 275,
        hideLegend: true,
    };

    return(
        <>
            <section className='py-7 flex flex-col items-center w-full gap-4'>
                <div>
                    <Typography variant='h6' component='h6' sx={{fontSize:'23px'}}>
                        Used language
                    </Typography>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <div className='sm:w-[300px] sm:h-auto'>
                        <PieChart
                            series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
                            {...settings}
                        sx={{boxShadow:'4px 0px 15px 1px rgba(0,0,0,0.3)',borderRadius:'10px'}} className='bg-cart-admin p-2 rounded-lg' />
                    </div>
                    <div className='py-4 px-2 flex w-[250px] flex-col items-center mr-8'>
                        
                        <div className='languageBoxes'>
                            <Typography sx={{fontSize:'16px',fontWeight:'bold',width:'100px',textAlign:'right'}}>
                                CSS3
                            </Typography>
                            <div className='w-[99px] h-[5px] bg-[#1b5800] rounded-md'></div>
                            <Typography sx={{fontSize:'15px'}}>{percentageConvert.CSS}%</Typography>
                        </div>
                        <div className='languageBoxes'>
                            <Typography sx={{fontSize:'16px',fontWeight:'bold',width:'100px',textAlign:'right'}}>
                                JavaScript
                            </Typography>
                            <div className='w-[75px] h-[5px] bg-[#0100a0] rounded-md'></div>
                            <Typography sx={{fontSize:'15px'}}>
                                {percentageConvert.javaScript}%
                            </Typography>
                        </div>
                        <div className='languageBoxes'>
                            <Typography sx={{fontSize:'16px',fontWeight:'bold',width:'100px',textAlign:'right'}}>
                                HTML5
                            </Typography>
                            <div className='w-[75px] h-[5px] bg-[#660174] rounded-md'></div>
                            <Typography sx={{fontSize:'15px'}}>
                                {percentageConvert.HTML}%
                            </Typography>
                        </div>
                        <div className='languageBoxes'>
                            <Typography sx={{fontSize:'16px',fontWeight:'bold',width:'100px',textAlign:'right'}}>
                                TypeScript
                            </Typography>
                            <div className='w-[40px] h-[5px] bg-[#fff209] rounded-md'></div>
                            <Typography sx={{fontSize:'15px'}}>
                                {percentageConvert.typeScript}%
                            </Typography>
                        </div>
                    </div>
                  
                </div>
            </section>
        </>
    );
}



export default MostLanguagesUsed;