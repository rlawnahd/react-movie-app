import React from "react";

function Movie({coverImage, title, summary, genres}){

    return (
      <div>
       <img src={coverImage} />
       <h2>{title}</h2>
       <p>{summary}</p>
       <ul>
        {genres.map((g) =>  // movie 배열 안에 배열이 있어서 map함수 사용
          <li key={g}>{g}</li>
          )}
       </ul>
     </div>
     )
    
}
export default Movie;