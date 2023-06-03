// script.js

const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  }
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0
    };
    this.generateRandomQuote = this.generateRandomQuote.bind(this);
  }

  generateRandomQuote() {
    const { quoteIndex } = this.state;
    const newIndex = Math.floor(Math.random() * quotes.length);
    if (newIndex !== quoteIndex) {
      this.setState({
        quoteIndex: newIndex
      });
    } else {
      this.generateRandomQuote();
    }
  }

  render() {
    const { quoteIndex } = this.state;
    const { text, author } = quotes[quoteIndex];

    return (
      <div id="quote-box">
        <div id="text">{text}</div>
        <div id="author">- {author}</div>
        <button id="new-quote" onClick={this.generateRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${text}" - ${author}`
          )}`}
          target="_blank"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));
