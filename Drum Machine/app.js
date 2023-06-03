// App.js
import React from "https://cdn.skypack.dev/react@17.0.1";
import DrumPad from './DrumPad';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handlePadClick = this.handlePadClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    const drumPad = document.getElementById(event.key.toUpperCase());
    if (drumPad) {
      drumPad.play();
      this.setState({ display: drumPad.getAttribute('data-description') });
    }
  }

  handlePadClick(event) {
    const drumPad = event.target.children[0];
    drumPad.play();
    this.setState({ display: drumPad.getAttribute('data-description') });
  }

  render() {
    return (
      <div id="drum-machine" className="container">
        <div id="display" className="display">
          {this.state.display}
        </div>
        <div className="drum-pads">
          <DrumPad id="Heater-1" letter="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" description="Heater 1" onClick={this.handlePadClick} />
          <DrumPad id="Heater-2" letter="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" description="Heater 2" onClick={this.handlePadClick} />
          <DrumPad id="Heater-3" letter="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" description="Heater 3" onClick={this.handlePadClick} />
          <DrumPad id="Heater-4" letter="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" description="Heater 4" onClick={this.handlePadClick} />
          <DrumPad id="Clap" letter="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" description="Clap" onClick={this.handlePadClick} />
          <DrumPad id="Open-HH" letter="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" description="Open-HH" onClick={this.handlePadClick} />
          <DrumPad id="Kick-n'-Hat" letter="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" description="Kick-n'-Hat" onClick={this.handlePadClick} />
          <DrumPad id="Kick" letter="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" description="Kick" onClick={this.handlePadClick} />
          <DrumPad id="Closed-HH" letter="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" description="Closed-HH" onClick={this.handlePadClick} />
        </div>
      </div>
    );
  }
}

export default App;
