import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import MovieScore from "./MovieScore";
import './styles.css'

type Props = {
    movie: Movie;
}

const MovieCard = ({ movie } : Props) => {

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore score={movie.score} count={movie.count}/>
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">
                        Avaliar
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;