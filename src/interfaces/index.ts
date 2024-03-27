export interface IChapterResponse {
  chapters: ChapterInfo[];
}
export interface ChapterInfo{
    id?:number,
    revelation_place:string,
    revelation_order:string,
    name_simple:string,
    name_arabic:string,
    verses_count:number,
    pages: number[],
    translated_name: {
        language_name: string,
        name: string
      }
}

export interface IJuzsResponse {
  juzs: IJuzs[];
}
export interface IJuzs {
  first_verse_id: number;
  id?: number;
  juz_number: number;
  last_verse_id: number;
  verse_mapping: { [key: string]: string };
  verses_count: number;
}
// export interface Versemapping {
//   "1": string;
//   "2": string;
// }



export interface JuzsStatus {
  data:  IJuzs[] ;
  loading: boolean;
  error: string | null;
}
export interface ChaptrStatus {
  data: ChapterInfo[] ;
  loading: boolean;
  error: string | null;
}


export interface ChapterState {
  chapter: ChaptrStatus;
  juzs:JuzsStatus
}