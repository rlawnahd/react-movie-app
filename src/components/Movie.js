import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Movie({id, coverImage, title, summary, genres}){

    return (
      <div>
       <img src={coverImage} />
       <h2>
          <Link to={`/movie/${id}`}> {title}</Link>
       </h2>
       <p>{summary}</p>
       <ul>
        {genres && genres.map((g) =>  // movie 배열 안에 배열이 있어서 map함수 사용
          <li key={g}>{g}</li>
          )}
       </ul>
     </div>
     )   
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;