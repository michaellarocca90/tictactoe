import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const defaultGame = function() {
  return {
    counter: 0,
    key: "",
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
    xwin: "",
    owin: "",
    displayMessage: "",
    wincondition: ["123", "132", "213", "312", "231", "321", "456", "465", "546", "645", "564", "654", "789", "798", "879", "978", "897", "987", "147", "174", "417", "714", "471", "741", "258", "285", "528", "825", "582", "852", "369", "396", "639", "936", "693", "963", "195", "159", "915", "591", "951", "591", "357", "375", "537", "735", "573", "753"]
  }
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = defaultGame()
  }

  resetGame() {

    this.setState(defaultGame())
  }

  handleClick(id) {
    let state = this.state

    state.displayMessage = ''

    if(state[id] !== "") {
      this.setState({
        displayMessage: "You can't click that again!!"
      })

      return
    }

    if(state.counter  === 0 || state.counter % 2 === 0) {
      state[id] = "X"
      state.xwin = state.xwin + id.substr(3,3)
    } else {
      state[id] = "O"
      state.owin = state.owin + id.substr(3,3)
    }

    state.counter++

    //if a win/loss has not occured after 3 logs of an x or an o the first digit needs to be chopped off of xwin/owin for the if conditionals below to work

    if (state.xwin.length == 4) {
      state.xwin = state.xwin.substr(1,3)
      console.log(state.xwin)
    }

    if (state.owin.length == 4) {
      state.owin = state.owin.substr(1,3)
      console.log(state.owin)
    }

    if (state.wincondition.indexOf(state.xwin) !== -1){
      state.displayMessage = "Player 1 Win!"

    } // not built to handle 1753 or a number before a win condition

    if (state.wincondition.indexOf(state.owin) !== -1){
      state.displayMessage = "Player 2 Win!"
    }

    if (state.counter == 8 && state.displayMessage !== "Player 2 Win!" && state.displayMessage !== "Player 1 Win!"){
      state.displayMessage = "Game Over -- Draw."
    }
    console.log(state)
    this.setState(state)

    // if(this.state.key.includes(key) == false) {
    //   this.setState({counter: this.state.counter + 1})
    //
    //   if (this.state.counter === 0 || this.state.counter % 2 === 0) {
    //     this.setState({[key]: "X", xwin: this.state.xwin + [key.substr(3,3)]})
    //   } else {
    //     this.setState({[key]: "O", owin: this.state.owin + [key.substr(3,3)]})
    //   }
    // }
    //
    // if (this.state.wincondition.indexOf(this.state.xwin) !== -1) {
    //   this.setState({displayMessage: "Player 1 Winner!"})
    // }
    //
    // if (this.state.wincondition.indexOf(this.state.owin) !== -1) {
    //   this.setState({displayMessage: "Player 2 Winner!"})
    // }
    //
    // if(this.state.counter === 8) {
    //   this.setState({displayMessage: "GameOver...Draw!"})
    // }
  }

  render() {
    // var divStyle = {
    //   color: 'white',
    //   backgroundImage: 'url(' + imgUrl + ')',
    //   WebkitTransition: 'all', // note the capital 'W' here
    //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    // };


    return (
      <div className="gamePage">
        <div className="bigBox">
          <div id="box1" onClick={this.handleClick.bind(this, "box1")}>
            {this.state.box1}
          </div>
          <div id="box2" onClick={this.handleClick.bind(this, "box2")}>
            {this.state.box2}
          </div>
          <div id="box3" onClick={this.handleClick.bind(this, "box3")}>
            {this.state.box3}
          </div>
          <div id="box4" onClick={this.handleClick.bind(this, "box4")}>
            {this.state.box4}
          </div>
          <div id="box5" onClick={this.handleClick.bind(this, "box5")}>
            {this.state.box5}
          </div>
          <div id="box6" onClick={this.handleClick.bind(this, "box6")}>
            {this.state.box6}
          </div>
          <div id="box7" onClick={this.handleClick.bind(this, "box7")}>
            {this.state.box7}
          </div>
          <div id="box8" onClick={this.handleClick.bind(this, "box8")}>
            {this.state.box8}
          </div>
          <div id="box9" onClick={this.handleClick.bind(this, "box9")}>
            {this.state.box9}
          </div>
      </div>
        <div className="displayContents">
          <h2 id="textDisplay" >{this.state.displayMessage}</h2>
          <button id="reset" onClick={this.resetGame.bind(this)}>
            Reset Game
          </button>
        </div>
    </div>
    );
  }
}

export default App;

//this.state.xwin === /[1,2,3]/ || this.state.xwin === "456" || this.state.xwin === "789" || this.state.xwin === "147" || this.state.xwin === "258" || this.state.xwin === "369" || this.state.xwin === "159" || this.state.xwin === "357"**old xwin condition that is incomplete

//this.state.owin === /[1,2,3]/ || this.state.owin === "456" || this.state.owin === "789" || this.state.owin === "147" || this.state.owin === "258" || this.state.owin === "369" || this.state.owin === "159" || this.state.xwin === "357" **old owin condition that is incomplete


// var arr = [1, 2, 3, 4, 6, 3, 7, 3, 6, 8]
//
// arr.map(function(element, index){
//   return(
//     <Cell onClick={this.handleClick.bind(this, index) />
//   )
// })
