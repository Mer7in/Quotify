import Qeact from "react";
import quotes from "../quotedb/index.js";
import "../App.css";

export default function QuoteCard(props) {
  const { quote, generateRandomQuote, copyToClipboard } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h2>The Random Quote Machine</h2>
      </div>
      <div className="card-body">
        <div className="icon-quote">
          <span className="icon">
            <i className="fa fa-quote-left"></i>
          </span>
          <p className="quote" id="quote">
            {quote.quote}
          </p>
        </div>
        <div className="author" id="author">
          <span className="icon-author">{quote.author}</span>
        </div>
        <div className="quote-buttons">
          <div className="social">
            <a
              className={"twitter-share-button"}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open(
                  "https://twitter.com/intent/tweet/?text=" +
                    encodeURIComponent(quote.quote + "\n\n" + quote.author)
                );
              }}
            >
              <i className={"fa fa-twitter"} />
            </a>
          </div>
          <div className="btn">
            <a
              onClick={(e) => generateRandomQuote(quotes, e)}
              id="quote-btn"
              style={{ cursor: "pointer" }}
            >
              New Quote
            </a>
          </div>
          <div className="copy-btn">
            <a
              id="quote-copy"
              className="fas fa-copy"
              style={{ cursor: "copy" }}
              onClick={() => {
                copyToClipboard()
              }}
            ></a>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <h2>Powered by </h2>
        <a href="">Kevin</a>
      </div>
    </div>
  );
}
