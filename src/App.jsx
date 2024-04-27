
import { useEffect, useState } from 'react'
import './App.css'
import Nabbar from './Compo/Nabbar';
import Search from './Compo/Search';
import Movie from './Compo/Movie';

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
const [searchMovie, setSearchMovie] = useState('');
const [loading, setLoading] = useState(false);
 
  const fetchMovieData = async () => {
    try {
        setLoading(true);
        const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
        const data = await res.json();
        setAllMovieData(data.Search);
        
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  return (
    <>
      <Nabbar/>
      <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
      <Movie allMovieData={allMovieData} loading={loading} />
    </>
  )
}

export default App
