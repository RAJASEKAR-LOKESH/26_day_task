import Display from "./Display"
const DataScience=()=>{
    const array=[
        {
            "topic":"Major Differences Between Big Data and Data Science [2024]",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/07/Differences-Between-Big-Data-and-Data-Science.webp"
        },
        {
            "topic":"Understanding the Data Science Process: A Comprehensive Guide [2024]",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/07/The-Relationship-Between-Data-Science-and-Artificial-Intelligence.webp"
        },
        {
           "topic":"What is the Data Science Life Cycle?",
            "poster":"https://www.guvi.in/blog/wp-content/uploads/2024/07/Data-Science-Life-Cycle.webp"
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
export default DataScience