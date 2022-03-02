import Table from "react-bootstrap/Table";

function Solution({ info }) {
  return (
    <div>
      <h3>👩‍🏫 Solution:</h3>

      {/* Step 1 */}
      <p>
        <b>Step 4️⃣:</b> Determine the total frequency{" "}
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
            <td style={{ backgroundColor: "pink" }}>
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
        <b>Step 1️⃣:</b> Find the Class Mark{" "}
        <b>
          <i>X</i>
        </b>{" "}
        of each class. This can be done by finding the mean of the Lower and
        Upper Limits for a particular class.
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
            <th style={{ backgroundColor: "pink" }}>
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
              <td style={{ backgroundColor: "pink" }}>{row.classMark}</td>
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
        <b>Step 2️⃣:</b> For each class, find{" "}
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
            <th style={{ backgroundColor: "pink" }}>
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
              <td style={{ backgroundColor: "pink" }}>{row.fx}</td>
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
        <b>Step 3️⃣:</b> Compute for{" "}
        <i>
          <b>ΣfX</b>
        </i>
        .
      </p>
      <p>
        <i>(Note: The Σ symbol can be read as "summation of ".)</i>
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
            <td style={{ textAlign: "right", backgroundColor: "pink" }}>
              <i>
                <b>ΣfX=</b>
              </i>
            </td>
            <td style={{ backgroundColor: "pink" }}>
              <b>{info.sumOfFx}</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  );
}

export default Solution;
