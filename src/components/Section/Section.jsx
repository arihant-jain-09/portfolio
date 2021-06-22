import './Section.scss'
const Section = ({text,children}) => {
    return (
        <div className="section">
            <div className="section__background-text">{text}</div>
            <div className="section__text">{children}</div>
        </div>
    )
}
export default Section
