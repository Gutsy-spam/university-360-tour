import React from 'react';
import './Registrar.css'; // Import the CSS file for styling

const Registrar = () => {
  return (
    <>
      <div className='top'>
        <h1>Registrar</h1>
      </div>

      <table className="table">
        <thead>
          <tr className="bordered-cell">
            <th colSpan="2"><h1>Prof. Arvind Jasrotia</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bordered-cell"><h3>Designation</h3></td>
            <td className="bordered-cell"><h3>Registrar</h3></td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>EPABX</h3></td>
            <td className="bordered-cell">2104</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Office</h3></td>
            <td className="bordered-cell">2431365</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Mobile</h3></td>
            <td className="bordered-cell">-</td>
          </tr>
          <tr>
            <td className="bordered-cell">Email</td>
            <td className="bordered-cell">
              <a href="mailto:registrarjammuuniversity@gmail.com">registrarjammuuniversity@gmail.com</a>,
              <br />
              <a href="mailto:registrar_ju@jammuuniversity.ac.in">registrar_ju@jammuuniversity.ac.in</a>
            </td>
          </tr>
        </tbody>
      </table>

      <p></p>

      <table className="table2">
        <thead>
          <tr className="bordered-cell">
            <th colSpan="2"><h1>Sh. Pervesh Ratta</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bordered-cell"><h3>Designation</h3></td>
            <td className="bordered-cell"><h3>Computer Assistant</h3></td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>EPABX</h3></td>
            <td className="bordered-cell">2107</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Office</h3></td>
            <td className="bordered-cell">2431365</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Mobile</h3></td>
            <td className="bordered-cell">-</td>
          </tr>
          <tr>
            <td className="bordered-cell">Email</td>
            <td className="bordered-cell">
              <a href="mailto:registrarjammuuniversity@gmail.com">registrarjammuuniversity@gmail.com</a>,
              <br />
              <a href="mailto:registrar_ju@jammuuniversity.ac.in">registrar_ju@jammuuniversity.ac.in</a>
            </td>
          </tr>
        </tbody>
      </table>

      <p></p>

      <table className="table2">
        <thead>
          <tr className="bordered-cell">
            <th colSpan="2"><h1>Mr. Sahil Gupta</h1></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="bordered-cell"><h3>Designation</h3></td>
            <td className="bordered-cell"><h3>Some Designation</h3></td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>EPABX</h3></td>
            <td className="bordered-cell">2108</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Office</h3></td>
            <td className="bordered-cell">2431365</td>
          </tr>
          <tr>
            <td className="bordered-cell"><h3>Mobile</h3></td>
            <td className="bordered-cell">-</td>
          </tr>
          <tr>
            <td className="bordered-cell">Email</td>
            <td className="bordered-cell">
              <a href="mailto:sahilgupta@gmail.com">sahilgupta@gmail.com</a>,
              <br />
              <a href="mailto:sahil_gupta@jammuuniversity.ac.in">sahil_gupta@jammuuniversity.ac.in</a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Registrar;
