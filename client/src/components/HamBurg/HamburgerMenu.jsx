import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItems, setActiveItems] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    // Add more items as needed
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle item click and toggle activeItem for a specific index
  const handleItemClick = (index) => {
    setActiveItems((prevActiveItems) => ({
      ...prevActiveItems,
      [index]: !prevActiveItems[index],
    }));
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-hamburg">
          <nav className="navbar-hamburg">
            <ul className="navbar-list-hamburg">
              <li className="navbaricon">
                <Link to="/Home">
                  <i
                    className="fa-solid fa-house-chimney"
                    style={{ color: "black" }}
                  ></i>
                </Link>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[0] ? "active" : ""
                }`}
                onClick={() => handleItemClick(0)}
              >
                Academic Affairs <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[0] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row gx-5">
                    <div className="hamburg-col">
                      <div className="hamburg-p-3">University</div>
                      <ul>
                        <li>
                          <Link to="/VissionMission">Vission & Mission</Link>
                        </li>
                        <li>
                          <Link to="/Chancellor">Chancellor</Link>
                        </li>
                        <li>
                          <Link to="/">Vice Chancellor</Link>
                        </li>
                        <li>
                          <Link to="/Registrar">Registrar</Link>
                        </li>
                        <li>
                          <Link to="/ControllerofExamination">
                            Controller of Examination
                          </Link>
                        </li>
                        <li>
                          <Link to="/Administration">Administration</Link>
                        </li>
                        <li>
                          <Link to="/UniversityCouncil">
                            University Council
                          </Link>
                        </li>
                        <li>
                          <Link to="/UniversitySyndicate">
                            University Syndicate
                          </Link>
                        </li>
                        <li>
                          <Link to="/UniversityAcademicCouncil">
                            University Academic Council
                          </Link>
                        </li>
                        <li>
                          <Link to="/DeansofVariousFaculties">
                            Deans of Various Faculties
                          </Link>
                        </li>
                        <li>
                          <Link to="/BoardofStudies">Board of Studies</Link>
                        </li>
                        <li>
                          <Link to="/MinutesofMeeting">Minutes of Meeting</Link>
                        </li>
                        <li>
                          <Link to="/JUTA">JUTA</Link>
                        </li>
                        <li>
                          <Link to="/NTEUJU">NTEU-JU</Link>
                        </li>
                        <li>
                          <Link to="/Notification">Notification</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Academics</div>
                      <ul>
                        <li>Academics @ JU</li>
                        <li>
                          <Link to="/Faculties">Faculties</Link>
                        </li>
                        <li>
                          <Link to="/CentreCells">Centers & Cell</Link>
                        </li>
                        <li>
                          <Link to="/DistanceEducation">
                            Distance Education
                          </Link>
                        </li>
                        <li>
                          <Link to="/ConstituentColleges">
                            Constituent Colleges
                          </Link>
                        </li>
                        <li>
                          <Link to="/AffiliatedColleges">
                            Affiliated Colleges
                          </Link>
                        </li>
                        <li>
                          <Link to="/MOMofBoardsofScience">
                            MOM of Boards of Science
                          </Link>
                        </li>
                        <li>
                          <Link to="/OffsiteCampus">Offsite Campus</Link>
                        </li>
                        <li>
                          <Link to="/ABCSchemes">ABC Schemes</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Research</div>
                      <ul>
                        <li>Research @ JU</li>
                        <li>Resource Policy</li>
                        <li>Research Calendar</li>
                        <li>Research Projects</li>
                        <li>Statutes MPHIL/PHD</li>
                        <li>PHD Admissions</li>
                        <li>List of PHD Scholars</li>
                        <li>Scholarships/Fellowships</li>
                        <li>MOUs</li>
                        <li>Notifications</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Student Corner</div>
                      <ul>
                        <li>
                          <Link to="/Admission">Admission</Link>
                        </li>
                        <li>
                          <Link to="/Programs">Programs</Link>
                        </li>
                        <li>
                          <Link to="/Examinations">Examinations</Link>
                        </li>
                        <li>
                          <Link to="/OnlineWIFIconnectionform">
                            Online WIFI connection form
                          </Link>
                        </li>
                        <li>
                          <Link to="/Results">Results</Link>
                        </li>
                        <li>
                          <Link to="/Events">Events</Link>
                        </li>
                        <li>
                          <Link to="/NSS">NSS</Link>
                        </li>
                        <li>
                          <Link to="/Scholarships">Scholarships</Link>
                        </li>
                        <li>
                          <Link to="/Studentswelfare">student's welfare</Link>
                        </li>
                        <li>
                          <Link to="/Statutes">Statutes</Link>
                        </li>
                        <li>
                          <Link to="/SyllabusPGDownloads">
                            Syllabus PG Downloads
                          </Link>
                        </li>
                        <li>
                          <Link to="/SyllabusUGDownloads">
                            Syllabus UG Downloads
                          </Link>
                        </li>
                        <li>
                          <Link to="/SyllabusUGNEPDownloads">
                            Syllabus UG-NEP Downloads
                          </Link>
                        </li>
                        <li>
                          <Link to="/Notifications">Notifications</Link>
                        </li>
                        <li>
                          <Link to="/ContactUsA">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[1] ? "active" : ""
                }`}
                onClick={() => handleItemClick(1)}
              >
                Innovation & Development <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[1] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row gx-5">
                    <div className="hamburg-col">
                      <div className="p-3">Innovation & Skill Development</div>
                      <ul>
                        <li>
                          <Link to="/NationalInnovationStartupPolicy">
                            National Innovation Startup Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/EntreprenshipSkillDevelopment">
                            Entreprenship & Skill Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/UniversityBusinessIncubationInnovationCenter">
                            University Business Incubation & Innovation Center
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Quality Assurance</div>
                      <ul>
                        <li>
                          <Link to="/MissionStatement">Mission Statement</Link>
                        </li>
                        <li>
                          <Link to="/ObjectivesFaculties">
                            Objectives & Faculties
                          </Link>
                        </li>
                        <li>
                          <Link to="/AchievementsActivities">
                            Achievements/Activities
                          </Link>
                        </li>
                        <li>
                          <Link to="/Vision">Vision</Link>
                        </li>
                        <li>
                          <Link to="/QualityPolicy">Quality Policy</Link>
                        </li>
                        <li>
                          <Link to="/NAACReport">NAAC Report</Link>
                        </li>
                        <li>
                          <Link to="/NAACvisitvideos">NAAC visit videos</Link>
                        </li>
                        <li>
                          <Link to="/AnnualQualityAssuranceReport">
                            Annual Quality Assurance Report
                          </Link>
                        </li>
                        <li>
                          <Link to="/CASPBAS">CAS PBAS</Link>
                        </li>
                        <li>
                          <Link to="/TeacherProfile">Teacher Profile</Link>
                        </li>
                        <li>
                          <Link to="/ContactUsq">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/SoPsforNAACSSR">SoP's for NAAC SSR</Link>
                        </li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Center Facilities</div>
                      <ul>
                        <li>
                          <Link to="/Campusmaps">Campus Maps</Link>
                        </li>
                        <li>
                          <Link to="/CentreforITESM">Centre for ITES&M</Link>
                          <ul>
                            <li>
                              <Link to="/WiFiFacility">Wi-Fi Facility</Link>
                            </li>
                            <li>
                              <Link to="/InternetFacility">
                                Internet Facility
                              </Link>
                            </li>
                            <li>
                              <Link to="/FunctionActivities">
                                Function Activities
                              </Link>
                            </li>
                            <li>
                              <Link to="/Achievements">Achievements</Link>
                            </li>
                            <li>
                              <Link to="/OpticalFiber">Optical Fiber</Link>
                            </li>
                            <li>Campus Network</li>
                          </ul>
                        </li>
                        <li>
                          Health & Sports
                          <ul>
                            <li>
                              <Link to="/Sportsfacility">Sports Facility</Link>
                            </li>
                            <li>
                              <Link to="/Healthcentre">Health Centre</Link>
                            </li>
                            <li>
                              <Link to="/Yoga">Yoga Center</Link>
                            </li>
                            <li>
                              <Link to="/Gym">Gymnastics</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/UniversityWorks">
                            University work department
                          </Link>
                        </li>
                        <li>Control department</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">
                        Facilities & Publication cell
                      </div>
                      <ul>
                        <li>
                          Residential facilities
                          <ul>
                            <li>
                              <Link to="/Hostels">Hostels</Link>
                            </li>
                            <li>
                              <Link to="/GuestHouse">Guest House</Link>
                            </li>
                            <li>
                              <Link to="/StaffQuarters">Staff Quarters</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          {" "}
                          <Link to="/">Dhanvantri Library</Link>
                        </li>
                        <li>
                          <Link to="/UniversityAuditorium">
                            University Auditorium
                          </Link>
                        </li>
                        <li>
                          <Link to="/ConferenceSeminarRoom">
                            Conference/Seminar Room
                          </Link>
                        </li>
                        <li>
                          Other Facilities
                          <ul>
                            <li>
                              <Link to="/Canteen">Canteen</Link>
                            </li>
                            <li>
                              <Link to="/Parking">Parking</Link>
                            </li>
                            <li>
                              <Link to="/DayCareCenter">Day care Center</Link>
                            </li>
                            <li>
                              <Link to="/BotanicalCactusGarden">
                                Botanical/Cactus Garden
                              </Link>
                            </li>
                            <li>
                              <Link to="/GreenHouse">Green House</Link>
                            </li>
                            <li>
                              <Link to="/GreenCampusTookForm">
                                Green Campus Took Form
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[2] ? "active" : ""
                }`}
                onClick={() => handleItemClick(2)}
              >
                Events & Engagements <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[2] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row gx-5">
                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Conference</div>
                      <ul>
                        <li>Present Conference</li>
                        <li>Upcoming Conference</li>
                        <li>Past Conference</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Media Gallery</div>
                      <ul>
                        <li>Photo Gallery</li>
                        <li>Press Release</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Today's Order</div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Tenders</div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[3] ? "active" : ""
                }`}
                onClick={() => handleItemClick(3)}
              >
                Administrative Updates <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[3] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row gx-5">
                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Jobs @ JU</div>
                      <ul>
                        <li>Teaching Staff</li>
                        <li>Non-Teaching Staff/Technical Staff</li>
                        <li>Interview Schedule List</li>
                        <li>Syllabus</li>
                        <li>Download Result/Answer Key</li>
                        <li>Download Admit Card for Junior Assistant</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">NEP</div>
                      <ul>
                        <li>Syllabus UG-NEP</li>
                        <li>Archives</li>
                      </ul>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">JKSET/LASET</div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">NIRF</div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[4] ? "active" : ""
                }`}
                onClick={() => handleItemClick(4)}
              >
                Graduation Convocation <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[4] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row1 gx-5">
                    <div className="hamburg-col">
                      <div className="hamburg-p-3">
                        Special Convocation 2023
                      </div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Vidyajali</div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Faculty Profile</div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">Alumni</div>
                    </div>
                  </div>
                </div>
              </li>

              <li
                className={`hamburg-navbar-item ${
                  activeItems[5] ? "active" : ""
                }`}
                onClick={() => handleItemClick(5)}
              >
                Admission Information <i className="fa fa-angle-down"></i>
                <div
                  className={`hamburg-container ${
                    activeItems[5] ? "active" : ""
                  }`}
                >
                  <div className="hamburg-row2 gx-5">
                    <div className="hamburg-col">
                      <div className="hamburg-p-3">International Students</div>
                    </div>

                    <div className="hamburg-col">
                      <div className="hamburg-p-3">PG Admission 2023</div>
                    </div>
                  </div>
                </div>
              </li>

              <li>Contact Us</li>

              <li className="navbaricon">
                <a href="#">
                  <i
                    className="fa-solid fa-magnifying-glass"
                    style={{ color: "black" }}
                  ></i>
                </a>
              </li>
            </ul>
          </nav>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
