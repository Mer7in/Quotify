import logo from "./logo.svg";
import React, { Component } from "react";
import QuoteCard from "./components/QuoteCard.js";
import quotes from "./quotedb";
import "./App.css";

const randomizer = (elem) => {
  let random = Math.floor(Math.random() * elem.length);
  return random;
};

export default class App extends Component {
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
  };

  copyToClipboard = (e) => {
    navigator.clipboard.writeText(this.state.quote);
  };

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
