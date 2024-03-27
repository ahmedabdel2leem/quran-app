"use client"
import { useState } from "react"
import Surhs from "../Surhs/Surhs"
import Jusz from "../Juzs/Jusz"

type Props = {

}

function JuzsSurhsWrapper({}: Props) {
    const [Tap, setTap] = useState<boolean>(false)
  
    return <>
  <div className="max-w-6xl  mx-auto px-4 sm:px-[3rem]  ">
  <div className="buttons pt-[100px] space-x-3  mb-6 border-b">
      <button className={` p-2   ${!Tap?' border-b-[2.5px] border-primary ':''}`} onClick={()=>setTap(false)}>Surah</button>
      <button className={ ` p-2   ${Tap?' border-b-[2.5px] border-primary ':''}`} onClick={()=>setTap(true)}>Juz</button>
    </div>

    {Tap? <Jusz/>: <Surhs/>  }
   
  </div>
    </>  
}
export default JuzsSurhsWrapper;
