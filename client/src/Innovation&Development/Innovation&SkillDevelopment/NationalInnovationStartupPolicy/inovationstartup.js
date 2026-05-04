import React from 'react';
import './inovationstartup.css';

const innovationstartup = () => {
  return (
    <div className="innovation-startup-container">
      <h1>NISP: NATIONAL INNOVATION STARTUP POLICY</h1>
      <marquee className="marquee-text" behavior="scroll" direction="left">
        <span className="marquee-item red">IN</span>
        <span className="marquee-item green">DIFFERENT</span>
        <span className="marquee-item blue">COLOURS</span>
      </marquee>
      <h2 className="sub-heading">National Innovation and Startup Policy (NISP)</h2>
      <p>
        University of Jammu is going to organize a field visit for young entrepreneurs of the University of Jammu on
        7-04-2021. The trip is organized by coordinator NISP council Prof. Parikshat Singh Manhas to make young
        entrepreneurs about Agro Technology of economically important Plants and also make them aware about extraction
        Process of Essential oils from plants.
      </p>
      <h2 className="sub-heading">NISP: NATIONAL INNOVATION STARTUP POLICY</h2>
      <p>
        The policy aims at enabling HEIs to build, streamline and strengthen the innovation and entrepreneurial ecosystem
        in campus and will be instrumental in leveraging the potential of student’s creative problem solving and
        entrepreneurial mind-set, and promoting a strong intra and interinstitutional partnerships with ecosystem
        enablers and different stakeholders at regional, national and international level. This policy intends to guide
        HEIs for promoting students’ driven innovations & start-ups and to engage the students and faculty in innovation
        and start up activities in campus.
      </p>
      <div className="logo-container">
      <img src="images/download.png" alt="" />
      <img src="images/download(1).png" alt="" />
      <img src="images/download(2).png" alt="" />
      <img src="images/download(3).png" alt="" />
      </div>
      <h3>
        <span className="black">National</span>
        <span className="dark-yellow"> Innovation </span>
        <span className="black">and</span>
        <span className="dark-yellow"> Startup </span>
        <span className="black">Policy - New Prince Shri Bhavani College of Engineering and Technology</span>
      </h3>
      <p className="underline">EXECUTIVE MEMBERS FOR THE FORMATION OF INNOVATION AND START-UP POLICY OF UNIVERSITY OF JAMMU</p>
      <table className="executive-table">
        <thead>
          <tr>
            <th>S. NO.</th>
            <th>EXECUTIVE MEMBER</th>
            <th>DEPARTMENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>PROF. PARIKSHAT SINGH MANHAS</td>
            <td>SHTM</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>PROF. GURJEET KAUR</td>
            <td>COMMERCE</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>DR. HARISH CHANDER</td>
            <td>BOTANY</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>DR. BINDU SANGRA</td>
            <td>THE LAW SCHOOL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default innovationstartup;
