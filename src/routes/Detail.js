import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [movie3, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };
  console.log(movie3);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1 className={styles.loader}>loading..</h1>
      ) : (
        <div className={styles.movie}>
          <h1>Detail Movie</h1>
          <img className={styles.movie__img} src={movie3.medium_cover_image} />
          <p>{movie3.title}</p>
          <p>{movie3.description_full}</p>
          {/* <button onClick={()=>{
                    window.location.href="/";
                }}>gd</button> */}
          <Button />
        </div>
      )}
    </div>
  );
}

export default Detail;
