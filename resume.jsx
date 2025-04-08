import React from "react";
import photo from './a.jpg';

const Resume = () => { return ( <div className="p-6 max-w-4xl mx-auto text-gray-800"> 
<div className="flex items-center justify-between mb-6"> <div> 
    <h1 className="text-4xl font-bold">AADI JAIN</h1> 
    <p className="text-sm">+91-8824462892 | 2022pictcsaadi001@poornima.org</p> 
    <p className="text-sm"> <a href="https://www.linkedin.com/in/aadi-jain-91646b272/"
     target="_blank" rel="noopener noreferrer"> LinkedIn 
     </a> | Jaipur, Rajasthan | Aadij005 </p> 
     </div>
     <img src={photo} alt="Aadi Jain" className="h-24 w-24 rounded-full" />
      </div>

<section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Summary</h2>
    <p>
      Engineering student with a passion for web development. Eager to skill in creating responsive and user-friendly web
      applications with hands-on experience in HTML, CSS, JAVASCRIPT and modern frameworks such as ReactJs, and continuously
      learning new technologies to enhance my development expertise.
    </p>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
    <ul className="list-disc ml-5">
      <li>Bachelors of Technology, Poornima Institute of Engineering & Technology, 2022 - 2026, CGPA: 9.1</li>
      <li>Class 12th, Shri Digamber Jain S.S.S.S School, 2020 - 2022, Percentage: 91.2%</li>
      <li>Class 10th, Shri Digamber Jain S.S.S.S School, 2018 - 2020, Percentage: 91.1%</li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
    <div>
      <h3 className="font-bold">REGex Software – MERN Stack Development (Jul 2024 - Sep 2024)</h3>
      <ul className="list-disc ml-5">
        <li>Completed a 60 days internship in MERN Stack Development.</li>
        <li>Learnt React, HTML, CSS, Node.js, Express.js, MongoDB, and REST API integrations.</li>
        <li>Minor Projects: Portfolio Page, AI Image Generator, Movie Land, Tic Tac Toe Game.</li>
      </ul>
      <h3 className="font-bold mt-4">Grras Solutions – Frontend Development (Aug 2023)</h3>
      <ul className="list-disc ml-5">
        <li>Learnt basics of React, HTML, CSS, Bootstrap, JS.</li>
        <li>Major Project: Weather App</li>
      </ul>
    </div>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
    <ul className="list-disc ml-5">
      <li>College Website – MongoDB, Node.js, React.js, Express.js, HTML, CSS, JS</li>
      <li>Weather Application – React, HTML, CSS, JS</li>
      <li>BMI Calculator – Python using tkinter</li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
    <p>C, C++, Core Java, OOPS, Python Basics, SQL, HTML, CSS, JS, ReactJs, PowerBI</p>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Achievements</h2>
    <ul className="list-disc ml-5">
      <li>Participated in SIH 2024</li>
      <li>Participated in Udbhav 2023</li>
    </ul>
  </section>

  <section className="mb-6">
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Languages</h2>
    <p>English (work proficiency), Hindi (Native or bilingual proficiency)</p>
  </section>

  <section>
    <h2 className="text-xl font-semibold border-b pb-1 mb-2">Certifications and Training</h2>
    <ul className="list-disc ml-5">
      <li>MERN Stack Development at REGex Software Services</li>
      <li>Certified in Python at REGex Software</li>
    </ul>
  </section>
</div>

); };

export default Resume;