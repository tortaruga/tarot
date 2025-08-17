import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import tarot from '../../tarot-images.json';
import Card from '../Card';
import shuffleGif from '/assets/sun.svg';

export default function Reading() {
    const cards = tarot.cards;
    const [randomCards, setRandomCards] = useState([]);
    const [showCards, setShowCards] = useState(false);
    const [begin, setBegin] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);

    useEffect(() => {
        if (begin) {
            const timer = setTimeout(() => setShowCards(true), 3000);
            setIsShuffling(false);

            return () => clearTimeout(timer);
        }
    }, [begin]);

    function fixImgPath(path) {
        return `/cards/${path}`;
    }
    
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function getRandomCards(n) {
        const shuffledCards = shuffle(cards);
        const randomCards = shuffledCards.slice(0, n);

        return randomCards;
    } 

    const cardElements = randomCards.map(card => {
        return (
            <Card key={card.name} image={fixImgPath(card.img)} {... card} />
        )
    })

    function handleBeginButton() {
        setRandomCards([]);
        setBegin(false);
        setIsShuffling(true);

        setTimeout(() => {
            setRandomCards(getRandomCards(3));
            setBegin(true);    
        }, 3000);
        
    }

    return (
        <div className='container'>
            <Link to='/' style={{textDecoration: 'none'}}><h2 className='logo'>arcana</h2></Link>

        <section className="reading">

            {(cardElements.length === 0 && !isShuffling) && (
                <div className="introduction">
                    <h2>Card Reading</h2>
                    <p>Click the button to get a reading with three random cards.</p>

                    <button onClick={handleBeginButton}>begin</button>
                    </div>
            )}

            {isShuffling && <img src={shuffleGif} id='shuffle-gif' alt="shuffling deck gif" /> }
            {isShuffling && <div className="credits">icon by <a href="https://www.flaticon.com/free-icons/tarot" target='_blank'>Imogen.Oh - Flaticon</a></div> }

            {(showCards && cardElements.length !== 0) && (
                <div className="reading-container">
                <p className='info'>click on a card to see more details</p>
                <div className="cards">{cardElements}</div>
                <button onClick={handleBeginButton}>new reading</button>

                <Link to='/book' style={{color: 'inherit', fontSize: '.9rem'} }>or explore all cards</Link>
              </div>
            )} 
    
        </section>
        </div>
    )
}