import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


  const steps = [
    {
      id: '0',
      message: 'Welcome to Jammu University!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'May I know your name, please?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'How can I help you?',
      trigger: '5',
    },
    {
      id: '5',
      message: 'Choose an option:',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'University', label: 'University', trigger: 'University' },
        { value: 'Academics', label: 'Academics', trigger: 'Academics' },
        { value: 'Research', label: 'Research' ,trigger:'Research' },
        { value: 'Student_Corner', label: 'Student_Corner', trigger:'Student_Corner' },
        { value: 'Innovation_Skill_Development', label: 'Innovation_Skill_Development',trigger:'Innovation_Skill_Development' },
      ],
    },
    {
      id: 'University',
      message: 'chose an option:',
      trigger: 'choose_option',
    },
    {
      id: 'choose_option',
      options: [
        { value: 'About_university', label: 'About_university',trigger:'About_university' },
        { value: 'commerce', label: 'Commerce',trigger:'Commerce' },
        { value: 'computer', label: 'Computer Applications and IT',trigger:'computer' },
      ],
    },
    {
      id:'About_university',
      message:'open link in browser https://www.jammuuniversity.ac.in/ ',
      trigger:'University_menu'
    },
    {
    id:'Commerce',
    message:'here are details',
    trigger:'University_menu',
    },
    {
     id:'computer',
     message:'here is the detail',
     trigger:'University_menu',
    },
    {
      id: 'University_menu',
      message: ({ previousValue }) => {
        if (previousValue === 'About_university') {
          return 'About_university';
        } else if (previousValue === 'commerce') {
          return 'Commerce';
        } else if (previousValue === 'computer') {
          return 'Computer';
        }
        return 'Get More details';
      },
      trigger: '5', // Go back to the main menu
    },
    {
      id: 'Academics',
      message: 'Choose an option:',
      trigger: 'Academics_Section',
    },
    {
      id: 'Academics_Section',
      options: [
        { value: 'Faculties', label: 'Faculties' ,trigger:'Faculty_details'},
        { value: 'Distance_Education', label: 'Distance Education',trigger:'Distance_Education' },
        { value: 'Offsite_Campuses', label: 'Offsite Campuses',trigger:'Offsite_Campuses' },
      ],
    },
    {
      id: 'Faculty_details',
      options: [
        { value: 'Complete_Details', label: 'Complete Details',trigger:'read_more' },
      ],
    },
    {
      id: 'read_more',
      message: 'Do you want more details about Faculty Of JU?',
      trigger: 'read_more11',
    },
    {
      id: 'read_more11',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'read_more1' },
        { value: 'no', label: 'No', trigger: '5' },
      ],
    },

    
    {
      id: 'read_more1',
      message: 'open this link in browser: https://www.jammuuniversity.ac.in/academics/faculties',
      trigger: 'Academics_menu',
    },
    {
      id:'Distance_Education',
      message:'here are the details',
      trigger:'Academics_menu',
      },
    {
    id:'Offsite_Campuses',
    message:'here is the details of offsite_Campuses',
    trigger:'Academics_menu'
    },

    {
      id:'Academics_menu',
      message: ({ previousValue}) => {
        if (previousValue === 'Faculties') {
          return 'Faculty_details';
        } else if (previousValue=== 'Distance_Education') {
          return 'Distance_Education:';
        }
        else if (previousValue === 'Offsite_Campuses') {
          return 'Offsite_Campuses:';
        }
        return 'Get more details';
      },
        trigger:'5'
        },
        {
          id:'Research',
          message:'choose option:',
          trigger:'Research_options'
        },
        {
          id:'Research_options',
          options:[
            { value:'Research_Calendar', label:'Research_Calendar', trigger:'Research_Calendar' },
            { value:'phd_Admissions', label:'phd_Admissions', trigger:'phd_Admissions' },
            { value:'Scholarship_Fellowships', label:'Scholarship_Fellowships',trigger:'Scholarship_Fellowships' },
          ],
        },
        {
          id:'Research_Calendar',
          message:'click the link to view Calendar',
          trigger:'Research_menu'
        },
        {
          id:'phd_Admissions',
          message:'for more detaisl click the link ',
          trigger:'Research_menu'
        },
        {
          id:'Scholarship_Fellowships',
          message:'click the link for more details',
          trigger:'Research_menu',
    
        },
        {
          id: 'Research_menu',
          message: ({ previousValue }) => {
            if (previousValue === 'Research_Calendar') {
              return 'Research_Calendar';
            } else if (previousValue === 'Phd_Admissions') {
              return 'phd_Admissions';
            } else if (previousValue === 'Scholarship_Fellowships') {
              return 'Scholarship_Fellowship';
            }
            return 'Get More details';
          },
          trigger: '5', // Go back to the main menu
        },
        {
          id:'Student_Corner',
          message:'chose option',
          trigger:'Student_details',
         },
         {
           id:'Student_details',
           options: [
             { value: 'Admissions', label: 'Admissions',trigger:'student_Admissions' },
             { value: 'Results', label: 'Results',trigger:'Results' },
             { value: 'Scholarships', label: 'Scholarships',trigger:'Scholarships' },
           ],
         },
         {
           id:'student_Admissions',
           message:'click the link for more details',
           trigger:'Student_Corner_menu',
         },
         {
           id:'Results',
           message:'for more deatails click here',
           trigger:'Student_Corner_menu',
         },
         {
         id:'Scholarships',
         message:'for more details visit the site',
         trigger:'Student_Corner_menu',
         },
         {
           id: 'Student_Corner_menu',
           message: ({ previousValue }) => {
             if (previousValue === 'Admissions') {
               return 'Student_Admissions';
             } else if (previousValue === 'Results') {
               return 'Results';
             } else if (previousValue === 'Scholarshps') {
               return 'Scholarships';
             }
             return 'Get More details';
           },
           trigger: '5', // Go back to the main menu
         },
         {
          id:'Innovation_Skill_Development',
          message:'chose option',
          trigger:'Innovation_Skill_Development_details',
         },
        {
         id:'Innovation_Skill_Development',
         message:'chose option',
         trigger:'Innovation_Skill_Development_details',
        },
        {
          id:'Innovation_Skill_Development_details',
          options:[
            { value: 'startup', label: 'startup',trigger:'startups' },
            { value: 'innovation', label: 'innovation',trigger:'innovations' },
            { value: 'UBIIC', label: 'UBIIC',trigger:'UBIIC' },
          ],
        },
        {
          id:'startups',
          message:'for starups clik here',
          trigger:'innovation_menu',
        },
        {
         id:'innovations',
         message:'innovations details are here',
         trigger:'innovation_menu',
        },
        {
         id:'UBIIC',
         message:'click here to visit site',
         trigger:'innovation_menu',
        },
        {
          id: 'innovation_menu',
          message: ({ previousValue }) => {
            if (previousValue === 'startup') {
              return 'startups';
            } else if (previousValue === 'innovation') {
              return 'innovations';
            } else if (previousValue === 'UBIIC') {
              return 'UBIIC';
            }
            return 'Get More details';
          },
          trigger: '5', // Go back to the main menu
        },
  ];

  const theme = {
    background: '#f2f7fa',
    headerBgColor: '#5183b8',
    headerFontSize: '20px',
    botBubbleColor: '#5183b8',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#238dfe',
    userFontColor: 'white',
  };
  const config = {
    botAvatar: "uni.png",
    floating: true,
  };
  function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Jammu University Bot"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </div>
  );
}
export default App;
