'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import Logo from '/public/images/120x50.png'
import Image from "next/image";
import { faUser, faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";





interface NavItem{
    name:string,
    link:string
}




export default function Nav(){
    const icons = [faUser, faCode,faWindowMaximize];
   const [menuActive, setMenuActive] = useState<boolean>(false);
   const [menuList, setMenuList] = useState<NavItem[]>([]);
    
//데이터를 가져올때 . 재 랜더링 해야할때 빼고는 문법은 똑같다.
// 데이터 가공해서 뿌리기 fetch 문 연습.
   useEffect(()=>{
    const fetchData = async () =>{
        try{
            const res = await fetch("/api/nav");
            const data =await res.json();
            setMenuList(data.data);
            
        }catch(error){
            console.log(error);
        }
        
    }
    fetchData()
   }, [])

   const toggleMenu = ()=>{
    setMenuActive(!menuActive);
}
   
   
   
    // p태그를 클릭했을때 다른글자로 바뀌게. 

  

    // const defaultName = "기범석";


    return(
        
        <>
        
        
        <div className="w-full dark:border-b px-[2%] sticky top-0 bg-white py-2.5 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h1> 
                        <Image width={120} height={50} src ={Logo} alt="로고" title="로고"></Image>
                    </h1>
                </Link>
                <div className="basis-3/4 hidden md:block">
                    <ul className="flex justify-around">
                        {
                            // map = 새로운 배열을 반복문 을 돌린다는뜻
                            // key 값 필수
                            menuList.map((e,i)=>{
                                return(
                                    <li className="relative hover:font-bold after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after: transition-all after:duration-500 after:scale-x-0 hover:after:scale-x-100" key={i}><Link href={e.link}>{e.name}</Link></li>
                                )

                            })
                        }
                    </ul>
                </div>
                
                
                         
                
            </div>  

        </div>
        <div onClick={toggleMenu} className="fixed right-5 top-5 transition-all duration-500 z-[51] cursor-pointer md:hidden ">
            <div className={`w-[30px] h-[5px] rotate-45 translate-y-[10px] bg-black dark:bg-[#ebf4f1] roundedm-[5px] transition-all duration-500`}></div>
           
            <div className={`w-[30px] h-[5px] ${menuActive ? "" : 'opacity-0 -translate-x-8' } bg-black dark:bg-[#ebf4f1] roundedm-[5px] transition-all duration-500  ` }></div>
           
           <div className={`w-[30px] h-[5px] bg-black dark:bg-[#ebf4f1] roundedm-[5px] transition-all duration-500 -rotate-45 -translate-y[10px]`}></div>

        </div>
        {menuActive ? "클릭" : "햄최몇 범석?" }
        <div className={`w-72 h-full fixed ${menuActive ? "right-0" : "-right-72" } top-0 z-[49] bg-gray-100 p-12 box-border transition-all md:hidden`}>
           <div className="text-center mt-6">
           <Image src="https://via.placeholder.com/100" alt="100x100" title="100x100" width={100} height={100} className="mx-auto rounded-full mb-4" />
           </div>
           <ul className="mt-12">
            {
                menuList.map((e,i)=>{
                    return(
                        <li className="pt-5 pb-2 border-b hover:font-bold" key={i}><FontAwesomeIcon className="mr-2"icon={icons[i]}></FontAwesomeIcon><Link href={e.link}>{e.name}</Link></li>
                    )
                })
            }
           </ul>
        </div>
        </>
    )
}