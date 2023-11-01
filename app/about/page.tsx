import Image from "next/image"

import Aboutcom from "./../component/about"



export default function About() {
    return (
   <>
   <div className="w-full pt-12 mt-16 px-[2%] pb-8">
    <div className="max-w-7xl mx-auto p-5 bg-white rounded-md border dark:bg-[#272929] dark:text-[#ebf4f1]">
      <h3 className="text-center font-bold text-xl sm:text-2xl lg:text-3xl ">프로필</h3>
    </div>
    <div className="max-w-7xl mx-auto flex overflow-hidden mt-8 flex-wrap justify-between">
      <div className="basis-full md:basis-[30%] py-12 px-4 bg-white rounded-md dark:[#272929] dark:text-[#ebf4f1] text-center border">
        <Image src="https://via.placeholder.com/300" alt="300x300" className="rounded-full mx-auto"  width={300} height={300}/>
        <ul>
        
          <li className="pl-5 box-border pt-6">기범석 / ki beom seok</li>
          <li className="pl-5 box-border pt-6">1994.06.06</li>
          <li className="pl-5 box-border pt-6"><a href="mailto:kbs9406@naver.com"></a>kbs9406@naver.com</li>
          {/* 내부에서 움직이는건 Navlink 태그 다른 페이지로 넘어가면 a 태그 */}
          

          
        </ul>
        
      </div>
        <div className="basis-full md:basis-[67.5%] mt-8 md:mt-0">
        <Aboutcom />
        </div>
        
    </div>
   </div>
   </>
    )
  }
  