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
    this.color = this.setColor(this.colorId);
  }

  setColor(colorId) {
    let color = null;
    switch (colorId) {
      case 1:
        color = colorCode.bigStone;
        break;
      case 2:
        color = colorCode.siverTree;
        break;
      case 3:
        color = colorCode.redDaMask;
        break;
      default:
        color = colorCode.ronChi;
    }
    return color;
  }
}

export default Game;
