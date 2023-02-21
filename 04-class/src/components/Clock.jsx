import { Component } from 'react';

class Clock extends Component {
  day = 'Jeudi';
  state = {
    day: 'Mardi',
    date: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  updateDay = () => {
    this.day = 'Vendredi';
    console.log(this.day);

    this.setState({
      day: 'Lundi',
    });
  };

  render() {
    return (
      <div>
        <h1 className="m-8 text-3xl font-bold text-center">
          Bonjour tout le monde, on est le {this.state.day} et pas le {this.day}
        </h1>
        <h2 className="text-center">
          Il est {this.state.date.toLocaleTimeString()} sur React Radio DAB+
        </h2>
        <button
          type="button"
          className="btn primary block mx-auto mt-4"
          onClick={this.updateDay}>
          Mettre à jour
        </button>
      </div>
    );
  }
}

export default Clock;
