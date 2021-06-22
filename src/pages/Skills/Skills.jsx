import React from 'react'
import './Skills.scss'
import {ReactComponent as HexagonStraight} from '../../assets/hexagon-straight.svg'
import {ReactComponent as RectLine} from '../../assets/rectline.svg'
import Section from '../../components/Section/Section'
const Skills = () => {
    return (<>
        <div className="skills__background">
            <div className="skills__background-hexagonstraight skills__background-element"><HexagonStraight/></div>
        </div>
        <div className='skills'>
            <div className="skills__section"><Section text="Skills">Skills</Section></div>
            <div className="skills__content skills__content-1  skills__content-type1">
                <div className="skills__name heading-5">REACT DEVELOPMENT</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-2 skills__content-type2">
                <div className="skills__name heading-5">CSS & DESIGNING</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-3 skills__content-type1">
                <div className="skills__name heading-5">NODEJS DEVELOPMENT</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-4 skills__content-type2">
                <div className="skills__name heading-5">NPM PACKAGES</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-5 skills__content-type1">
                <div className="skills__name heading-5">MONGODB DATABASE</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-6 skills__content-type2">
                <div className="skills__name heading-5">WEBSITE DEPLOYMENT</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-7 skills__content-type1">
                <div className="skills__name heading-5">NEXTJS</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-8 skills__content-type2">
                <div className="skills__name heading-5">FIREBASE AND AUTH</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-9 skills__content-type1">
                <div className="skills__name heading-5">LINUX</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
            <div className="skills__content skills__content-10 skills__content-type2">
                <div className="skills__name heading-5">TYPESCRIPT</div>
                <div className="skills__rectline"><RectLine/></div>
            </div>
        </div>
        </>
    )
}

export default Skills
