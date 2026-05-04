import React from 'react';
import './Deans.css'; // Import the CSS file for styling

const Deans = () => {
  return (
    <div className="deans-container">
      <h1>Deans of various Faculties</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Faculty</th>
            <th>Name</th>
            <th>Address</th>
            <th>Telephone No.</th>
            <th>Email Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Arts</td>
            <td>Prof. Sucheta Rani</td>
            <td>Dept. of English</td>
            <td>9419238478</td>
            <td>suchetapathania@jammuuniversity.ac.in</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Business Studies</td>
            <td>Prof. Versha Mehta</td>
            <td>The Business School</td>
            <td>9419181242</td>
            <td>vershamehta@jammuuniversity.ac.in,mehta.versha@gmail.com</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Education</td>
            <td>Prof. Rajeev Rattan</td>
            <td>Dept. of Education</td>
            <td>9419141925</td>
            <td>rajeevrattansharma@gmail.com</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Law</td>
            <td>Prof. Satinder Kumar</td>
            <td>Dept. of Law</td>
            <td>9419193189</td>
            <td></td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Life Sciences</td>
            <td>Prof. Seema Langer</td>
            <td>Dept. of Zoology</td>
            <td>9906027016</td>
            <td>langerseema@tahoo.co.in</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Mathematical Science</td>
            <td>Prof. Rahul Gupta</td>
            <td>Dept. of Statistics</td>
            <td>9419140341</td>
            <td>rahulgupta68@yahoo.com</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Sciences</td>
            <td>Prof. Anju Bhasin</td>
            <td>Dept. of Physics</td>
            <td>9419181423</td>
            <td>sAnju.Bhasin@cern.ch</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>Social Sciences</td>
            <td>Prof. Sangeeta Rani(Sangeeta Gupta)</td>
            <td>Dept. of Library and Information Science</td>
            <td>9797597072</td>
            <td>sangitauniv@gmail.com</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>Medical Sciences
            </td>
            <td>Principal, Government Medical College Jammu</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10.</td>
            <td>Engineering</td>
            <td>Principal, Government College of Engineering & Technology, Jammu</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11.</td>
            <td>Music & Fine Arts</td>
            <td>Principal, Institute of Music & Fine Arts, Jammu</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Add more rows for other deans */}
        </tbody>
      </table>
    </div>
  );
};

export default Deans;
