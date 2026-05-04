import React from 'react';
import './boardstudy.css'; // Import the CSS file for styling

const BoardOfStudies = () => {
  return (
    <div className="board-of-studies-container">
      <h1>Board of Studies</h1>
      <h2 className="conveners-heading">Conveners of Boards of Studies:</h2>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Subjects</th>
            <th>Conveners</th>
            <th>Department/Institute/College</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>History, Islamic Studies</td>
            <td className="maroon-text">Prof. Shyam Narayan Lal</td>
            <td>History</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Political Science</td>
            <td className="maroon-text">Prof. Baljit Singh</td>
            <td>Political Science</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Economics</td>
            <td className="maroon-text">Prof. Prakash Chand</td>
            <td>History</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Library Science</td>
            <td className="maroon-text">Prof. Sangeeta Rani</td>
            <td>Statistics</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Statistics</td>
            <td className="maroon-text">Prof.  Pawan Kumar</td>
            <td>Statistics</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Commerce, Marketing</td>
            <td className="maroon-text">Prof. Gurjeet Kour</td>
            <td>Commerce</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Sociology</td>
            <td className="maroon-text">Prof. Vishav Raksha</td>
            <td>History</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>History, Islamic Studies</td>
            <td className="maroon-text">Prof. Shyam Narayan Lal</td>
            <td>Sociology</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>Physical Education</td>
            <td className="maroon-text">Prof. Arti Bakshi</td>
            <td>Psychology</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>Chemistry</td>
            <td className="maroon-text">Prof. K.K Kapoor</td>
            <td>Chemistry</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>Computer Sc. & IT, MTech</td>
            <td className="maroon-text">Prof. Lalit Sen Sharma</td>
            <td>Computer Science</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>Physics</td>
            <td className="maroon-text">Prof. Sanjeev Singh Sambyal</td>
            <td>Physics</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>Mathematics</td>
            <td className="maroon-text">Prof. K.S Charak	</td>
            <td>Mathematics</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>Geography</td>
            <td className="maroon-text">Prof. Anuradha Sharma	</td>
            <td>Geography</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>Home Science, Food Science Technology/Quality Control	</td>
            <td className="maroon-text">Prof. Shashi Manhas	</td>
            <td>Home Science
</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>Geology</td>
            <td className="maroon-text">Prof. Pankaj Kumar Srivastava	</td>
            <td>Geology</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>Remote Sensing	</td>
            <td className="maroon-text">Prof. A.S Jasrotia	</td>
            <td>Remote Sensing & GIS
</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>Zoology, Human Genetics, Industrial Fish and Fisheries, Sericulture	</td>
            <td className="maroon-text">Prof. Seema Langer</td>
            <td>Botany
</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>Botany</td>
            <td className="maroon-text">Prof. Namrata Sharma</td>
            <td>Botany</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>Bio-Technology/Bio-Chemistry/Microbiology	</td>
            <td className="maroon-text">Prof. Jyoti Vakhlu	</td>
            <td>Biotechnology</td>
          </tr>
          <tr>
            <td>21.</td>
            <td>Environmental Science	</td>
            <td className="maroon-text">Dr. Raj Kumar Rampal	</td>
            <td>Environmental Science
</td>
          </tr>
          <tr>
            <td>22.</td>
            <td>Education, Teacher Education	</td>
            <td className="maroon-text">Prof. Rajeev Rattan Sharma	</td>
            <td>Education
</td>
          </tr>
          <tr>
            <td>23.</td>
            <td>Persian & Arabic	</td>
            <td className="maroon-text">Prof. Mustaq Ahmed	</td>
            <td>Govt. Degree College, Bhaderwah
</td>
          </tr>
          <tr>
            <td>24.</td>
            <td>Urdu</td>
            <td className="maroon-text">Prof. Shohab Inyat Malik	</td>
            <td>Urdu</td>
          </tr>
          <tr>
            <td>25.</td>
            <td>Dogri	</td>
            <td className="maroon-text">Prof. Shiv Dev Singh Manhas	</td>
            <td>Dogri</td>
          </tr>
          <tr>
            <td>26.</td>
            <td>Hindi</td>
            <td className="maroon-text">Prof. Neelam Saraf	</td>
            <td>Hindi</td>
          </tr>
          <tr>
            <td>27.</td>
            <td>English</td>
            <td className="maroon-text">Prof. Monika Sethi	</td>
            <td>English</td>
          </tr>
          <tr>
            <td>28.</td>
            <td>Buddhist Studies	</td>
            <td className="maroon-text">Dr. Ram Nadan Singh	</td>
            <td>Buddhist Studies
</td>
          </tr>
          <tr>
            <td>29.</td>
            <td>Punjabi	</td>
            <td className="maroon-text">Prof. Baljit Kaur	</td>
            <td>Punjabi</td>
          </tr>
          <tr>
            <td>30.</td>
            <td>Hospitality & Tourism Mgt.	</td>
            <td className="maroon-text">Prof. Parikshat Singh Manhas	</td>
            <td>SHTM</td>
          </tr>
          <tr>
            <td>31.</td>
            <td>Kashmiri	</td>
            <td className="maroon-text">Dean	</td>
            <td>Faculty of Arts
</td>
          </tr>
          <tr>
            <td>32.</td>
            <td>Business Management, Business Administration, Marketing Management	</td>
            <td className="maroon-text">Prof. Sameer Gupta	</td>
            <td>The Business School
</td>
          </tr>
          <tr>
            <td>33.</td>
            <td>Sanskrit	</td>
            <td className="maroon-text">Prof. Ram Bahadur	</td>
            <td>Sanskrit</td>
          </tr>
          <tr>
            <td>34.</td>
            <td>Law</td>
            <td className="maroon-text">Prof. Kulwant Singh	</td>
            <td>Law</td>
          </tr>
          <tr>
            <td>35.</td>
            <td>Music and Fine Arts	</td>
            <td className="maroon-text">PThe Principal	</td>
            <td>Institute of Music and Fine Arts, Poonch House, Talab Tillo, Jammu
</td>
          </tr>
          <tr>
            <td>36.</td>
            <td>Philosophy</td>
            <td className="maroon-text">Sh. Sanjay Kumar	</td>
            <td>Govt. College PG Women, Udhampur
</td>
          </tr>
          <tr>
            <td>37.</td>
            <td>Indian Music	</td>
            <td className="maroon-text">Sh. Samosh Kumar	</td>
            <td>Govt. Degree College (Boys), Udhampur
</td>
          </tr>
          <tr>
            <td>38.</td>
            <td>BAMS/BPT</td>
            <td className="maroon-text">The Principal	</td>
            <td>Govt. Medical College, Jammu
</td>
          </tr>
          <tr>
            <td>39.</td>
            <td>Engineering, MTech	</td>
            <td className="maroon-text">The Principal	</td>
            <td>Govt. College of Engineering  & Technology, Kot Bhalwal, Jammu
</td>
          </tr>
          <tr>
            <td>40.</td>
            <td>MD/MS/MBBS	</td>
            <td className="maroon-text">The Principal	</td>
            <td>Govt. Medical College, Jammu
</td>
          </tr>
          <tr>
            <td>41.</td>
            <td>Electronics</td>
            <td className="maroon-text"></td>
            <td>Electronics</td>
          </tr>
          <tr>
            <td>42.</td>
            <td>Museology</td>
            <td className="maroon-text">Prof. Poonam Chaudhary</td>
            <td>Centre for Studies in Museology
</td>
          </tr>
          <tr>
            <td>43.</td>
            <td>Rural Development	</td>
            <td className="maroon-text"></td>
            <td>DLL</td>
          </tr>
          <tr>
            <td>44.</td>
            <td>Women's Studies	</td>
            <td className="maroon-text">Dean</td>
            <td>Social Sciences
</td>
          </tr>
          <tr>
            <td>45.</td>
            <td>ICccR & HRM	</td>
            <td className="maroon-text">Prof. Deepak Raj Gupta</td>
            <td>ICccR & HRM
</td>
          </tr>
          {/* Add more rows for other conveners */}
        </tbody>
      </table>
    </div>
  );
};

export default BoardOfStudies;
