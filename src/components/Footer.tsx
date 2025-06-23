import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/muhFaza" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mfaza/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://docs.google.com/document/d/1Nr7y7GWKfqORKh_Rdb1oacl5XKm4SW579_hpAVsiaZ4" target="_blank" rel="noreferrer"><DriveFileMoveIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;