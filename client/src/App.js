import React, { useState, useEffect } from 'react';
import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Backtotopbutton from "./components/Backtotopbutton";
import ChatbotComponent from "./components/HomeComponents/ChatbotComponents/ChatbotComponent";
import News from "./components/pages/news-update";
import Announcements from "./components/pages/announcement&noti";
import TodaysOrders from "./components/pages/todays-orders";
import AlbumDetails from './components/album/AlbumDetails';
import AlbumList from './components/album/AlbumList';
import HamburgerMenu from "./components/HamBurg/HamburgerMenu";

import CSIT from "./Departments/ComputerScience&IT/CS&IT"
import UGProgramPage from './Departments/ComputerScience&IT/pages/UGProgramPage';
import PGProgram from './Departments/ComputerScience&IT/pages/PGProgram';
import Phd from './Departments/ComputerScience&IT/pages/phdprogram';
import Certificates from './Departments/ComputerScience&IT/pages/certificate';



import Botany from "./Departments/Botany/botany";
import Campuslife from "./components/HomeComponents/FlexComponents/ForStudents/campuslife";
import Faculty from "./components/HomeComponents/FlexComponents/ForFaculty/faculty";
import Visitors from "./components/HomeComponents/FlexComponents/ForVisitors/visitors";

//ACADEMIC AFFAIRS//
//Academics//
import ABCSchemes from "./AcademicAffairs/Academics/ABCSchemes/abc";
import AffiliatedColleges from "./AcademicAffairs/Academics/AffiliatedColleges/afliatecollege";
import CentreCells from "./AcademicAffairs/Academics/Centers&Cell/CentreCells";
import ConstituentColleges from "./AcademicAffairs/Academics/ConstituentColleges/ConstCollege";
import DistanceEducation from "./AcademicAffairs/Academics/Distance Education/Distance";
import Faculties from "./Acadmics/faculties";
import MOMofBoardsofScience from "./AcademicAffairs/Academics/MOMofBoardsofScience/Momboardstudies";
import OffsiteCampus from "./AcademicAffairs/Academics/OffsiteCampus/Offsite";
import Academics from "./AcademicAffairs/Academics/MainPage";


//RESEARCH//
//RESEARCH//
import MOUs from "./AcademicAffairs/Research/MOUs/Mous";
import Notifications1 from "./AcademicAffairs/Research/Notifications/notifications";
import PHDAdmissions from "./AcademicAffairs/Research/PHDAdmissions/PhdAdmission";
import ResearchJU from "./AcademicAffairs/Research/ResearchJU/Researchju";
import ResearchProjects from "./AcademicAffairs/Research/ResearchProjects/researchprojects";
import ResourcePolicy from "./AcademicAffairs/Research/ResourcePolicy/ResearchPolicy";
import ScholarshipsFellowships from "./AcademicAffairs/Research/ScholarshipsFellowships/scholarshipfellowships";
import StatutesMPHILPHD from "./AcademicAffairs/Research/StatutesMPHILPHD/statuesphdmphil";
import ResearchGuidelines from "./AcademicAffairs/Research/ResearchGuidelines/Researchguideline";
import ResearchCalendar from "./AcademicAffairs/Research/ResearchCalendar/researchcalendar";

//STUDENT CORNER//

import Admission from "./AcademicAffairs/StudentCorner/Admission/Admission";
import ContactUsA from "./AcademicAffairs/StudentCorner/ContactUs/ContactUs";
import Events from "./AcademicAffairs/StudentCorner/Events/Events";
import Examinations from "./AcademicAffairs/StudentCorner/Examinations/Examinations";
import Notifications from "./AcademicAffairs/StudentCorner/Notifications/Notification1";
import NSS from "./AcademicAffairs/StudentCorner/NSS/NSS";
import OnlineWIFIconnectionform from "./AcademicAffairs/StudentCorner/OnlineWIFIconnectionform/OnlineWiFiConnectionForm";
import Programs from "./AcademicAffairs/StudentCorner/Programs/Programs";
import Results from "./AcademicAffairs/StudentCorner/Results/Results";
import Scholarships from "./AcademicAffairs/StudentCorner/Scholarships/Scholarships";
import Statutes from "./AcademicAffairs/StudentCorner/Statutes/Statutes";
import Studentswelfare from "./AcademicAffairs/StudentCorner/studentswelfare/StudentsWelfare";
import SyllabusPGDownloads from "./AcademicAffairs/StudentCorner/SyllabusPGDownloads/SyllabusPGDownloads";
import SyllabusUGNEPDownloads from "./AcademicAffairs/StudentCorner/SyllabusUG-NEPDownloads/SyllabusUGNEPDownload";
import SyllabusUGDownloads from "./AcademicAffairs/StudentCorner/SyllabusUGDownloads/SyllabusUGDownloads";

//UNIVERSITY//
import Administration from "./AcademicAffairs/University/Administration/Administration";
import BoardofStudies from "./AcademicAffairs/University/BoardofStudies/boardstudy";
import Chancellor from "./AcademicAffairs/University/Chancellor/Chancellor";
import ControllerofExamination from "./AcademicAffairs/University/ControllerofExamination/CExamination";
import DeansofVariousFaculties from "./AcademicAffairs/University/DeansofVariousFaculties/Deans";
import JUTA from "./AcademicAffairs/University/JUTA/juta";
import MinutesofMeeting from "./AcademicAffairs/University/MinutesofMeeting/minutesofmeeting";
import NTEUJU from "./AcademicAffairs/University/NTEU-JU/nonteaching";
import Registrar from "./AcademicAffairs/University/Registrar/Registrar";
import UniversityAcademicCouncil from "./AcademicAffairs/University/UniversityAcademicCouncil/uacadmic";
import UniversityCouncil from "./AcademicAffairs/University/UniversityCouncil/Universitycouncil1";
import UniversitySyndicate from "./AcademicAffairs/University/UniversitySyndicate/syndicate";
import VissionMission from "./AcademicAffairs/University/Vission&Mission/VisionMission";
import University from "./AcademicAffairs/University/about";

//AdministrativeUpdates//
//JKSETLASET//
import JKSETLASET from "./AdministrativeUpdates/JKSETLASET/set";
//*Jobs@JU//

import InterviewScheduleList from "./AdministrativeUpdates/Jobs@JU/InterviewScheduleList/Interviewlist";
import NonTeachingStaffTechnicalStaff from "./AdministrativeUpdates/Jobs@JU/Non-TeachingStaffTechnicalStaff/nonteaching";
import Syllabus from "./AdministrativeUpdates/Jobs@JU/Syllabus/sallabus";
import TeachingStaff from "./AdministrativeUpdates/Jobs@JU/TeachingStaff/teachingstaff";

//NEP//

import Archives from "./AdministrativeUpdates/NEP/Archives/ugarchive";
import SyllabusUGNEP from "./AdministrativeUpdates/NEP/SyllabusUG-NEP/ugnetsyllabus";

//NIRF//
import NIRF from "./AdministrativeUpdates/NIRF/nrf";

//AdmissionInformation//
//InternationalStudents//
import InternationalStudents from "./AdmissionInformation/InternationalStudents/Internationalstudent";
//PGAdmission2023//
import PGAdmission2023 from "./AdmissionInformation/PGAdmission2023/pgadmision";
//ContactUs//
import ContactUs from "./ContactUs/uscontact";
//Events&Engagements//
//Conference//
import Conference from "./Events&Engagements/Conference/conference";
import PastConference from "./Events&Engagements/Conference/PastConference/past";
import PresentConference from "./Events&Engagements/Conference/PresentConference/present";
import UpcomingConference from "./Events&Engagements/Conference/UpcomingConference/upcoming";

//MediaGallery//
import PressRelease from "./Events&Engagements/MediaGallery/PressRelease/press";

//Tenders//
import Tenders from "./Events&Engagements/Tenders/tender";
//GraduationConvocation//
//Alumni//
import Alumni from "./GraduationConvocation/Alumni/aluminii";
//SpecialConvocation2023//
import SpecialConvocation2023 from "./GraduationConvocation/SpecialConvocation2023/convocation";
//Vidyajali//
import Vidyajali from "./GraduationConvocation/Vidyajali/anjli";

//Innovation&Development//
//CenterFacilities//
import CampusMaps from "./Innovation&Development/CenterFacilities/CampusMaps/Campusmaps";

import Achievements from "./Innovation&Development/CenterFacilities/CentreforITES&M/Achievements/Achievement";
import FunctionActivities from "./Innovation&Development/CenterFacilities/CentreforITES&M/FunctionActivities/Function";
import InternetFacility from "./Innovation&Development/CenterFacilities/CentreforITES&M/InternetFacility/Internet";
import OpticalFiber from "./Innovation&Development/CenterFacilities/CentreforITES&M/OpticalFiber/opticalfiber";
import WiFiFacility from "./Innovation&Development/CenterFacilities/CentreforITES&M/Wi-FiFacility/wifi";
import CentreforITESM from "./Innovation&Development/CenterFacilities/CentreforITES&M/Intro";

//Health&Sports//
import Gym from "./Innovation&Development/CenterFacilities/Health&Sports/Gym/gym";
import Healthcentre from "./Innovation&Development/CenterFacilities/Health&Sports/Healthcentre/healthcente";
import SportsFacility from "./Innovation&Development/CenterFacilities/Health&Sports/SportsFacility/sportsfacility";
import Yoga from "./Innovation&Development/CenterFacilities/Health&Sports/Yoga/yoga";

import UniversityWorks from "./Innovation&Development/CenterFacilities/UniversityWorks/universityworks";

//Facilities&PublicationCell//

import ConferenceSeminarRoom from "./Innovation&Development/Facilities&PublicationCell/ConferenceSeminarRoom/Seminar";
import DhanvantriLibrary from "./Innovation&Development/Facilities&PublicationCell/DhanvantriLibrary/library";

import BotanicalCactusGarden from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/BotanicalCactusGarden/Garden";
import Canteen from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/Canteen/canteen";
import DayCareCenter from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/DayCareCenter/Daycare";
import GreenCampusTookForm from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/GreenCampusTookForm/green";
import GreenHouse from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/GreenHouse/House";
import Parking from "./Innovation&Development/Facilities&PublicationCell/Other Facilities/Parking/parking";


import GuestHouse from "./Innovation&Development/Facilities&PublicationCell/ResidentialFacilities/GuestHouse/guest";
import Hostels from "./Innovation&Development/Facilities&PublicationCell/ResidentialFacilities/Hostels/hostel";
import StaffQuarters from "./Innovation&Development/Facilities&PublicationCell/ResidentialFacilities/StaffQuarters/staff";

import UniversityAuditorium from "./Innovation&Development/Facilities&PublicationCell/UniversityAuditorium/auditorium";

//Innovation&SkillDevelopment//
import EntreprenshipSkillDevelopment from "./Innovation&Development/Innovation&SkillDevelopment/Entreprenship&SkillDevelopment/Entrepreneurship";
import NationalInnovationStartupPolicy from "./Innovation&Development/Innovation&SkillDevelopment/NationalInnovationStartupPolicy/inovationstartup";
import UniversityBusinessIncubationInnovationCenter from "./Innovation&Development/Innovation&SkillDevelopment/UniversityBusinessIncubation&InnovationCenter/Incubation";

//QualityAssurance//
import AchievementsActivities from "./Innovation&Development/QualityAssurance/AchievementsActivities/AchievementsActivities";
import AnnualQualityAssuranceReport from "./Innovation&Development/QualityAssurance/AnnualQualityAssuranceReport/Qualityreport";
import CASPBAS from "./Innovation&Development/QualityAssurance/CAS-PBAS/CasPbas";
import ContactUsq from "./Innovation&Development/QualityAssurance/ContactUs/Contact";
import MissionStatement from "./Innovation&Development/QualityAssurance/MissionStatement/Missionstatement";
import NAACReport from "./Innovation&Development/QualityAssurance/NAACReport/Naac";
import NAACvisitvideos from "./Innovation&Development/QualityAssurance/NAACvisitvideos/Naacvideo";
import ObjectivesFaculties from "./Innovation&Development/QualityAssurance/Objectives&Faculties/objectivesFunctions";
import QualityPolicy from "./Innovation&Development/QualityAssurance/QualityPolicy/QualityPolicy";
import SoPsforNAACSSR from "./Innovation&Development/QualityAssurance/SoPsforNAAC-SSR/Sop";
import TeacherProfile from "./Innovation&Development/QualityAssurance/TeacherProfile/Teachers";
import Vision from "./Innovation&Development/QualityAssurance/Vision/Vision";

  function RedirectTo360() {
  window.location.href = "/assets/app-files/index.html";
  return null;
}
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
      }, 3000);  // 3seconds

      return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <div className="preloader">
        <img src="/assets/preloader.gif" alt="Loading..." />
        <button onClick={() => setIsLoading(false)} className="skip-button">
            Skip
        </button>
      </div>
    );
  }
  return (
    <>
      <Router>
        <div className="chatbot">
          <ChatbotComponent />
        </div>
        <div className="topscroll">
            <Backtotopbutton />
          </div>
        <div className="wrapper">
          <Header />
          
          <div className="hamburg">
            <HamburgerMenu />
        </div>
        </div>
   
        <div className="container-mt">
          
          <Routes>
            <Route path="/" element={<RedirectTo360 />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/News&Update" element={<News />} />
            <Route path="/campuslife" element={<Campuslife />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/visitors" element={<Visitors />} />
            <Route
              path="/Announcements&Notifications"
              element={<Announcements />}
            />
            <Route path="/Todays-Orders" element={<TodaysOrders />} />
            <Route path="/AlbumList" element={<AlbumList />} />
            <Route path="/album/:albumId" element={<AlbumDetails />} />
            <Route path="/Faculties" element={<Faculties />} />
            <Route path="/ABCSchemes" element={<ABCSchemes />} />
            <Route
              path="/AffiliatedColleges"
              element={<AffiliatedColleges />}
            />
            <Route path="/CentreCells" element={<CentreCells />} />
            <Route
              path="/ConstituentColleges"
              element={<ConstituentColleges />}
            />
            <Route path="/DistanceEducation" element={<DistanceEducation />} />
            <Route
              path="/MOMofBoardsofScience"
              element={<MOMofBoardsofScience />}
            />
            <Route path="/OffsiteCampus" element={<OffsiteCampus />} />
            <Route path="/Admission" element={<Admission />} />
            <Route path="/ContactUsA" element={<ContactUsA />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Examinations" element={<Examinations />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/NSS" element={<NSS />} />
            <Route
              path="/OnlineWIFIconnectionform"
              element={<OnlineWIFIconnectionform />}
            />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Results" element={<Results />} />
            <Route path="/Scholarships" element={<Scholarships />} />
            <Route path="/Statutes" element={<Statutes />} />
            <Route path="/Studentswelfare" element={<Studentswelfare />} />
            <Route
              path="/SyllabusPGDownloads"
              element={<SyllabusPGDownloads />}
            />
            <Route
              path="/SyllabusUGNEPDownloads"
              element={<SyllabusUGNEPDownloads />}
            />
            <Route
              path="/SyllabusUGDownloads"
              element={<SyllabusUGDownloads />}
            />
            <Route path="/Administration" element={<Administration />} />
            <Route path="/BoardofStudies" element={<BoardofStudies />} />
            <Route path="/Chancellor" element={<Chancellor />} />
            <Route
              path="/ControllerofExamination"
              element={<ControllerofExamination />}
            />
            <Route
              path="/DeansofVariousFaculties"
              element={<DeansofVariousFaculties />}
            />
            <Route path="/JUTA" element={<JUTA />} />
            <Route path="/MinutesofMeeting" element={<MinutesofMeeting />} />
            <Route path="/NTEUJU" element={<NTEUJU />} />
            <Route path="/Registrar" element={<Registrar />} />
            <Route
              path="/UniversityAcademicCouncil"
              element={<UniversityAcademicCouncil />}
            />
            <Route path="/UniversityCouncil" element={<UniversityCouncil />} />
            <Route
              path="/NTEUUniversitySyndicateJU"
              element={<UniversitySyndicate />}
            />
            <Route path="/VissionMission" element={<VissionMission />} />
            <Route path="/University" element={<University />} />
            <Route path="/JKSETLASET" element={<JKSETLASET />} />

            <Route path="/Mous" element={<MOUs />} />
            <Route path="/notifications" element={<Notifications1 />} />
            <Route path="/PHDAdmission" element={<PHDAdmissions />} />
            <Route path="/researchcalendar" element={<ResearchCalendar />} />
            <Route
              path="/Researchguidelines"
              element={<ResearchGuidelines />}
            />
            <Route path="/Researchju" element={<ResearchJU />} />
            <Route path="/researchprojects" element={<ResearchProjects />} />
            <Route path="/ResearchPolicy" element={<ResourcePolicy />} />
            <Route
              path="/scholarshipsfellowships"
              element={<ScholarshipsFellowships />}
            />
            <Route path="/statuesphdmphil" element={<StatutesMPHILPHD />} />

            <Route
              path="/InterviewScheduleList"
              element={<InterviewScheduleList />}
            />
            <Route
              path="/NonTeachingStaffTechnicalStaff"
              element={<NonTeachingStaffTechnicalStaff />}
            />
            <Route path="/Syllabus" element={<Syllabus />} />
            <Route path="/TeachingStaff" element={<TeachingStaff />} />
            <Route path="/Archives" element={<Archives />} />
            <Route path="/SyllabusUGNEP" element={<SyllabusUGNEP />} />
            <Route
              path="/InternationalStudents"
              element={<InternationalStudents />}
            />
            <Route path="/PGAdmission2023" element={<PGAdmission2023 />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Conference" element={<Conference />} />
            <Route path="/PastConference" element={<PastConference />} />
            <Route path="/PresentConference" element={<PresentConference />} />
            <Route
              path="/UpcomingConference"
              element={<UpcomingConference />}
            />
            <Route path="/PressRelease" element={<PressRelease />} />
            <Route path="/Tenders" element={<Tenders />} />
            <Route path="/Alumni" element={<Alumni />} />
            <Route
              path="/SpecialConvocation2023"
              element={<SpecialConvocation2023 />}
            />
            <Route path="/Vidyajali" element={<Vidyajali />} />
            <Route path="/CampusMaps" element={<CampusMaps />} />
            <Route path="/Achievements" element={<Achievements />} />
            <Route
              path="/FunctionActivities"
              element={<FunctionActivities />}
            />
            <Route path="/InternetFacility" element={<InternetFacility />} />
            <Route path="/OpticalFiber" element={<OpticalFiber />} />
            <Route path="/WiFiFacility" element={<WiFiFacility />} />
            <Route path="/CentreforITESM" element={<CentreforITESM />} />
            <Route path="/Gym" element={<Gym />} />
            <Route path="/Healthcentre" element={<Healthcentre />} />
            <Route path="/SportsFacility" element={<SportsFacility />} />
            <Route path="/Yoga" element={<Yoga />} />
            <Route path="/UniversityWorks" element={<UniversityWorks />} />
            <Route
              path="/ConferenceSeminarRoom"
              element={<ConferenceSeminarRoom />}
            />
            <Route path="/DhanvantriLibrary" element={<DhanvantriLibrary />} />
            <Route
              path="/BotanicalCactusGarden"
              element={<BotanicalCactusGarden />}
            />
            <Route path="/Canteen" element={<Canteen />} />
            <Route path="/DayCareCenter" element={<DayCareCenter />} />
            <Route
              path="/GreenCampusTookForm"
              element={<GreenCampusTookForm />}
            />
            <Route path="/GreenHouse" element={<GreenHouse />} />
            <Route path="/Parking" element={<Parking />} />
            <Route path="/GuestHouse" element={<GuestHouse />} />
            <Route path="/Hostels" element={<Hostels />} />
            <Route path="/StaffQuarters" element={<StaffQuarters />} />
            <Route
              path="/UniversityAuditorium"
              element={<UniversityAuditorium />}
            />
            <Route
              path="/EntreprenshipSkillDevelopment"
              element={<EntreprenshipSkillDevelopment />}
            />
            <Route
              path="/NationalInnovationStartupPolicy"
              element={<NationalInnovationStartupPolicy />}
            />
            <Route
              path="/UniversityBusinessIncubationInnovationCenter"
              element={<UniversityBusinessIncubationInnovationCenter />}
            />
            <Route
              path="/AchievementsActivities"
              element={<AchievementsActivities />}
            />
            <Route
              path="/AnnualQualityAssuranceReport"
              element={<AnnualQualityAssuranceReport />}
            />
            <Route path="/CASPBAS" element={<CASPBAS />} />
            <Route path="/ContactUsq" element={<ContactUsq />} />
            <Route path="/MissionStatement" element={<MissionStatement />} />
            <Route path="/NAACReport" element={<NAACReport />} />
            <Route path="/NAACvisitvideos" element={<NAACvisitvideos />} />
            <Route
              path="/ObjectivesFaculties"
              element={<ObjectivesFaculties />}
            />
            <Route path="/QualityPolicy" element={<QualityPolicy />} />
            <Route path="/SoPsforNAACSSR" element={<SoPsforNAACSSR />} />
            <Route path="/TeacherProfile" element={<TeacherProfile />} />
            <Route path="/Vision" element={<Vision />} />
            <Route path="/Academics" element={<Academics />} />
            <Route path="/NIRF" element={<NIRF />} />



            <Route path="/CS&IT/*" element={
              <>
                <Routes>
                  <Route path="/" element={<CSIT />} />
                  <Route path="/UGProgram" element={<UGProgramPage />} />
                  <Route path="/PGProgram" element={<PGProgram />} />
                  <Route path="/phd" element={<Phd />} />
                  <Route path="/certificates" element={<Certificates/>} />
                </Routes>
              </>
            } />
            <Route
              path="/botany/*"
              element={
                <>
                  <Routes>
                    <Route path="/" element={<Botany />} />
                  </Routes>
                </>
              }
            />

          </Routes>
        </div>
        <div className="footer">
          <Footer />
          </div>
      
      </Router>
    </>
  );
};

export default App;
