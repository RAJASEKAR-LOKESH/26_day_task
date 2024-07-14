import Display from "./Display"

const Security=()=>{
    const array=[
        {
            "topic":"Database Security: 8 Best Practices That You Should Follow",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/06/DOM-Scripting-Techniques-for-Modern-Web-Development-1536x596.webp"
        },
        {
            "topic":"How Is Cyber Security Important To Our Lives?",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2020/11/cyber-security-1170x480.png"
        },
        {
           "topic":"Top 25 Real-Time Cybersecurity Project Ideas!",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2022/03/real-time-Cybersecurity-projects-2.png"
        }
    ]
    return(
        
        <div className="App">
            {
                array.map((element)=><Display poster={element.poster} topic={element.topic}/>)
            }
        </div>
    )
}
export default Security