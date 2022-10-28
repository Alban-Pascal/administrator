import * as React from "react";

export default function PartnerIdle() {
  return (
    <div>
      <h1>Partner Idle </h1>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
            <th scope="col">Actif</th>
            <th scope="col">Inactif</th>
          </tr>
        </thead>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td></td>
          <td>X</td>
        </tr>
      </table>
    </div>
  );
}
