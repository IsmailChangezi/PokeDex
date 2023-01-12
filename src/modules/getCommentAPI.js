/* eslint-disable linebreak-style */
const getComment = async (id) => {
  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Zeunl115PZ6AB4fGYG9C/comments?item_id=${id}`);
  if (comment.status === 200) {
    const commentJSON = await comment.json();
    return commentJSON;
  }
  return [];
};

export default getComment;