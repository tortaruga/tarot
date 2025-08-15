import { Link } from "react-router-dom";

export default function CardPreview(props) {
    function slugify(str) {
        return str.toLowerCase().replace(/\s+/g, '-');
    }

    return (
        <Link to={`/details/${slugify(props.name)}`} style={{color: 'inherit', textDecoration: 'none'}}>
        <div className="card-preview" style={{'--delay': `${0.2 * props.index}s`}}>
            <img src={props.image} alt={`${props.name} card illustration`} />
            <h1>{props.name}</h1>
        </div>
        </Link>
    )
}