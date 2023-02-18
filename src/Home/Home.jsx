import React from "react";
import "./home.css";
import photo from "../image/imgs.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <img className="images" src={photo} alt="" />
        <h1 className="username">Diane Cooper</h1>
        <p className="useremail">diane.cooper@example.com</p>
        <p className="pastN">15</p>
        <hr className="line" />
        <p className="UpcommingN">02</p>
        <p className="past">Past</p>
        <p className="upcomming">Upcomming</p>
        <button className="btn">Send Message</button>
        <p className="documents">Files / Documents</p>
        <div className="first">Check Up Result.pdf</div>
        <div className="second">Check Up Result.pdf</div>
        <div className="third">Medical Prescription.pdf</div>
        <div className="fourth">Dental X-Ray Result.pdf</div>
      </div>
      <div className="home2">
        <p className="gender">Gender</p>
        <p className="female">Female</p>
        <span className="border-line  "></span>
        <p className="birth">Birthday</p>
        <p className="birthdate">Feb 24th, 1997</p>
        <span className="border-line2 "></span>
        <p className="Number">Phone Number</p>
        <p className="NumberP">(239) 555-0108</p>
        <span className="border-line3 "></span>
        <p className="Register">Registered Date</p>
        <p className="RegisterDate">Feb 24th, 1997</p>
        <span className="border-line4 "></span>
        <p className="street">Street Address</p>
        <p className="streetadress">JL. Diponegoro NO.21</p>
        <span className="border-line5 "></span>
        <p className="city">City</p>
        <p className="cityN">Cilacap</p>
        <span className="border-line6 "></span>
        <p className="zib">Zib Code</p>
        <p className="zibN">655849</p>
        <span className="border-line7 "></span>
        <p className="member">Member Status</p>
        <p className="memberact">Active Member</p>
        <span className="border-line8 "></span>
        <div className="part1">
          <div className="part2">Upcommig Appointments</div>
          <p>Past Appointments</p>
          <p>Medical Records</p>
        </div>
        <div className="nextpart">
          <p className="heading">Root Canal Treatment</p>
          <div className="btn2"> <p>Show Previous Treaments</p></div>
          <span className="straight"></span>
          <div className="nextpart1">
            <h2 className="dates">26 Nov 19</h2>
            <p className="afterdates">09.00 - 10.00</p>
             <hr className="Ol"/>
             <p className="treat">TreatMent</p>
             <h3 className="Treat">Open Access</h3>
             <hr className="Ol1"/>
             <p className="den">Dentist</p>
             <h4 className="denT">Drg.Adam H.</h4>
             <p className="nurse">Nurse</p>
             <p className="nurseT">Jessicamila</p>
             <h3 className="Note">Note</h3>
          </div>
          <div className="nextpart2">
          <h2 className="dates1">26 Nov 19</h2>
            <p className="afterdates2">09.00 - 10.00</p>
             <hr className="Ol2"/>
             <p className="treat1">TreatMent</p>
             <h3 className="Treat1">Open Access</h3>
             <hr className="Ol3"/>
             <p className="den1">Dentist</p>
             <h4 className="denT1">Drg.Adam H.</h4>
             <p className="nurse1">Nurse</p>
             <p className="nurseT1">Jessicamila</p>
             <h3 className="Note1">Note</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
