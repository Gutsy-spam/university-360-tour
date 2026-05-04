import React from "react";
import "./about.css"; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About University</h1>
      <div className="image-grid">
        <div className="image-container1">
          <img src="images/sideUniversityFront_2.jpg" alt="" />
          <div className="image-caption1">University Main Entrance</div>
        </div>
        <div className="image-container2">
          <img src="images/Universitypaths.jpg" alt="" />
          <div className="image-caption2">University Path Ways</div>
        </div>
        <div className="image-container3">
          <img src="images/fountainUniversity02_0.jpg" alt="" />
          <div className="image-caption3">University Fountain Plaza</div>
        </div>
        <div className="image-container4">
          <img src="images/library.jpg" alt="" />
          <div className="image-caption4">Way to Dhanvantri Library</div>
        </div>
      </div>
      <div className="about-details">
        <p>
          The University of Jammu strives for achieving world-class excellence
          in teaching, research, and knowledge transfer and making valuable
          contributions to the socioeconomic development of the region and
          country.
        </p>
        <p>
          Imparting quality education to the students, promoting their all-round
          development by participation in sports, extracurricular and other
          socially relevant activities and including the skill of decision
          making and democratic values.
        </p>
        <p>
          Providing state-of-the-art facilities and opportunities for academic
          growth and to carry out research in modern areas, particularly of
          applied nature and technology.
        </p>
        <p>
          Promoting preservation and integration of the cultural diversity of
          the region, state, and country.
        </p>
        <p>
          Cradled in the lap of mountains at the foothills of auspicious
          Trikuta, besides the river Tawi at an altitude of 1030 ft. is Jammu.
          This 'city of temples' has many places that are flocked by people from
          every nook and corner. Among all these, also comes the famed
          University of Jammu. A place where imparting education is not
          considered just as a mere duty, but as a commitment towards the
          advancement of society. A university with a vision and a single-minded
          mission. To make Jammu University a name to reckon with. A saga that
          has been continuing from the time of its inception.
        </p>
        <p>
          The University of Jammu, accredited as{" "}
          <strong>
            'A+' Grade University by National Assessment & Accreditation Council
            of India
          </strong>
          , came into existence in 1969 vide Kashmir and Jammu Universities Act
          1969 following the bifurcation of the erstwhile University of Jammu
          and Kashmir. The University provides instructions in such branches of
          learning as it deems fit and makes provision for research and the
          advancement and dissemination of knowledge. The University stands for
          spiritual and material elements in life, thirst for knowledge and
          virtue under the backdrop of holy peaks of Trikuta Hills.
        </p>
        <p>
          University of Jammu holds examinations, grants degrees, generates
          knowledge, and confers diverse academic distinctions on persons who
          pursue approved courses of study in the University or in constituent
          colleges/institutions approved for the purpose, also for those who
          appear as external/private candidates. It also confers honorary
          degrees or other distinctions on persons of exceptional caliber. The
          University also admits, maintains, recognizes, affiliates colleges,
          and other institutions. It is primarily a research, teaching,
          affiliating, examining body involved in the promotion of arts,
          science, and other branches of learning. The University is open to all
          classes and creeds with the sole objective to carry people from
          darkness to light.
        </p>
      </div>
    </div>
  );
};
export default About;
