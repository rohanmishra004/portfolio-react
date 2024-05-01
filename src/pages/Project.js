import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../helpers/ProjectList'
import '../styles/Projects.css'


function Project() {
    return (
        <div className='projects'>
            <h1>My Personal Project</h1>
            <div className='projectList'>
                {ProjectList.map((project, index) => {
                    return (
                        <ProjectItem id={index} name={project.name} image={project.image} skills={project.skill} link={project.link} />
                    );
                })}
            </div>
        </div>
    )
}

export default Project