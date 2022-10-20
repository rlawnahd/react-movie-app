import {useState, useEffect} from 'react'; 
import Movie from "../components/Movie";
function Home(){
const [loading, setLoading] = useState(true); // 로딩 스테이트 생성
const [movies, setMovies] = useState([]); // 영화들 스테이트 생성
const getMovies = async () => { // 오픈 api 주소를 통해 값 가져오기
  const json = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
  ).json(); 
  setMovies(json.data.movies); //json 에 있는 영화 데이터를 setMovies를 통해 movies에 넣기
  setLoading(false); 
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
          id={movie.id}
          key={movie.id}
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
export default Home;