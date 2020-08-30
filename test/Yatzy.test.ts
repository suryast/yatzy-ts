import assert from 'assert';
import Yatzy from '../src/Yatzy';

describe('Chance', () => {
  it('scores sum of all dice', () => {
    assert.strictEqual(15, new Yatzy(2, 3, 4, 5, 1).chance());
    assert.strictEqual(16, new Yatzy(3, 3, 4, 5, 1).chance());
  });
});

describe('Ones', () => {
  it('score the sum of 1s', () => {
    assert.strictEqual(1, new Yatzy(1, 2, 3, 4, 5).ones());
    assert.strictEqual(2, new Yatzy(1, 2, 1, 4, 5).ones());
    assert.strictEqual(0, new Yatzy(6, 2, 2, 4, 5).ones());
    assert.strictEqual(4, new Yatzy(1, 2, 1, 1, 1).ones());
  });
});

describe('Twos', () => {
  it('score the sum of 2s', () => {
    assert.strictEqual(4, new Yatzy(1, 2, 3, 2, 6).twos());
    assert.strictEqual(10, new Yatzy(2, 2, 2, 2, 2).twos());
  });
});

describe('Threes', () => {
  it('score the sum of 3s', () => {
    assert.strictEqual(6, new Yatzy(1, 2, 3, 2, 3).threes());
    assert.strictEqual(12, new Yatzy(2, 3, 3, 3, 3).threes());
  });
});

describe('Fours', () => {
  it('score the sum of 4s', () => {
    assert.strictEqual(12, new Yatzy(4, 4, 4, 5, 5).fours());
    assert.strictEqual(8, new Yatzy(4, 4, 5, 5, 5).fours());
    assert.strictEqual(4, new Yatzy(4, 5, 5, 5, 5).fours());
  });
});

describe('Fives', () => {
  it('score the sum of fives', () => {
    assert.strictEqual(10, new Yatzy(4, 4, 4, 5, 5).fives());
    assert.strictEqual(15, new Yatzy(4, 4, 5, 5, 5).fives());
    assert.strictEqual(20, new Yatzy(4, 5, 5, 5, 5).fives());
  });
});

describe('Sixes', () => {
  it('score the sum of sixes', () => {
    assert.strictEqual(0, new Yatzy(4, 4, 4, 5, 5).sixes());
    assert.strictEqual(6, new Yatzy(4, 4, 6, 5, 5).sixes());
    assert.strictEqual(18, new Yatzy(6, 5, 6, 6, 5).sixes());
  });
});

describe('Yatzy', () => {
  it('scores 50', () => {
    assert.strictEqual(50, new Yatzy(4, 4, 4, 4, 4).yatzy());
    assert.strictEqual(50, new Yatzy(6, 6, 6, 6, 6).yatzy());
    assert.strictEqual(0, new Yatzy(6, 6, 6, 6, 3).yatzy());
  });
});

describe('Score a pair', () => {
  it('scores the sum of the highest pair', () => {
    assert.strictEqual(6, new Yatzy(3, 4, 3, 5, 6).onePair());
    assert.strictEqual(10, new Yatzy(5, 3, 3, 3, 5).onePair());
    assert.strictEqual(12, new Yatzy(5, 3, 6, 6, 5).onePair());
  });
});

describe('Two pair', () => {
  it('scores the sum of the two pairs', () => {
    assert.strictEqual(16, new Yatzy(3, 3, 5, 4, 5).twoPairs());
    assert.strictEqual(16, new Yatzy(3, 3, 5, 5, 5).twoPairs());
  });
});

describe('Three of a kind', () => {
  it('scores the sum of the three of the kind', () => {
    assert.strictEqual(9, new Yatzy(3, 3, 3, 4, 5).threeOfAKind());
    assert.strictEqual(15, new Yatzy(5, 3, 5, 4, 5).threeOfAKind());
    assert.strictEqual(9, new Yatzy(3, 3, 3, 3, 5).threeOfAKind());
  });
});

describe('Four of a kind', () => {
  it('scores the sum of the four of the kind', () => {
    assert.strictEqual(12, new Yatzy(3, 3, 3, 3, 5).fourOfAKind());
    assert.strictEqual(20, new Yatzy(5, 5, 5, 4, 5).fourOfAKind());
    assert.strictEqual(12, new Yatzy(3, 3, 3, 3, 3).fourOfAKind());
  });
});

describe('Small straight', () => {
  it('scores 15', () => {
    assert.strictEqual(15, Yatzy.smallStraight(1, 2, 3, 4, 5));
    assert.strictEqual(15, Yatzy.smallStraight(2, 3, 4, 5, 1));
    assert.strictEqual(0, Yatzy.smallStraight(1, 2, 2, 4, 5));
  });
});

describe('Large straight', () => {
  it('scores 20', () => {
    assert.strictEqual(20, Yatzy.largeStraight(6, 2, 3, 4, 5));
    assert.strictEqual(20, Yatzy.largeStraight(2, 3, 4, 5, 6));
    assert.strictEqual(0, Yatzy.largeStraight(1, 2, 2, 4, 5));
  });
});

describe('Full house', () => {
  it('scores the sum of the full house', () => {
    assert.strictEqual(18, Yatzy.fullHouse(6, 2, 2, 2, 6));
    assert.strictEqual(0, Yatzy.fullHouse(2, 3, 4, 5, 6));
  });
});
