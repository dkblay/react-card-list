import { colorCode } from "./constants";

class Game {
  constructor({
    id,
    name,
    slug,
    mana_cost,
    rarity_id,
    color_id,
    type_id,
    health,
    attack
  }) {
    this.id = id;
    this.name = name;
    this.health = health;
    this.manaCost = mana_cost;
    this.rarityId = rarity_id;
    this.colorId = color_id;
    this.type = type_id;
    this.slug = slug;
    this.attack = attack;
    this.setColor();
  }

  setColor() {
    switch (this.colorId) {
      case 1:
        this.color = colorCode.black;
        break;
      case 2:
        this.color = colorCode.gray;
        break;
      case 3:
        this.color = colorCode.blue;
        break;
      default:
        this.color = colorCode.purple;
    }
  }
}

export default Game;
