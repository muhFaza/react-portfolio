import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faNodeJs, faLaravel, faGolang, faAws, faVuejs, faCss3, faHtml5, faGit, faJava } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
// import { faCode, faCodeBranch, faDatabase, faNetworkWired, faWifi, faWifi3 } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Node.js/Express",
    "PHP/Laravel",
    "Golang",
    "Java Spring Boot",
    "AWS",
    "Docker",
    "PostgreSQL & MySQL",
    "Sequelize",
    "MongoDB",
    "GraphQL",
    "API Testing",
];

const labelsSecond = [
    "React",
    "React Native",
    "Expo",
    "Vue",
    "Next.js",
    "Jquery",
    "Redux",
    "Pinia",
    "Zustand",
    "TailwindCSS",
    "Bootstrap",
];

const labelsThird = [
    "Server Deployment",
    "Docker",
    "AWS",
    "API",
    "Git",
    "UI/UX Figma",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                        <FontAwesomeIcon icon={faLaravel} size="3x"/>
                        <FontAwesomeIcon icon={faGolang} size="3x"/>
                        <FontAwesomeIcon icon={faJava} size="3x"/>
                    </div>
                    <h3>Backend Web Development</h3>
                    {/* <p>Experience in building backend applications from scratch to production using Node.js, Express, PHP, Laravel, Golang, Java Spring Boot, and AWS. Integrating third-party APIs</p> */}
                    <p>Specialized in building secure, scalable backend systems using Node.js, Golang, and PHP. Intergrating SQL and NoSQL databases to power web applications.<br /> <br />My work includes integrating third-party APIs, implementing security best practices, contributed to an ISO 27001:2022 certification, and creating clear API documentation with Swagger.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faReact} size="3x"/>
                        <FontAwesomeIcon icon={faVuejs} size="3x"/>
                        <FontAwesomeIcon icon={faHtml5} size="3x"/>
                        <FontAwesomeIcon icon={faCss3} size="3x"/>
                    </div>
                    <h3>Frontend Web Development</h3>
                    <p>Experienced in developing user-friendly web and mobile interfaces using modern frameworks like React, React Native, and Vue.js. <br /><br />I excel at translating UI/UX designs from Figma into responsive and production-ready mobile and web applications. My experience ranges from building a platform for a Web3 launchpad to an internal admin systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faDocker} size="3x"/>
                        <FontAwesomeIcon icon={faAws} size="3x"/>
                        <FontAwesomeIcon icon={faGit} size="3x"/>
                    </div>
                    <h3>Devops & others</h3>
                    <p>Well-versed in development lifecycle tools and practices, including containerization with Docker and working in agile sprints with Jira. <br /><br />I have contributed to key security and compliance initiatives like the ISO 27001 certification. My additional skills include UI/UX design with Figma and foundational network modeling with Cisco Packet Tracer.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;