

export async function fecthTopQuestions() {
    return Promise.resolve([
      {
        questionTitle: "Integer to Roman",
        questionDesc:
          "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
        numAnswers: 1,
        numTestCases: 1,
        questionTags: ["Easy", "Leetcode"],
      },
      {
        questionTitle: "Teapot",
        questionDesc: "Qikai Guo is a teapot.",
        numAnswers: 3,
        numTestCases: 5,
        questionTags: ["Teapot", "Truth"],
      },
      {
        questionTitle: "3Sum",
        questionDesc:
          "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        numAnswers: 7,
        numTestCases: 1,
        questionTags: ["3Sum"],
      },
    ]);
}

export async function fecthTrendingQuestions() {

}

export async function searchQuestions(page, sortBy, tags, searchString) {
    const questions = [
      {
        questionTitle: "Two Sum",
        questionDesc:
          "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
        numAnswers: "4",
        numTestCases: "5",
        questionTags: ["Algorithm", "Easy"],
        opInfo: "user1",
        datePost: "2021-07-02",
        _id: "1"
      },
      {
        questionTitle: "Add Two Numbers",
        questionDesc:
          "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
        numAnswers: "3",
        numTestCases: "2",
        questionTags: ["Algorithm", "Medium"],
        opInfo: "user2",
        datePost: "2021-07-01",
        _id: "2"
      },
      {
        questionTitle: "Longest Substring Without Repeating Characters",
        questionDesc:
          "Given a string s, find the length of the longest substring without repeating characters.",
        numAnswers: "8",
        numTestCases: "4",
        questionTags: ["Algorithm", "Medium"],
        opInfo: "user1",
        datePost: "2021-07-02",
        _id: "3"
      },
      {
        questionTitle: "Longest Palindromic Substring",
        questionDesc:
          "Given a string s, return the longest palindromic substring in s.",
        numAnswers: "0",
        numTestCases: "1",
        questionTags: ["Algorithm", "Hard"],
        opInfo: "user3",
        datePost: "2021-06-02",
        _id: "4"
      },
    ];
    return {
      questions: questions.filter(
        (q) =>
          q.questionTitle.includes(searchString) &&
          (!tags.length ||
            q.questionTags.reduce(
              (acc, cur) => tags.includes(cur) || acc,
              false
            ))
      ),
      maxPage: 12,
      page: page
    };
}

export async function voteQuestion(isUpVote) {

}

export async function getQuestion(questionId) {
  
}

export async function postQuestion() {

}

export async function patchQuestion() {

}

export async function deleteQuestion() {

}

