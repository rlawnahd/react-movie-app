import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'; //usestate , useeffect 불러오기
import Movie from "./Movie";


function App() {

  const [loading, setLoading] = useState(true); // 로딩 스테이트 생성
  const [movies, setMovies] = useState([]); // 영화들 스테이트 생성
  const getMovies = async () => { // 오픈 api 주소를 통해 값 가져오기
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json(); 
    setMovies(json.data.movies); //json 에 있는 영화 데이터를 setMovies를 통해 movies에 넣기
    setLoading(false); // 데이터를 가져오면 로딩이 끝났으니 false로 바꾸기
  };
  useEffect(()=>{ // useEffect를 통해 처음 시작할때만 영화 데이터 호출
    getMovies();
  },[]);
  
  return (
    <div >
     {loading ? (
     <h1>Loading...</h1>
      ) : (

        <div>
          {movies.map((movie) => (
           <Movie 
            coverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
           />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
