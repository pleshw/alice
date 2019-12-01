"use strict";
class Byte {
    constructor(value = 1) {
        this.value = value;
    }
    state() {
        return this.value;
    }
    isOn(bit) {
        return (this.value & bit) === bit;
    }
    isOff(bit) {
        return !this.isOn(bit);
    }
    turnOn(bit) {
        if (!this.isOn(bit))
            this.value += bit;
    }
    turnOff(bit) {
        if (this.isOn(bit))
            this.value -= bit;
    }
    valid() {
        return this.value !== ByteState.INVALID;
    }
    static NullByte() {
        return new Byte(ByteState.INVALID);
    }
    setState(state) {
        this.value = state;
    }
}
var ByteState;
(function (ByteState) {
    ByteState[ByteState["INVALID"] = -1] = "INVALID";
    ByteState[ByteState["ACTIVE"] = 1] = "ACTIVE";
    ByteState[ByteState["INACTIVE"] = 2] = "INACTIVE";
})(ByteState || (ByteState = {}));
;
