import Display from "./Display"
const Career=()=>{
    const array=[
        {
            "topic":"9 Most Creative Data Engineering Project Ideas To Kickstart Your Career",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/03/9-Creative-Data-Engineering-Project-Ideas-To-Kickstart-Your-Career.webp"
        },
        {
            "topic":"Data Engineering Career Roadmap: 7 Things You Should Know About!",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/09/Featured-Image-Data-Engineering-Career-Roadmap_-Things-You-Should-Know-About.webp"
        },
        {
           "topic":"Best Full-Stack Development Project Ideas in 2024",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"
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
export default Career