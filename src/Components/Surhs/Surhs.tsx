"use client"
import {  useAppSelector } from "@/hooks";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Surh from "../Surh/Surh";
import { ChapterInfo } from "@/interfaces";
import { fetchChapters } from "@/app/redux/chaptersSlice";




function Surhs() {
const {chapter}=useAppSelector(store=>store.reChapters)
const dispatch = useDispatch<any>()
 useEffect(()=>{
  dispatch(fetchChapters())
 },[dispatch])
 
 return <>
 <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-4 ">
    { chapter.data.map((chapter:ChapterInfo)=>
    <Surh chapter={chapter} key={chapter.id}/>

    )}
  </div>
  </>
}

export default Surhs;