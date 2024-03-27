import { ChapterInfo } from "@/interfaces"
import Link from "next/link"

// import "../assets/fonts/fantezy.ttf"
interface Props  {
chapter:ChapterInfo
}

// function ( ){
//   const is = id 

//                         286
//   for(let i = 1 ; i<= vscount ;i++){
//         fetch(`https://api.quran.com/api/v4/verses/by_key/${is}:${i}?words=true&audio=7`)
//   }
// }

function Surh({chapter}: Props) {

  return (
    <div data-index={chapter.id} className="group  bg-white border rounded-md hover:border-primary hover:bg-slate-100 ">
 <Link href={`${chapter.id}`}  >
    <div className="flex  justify-between p-4">
      <div className='surhPreview_left flex items-center space-x-4'>
        <div  className="surh_num relative w-10 h-10  flex justify-center items-center transform rotate-45 rounded-md bg-slate-100 group-hover:bg-primary  ">
          <span className="transform -rotate-45 font-semibold group-hover:text-white">{chapter.id}</span>
          </div>
        <div className="surhNameLContainer">
        <div className="surhName_en font-bold text-slate-700">
          {chapter.name_simple}
        </div>
        <div className="surhName_Trans text-xs font-bold text-slate-500 group-hover:text-primary">
          {chapter.translated_name.name}
        </div>
        </div>
      </div>
      <div className="suraPreview_right">
      <div className="surhNameRContainer text-center">
        <div className="surhName_ar font-thuluth_ font-bold text-slate-700">
          {chapter.name_arabic}
        </div>
        <div  className="verses_num text-xs  font-bold text-slate-500 group-hover:text-primary">
          {`${chapter.verses_count} Ayat`}
        </div>
        </div>
      </div>
    </div>

</Link>
    </div>
   
  )
}

export default Surh