

import React, {Component} from 'react';
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.getColor = this.getColor.bind(this);
    this.getEmoji = this.getEmoji.bind(this);
    this.copyJokeToClipboard = this.copyJokeToClipboard.bind(this);
  }

  getColor() {
    if(this.props.votes >= 15) {
      return "#4CAF50";
    }  else if (this.props.votes >= 12) {
      return "#8BC34A";
    }
    else if ( this.props.votes >= 9) {
      return "#CDDC39";
    }
    else if (this.props.votes >= 6) {
      return "#FFEB3B";
    }
    else if(this.props.votes >= 3) {
      return "#FFC107";
    }
    else if(this.props.votes >= 0 ) {
      return "#ff9800";
    }
    else {
      return "#F4436";
    }


  }


  getEmoji() {
    if (this.props.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    }
   else if (this.props.votes >= 12) {
      return "em em-laughing";
    }
   else if (this.props.votes >= 9) {
      return "em em-smiley";
    }
    else if (this.props.votes >= 6) {
      return "em em-slightly_smiling_face"
    }
    else if (this.props.votes >= 3) {
      return "em em-neutral_face"
    }
    else if (this.props.votes >= 0) {
      return "em em-confused"
    }
    else {
     return "em em-angry";
    }

  }
  copyJokeToClipboard() {
    navigator.clipboard.writeText(this.props.text)
  }

  render() {
    return (
      <div className="Joke">
       <div className="Joke-buttons">
       <i className="fas fa-arrow-up" onClick={this.props.upvote} />
       <span className="Joke-votes" styles={{ borderColor: this.getColor()}}>
        {this.props.votes}
       </span>
       <i className="fas fa-arrow-down" onClick={this.props.downvote} />

         </div>
         <div className="Joke-text" >{this.props.text}</div>
         <div className="Joke-smiley">
         <i className={this.getEmoji()} onClick={this.copyJokeToClipboard} />
           </div>

        </div>
    );
  }
}
export default Joke;
