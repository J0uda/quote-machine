import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState({
    text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
    author: 'Thomas Edison',
    backgroundColor: '#d35400',
    color: '#d35400',
  });

  const { text, author, backgroundColor, color } = quote;

  const colorArray = [
    '#db0a5b',
    '#d91e18',
    '#cf000f',
    '#c0392b',
    '#96281b',
    '#736598',
    '#8c14fc',
    '#a537fd',
    '#9b59b6',
    '#913d88',
    '#674172',
    '#4d13d1',
    '#336e7b',
    '#013243',
    '#2c3e50',
    '#24252a',
    '#22a7f0',
    '#2574a9',
    '#3a539b',
    '#1f3a93',
    '#5333ed',
    '#1e824c',
    '#2e3131',
  ];

  const fetchQuote = async () => {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    const random = Math.floor(Math.random() * data.length);
    const changeColorRandmoly = Math.floor(Math.random() * 24);

    setQuote({
      text: data[random].text,
      author: data[random].author.replace(', type.fit', ''),
      backgroundColor: colorArray[changeColorRandmoly],
      color: colorArray[changeColorRandmoly],
    });
  };

  useEffect(() => {
    fetchQuote();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className='box-container'
      style={{ backgroundColor: backgroundColor, opacity: 1 }}
    >
      <div id='quate-box'>
        <section className='quote-container'>
          <i
            className='fas fa-quote-left'
            style={{ color: color, opacity: 1 }}
          ></i>
          <h2 id='text' style={{ color: color, opacity: 1 }}>
            {text}
          </h2>
          <p id='author' style={{ color: color, opacity: 1 }}>
            -{author}
          </p>
        </section>
        <section className='button-box'>
          <div className='buttons-container'>
            <a href='https://twitter.com/intent/tweet' id='tweet-quote'>
              <i
                className='fab fa-twitter-square fa-2x'
                style={{ color: color }}
              ></i>
            </a>
            <a
              href='https://www.tumblr.com/tagged/link'
              id='tumblr-quote'
              title='Post this quote on tumblr!'
              target='_blank'
              rel='noreferrer'
            >
              <i
                className='fab fa-tumblr-square fa-2x'
                style={{ color: color }}
              ></i>
            </a>
          </div>
          <div className='next-quote-container'>
            <button
              style={{ backgroundColor: backgroundColor, opacity: 1 }}
              className='next-quote'
              id='new-quote'
              onClick={fetchQuote}
            >
              New Quote
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
