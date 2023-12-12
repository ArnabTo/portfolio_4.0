
const Education = () => {
    return (
        <div className=" max-w-6xl mx-auto mb-4">
        <header className="text-white font-bold text-4xl font-[Montserrat] m-4">Services.</header>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-start md:text-end mb-10 text-white font-[monospace]">
            <time className="italic">2019-2021</time>
            <div className="text-lg font-black">Higher Secondary Certificate</div>
            National College of Education, Narsingdi
          </div>
          <hr className="bg-white"/>
        </li>
        <li>
          <hr className="bg-white" />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
          </div>
          <div className="timeline-end mb-10 text-white font-[monospace]">
            <time className="font-mono italic">2022 - Present</time>
            <div className="text-lg font-black">Bachelor of Science (B.S.) in Physic</div>
            GOVT. TITUMIR COLLEGE, DHAKA,
            BANGLADESH
          </div>
          <hr className="bg-white"/>
        </li>
      </ul>
        </div>
    );
};

export default Education;