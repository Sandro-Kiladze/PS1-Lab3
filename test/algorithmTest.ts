import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";

/*
 * Testing strategy for toBucketSets():
 *
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
import { toBucketSets } from 'C:/Users/Sandro/Desktop/aa/ITSEPC-Problem-sets/PS1/src/algorithm.ts';
import { Flashcard } from './path-to-your-flashcard-type';
import { assert, describe, it } from 'vitest'; // or any other testing framework

describe("toBucketSets()", () => {
  it("should handle an empty Map", () => {
    const buckets = new Map<number, Set<Flashcard>>();
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result, []);
  });

  it("should handle a single bucket with flashcards", () => {
    const flashcard1 = { id: 1, question: "Q1", answer: "A1" };
    const flashcard2 = { id: 2, question: "Q2", answer: "A2" };
    const buckets = new Map<number, Set<Flashcard>>([
      [0, new Set([flashcard1, flashcard2])]
    ]);
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result, [new Set([flashcard1, flashcard2])]);
  });

  it("should handle multiple buckets with flashcards", () => {
    const flashcard1 = { id: 1, question: "Q1", answer: "A1" };
    const flashcard2 = { id: 2, question: "Q2", answer: "A2" };
    const flashcard3 = { id: 3, question: "Q3", answer: "A3" };
    const buckets = new Map<number, Set<Flashcard>>([
      [0, new Set([flashcard1])],
      [1, new Set([flashcard2, flashcard3])]
    ]);
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result, [
      new Set([flashcard1]),
      new Set([flashcard2, flashcard3])
    ]);
  });

  it("should handle buckets with no flashcards", () => {
    const flashcard1 = { id: 1, question: "Q1", answer: "A1" };
    const buckets = new Map<number, Set<Flashcard>>([
      [0, new Set([flashcard1])],
      [1, new Set()]
    ]);
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result, [
      new Set([flashcard1]),
      new Set()
    ]);
  });

  it("should handle non-sequential bucket numbers", () => {
    const flashcard1 = { id: 1, question: "Q1", answer: "A1" };
    const flashcard2 = { id: 2, question: "Q2", answer: "A2" };
    const buckets = new Map<number, Set<Flashcard>>([
      [1, new Set([flashcard1])],
      [3, new Set([flashcard2])]
    ]);
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result, [
      new Set(),
      new Set([flashcard1]),
      new Set(),
      new Set([flashcard2])
    ]);
  });

  it("should handle large bucket numbers", () => {
    const flashcard1 = { id: 1, question: "Q1", answer: "A1" };
    const buckets = new Map<number, Set<Flashcard>>([
      [1000, new Set([flashcard1])]
    ]);
    const result = toBucketSets(buckets);
    assert.deepStrictEqual(result.length, 1001);
    assert.deepStrictEqual(result[1000], new Set([flashcard1]));
  });
});
/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});
