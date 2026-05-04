import React from 'react';
import './yoga.css';

const Yoga = () => {
  return (
    <div className="yoga-container">
      <h1>Yoga Centre</h1>
      <p>
        Yoga Centre was established in the University of Jammu on Dec. 15th, 1998
        vide University order No. 98/11/642/526-31 dated . 15-12-1998 under
        resolution No. 18 passed by the syndicate at its meeting held on
        2-4-1999. Yoga Centre has been offering various courses and a large
        number of persons including University teachers, students, scholars,
        citizens, and professionals have successfully undergone these courses.
      </p>
      <table className="yoga-table">
        <thead>
          <tr>
            <th colSpan="3">List of Courses:</th>
          </tr>
          <tr>
            <th>S.No.</th>
            <th>Name of the Course</th>
            <th>Time Period</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>1 Year Diploma Course</td>
            <td>9th Sept. - 9th Sept.</td>
            <td>Rs. 1520.00/-</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>General Class</td>
            <td>Throughout the year</td>
            <td>Rs. 50/- per month</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Counselling</td>
            <td>Throughout the year</td>
            <td>Free</td>
          </tr>
        </tbody>
      </table>
      <h2>Timings:</h2>
      <table className="yoga-table">
        <thead>
          <tr>
            <th colSpan="2">Timing In Summer</th>
            <th colSpan="2">Timing in Winter</th>
          </tr>
          <tr>
            <th>Practical</th>
            <th>Theory</th>
            <th>Practical</th>
            <th>Theory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5.30 am - 6.30 am</td>
            <td>6.30 am - 7.30 am</td>
            <td>6.00 am - 7.00 am</td>
            <td>7.00 am - 8.00 am</td>
          </tr>
          <tr>
            <td>3.30 pm - 4.30 pm</td>
            <td>4.30 pm - 5.30 pm</td>
            <td>3.00 pm - 4.00 pm</td>
            <td>4.00 pm - 5.00 pm</td>
          </tr>
        </tbody>
      </table>
      <h2>Venue:</h2>
      <div className="image-container">
        <img src="images/smallYoga_Centre.jpg" alt="" />
        <div className="caption">Yoga Centre</div>
      </div>
      <p>
        Practical and theory classes are conducted in the conditioning hall of
        the Directorate of Physical Education (Opp. Yoga Center), University of
        Jammu, Jammu. The meditation camps are organised twice in a year. The
        special yoga classes for children are being organised in summer
        vacation. The admission and counselling are done in Yoga Center.
      </p>
    </div>
  );
};

export default Yoga;
