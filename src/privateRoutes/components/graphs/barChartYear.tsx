import { useAnimate } from '@mui/x-charts/hooks';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { styled } from '@mui/material/styles';
import { interpolateObject } from '@mui/x-charts-vendor/d3-interpolate';


import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';




export default function LabelsAboveBars() {


    interface pushesContribution{
        total:{
            2023:number,
            2024:number,
            2025:number,
            2026:number,
        }
    
    }



    const [datas,setDatas]=useState<pushesContribution[]>([]);
        const [error,setError]=useState<string>('');
        //const [loading,setLoading]=useState<boolean>(false);
    
        async function dataFetchHandler() {
            const url:string=`https://github-contributions-api.jogruber.de/v4/KISHORE-SKY`;
    
            try{
                const response=await fetch(url)
    
                if(!response.ok){
                    throw new Error(`couldn't fetch the datas: ${response.status}`)
                }
                const result=await response.json();
                setDatas([result]);
                //console.log(result);
            }
            catch(err){
                setError(`contribution datas can't fetch`);
                console.log(error);
            }
        }
        useEffect(()=>{
            dataFetchHandler();
        },[])
    
        const chartYears=[2023,2024,2025,2026];
        const contributionDatas=datas.length >0 ? 
        [datas[0].total[2023],datas[0].total[2024],datas[0].total[2025],datas[0].total[2026]] 
        :
        [0,0,0,0];

  return (
    <>
        <section className='flex flex-col items-center justify-center gap-4 w-full py-4 px-1 sm:px-2 sm:w-[500px] 
        lg:w-[650px] '>
            <div className='text-center'>
                <Typography variant='h6' component='h6' sx={{fontSize:"20px"}}>
                    Yearly Contributions
                </Typography>
            </div>
        <ChartContainer
        xAxis={[{ scaleType: 'band', data:chartYears}]}
        series={[{ type: 'bar', id: 'base',color: 'url(#pigmentGradient)', data: contributionDatas }]}
        height={400} className='bg-cart-admin rounded-lg sm:p-2 '
        sx={{boxShadow:'4px 0px 15px 1px rgba(0,0,0,0.3)'}} >

            <defs>
                <linearGradient id="pigmentGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e2159c" />
                    <stop offset="100%" stopColor="#15f0f7" />
                </linearGradient>
            </defs>

            <BarPlot barLabel="value" slots={{ barLabel: BarLabel as any }}  />
            <ChartsXAxis />
            <ChartsYAxis />

        </ChartContainer>


        </section>
    </>

  );
}

const Text = styled('text')(({ theme }) => ({
  ...theme?.typography?.body2,
  stroke: 'none',
  fill: (theme.vars || theme)?.palette?.text?.primary,
  transition: 'opacity 0.2s ease-in, fill 0.2s ease-in',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  pointerEvents: 'none',
}));



interface BarLabelProps {
  seriesId: string | number;
  dataIndex: number;
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  value: number | string | null;
  isFaded: boolean;
  isHighlighted: boolean;
  position: 'center' | 'outside';
  yOrigin:number;
  barLabel:number
}


function BarLabel(props: BarLabelProps) {

  const {
    seriesId,
    dataIndex,
    color,
    isFaded,
    isHighlighted,
    // classes,
    // xOrigin,
    yOrigin,
    x,
    y,
    width,
    height,
    // layout,
    // skipAnimation,
    ...otherProps
  } = props;

  const animatedProps = useAnimate(
    { x: x + width / 2, y: y - 8 },
    {
      initialProps: { x: x + width / 2, y: yOrigin },
      
      createInterpolator: interpolateObject,
      transformProps: (p) => p,
      applyProps: (element: SVGTextElement, p) => {
        element.setAttribute('x', p.x.toString());
        element.setAttribute('y', p.y.toString());``
      },
    //   skip: skipAnimation,
    },
  );

  return (
    <>
         <Text {...otherProps} fill={color} textAnchor="middle" {...animatedProps} />
    </>
  );
}


