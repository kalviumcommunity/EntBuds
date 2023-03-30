import React, {useState, useEffect} from "react"
import Cards from "../Card/Card" 
import "./List.css"
import { useParams } from "react-router-dom"

const MovieList = () => {

    const [mList, setmList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setmList(data.results))
    }
console.log(mList)
    return (
        <div className="list">
            <h2 className="listTitle">{(type ? type : "Popular")}</h2>
            <div className="listCard">
                {
                    mList.map((movie,index) => (
                        <Cards key={index} movie = {movie} />
                    ))
                }
            </div>
        </div>
    )
  
}

export default MovieList