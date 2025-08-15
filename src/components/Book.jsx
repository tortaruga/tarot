import { useState } from "react"
import tarot from '../tarot-images.json';
import CardPreview from "./CardPreview";
import trumpsIcon from '/assets/trumps.svg';
import wandsIcon from '/assets/wands.svg';
import swordsIcon from '/assets/swords.svg';
import cupsIcon from '/assets/cups.svg';
import pentaclesIcon from '/assets/pentacles.svg'; 


export default function Book() {

    const [cardList, setCardList] = useState(tarot.cards.filter(card => card.suit === 'Trump'));
    const [searchFilter, setSearchFilter] = useState('');
 
    function filterCards(filter) {
        return tarot.cards.filter(card => card.suit.toLowerCase() === filter);
    }

    function handleFilters(e) {
        setCardList(filterCards(e.target.id));
    }

    function fixImgPath(path) {
        return `/cards/${path}`;
    }

    const cardElements = cardList.map((card, index) => {
        return <CardPreview key={card.name} index={index} image={fixImgPath(card.img)} {... card} />
    })

    function handleSearchInput(e) {
        const {value} = e.target;

        setSearchFilter(value);
        setCardList(tarot.cards.filter(card => card.name.toLowerCase().includes(value.toLowerCase())));
    }

    function handleClick(e) {
        if (e.target.tagName === 'BUTTON') {
            handleFilters(e);
        } else if (e.target.tagName === 'IMG') {
            setCardList(filterCards(e.target.parentElement.id)); 
        }
    }

    return (
        <section className="book">
            <div className="filters">
                <input onChange={handleSearchInput} value={searchFilter} type="text" placeholder="search for card name..." id="searchInput" name="searchInput" />

                <div className="buttons">
                    <button onClick={handleClick} id="trump">
                        <img src={trumpsIcon} alt="major arcana icon" />
                    </button>
                    <button onClick={handleClick} id="wands">
                        <img src={wandsIcon} alt="wands suit icon" />
                    </button>
                    <button onClick={handleClick} id="cups">
                        <img src={cupsIcon} alt="cups suit icon" />
                    </button>
                    <button onClick={handleClick} id="swords">
                        <img src={swordsIcon} alt="swords cuit icon" />
                    </button>
                    <button onClick={handleClick} id="pentacles">
                        <img src={pentaclesIcon} alt="pentacles" />
                    </button>
                </div>
            </div>

            
            <div className="card-gallery">
                {cardElements}
            </div>
        </section>
    )
} 

// handle card click
// detail page
// router ???