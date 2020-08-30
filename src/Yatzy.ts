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

    return (this.dice.length > new Set(this.dice).size) ? max * 2 : 0;
  }

  twoPairs(): number {
    const keysArr = this.createDieKeysArr();
    const sumOfTwoPairs = keysArr.map(item => item * 2)
        .reduce((firstPair, secondPair) => firstPair + secondPair)

    return (this.dice.length > new Set(this.dice).size) ? sumOfTwoPairs : 0;
  }

  threeOfAKind(): number {
    let result = this.createDiceObject();

    const threeOfAKindDie = this.moreThanTwoPairs(result, 3);

    return (this.dice.length > new Set(this.dice).size) ? threeOfAKindDie * 3 : 0;
  }

  fourOfAKind(): number {
    let result = this.createDiceObject();

    const fourOfAKindDie = this.moreThanTwoPairs(result, 4);

    return (this.dice.length > new Set(this.dice).size) ? fourOfAKindDie * 4 : 0;
  }


  private moreThanTwoPairs(result: {}, dieIndex: number) {
    // @ts-ignore
    const fourOfAKindDie: number = Object.keys(result).find((key) =>
        // @ts-ignore
        (result[key] >= dieIndex) ? +key! : 0
    );
    return fourOfAKindDie;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[0] == 1 && tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1) return 15;
    return 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) return 20;
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    var tallies;
    var _2 = false;
    var i;
    var _2_at = 0;
    var _3 = false;
    var _3_at = 0;

    tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 2) {
        _2 = true;
        _2_at = i + 1;
      }

    for (i = 0; i != 6; i += 1)
      if (tallies[i] == 3) {
        _3 = true;
        _3_at = i + 1;
      }

    if (_2 && _3) return _2_at * 2 + _3_at * 3;
    else return 0;
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
