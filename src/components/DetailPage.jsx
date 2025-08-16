import { useParams } from "react-router-dom"
import tarot from '../tarot-images.json';
import LiElement from './LiElement.jsx';
import Keyword from './Keyword.jsx';
import { useState, useRef, useEffect } from "react";

export default function DetailPage(props) {
    const [light, setLight] = useState(true);
    const [show, setShow] = useState('');

    const {id} = useParams();
    const card = tarot.cards.find(card => slugify(card.name) === id);
    const questionsRef = useRef(null);
    const characteristicsRef = useRef(null);
    const fortuneRef = useRef(null);
    const meaningsRef = useRef(null);
    const [contentHeights, setContentHeights] = useState({
        characteristics: 'auto',
        questions: 'auto',
        fortune: 'auto',
        meanings: 'auto',
    }) 

    useEffect(() => {
        if (questionsRef) {
            
        }
    }, [show])

    
    function fixImgPath(path) {
        return `/cards/${path}`;
    }

    function slugify(str) {
        return str.toLowerCase().replace(/\s+/g, '-');
    }

    const questionsLi = card["Questions to Ask"].map(question => {
        return <LiElement key={question} text={question}/>
    })

    const keywordTags = card.keywords.map(keyword => {
        return <Keyword key={keyword} keyword={keyword} />
    })

    const fortunesLi = card.fortune_telling.map(fortune => {
        return <LiElement key={fortune} text={fortune} />
    })

    const lightMeanings = card.meanings.light.map(meaning => {
        return <LiElement key={meaning} text={meaning} />
    })
    
    const shadowMeanings = card.meanings.shadow.map(meaning => {
        return <LiElement key={meaning} text={meaning} />
    })

    function handleShownContent(e) {
        if (e.target.tagName === 'DIV') {
            setShow(prevShow => {
                return prevShow !== e.target.id ? e.target.id : '' 
            })
        } else {
            setShow(prevShow => {
                return prevShow !== e.target.parentElement.id ? e.target.parentElement.id : ''
            })
        }
        
    }

    return (
        <section className="detail-page">
            <div className="general">
                {card.suit === 'Trump' && <p>{card.number}.</p>}
                <img src={fixImgPath(card.img)} alt="card illustration" />
                <h1>{card.name}</h1>

                <div className="keywords">
                    {keywordTags}
                </div>
            </div>

            <div className="text-content"> 
            
                <div className="characteristics box">
                    <div className="header" id="characteristics" onClick={handleShownContent}>
                        <h3>characteristics</h3>
                        <button className={show === 'characteristics' ? 'active' : ''}></button>
                    </div>

                    <div ref={characteristicsRef} className={show === 'characteristics' ? 'content' : 'content hide'}>
                    {card.Affirmation && <p>Affirmation: <span>{card.Affirmation}</span></p> }
            
                    {card.Archetype && <p>Archetype: <span>{card.Archetype}</span></p>}
            
                    {card["Hebrew Alphabet"] && <p>Hebew Alphabet: <span>{card["Hebrew Alphabet"]}</span></p>}
            
                    {card.Numerology && <p>Numerology: <span>{card.Numerology}</span></p>}

                    {card.Elemental && <p>Element: <span>{card.Elemental}</span></p>}

                    {card.Astrology && <p>Astrology: <span>{card.Astrology}</span></p>}

                    {card["Mythical/Spiritual"] && <p>Mythical/Spiritual: <span>{card["Mythical/Spiritual"]}</span></p>}
            
                    </div>
                </div>
            

                <div className="questions box two">
                    <div className="header" id="questions" onClick={handleShownContent}>
                        <h3>Questions to ask</h3>
                        <button className={show === 'questions' ? 'active' : ''}></button>
                    </div>
                    
                    <div ref={questionsRef} className={show === 'questions' ? 'content' : 'content hide'}>
                        <ul>{questionsLi}</ul>
                    </div>
                </div>

                <div className="fortune box">
                    <div className="header" id="fortune" onClick={handleShownContent}>
                        <h3>Fortune-telling</h3>
                        <button className={show === 'fortune' ? 'active' : ''}></button>
                    </div>
                    
                    <div ref={fortuneRef} className={show === 'fortune' ? 'content' : 'content hide'}>
                        <ul>{fortunesLi}</ul>
                    </div>
                </div>

                <div className="meanings box two">
                    <div className="header" id="meanings" onClick={handleShownContent}>
                        <h3>Meanings</h3>
                        <button className={show === 'meanings' ? 'active' : ''}></button>
                    </div>
                    
                    <div ref={meaningsRef} className={show === 'meanings' ? 'content' : 'content hide'}>
                        <div className="btns">
                            <button className={light ? 'active' : ''} onClick={() => setLight(true)}>upright</button>
                            <button className={!light ? 'active' : ''} onClick={() => setLight(false)}>reversed</button>
                        </div>

                        {light ? <ul>{lightMeanings}</ul> : <ul>{shadowMeanings}</ul> }
                    </div>
                </div>
    
             </div>

            
        </section>
    )
}