import React from "react";
import DBZSquad from "./images/dbzSquad.jpg";
import "./App.css";
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characterBank: [{
        goku:{
          name:"goku",
          pic:"",
          hint:""
        }
      },{
        vegeta:{
          name:"vegeta",
          pic:"",
          hint:""
        }
      },{
        gohan:{
          name:"gohan",
          pic:"",
          hint:""
        }
      },{
        goten:{
          name:"goten",
          pic:"",
          hint:""
        }
      },{
        trunks:{
          name:"trunks",
          pic:"",
          hint:""
        }
      }],
      currentWord: "",
      wins: 0,
      hint: "",
      guessRem: 10,
      lettersGuessed: []
    };
  }

  render() {
    return (
      <div id="background">
        <Grid
          container 
          spacing={5}
          direction="row"
          justify="space-around"
          alignItems="flex-start"
        >
          <Grid item xs={12}>
            <header className="title">Hangman: DBZ Style!</header>
          </Grid>
          <br/>
          <Grid item sm={6}>
            <img id="scrapedImg" src={DBZSquad} alt="DBZ Squad" />
          </Grid>
          <Grid item sm={6}>
            <div>
              <div className="text">Wins: {this.state.wins} </div>
              <div className="text">Hint: {this.state.hint}</div>
              <div className="text">Current Word: {this.state.currentWord}</div>
              <div className="text">Number Of Guesses Remaining: {this.state.guessRem}</div>
              <div className="text">Letters Already Guessed: {this.state.lettersGuessed}</div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
