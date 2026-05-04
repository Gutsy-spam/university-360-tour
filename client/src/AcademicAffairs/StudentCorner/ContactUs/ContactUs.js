import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <ul className="contact-list">
        <li>University Help Lines: 0191-2435248, 2435259, 2453544, 2453588</li>
        <li>Vice Chancellor Chamber: 0191-2450014</li>
        <li>Registrar: 0191-2431365</li>
        <li>Dean Academic Affairs: 0191-2456892</li>
        <li>Controller of Exams: 0191-2432856, 2433746 (For contacting Examination related Officials, click here)</li>
        <li>Director College Development: 0191-2430023</li>
        <li>Director Distance Education: 0191-2430828</li>
        <li>Director Centre for IT Enabled Services & Mgt: 0191-2458593</li>
        <li>B.Ed/ BBA/ BCA admissions: 0191-2430023</li>
        <li>For any queries email at: <span>helpdesk@jammuuniversity.ac.in</span></li>
      </ul>
    </div>
  );
};

export default ContactUs;
