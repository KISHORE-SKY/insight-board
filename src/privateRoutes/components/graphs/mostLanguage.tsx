import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';

function MostLanguagesUsed() {

    interface repositaries{
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
            setDatas([result]);
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
    
    

    const data = [
        { label: 'JavaScript', value: 400, color: '#0100a0' },
        { label: 'CSS', value: 300, color: '#1b5800' },
        { label: 'HTML', value: 300, color: '#660174' },
        { label: 'TypeScript', value: 100, color: '#fff209' },
    ];

    const settings = {
        margin: { right: 5 },
        width: 275,
        height: 250,
        hideLegend: true,
    };

    return(
        <>
            <section className='py-7 flex flex-col items-center w-full gap-4'>
                <div>
                    <Typography variant='h6' component='h6' sx={{fontSize:'20px'}}>
                        Most used language
                    </Typography>
                </div>
                <div>
                    <div>
                        <PieChart
                            series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
                            {...settings}
                        sx={{boxShadow:'4px 0px 15px 1px rgba(0,0,0,0.3)',borderRadius:'10px'}} className='bg-cart-admin p-2 rounded-lg' />
                    </div>
                    <div>
                        <Typography>
                            JavaScript
                        </Typography>
                        <Typography>
                            CSS
                        </Typography>
                        <Typography>
                            HTML
                        </Typography>
                        <Typography>
                            TypeScript
                        </Typography>
                    </div>
                </div>
            </section>
        </>
    );
}



export default MostLanguagesUsed;