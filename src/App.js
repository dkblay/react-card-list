import React, { Component } from "react";
import { getGames } from "./api/api";
import Pagination from "./components/Pagination";

class App extends Component {
  size = 12;

  state = {
    games: []
  };

  componentDidMount() {
    this.loadGames();
  }

  loadGames = async (page = 1) => {
    try {
      const { games, total } = await getGames({
        size: this.size,
        page
      });
      this.setState({ games, total });
    } catch (e) {
      console.error(e);
    }
  };

  renderCards() {
    const { games } = this.state;
    if (!games.length) {
      return <div>No Items Found...</div>;
    }
    return games.map(({ id, color }) => (
      <div
        key={id}
        className="games__item"
        style={{ backgroundColor: color }}
      />
    ));
  }

  render() {
    const { total } = this.state;
    return (
      <div className="container">
        <div className="games">{this.renderCards()}</div>
        {!!total && (
          <Pagination onClick={this.loadGames} total={total} size={this.size} />
        )}
      </div>
    );
  }
}

export default App;
