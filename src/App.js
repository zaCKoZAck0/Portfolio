import logo from './logo.svg';
import './App.css';

const projects = [
  {
    name: "NFT Marketplace",
    technologies: ["Next.js", "Polygon"],
    tags: ["smart-contracts", "blockchain", "NFT-marketplace"],
    url: "",
    code: ""
  },
  {
    name: "E-Commerce Website",
    technologies: ["JS", "HTML", "CSS"],
    tags: ["Javascript"],
    url: "",
    code: ""
  }
]

const self = {
  name: "Ayush Kumar Yadav",
  education: "BTech 2018-2022",
  college: "PSIT College of Engineering",
  contact: {
    email: "mailto:id.ayushkryadav@gmail.com",
    phone: "+91 9198517250"
  }
}

const mySelf = <div>
  <h1>{self.name}</h1>
  <ul>
    <li>{self.college}</li>
    <li>{self.education}</li>
    <li>Contact</li>
    <ul>
      <li><a href={self.contact.email}>{self.contact.email.slice(7)}</a></li>
      <li>{self.contact.phone}</li>
    </ul>
  </ul>
</div>

const myProjects = projects.map((project) =>
  <ul key={project.name} className='projects'>
  <h4>{project.name}</h4>
  <li><a href=''>Try Here</a></li>
  <li>Made Using</li>
  <ul style={{display:"flex"}}>{project.technologies.map((tech) => <li>{tech}</li>)}</ul>
  <li>{project.tags.concat(project.technologies).map((tag) => 
  <a href=''>#{tag}</a>
  )}
  </li>
  <li><a href=''>GitHub</a></li>
  </ul>  
)

function App() {
  return (
    <div>
      {mySelf}
      <hr />
      <center><h2>PROJECTS</h2></center>
      <div style={{display:"flex"}}>
      {myProjects}</div>
      </div>
  );
}

export default App;
