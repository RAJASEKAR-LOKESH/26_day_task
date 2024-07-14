import { Link } from "react-router-dom"

const Navbar=()=>{
    const navstyle={
        display:"flex",
        justifyContent:"center",
        borderBottom:"2px solid grey",
        padding:"10px"
    }
    return(
        <>
        <div style={navstyle}>
            <div className="con-style"><Link to='/Content' className="con-style">ALL</Link></div>
            <div className="con-style"><Link to='/FullStack' className="con-style">FULL STACK DEVELOPMENT</Link></div>
            <div className="con-style"><Link to='/DataScience' className="con-style">DATA SCIENCE</Link></div>
            <div className="con-style"><Link to='/Security' className="con-style">SECURITY</Link></div>
            <div className="con-style"><Link to='/Career' className="con-style">CAREER</Link></div>
        </div>
        </>
    )
}
export default Navbar