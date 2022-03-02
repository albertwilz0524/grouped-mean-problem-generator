function Assessment({ userIsCorrect, correctAnswer }) {
  return (
    <div>
      <p style={{ fontSize: 20 }}>
        {userIsCorrect
          ? "Amazing! You got the correct answer. 😃🥇"
          : `Sorry, the correct answer is ${correctAnswer}. 😥`}
      </p>
      <br />
      <br />
    </div>
  );
}

export default Assessment;
