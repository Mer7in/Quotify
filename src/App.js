import logo from "./logo.svg";
import React, { Component } from "react";
import QuoteCard from "./components/QuoteCard.js";
import quotes from "./quotedb";
import "./App.css";

const randomizer = (elem) => {
  let random = Math.floor(Math.random() * elem.length);
  return random;
};
const random = randomizer(quotes);

export default class App extends Component {
  state = {
    quote: quotes[random].quote,
    author: quotes[random].author,
  };

  copyToClipboard = (e) => {
    navigator.clipboard.writeText(this.state.quote);
  };

  componentDidMount() {
    //setInterval(()=>{console.log('jeamik')}, 30000);
    //window.getComputedStyle(document.body,"::before").backgroundImage ='linear-gradient( 115deg,rgba(255, 255, 255, 0.3),rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.6),rgba(255, 255, 255, 0.3)),url("https://raw.githubusercontent.com/Mer7in/quotify/React-version/src/assets/images/img1.jpg")';
    //console.log(elem);
    const elem = document.getElementById("tweet-quote");
    elem.href =
      "https://twitter.com/intent/tweet/?text=" +
      encodeURIComponent(this.state.quote + "\n\n" + this.state.author);
  }

  generateRandomQuote = (arr, e) => {
    e.preventDefault();
    let random = randomizer(quotes);
    let newQuote = quotes[random];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
    });

    console.log(quotes[random]);
  };
  render() {
    return (
      <div
        id="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <QuoteCard
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
          copyToClipboard={this.copyToClipboard}
        />
      </div>
    );
  }
}
