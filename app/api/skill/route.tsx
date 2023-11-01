import { findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons";
import { promises } from "dns";
import { NextResponse } from "next/server";


interface SkillItem  {
    title: string;
    progressBefore: number;
    progressAfter: number;
    desc: string 
}

interface SkillData  {
    data: SkillItem[],
    
}

export async function GET() : Promise<NextResponse>{
    const data :SkillItem[] = [
    {
        title: "html",
        progressBefore: 20,
        progressAfter: 80,
        desc: "웹 표준에 준수하여,마크업을 할 수 있으며, flex grid 를 사용 할 수 있다."
    },
    {
        title: "CSS3",
        progressBefore: 20,
        progressAfter: 80,
        desc: "웹 표준에 준수하여,마크업을 할 수 있으며, flex grid 를 사용 할 수 있다."
    },
    {
        title: "REACT",
        progressBefore: 30,
        progressAfter: 40,
        desc: "REACT 를 활용하여, SPA 사이트 제작을 할 수 있다. REDUX,ROUTER DOM 등 다양한 라이버르리 활용을 할 수 있다."
    },
    {
        title: "NEXTJS",
        progressBefore: 20,
        progressAfter: 50,
        desc: "REACT 프레임 워크 NEXTJS 를 활용하여 SSR 사이트 제작을 할 수 있다."
    },
    ]
    return NextResponse.json({data} as SkillData)
}