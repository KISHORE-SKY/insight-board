import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import ComputerIcon from '@mui/icons-material/Computer';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import fireImage from "../../assets/image/fire.png"
import gitrepo from "../../assets/image/cloud.png"
import follower from "../../assets/image/add-friend.png"

function UseFetchHook() {
    
    interface Gitrepo{
        id:number,
        name:string,
        html_url:string,
        followers:number,
        public_repos:number,
        avatar_url:string,
        bio:string,
        blog:string
    }

    const [data,setData]=useState<Gitrepo[]>([]);
    const [error,setError]=useState<string | null>(null);
    const [loading,setLoading]=useState<boolean>(false);

    async function fetchRepositary():Promise<void> {
        const repoUrl:string=`https://api.github.com/users/KISHORE-SKY`;

        try{
            const response=await fetch(repoUrl)
            //console.log(typeof response);
            if(!response.ok){
                throw new Error(`couldn't get repositary data: ${response.status}`)
            }
            const result=await response.json();
            setData([result]);
            //console.log(result);
            //console.log(typeof result);
        }
        catch(error){
            setError('something fishy!');
            console.log(error);
        }
    }

    useEffect(()=>{
       fetchRepositary();
    },[])

    return(
        <>
            <section className="grid grid-cols-[minmax(270px,290px)] pt-6 justify-center items-center 
            sm:grid-cols-[minmax(325px,375px)] md:grid-cols-[minmax(550px,650px)] lg:grid-cols-[minmax(900px,1fr)]">
                {data.map((item)=>(
                    <div key={item.id}>
                        
                            <div className="flex flex-col items-center gap-2 lg:flex-row lg:justify-center lg:gap-1
                             lg:p-5">
                                <div>
                                    <img src={item.avatar_url} alt="admin image" className="w-[195px] rounded-full"/>
                                </div>
                                <div className="flex flex-col items-center gap-1 md:w-[400px] lg:w-[500px]">
                                    <p className="text-2xl font-semibold">{item.name}</p>
                                    <p className="text-lg text-center">{item.bio}</p>
                                    {/* <p className="text-md ">{item.html_url}</p> */}
                                </div>
                            </div>

                            <div className="grid grid-cols-[250px] justify-end items-center gap-7 pt-6 
                            md:grid-cols-[200px_200px_200px] md:justify-center">
                                <div className="profileCards">
                                    <div className="flex items-center gap-2">
                                        <img src={gitrepo} alt="repositary" className="w-[45px]" />
                                        <Typography variant="h6" component="h6">Repositories</Typography>
                                    </div>
                                    <p className="text-lg">{item.public_repos}</p>
                                </div>

                                <div className="profileCards">
                                    <div className="flex items-center gap-2">
                                        <img src={follower} alt="followers" className="w-[45px]" />
                                        <Typography variant="h6" component="h6">Followers</Typography>
                                    </div>
                                    <p className="text-lg">{item.followers}</p>

                                </div>

                                <div className="profileCards">
                                    <img src={fireImage} alt="fire image" className="w-[50px]" />
                                    <p className="text-lg">Day Streak</p>
                                </div>
                            </div>
                        

                        </div>
                    
                )) }
            </section>
        </>
    );
}


export default UseFetchHook;