import { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { generateMeanProblem, randBetweenV1 } from "./utils";
import Assessment from "./components/Assessment";
import Solution from "./components/Solution";

function App() {
  const [info, setInfo] = useState(generateMeanProblem());
  const [userAnswer, setUserAnswer] = useState("");
  const [gradeLevel, setGradeLevel] = useState(randBetweenV1(7, 10));
  const [assessmentMode, setAssessmentMode] = useState(false);
  const [userIsCorrect, setUserIsCorrect] = useState(false);
  return (
    <Container className="p-3">
      <h1>Mean of Grouped Data Practice Problem</h1>
      <hr />
      <p>Consider the table below:</p>

      <p>
        <b>Table 1.</b>
        {info.title} of {info.sampleSize} Grade {gradeLevel} students in{" "}
        {info.schoolName}.
      </p>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ maxWidth: 300, textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>{info.heading}</th>
            <th>
              Frequency <i>f</i>
            </th>
          </tr>
        </thead>
        <tbody>
          {info.classes.map((row) => (
            <tr key={row.id}>
              <td>
                {row.lowerLimit} - {row.upperLimit}
              </td>
              <td>{row.frequency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p>
        Find the mean of the grouped data. Round off your answer up to 2 decimal
        places.
      </p>
      <input
        type="text"
        placeholder="Write your answer here ✍"
        value={userAnswer}
        onChange={(e) => !assessmentMode && setUserAnswer(e.target.value)}
        style={{
          minWidth: 200,
          paddingBottom: 8,
          paddingTop: 3,
          margin: 3,
        }}
      />
      <Button
        variant="success"
        onClick={() => {
          setAssessmentMode(true);
          setUserIsCorrect(parseFloat(userAnswer) === info.roundedAnswer);
        }}
        style={{
          height: 40,
          borderBlockColor: "green",
        }}
      >
        Check
      </Button>
      {assessmentMode && (
        <Assessment
          userIsCorrect={userIsCorrect}
          correctAnswer={info.roundedAnswer}
        />
      )}
      {assessmentMode && !userIsCorrect && <Solution info={info} />}
    </Container>
  );
}

export default App;
