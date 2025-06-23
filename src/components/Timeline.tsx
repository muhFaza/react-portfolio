import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* NVX */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="April 2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">BTSE.ID (NVX) - Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Jakarta, Indonesia</h4>
            <p>
              Built a Web3 launchpad from scratch with React.js, Expo, Node.js and PostgreSQL. Maintained their Crypto Exchange platform with Laravel and PHP. Currently working on internal reporting tools and APIs.
            </p>
          </VerticalTimelineElement>

          {/* SAVART */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January - March, 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Savart EV - Junior Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sidoarjo, Indonesia</h4>
            <p>
              Maintained and developed mobile application and implemented GPS tracking feature with OpenStreetMap for their electric motorcycles (React Native & Golang).
            </p>
          </VerticalTimelineElement>

          {/* HACKTIV8 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="August - November, 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Hacktiv8 Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">Surabaya, Indonesia</h4>
            <p>
              Joined Hacktiv8 Bootcamp and learned Full Stack Web Development with Javascript and Golang. Completed 4 projects and participated in 2 hackathons.
            </p>
            <p style={{ fontSize: '14px' }}>Score - 99.70%</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;