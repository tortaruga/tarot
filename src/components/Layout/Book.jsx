import { useState } from "react"
import { Link } from "react-router-dom";

import tarot from '../../tarot-images.json';
import CardPreview from "../CardPreview";

import trumpsIcon from '/assets/trumps.svg';
import wandsIcon from '/assets/wands.svg';
import swordsIcon from '/assets/swords.svg';
import cupsIcon from '/assets/cups.svg';
import pentaclesIcon from '/assets/pentacles.svg'; 


export default function Book() {
    const [cardList, setCardList] = useState(orderCards(tarot.cards.filter(card => card.suit === 'Trump')));
    const [searchFilter, setSearchFilter] = useState('');
 
    function filterCards(filter) {
        return tarot.cards.filter(card => card.suit.toLowerCase() === filter);
    }

    function orderCards(cards) {
        return cards.sort((a, b) => a.number - b.number);
    }

    function handleFilters(e) {
        setCardList(orderCards(filterCards(e.target.id)));
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
        <div className="container">
            <Link to='/' style={{textDecoration: 'none'}}><h2 className='logo'>arcana</h2></Link>


        <section className="book">

            <div className="filters">
                <input onChange={handleSearchInput} value={searchFilter} type="text" placeholder="search for card name..." id="searchInput" name="searchInput" aria-label="search for card by name" />

                <div className="buttons">
                    <button onClick={handleClick} id="trump" aria-label="filter major arcana">
                        <img src={trumpsIcon} alt="major arcana icon" />
                    </button>
                    <button onClick={handleClick} id="wands" aria-label="filter wands suit cards">
                        <img src={wandsIcon} alt="wands suit icon" />
                    </button>
                    <button onClick={handleClick} id="cups" aria-label="filter cups suit cards">
                        <img src={cupsIcon} alt="cups suit icon" />
                    </button>
                    <button onClick={handleClick} id="swords" aria-label="filter swords suit cards">
                        <img src={swordsIcon} alt="swords cuit icon" />
                    </button>
                    <button onClick={handleClick} id="pentacles" aria-label="filter pentacles suit cards">
                        <img src={pentaclesIcon} alt="pentacles" />
                    </button>
                </div>
            </div>

            <Link to='/reading' style={{color: 'inherit', fontSize: '.9rem'} } >or click here to start a reading</Link>
              
            <div className="card-gallery">
                {cardElements}
            </div>

            <div className="credits">filter icons by <a href="https://www.svgrepo.com/" target="_blank">SVGrepo</a> </div>
        </section>
        </div>
    )
} 
