import * as React from "react";

export default function PartnerActive() {
  return (
    <div>
      <h1> PartnerActive </h1>
      <table class="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom </th>
            <th scope="col">Actif</th>
            <th scope="col">Inactif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>X</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
