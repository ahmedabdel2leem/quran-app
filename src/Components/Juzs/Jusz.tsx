"use client"
import { useAppSelector } from "@/hooks"
import { useContext } from "react"
import Surh from "../Surh/Surh"
import { dispatcherconst } from "../provider"

type Props = {

}

function Jusz({}: Props) {
  const {chapter}=useAppSelector(store=>store.reChapters)
  const {surhNumber} = useContext(dispatcherconst);
  console.log(surhNumber)

  return (
   <>



   <div className="columns-1 md:columns-2 lg:columns-3" >
   
    {surhNumber && surhNumber.map((keys:number[],i:number)=><div className=" inline-block w-full bg-slate-100 p-4 rounded-lg mb-4">
   <div className="juHeader flex justify-between"> 
<a>juz : {i+1}</a>
<a>read juz</a>

   </div>
   <div className=" space-y-2">
      {
        keys.map((key:number)=><Surh chapter={chapter.data[key-1]} />)
      } </div>
      
      </div>)}
      
      </div>
 
 </>
  )
}

export default Jusz