"use client"
import { fetchJuzs } from "@/app/redux/chaptersSlice";
import { useAppSelector } from "@/hooks";
import { ReactNode, createContext, useEffect, useState   } from "react";
import { useDispatch } from "react-redux";
interface Prop{
    children : ReactNode
}
export const dispatcherconst = createContext<any>('');

export default function   DispatcherProvider ({children}:Prop)  {
    const [surhNumber, setsurhNumber] = useState<any[]|null>(null)
const {juzs}=useAppSelector(store=>store.reChapters)
const dispatch = useDispatch<any>()

useEffect(()=>{
  dispatch(fetchJuzs())
 
},[dispatch])
useEffect(() => {
  // Check if data has already been fetched

  // If data has not been fetched, fetch it
  if (juzs.data.length !== 0) {
    console.log(juzs)
    const aho = [];
    for (let i = 0; i < 30; i++) {
      const surhKeys: string[] = Object.keys(juzs.data[i].verse_mapping);
      // Parse each key to integer using parseInt
      const parsedKeys = surhKeys.map((str: any) => parseInt(str, 10));
      aho.push(parsedKeys);
      console.log(surhKeys, "keys");
    }
    setsurhNumber(aho);
    
    // Set flag in local storage to indicate data has been fetched
  }
}, [juzs]);

return <dispatcherconst.Provider   value={{surhNumber}}>
    {children}
</dispatcherconst.Provider>
}