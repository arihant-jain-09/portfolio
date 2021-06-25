import React from 'react'
import './Skills.scss'
import {ReactComponent as HexagonStraight} from '../../assets/hexagon-straight.svg'
import Section from '../../components/Section/Section'
const Skills = () => {
    return (<>
        <div className="skills__background">
            <div className="skills__background-hexagonstraight skills__background-element"><HexagonStraight/></div>
        </div>
        <div className='skills'>
            <div className="skills__section"><Section text="Skills">Skills</Section></div>

            <div className="skill">
                <div className="skills__content">
                    <div className="skills__name heading-5">REACT DEVELOPMENT</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">CSS & DESIGNING</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">NODEJS DEVELOPMENT</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">NPM PACKAGES</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">MONGODB DATABASE</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">WEBSITE DEPLOYMENT</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">NEXTJS</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">FIREBASE AND AUTH</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">LINUX</div>
                </div>
                <div className="skills__content">
                    <div className="skills__name heading-5">TYPESCRIPT</div>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Skills
