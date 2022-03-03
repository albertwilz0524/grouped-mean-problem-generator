import Table from "react-bootstrap/Table";

function Solution({ info }) {
  return (
    <div>
      <h3>👩‍🏫 Solution:</h3>

      {/* Step 1 */}
      <p>
        <b>Step 1:</b> Determine the total frequency{" "}
        <b>
          <i>Σf</i>
        </b>
        . Since there are a total of {info.sampleSize} students included in the
        data,{" "}
        <b>
          <i>Σf={info.sampleSize}</i>
        </b>
        . This can also be obtained by adding all of the frequencies of the
        classes.
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
                {" "}
                {row.lowerLimit} - {row.upperLimit}{" "}
              </td>
              <td>{row.frequency}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td style={{ backgroundColor: "lightgreen" }}>
              <b>
                {" "}
                <i>Σf=</i>
                {info.sampleSize}
              </b>
            </td>
          </tr>
        </tbody>
      </Table>

      {/* Step 2 */}
      <p>
        <b>Step 2:</b> Find the Class Mark{" "}
        <b>
          <i>X</i>
        </b>{" "}
        of each class by computing the mean of the Lower and Upper Limits of the
        class.
      </p>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ maxWidth: 500, textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>{info.heading}</th>
            <th>
              Frequency <i>f</i>
            </th>
            <th style={{ backgroundColor: "lightgreen" }}>
              Class Mark{" "}
              <b>
                <i>X</i>
              </b>
            </th>
          </tr>
        </thead>
        <tbody>
          {info.classes.map((row) => (
            <tr key={row.id}>
              <td>
                {" "}
                {row.lowerLimit} - {row.upperLimit}{" "}
              </td>
              <td>{row.frequency}</td>
              <td style={{ backgroundColor: "lightgreen" }}>{row.classMark}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <b>
                {" "}
                <i>Σf=</i>
                {info.sampleSize}
              </b>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br />

      {/* Step 3 */}
      <p>
        <b>Step 3:</b> For each class, find{" "}
        <b>
          <i>fX</i>
        </b>{" "}
        by multiplying the Frequency with the Class Mark.
      </p>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ maxWidth: 500, textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>{info.heading}</th>
            <th>
              Frequency <i>f</i>
            </th>
            <th>
              Class Mark{" "}
              <b>
                <i>X</i>
              </b>
            </th>
            <th style={{ backgroundColor: "lightgreen" }}>
              <b>
                <i>fX</i>
              </b>
            </th>
          </tr>
        </thead>
        <tbody>
          {info.classes.map((row) => (
            <tr key={row.id}>
              <td>
                {" "}
                {row.lowerLimit} - {row.upperLimit}{" "}
              </td>
              <td>{row.frequency}</td>
              <td>{row.classMark}</td>
              <td style={{ backgroundColor: "lightgreen" }}>{row.fx}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <b>
                {" "}
                <i>Σf=</i>
                {info.sampleSize}
              </b>
            </td>
            <td></td>
            <td></td>
          </tr>

          {/* <tr>
            <td></td>
            <td></td>
            <td style={{ textAlign: "right" }}>
              <i>
                <b>ΣfX=</b>
              </i>
            </td>
            <td>
              <b>{info.sumOfFx}</b>
            </td>
          </tr> */}
        </tbody>
      </Table>
      <br />

      {/* Step 4 */}
      <p>
        <b>Step 4:</b> Compute for{" "}
        <i>
          <b>ΣfX</b>
        </i>
        .
      </p>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ maxWidth: 500, textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>{info.heading}</th>
            <th>
              Frequency <i>f</i>
            </th>
            <th>
              Class Mark{" "}
              <b>
                <i>X</i>
              </b>
            </th>
            <th>
              <b>
                <i>fX</i>
              </b>
            </th>
          </tr>
        </thead>
        <tbody>
          {info.classes.map((row) => (
            <tr key={row.id}>
              <td>
                {" "}
                {row.lowerLimit} - {row.upperLimit}{" "}
              </td>
              <td>{row.frequency}</td>
              <td>{row.classMark}</td>
              <td>{row.fx}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <b>
                {" "}
                <i>Σf=</i>
                {info.sampleSize}
              </b>
            </td>
            <td></td>
            <td style={{ backgroundColor: "lightgreen" }}>
              <b>
                <i>ΣfX=</i>
                {info.sumOfFx}
              </b>
            </td>
          </tr>
        </tbody>
      </Table>
      <br />

      {/* Step 5 */}
      <p>
        <b>Step 5: </b>Compute for the mean of the grouped data by dividing{" "}
        <b>
          <i>ΣfX</i>
        </b>{" "}
        by{" "}
        <b>
          <i>Σf</i>
        </b>
        , and rounding off the result up to 2 decimal places.
      </p>
      <br />
      <p>
        Mean of Grouped Data = <i>ΣfX</i> / <i>Σf</i> <br />= {info.sumOfFx} /{" "}
        {info.sampleSize} <br />= {info.answer}{" "}
        <b>
          {" "}
          <br />≈ {info.roundedAnswer}
        </b>
      </p>
    </div>
  );
}

export default Solution;
