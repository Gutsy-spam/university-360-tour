import React from 'react';
import './Naac.css';

const Naac = () => {
  return (
    <div className="naac-container">
      <h1>NAAC Report</h1>
      <h2>Directorate of Internal Quality Assurance:</h2>
      <ul className="bullet-list">
        <li><a href="pdf_link_volume_1.pdf">VOLUME -1 (PROFILE & CRITERION WISE INPUTS)</a></li>
        <li><a href="pdf_link_volume_2.pdf">VOLUME -2 (EVALUATIVE REPORTS)</a></li>
        <li><a href="pdf_link_part_a.pdf">Part-A</a></li>
        <li><a href="pdf_link_part_b.pdf">Part-B</a></li>
        <li><a href="pdf_link_part_c.pdf">Part-C</a></li>
        <li><a href="pdf_link_part_d.pdf">Part-D</a></li>
        <li><a href="pdf_link_part_e.pdf">Part-E</a></li>
        <li><a href="pdf_link_part_g.pdf">Part-G</a></li>
        <li><a href="pdf_link_part_h.pdf">Part-H</a></li>
        <li><a href="pdf_link_part_i.pdf">Part-I</a></li>
        <li><a href="pdf_link_part_j.pdf">Part-J</a></li>
        <li><a href="pdf_link_annexure.pdf">ANNEXURE (50 POINT INDICATORS)</a></li>
      </ul>
    </div>
  );
};

export default Naac;
