import localFonts from "next/font/local";

 const thuluth = localFonts({
    src:[
        {path : "../assets/fonts/thuluth-decorated.ttf"}],
        variable:"--font-thuluth"
})

export default thuluth