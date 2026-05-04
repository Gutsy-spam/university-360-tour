import React from 'react';
import './CExamination.css'; // Import the CSS file for styling

const CExamination = () => {
  const officerData = [
    {
      sno: '1',
      name: 'Sh. Sanjeev Mahajan',
      designation: 'Controller of Examinations',
      epabx: '2110',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '2',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '3',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '4',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '5',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '6',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '7',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '8',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '9',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '10',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '11',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '12',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '13',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '14',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '15',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },
    {
      sno: '16',
      name: 'Sh. Ram Lal Verma',
      designation: 'Sr. P.A. to Controller of Examinations',
      epabx: '2111',
      officePhone: '2433746',
      mobile: '-'
    },

    // Add more objects for other officers
  ];

  return (
    <div className="cexamination-container">
      <h1>Controller of Examination</h1>
      <div className="university-text">
        <span className="underline"><h2>University Of Jammu</h2></span>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Designation</th>
            <th>EPABX No.</th>
            <th>Office Phone No.</th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          {officerData.map((officer) => (
            <tr key={officer.sno}>
              <td>{officer.sno}</td>
              <td>{officer.name}</td>
              <td>{officer.designation}</td>
              <td>{officer.epabx}</td>
              <td>{officer.officePhone}</td>
              <td>{officer.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CExamination;