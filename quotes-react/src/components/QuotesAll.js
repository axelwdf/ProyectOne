import './quotes.css';
import { useState } from 'react';
import Quotes from '../Quotes.json';


const getRandom = () => Math.floor(Math.random() * Quotes.length);
const colors =  [
    "#9ADCFF",
    "#FFF89A",
    "#FFB2A6",
    "#FF8AAE",
    "#6EBF8B",
    "#DADBBD",
    "#D82148",
    "#051367",
    "#5D8BF4"
]

const QuotesAll = () => {


    const [quote, setQuote] = useState(Quotes[getRandom()]);

    const changeQuote = () => {
        const random = getRandom();
        setQuote(Quotes[random]);
    }

    const color = colors[Math.floor(Math.random() * 9)];
    document.body.style = `background: ${color}`

    return(
        <div className="QuotesAll" style={{color: color}} >    
            {/* icono quote */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-icon" viewBox="0 0 16 16">
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            {/* Cita */}
            <div className="Quote">
                <p className="Quote-Ch">
                  Quote: {quote.quote}
                </p>
            </div>

            {/* AUTOR */}
            <div className="Author">
                <p className="Author-Ch">
                    Autor: {quote.author}
                </p>
                {/* icono */}
                <div className="icon-change" onClick={changeQuote} >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    fill="currentColor" 
                    class="bi-icon" 
                    id='arrow' 
                    viewBox="0 0 16 16"
                >
                    <path 
                        fill-rule="evenodd" 
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/
                    >
                </svg>
                </div>
            </div>
        </div>
    );
}

export default QuotesAll;