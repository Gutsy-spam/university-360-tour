import React from 'react';
import './aluminii.css';

const Alumni = () => {
  return (
    <div className="alumni-container">
      <h1>Introduction</h1>
      <h3>About University of Jammu Alumni Association (UJAA)</h3>
      <p>
        University of Jammu (JU) established its Alumni Association as a registered society by the name University of Jammu Alumni Association (UJAA) vide registration no 110-CSA of 2021 dated 08/02/2022. The Vision of UJAA shall be in consonance with the vision of University of Jammu
      </p>
      <h2>Aims & Objectives of UJAA</h2>
      <ul>
        <li>To promote close relationship between UJAA and the JU</li>
        <li>To conduct seminars, conferences, workshops, endowment lectures and other academic activities in collaboration with respective Departments and to maintain liaison with JU faculty, non-teaching staff and students.</li>
        <li>To uphold the democratic and inclusive traditions of JU centered around themes that deepen our understanding and appreciation of the values in consonance with the Statues of JU.</li>
        <li>To provide opportunities for community service and to act as good will ambassadors of JU within India and abroad.</li>
        <li>To provide academic and professional interaction and networking among UJAA and endeavor to create career opportunities for the JU student community.</li>
        <li>To conduct Annual Alumni Day celebrations</li>
        <li>To create and establish Alumni endowments for granting scholarships, stipends, prizes and medals to the students showing high proficiency in higher education in country and abroad.</li>
        <li>To collect funds by subscriptions, contributions and donations from members, non-members, Governments, Universities and other institutions and philanthropists for furtherance of the above objectives.</li>
      </ul>
      <h2>Membership of the Association</h2>
      <p>
        The alumnus of University of Jammu can join the association as a Life Member by making a one-time payment of Rs.3000 as life Membership Fee. The Non-Resident members living outside India shall pay US$-100 as life Membership Fee.
        If you wish to join the association as Life Member, kindly fill up the form provided in the link below. Our team will contact you with more details.
      </p>
      <a href="https://forms.gle/JXYQseCDuQLDrniM8" target="_blank" rel="noopener noreferrer">Membership Form</a>
      <h2>Executive Committee of UJAA</h2>
      <table className="executive-table">
        <tr>
          <th>Position</th>
          <th>Name</th>
          <th>Designation</th>
        </tr>
        <tr>
          <td>Patron</td>
          <td>Vice-Chancellor of JU</td>
          <td>Prof Umesh Rai</td>
        </tr>
        <tr>
          <td>President</td>
          <td>Dean Students Welfare (Ex-Officio)</td>
          <td>Prof Prakash Antahal</td>
        </tr>
        <tr>
          <td>Vice-President*</td>
          <td>To be Elected</td>
          <td>Vacant</td>
        </tr>
        <tr>
          <td>Secretary</td>
          <td>Associate Dean Students Welfare (Ex-Officio)</td>
          <td>Dr. Anil Gupta</td>
        </tr>
        {/* Continue adding rows for the rest of the content */}
        {/* ... */}
      </table>
      <p>For more details about please contact</p>
      <p>
        Dr. Anil Gupta<br />
        Secretary, UJAA<br />
        Contact No. 94191-43987
      </p>
      <p>
        Ms. Mansi Mantoo<br />
        Nodal Officer, UJAA<br />
        Contact No. 94191-03117
      </p>
    </div>
  );
};

export default Alumni;
