import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, BusinessCenter } from '@mui/icons-material'
import '../styles/Experience.css'

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2015-2019'
                    iconStyle={{ background: '#3e497a', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className='vertical-timeline-element-title'>Bharati Vidyapeeth, College of Enginnering Pune</h3>
                    <p>Bachelor of Technology-Mechanical</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--office'
                    date='2019-2022'
                    iconStyle={{ background: '#fcd703', color: '#fff' }}
                    icon={<BusinessCenter />}
                >
                    <h3 className='vertical-timeline-element-title'>Tata Consultancy Services,Mumbai</h3>
                    <p>Associate Software Engineer/Software Engineer-1</p>
                    <ol>
                        Projects:
                        <li><p><strong>Trafigura</strong></p></li>
                    </ol>

                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className='vertical-timeline-element--office'
                    date='2022-Present'
                    iconStyle={{ background: '#fcd703', color: '#fff' }}
                    icon={<BusinessCenter />}
                >
                    <h3 className='vertical-timeline-element-title'>Accenture Technologies,Mumbai</h3>
                    <p>Software Engineer-2</p>
                    <ol>Projects:
                        <li><p><strong>Fidelity-CloudVault, UK</strong></p></li>
                        <li><p><strong>DHL, Singapore</strong></p></li>
                        <li><p><strong>Centene, USA</strong></p></li>
                    </ol>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience