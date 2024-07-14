import Display from "./Display"

const FullStack=()=>{
    const array=[
        {
            "topic":"Best Full-Stack Development Project Ideas in 2024",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"
        },
        {
            "topic":"5 Tips For Secure Coding Practices in Full Stack Development",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-1.webp"
        },
        {
           "topic":"Exploring the Influence of AI and Machine Learning in Full Stack Development [2024]",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Influence-of-AI-and-Machine-Learning-in-Full-Stack-Development-.webp"
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
export default FullStack