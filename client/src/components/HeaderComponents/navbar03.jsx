import React from "react";
import { Link } from "react-router-dom";
import "./navbar03.css";

function Navbar03() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbaricon">
          <Link to="/">
            <i
              className="fa-solid fa-house-chimney"
              style={{ color: "black" }}
            ></i>
          </Link>
        </li>

        <li className="navbar-item">
          Academic Affairs <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <Link to="/University">University</Link>
                </div>
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
                    <Link to="/UniversityCouncil">University Council</Link>
                  </li>
                  <li>
                    <Link to="/UniversitySyndicate">University Syndicate</Link>
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

              <div className="col">
                <div className="p-3">
                  <Link to="/Academics">Academics</Link>
                </div>
                <ul>
                  <li>Academics @ JU</li>
                  <li>
                    <Link to="/Faculties">Faculties</Link>
                  </li>
                  <li>
                    <Link to="/CentreCells">Centers & Cell</Link>
                  </li>
                  <li>
                    <Link to="/DistanceEducation">Distance Education</Link>
                  </li>
                  <li>
                    <Link to="/ConstituentColleges">Constituent Colleges</Link>
                  </li>
                  <li>
                    <Link to="/AffiliatedColleges">Affiliated Colleges</Link>
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

              <div className="col">
                <div className="p-3">Research</div>
                <ul>
                  <li><Link to="/Researchju">Researchju</Link></li>
                  <li><Link to="/ResearchPolicy">Resource Policy</Link></li>
                  <li><Link to="/researchcalendar">Research Calendar</Link></li>
                  <li><Link to="/researchprojects">Research Projects</Link></li>
                  <li><Link to="/statuesphdmphil">Statutes MPHIL/PHD</Link></li>
                  <li><Link to="/PhdAdmission">PHD Admissions</Link></li>
                  <li><Link to="/ResearchPolicy">List of PHD Scholars</Link></li>
                  <li><Link to="/ResearchPolicy">Scholarships/Fellowships</Link></li>
                  <li><Link to="/Mous">MOUs</Link></li>
                  <li>Notifications</li>
                </ul>
              </div>

              <div className="col">
                <div className="p-3">Student Corner</div>
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
                    <Link to="/SyllabusPGDownloads">Syllabus PG Downloads</Link>
                  </li>
                  <li>
                    <Link to="/SyllabusUGDownloads">Syllabus UG Downloads</Link>
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

        <li className="navbar-item">
          Innovation & Development <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
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

              <div className="col">
                <div className="p-3">Quality Assurance</div>
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

              <div className="col">
                <div className="p-3">Center Facilities</div>
                <ul>
                  <li>
                    <Link to="/CampusMaps">Campus Maps</Link>{" "}
                  </li>
                  <li>
                    <Link to="/CentreforITESM">Centre for ITES&M</Link>
                    <ul>
                      <li>
                        <Link to="/WiFiFacility">Wi-Fi Facility</Link>
                      </li>
                      <li>
                        <Link to="/InternetFacility">Internet Facility</Link>
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
                        <Link to="/SportsFacility">Sports Facility</Link>
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
                </ul>
              </div>

              <div className="col">
                <div className="p-3">Facilities & Publication cell</div>
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

        <li className="navbar-item1">
          Events & Engagements <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <Link to="/Conference">Conference</Link>
                </div>
                <ul>
                  <li>
                    <Link to="/PresentConference">Present Conference</Link>
                  </li>
                  <li>
                    <Link to="/UpcomingConference">Upcoming Conference</Link>
                  </li>
                  <li>
                    <Link to="/PastConference">Past Conference</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="p-3">Media Gallery</div>
                <ul>
                  <li>
                    <Link to="/AlbumList">Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/PressRelease">Press Release</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/Todays-Orders">Today's Order</Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/Tenders">Tenders</Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="navbar-item2">
          Administrative Updates <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">Jobs @ JU</div>
                <ul>
                  <li>
                    <Link to="/TeachingStaff">Teaching Staff</Link>
                  </li>
                  <li>
                    <Link to="/NonTeachingStaffTechnicalStaff">
                      Non-Teaching Staff/Technical Staff
                    </Link>
                  </li>
                  <li>
                    <Link to="/InterviewScheduleList">
                      Interview Schedule List
                    </Link>
                  </li>
                  <li>
                    <Link to="/Syllabus">Syllabus</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="p-3">NEP</div>
                <ul>
                  <li>
                    <Link to="/SyllabusUGNEP">Syllabus UG-NEP</Link>
                  </li>
                  <li>
                    <Link to="/Archives">Archives</Link>
                  </li>
                </ul>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/JKSETLASET">JKSET/LASET</Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/NIRF">NIRF</Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="navbar-item3">
          Graduation Convocation <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <Link to="/SpecialConvocation2023">
                    Special Convocation 2023
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/Vidyajali">Vidyajali</Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/">Faculty Profile</Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/Alumni">Alumni</Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="navbar-item4">
          Admission Information <i className="fa fa-angle-down"></i>
          <div className="container">
            <div className="row gx-5">
              <div className="col">
                <div className="p-3">
                  <Link to="/InternationalStudents">
                    International Students
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="p-3">
                  <Link to="/PGAdmission2023">PG Admission 2023</Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="navbar-item">
          <Link to="/ContactUs">Contact Us</Link>
        </li>

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
  );
}

export default Navbar03;
