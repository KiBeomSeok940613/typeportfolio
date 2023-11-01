'use client';

import { useEffect, useState } from "react";


interface SkillItem  {
    title: string;
    progressBefore: number;
    progressAfter: number;
    desc: string 
}


export default function Skills(){
    const [itemList, setItemList] = useState<SkillItem[]>([]);
    const [Bar, setBar] = useState<boolean>(false)
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const res = await fetch("/api/skill");
                const data =await res.json();
                setItemList(data.data);
                
                setTimeout(() => {
                    setBar(true)
                    
                }, 500);
                
            }catch(error){
                console.log(error);
            }
            
        }
        fetchData()
       }, [])
    
    return(
        <>
        {
            itemList.map((e,i)=>{
                return(
                    <div className="w-full h-20" key={i}>
                        <div className="w-full h-5 bg-[#e0e0de] rounded-[50px]">
                            <div className="h-full bg-orange-500 duration-1000 ease-out rounded-[50px] text-right relative mb-3 first:mt-10" style={{width: !Bar ? e.progressBefore : e.progressAfter + "%"}}>
                                <p className="absolute -top-6 md:-top-7 left-1 text-sm md:text-lg">{e.title}</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base mt-1">{e.desc}</p>
                    </div>
                )
            })
        }

        
        </>
    )
}