import React, { Component } from "react";
import { getGames } from "./api/api";

class App extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.loadGames();
  }

  loadGames = async () => {
    try {
      const games = await getGames();
      this.setState({ games });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { games } = this.state;
    return (
      <div className="App">
        <pre>{JSON.stringify(games, null, 4)}</pre>
      </div>
    );
  }
}

export default App;
