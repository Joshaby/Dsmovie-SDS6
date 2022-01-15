import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';
import './styles.css'


const Form = () => {

    const params = useParams();

    return (
        <FormCard movieId={`${params.movieId}`}/>
    );
}

export default Form;