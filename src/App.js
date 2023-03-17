import { useEffect, useRef, useState } from 'react'
import { Gallery } from './components/gallery'
import { SearchBar } from './components/searchBar'
// import { Wrapper } from './components/wrapper'
import { DataContext } from './context/dataContext'
// import { SearchContext } from './context/searchContext'

function App(){
  let [search, setSearch] = useState('the grateful dead')
  let [message, setMessage] = useState('search for Music!')
  let [data, setData] = useState([])
  // let numberRef = useRef=(1);
  // let inputRef = useRef();

  useEffect(() => {
    if (search) {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch(API_URL + search)
            const resData = await response.json()
            if (resData.results.length > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
    }
}, [search])

const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
}

return (
    <div>
        <SearchBar handleSearch={handleSearch} />
        {message}
        <DataContext.Provider value={data}>
            <Gallery />
        </DataContext.Provider>
    </div>
);
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
