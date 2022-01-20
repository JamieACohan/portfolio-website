import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2014 - Sept 2015</h3>
            <h4>The Old Mill - Sales Assistant</h4>
            <ul>
              <li>Ensuring that orders where processed on time </li>
              <li>Keeping track of alcohol levels and that bar was always fully stocked</li>
              <li>Maintaining a high level of customer service</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Oct 2015 - May 2017</h3>
            <h4>Dunnes Stores - Lounge Staff</h4>
            <ul>
              <li>Ensuring high levels of customer satisfaction through excellent sales service </li>
              <li>Maintaining outstanding store condition and visual merchandising standards </li>
              <li>Assist with the sales process by maintaining a fully stocked store</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2017 - Sept 2017</h3>
            <h4>Sysnet Global Solutions - Call Center Agent</h4>
            <ul>
              <li>Support and provide superior PCI DSS support via telephone, emails and chats (instant messaging) by handling all incoming interactions, and outgoing interactions when required </li>
              <li>Provide the highest level of customer service when interacting with merchants. </li>
              <li>Assist merchants through their profile to determine merchant SAQ and scan requirements.</li>
              <li>Assist merchants through their annual PCI DSS self-assessment questionnaire (SAQ A & B); which in turn will determine merchant PCI – SAQ compliance status when required. </li>
              <li>Schedule external vulnerability scans using the Sysnet Scan Management System (SMS) and provide basic troubleshooting/escalation in the event of a non-compliant scan result. </li>
              <li>Assist merchants with their annual attestation of compliance (AOC) and renew merchant PCI DSS compliance annually when required. </li>
              <li>Identify and escalate interactions that they are unable to deal with to an appropriate colleague and/or raise a case. </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Oct 2017 - Jan 2018</h3>
            <h4>Paddy Power - Call Center Agent</h4>
            <ul>
              <li>To respond to customer betting requests in a prompt and efficient manner </li>
              <li>Respond to customer queries via phone, email, text and chat and any other communication means that may be introduced to accommodate business needs </li>
              <li>To process customer transactions through our computerised betting system</li>
              <li>Understand and implement company procedures </li>
              <li>Register new customer account details while ensuring a first class service </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan 2018 - Aug 2018</h3>
            <h4>Verifone - Embedded linux Engineer Intern</h4>
            <ul>
              <li>Setup, evaluate, and optimize tools to auto-fuzz software performance </li>
              <li>Made use of Docker by migrating large scale legacy build environment to a container to improve efficiency and robustness </li>
              <li>Created a number of CUnit tests to be run automatically as part of automated test suite</li>
              <li>Optimized performance of tools using bash and python scripts </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jul 2018 - Jul 2019</h3>
            <h4>BOC Gases - Call Center Agent</h4>
            <ul>
              <li>Troubleshooting customer queries over the phone</li>
              <li>Processing calls from customers, assisting with queries, technical troubleshooting, delivery inquiries</li>
              <li>Maintaining effective communication with internal and external customers is essential to maximizing delivery success and overall customer satisfaction.</li>
              <li> Ongoing awareness and involvement in safety, health, environment and quality</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Oct 2019 - Present</h3>
            <h4>Verizon Connect - Backend Developer/QA Engineer</h4>
            <ul>
              <li>Setup, monitoring and maintaining the DevOps CI/CD pipeline</li>
              <li>Test and Test Automation framework development, maintenance, support</li>
              <li>Defining, Monitoring and Reporting QA KPI's</li>
              <li>Deployed and managed latest releases using Octopus Deploy and Bamboo</li>
              <li>Identify issues relating to backend micro services and develop solutions to validate and enrich the data coming from vehicles.</li>
              <li>Innovation projects, creating tools to increase the quality of our day to day work, like validation and tracing of messages in our distributed pipeline.</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
