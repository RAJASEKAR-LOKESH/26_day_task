const Display=(props)=>{
    const img_style={width:"400px",height:"250px",marginBottom:"25px"}
    const con_style={paddingLeft:"30px",paddingRight:"25px",fontSize:"20px",opacity:"0.9",marginBottom:"5px"   }
    return(
        <>
            <div className="display">
                <img src={props.poster} alt="" style={img_style}/>
                <div style={con_style}>{props.topic}</div>
            </div>
        </>
    )
}
export default Display