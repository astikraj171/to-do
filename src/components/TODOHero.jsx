function TODOHero({todo_completed}, {total_todos}){
    return(
        <section>
            <div>
                <p>Task done</p>
                <p>Keep it up</p>
            </div>
            <div>
                {todo_completed}/{total_todos}
            </div>
        </section>
    );
}

export default TODOHero;