import { createContext } from "react";

export const SearchContext = createContext ({
   term: '',
   handleSearch: () => { }


 })

// const data = useRef(5)
// console.log(typeof data)