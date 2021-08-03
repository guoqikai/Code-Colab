export const addComment = async (subjectId, replyTo, comment) => {
    if (comment === "WTF") {
        throw new Error("No BW!")
    }

    return [
      {
        replydTo: "user43dasd",
        comment: "hello!",
        _id: 1,
        userInfo: { _id: 12, name: "user42" },
      },
      {
        replyTo: "user42",
        comment: "hello!",
        userInfo: { _id: 12, name: "user43" },
        _id: 2,
        date: new Date().toLocaleString(),
      },
      {
        replyTo: replyTo,
        comment: comment,
        userInfo: { _id: 12, name: "user43" },
        _id: 3,
        date: new Date().toLocaleString(),
      },
    ];
}
export const deleteComment = async () => {}
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const loadComments = async (subjectId) => {
    await timeout(1000)

    if (Math.random() > 0.5) throw 0
    return [
      {
        replydTo: "user43dasd",
        comment: "hello!",
        _id: 1,
        userInfo: { _id: 12, name: "user42" },
      },
      {
        replyTo: "user42",
        comment: "hello!",
        userInfo: { _id: 12, name: "user43" },
        _id: 2,
        date: new Date().toLocaleString(),
      },
    ];   
}