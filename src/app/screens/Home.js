import React from "react";

export default function Home() {
  return (
    <div>
      <h2>Partenaire</h2>
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
            <th scope="row">2</th>
            <td>Jacob</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>X</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>Structure</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom du Partenaire </th>
            <th scope="col">Structure</th>
            <th scope="col">Actif</th>
            <th scope="col"> Inactif</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Valence</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Paris 1</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Paris 2</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>Lyon</td>
            <td>X</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
