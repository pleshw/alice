"use strict";
class Cell extends Byte {
    constructor(content, state) {
        super(state || CellState.FREE);
        this.content = null;
        this.content = content || null;
    }
    getContent() {
        return this.content;
    }
    copy() {
        return new Cell(this.content, this.state());
    }
    /**
    * Changes a cell state to free
    *
    * A free cell is not blocked and occupied
    */
    free() {
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
    occupy() {
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
    block() {
        this.turnOn(CellState.BLOCKED);
    }
}
var CellState;
(function (CellState) {
    CellState[CellState["INVALID"] = -1] = "INVALID";
    CellState[CellState["FREE"] = 1] = "FREE";
    CellState[CellState["SEEN"] = 2] = "SEEN";
    CellState[CellState["OCCUPIED"] = 4] = "OCCUPIED";
    CellState[CellState["BLOCKED"] = 8] = "BLOCKED";
    CellState[CellState["ACTIVE"] = 16] = "ACTIVE";
    CellState[CellState["INACTIVE"] = 32] = "INACTIVE";
})(CellState || (CellState = {}));
;
var cState;
(function (cState) {
    cState[cState["INVALID"] = -1] = "INVALID";
    cState[cState["FREE"] = 1] = "FREE";
    cState[cState["SEEN"] = 2] = "SEEN";
    cState[cState["OCCUPIED"] = 4] = "OCCUPIED";
    cState[cState["BLOCKED"] = 8] = "BLOCKED";
    cState[cState["ACTIVE"] = 16] = "ACTIVE";
    cState[cState["INACTIVE"] = 32] = "INACTIVE";
})(cState || (cState = {}));
;
