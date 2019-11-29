class Byte {
  private value: number;

  constructor(value: number = 1) {
    this.value = value;
  }

  state(): number {
    return this.value;
  }

  isOn(bit: number): boolean {
    return (this.value & bit) === bit;
  }

  isOff(bit: number): boolean {
    return !this.isOn(bit);
  }

  turnOn(bit: number): void {
    if (!this.isOn(bit))
      this.value += bit;
  }

  turnOff(bit: number): void {
    if (this.isOn(bit))
      this.value -= bit;
  }

  valid(): boolean {
    return this.value !== ByteState.INVALID;
  }

  static NullByte(): Byte {
    return new Byte(ByteState.INVALID);
  }

  setState(state: ByteState): void {
    this.value = state;
  }
}

enum ByteState { INVALID = -1, ACTIVE = 1, INACTIVE = 2 };

export { Byte, ByteState };