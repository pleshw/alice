
class Cell<ContentType> extends Byte {
  private content: ContentType | null = null;

  constructor(content?: ContentType | null, state?: CellState) {
    super(state || CellState.FREE);
    this.content = content || null;
  }

  getContent(): ContentType | null {
    return this.content;
  }

  copy(): Cell<ContentType> {
    return new Cell<ContentType>(this.content, this.state());
  }

  /**
  * Changes a cell state to free
  * 
  * A free cell is not blocked and occupied
  */
  free(): void {
    this.turnOff(CellState.OCCUPIED);
    this.turnOn(CellState.FREE);
  }


  /**
  * Changes a cell state to occupied
  *
  * An occupied cell is not free but can be blocked
  * @example
  *  Occupied and not blocked cells have non static element, such as a cell with a player or
  * a monster
  * 
  *  An occupied and blocked can be a tree or a rock. 
  */
  occupy(): void {
    this.turnOn(CellState.OCCUPIED);
    this.turnOff(CellState.FREE);
  }

  /**
  * Changes a cell state to blocked
  *
  * An blocked cell can be free or occupied
  * @example
  *  Blocked cells represent cells that cannot change it content while it state persist.
  */
  block(): void {
    this.turnOn(CellState.BLOCKED);
  }
}

enum CellState { INVALID = -1, FREE = 1, SEEN = 2, OCCUPIED = 4, BLOCKED = 8, ACTIVE = 16, INACTIVE = 32 };

enum cState { INVALID = -1, FREE = 1, SEEN = 2, OCCUPIED = 4, BLOCKED = 8, ACTIVE = 16, INACTIVE = 32 };