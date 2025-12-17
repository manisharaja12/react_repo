const Task=(task)=>{
    return (
        <div>
            <p> This is task  component</p>
            <ol>
                <li>Task are:</li>
                <ul>
                    <li>{task.item}</li>
                    <li>task</li>
                    </ul>
                </ol>
             </div>
            
    )
}
export default Task;