import uniqid from 'uniqid'
import { LinkedIn, Facebook, Twitter, Instagram, House, Launch } from '@material-ui/icons'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.linkedin && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.linkedin}
        aria-label='client'
        className='link link--icon'
      >
        <LinkedIn />
      </a>
    )}

    {project.facebook && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.facebook}
        aria-label='client'
        className='link link--icon'
      >
        <Facebook />
      </a>
    )}

    {project.twitter && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.twitter}
        aria-label='client'
        className='link link--icon'
      >
        <Twitter />
      </a>
    )}

    {project.instagram && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.instagram}
        aria-label='client'
        className='link link--icon'
      >
        <Instagram />
      </a>
    )}

    {project.company && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.company}
        aria-label='client'
        className='link link--icon'
      >
        <House />
      </a>
    )}

    {project.livePreview && (
      <a
        rel="noreferrer"
        target="_blank"
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <Launch />
      </a>
    )}
  </div>
)

export default ProjectContainer
