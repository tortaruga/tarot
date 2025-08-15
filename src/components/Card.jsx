import { useState } from "react"
import Keyword from "./Keyword"
import closeIcon from '/assets/close-icon.svg';

export default function Card(props) {
    const [showDetails, setShowDetails] = useState(false);

    const keywords = props.keywords.map(keyword => {
        return <Keyword key={keyword} keyword={keyword} />
    })


    function handleShowDetails(e) {
        if (e.target.className === 'close-btn') {
            setShowDetails(false);
        } else {
            setShowDetails(true);
        }
    }

    return (
        <div className="card" onClick={handleShowDetails}>
            <img className="card-img" src={props.image} alt="card illustration" />
            <h1>{props.name}</h1>

            {showDetails && (
                <div className="more-details">
                    <button className="close-btn" onClick={handleShowDetails}>
                        <img className="close-btn" src={closeIcon} alt="close button" /> 
                    </button>
                    <h2>{props.name}</h2>
                    <div className="keywords">
                        {keywords}
                    </div>
                    <p>{props['fortune_telling'].join('. ')}</p>
            </div>
            )}
            
        </div>
    )
}