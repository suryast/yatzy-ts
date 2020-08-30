export default class Yatzy {

  private readonly dice: number[];

  constructor(d1: number, d2: number, d3: number, d4: number, d5: number) {
    this.dice = [d1, d2, d3, d4, d5];
  }

  chance(): number {
    return this.dice.reduce((prev, next) => prev + next);
  }

  ones(): number {
    return this.singles(1);
  }

  twos(): number {
    return this.singles(2);
  }

  threes(): number {
    return this.singles(3);
  }


  fours(): number {
    return this.singles(4);
  }

  fives(): number {
    return this.singles(5);
  }

  sixes(): number {
    return this.singles(6);
  }

  yatzy(): number {
    return (new Set(this.dice).size === 1) ? 50 : 0;
  }

  onePair(): number {
    const keysArr = this.createDieKeysArr();
    const max = Math.max.apply(Math, keysArr);

    return this.hasPairs() ? max * 2 : 0;
  }

  twoPairs(): number {
    const keysArr = this.createDieKeysArr();
    const sumOfTwoPairs = keysArr.map(item => item * 2)
        .reduce((firstPair, secondPair) => firstPair + secondPair)

    return this.hasPairs() ? sumOfTwoPairs : 0;
  }

  threeOfAKind(): number {
    let result = this.createDiceObject();

    const threeOfAKindDie = this.getDieIndex(result, 3);

    return this.hasPairs() ? threeOfAKindDie * 3 : 0;
  }

  fourOfAKind(): number {
    let result = this.createDiceObject();

    const fourOfAKindDie = this.getDieIndex(result, 4);

    return this.hasPairs() ? fourOfAKindDie * 4 : 0;
  }


  private hasPairs() {
    return this.dice.length > new Set(this.dice).size;
  }

  private getDieIndex(result: {}, dieIndex: number) {
    // @ts-ignore
    const fourOfAKindDie: number = Object.keys(result).find((key) =>
        // @ts-ignore
        (result[key] >= dieIndex) ? +key! : 0
    );
    return fourOfAKindDie;
  }

  smallStraight(): number {
    const sizeOfDiceSet = new Set(this.dice).size;
    const min = Math.min.apply(Math, this.dice);

    return (sizeOfDiceSet === 5 && min === 1)? 15:0;
  }

  largeStraight(): number {
    const sizeOfDiceSet = new Set(this.dice).size;
    const max = Math.max.apply(Math, this.dice);

    return (sizeOfDiceSet === 5 && max === 6)? 20:0;
  }

  fullHouse(): number {
    const sum = this.threeOfAKind() + this.onePair()
    return this.hasPairs() ? sum : 0
  }

  private singles(input: number): number {
    return this.dice.filter(die => die === input)
        .reduce((prev, next) => prev + next, 0);
  }

  private createDiceObject() {
    let diceObject = {};

    this.dice.forEach(function (die) { // @ts-ignore
      diceObject[die] = (diceObject[die] || 0) + 1;
    });

    return diceObject;
  }

  private createDieKeysArr() {
    const result = this.createDiceObject()

    // @ts-ignore
    let keysArr: number[] = []
    Object.keys(result).find((key) => {
      // @ts-ignore
      (result[key] === 2 || result[key] === 3) ? keysArr.push(+key!) : keysArr.push(null);
    });

    return keysArr;
  }
}
