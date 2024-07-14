import Display from "./Display"
const Content=()=>{
    const array=[
        {
            "topic":"Python Objects 101: How to Create and Master Them With Real-World Projects",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/05/image.png"
        },
        {
            "topic":"Machine Learning Must-Knows: Reliable Models and Techniques",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/05/image-13.png"
        },
        {
           "topic":"Best Natural Language Processing (NLP) Books to Read in 2024",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2023/06/casestudy-natural-language-processing-banner-1536x691.jpeg"
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
export default Content