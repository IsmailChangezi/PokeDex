/* eslint-disable linebreak-style */
const postComment = async (id, name, commentInput) => {
  if (name.length > 0 && commentInput.length > 0) {
    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Zeunl115PZ6AB4fGYG9C/comments/', {
      method: 'POST',
      body: JSON.stringify(
        {
          item_id: id,
          username: name,
          comment: commentInput,
        },
      ),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

export default postComment;