function Form(){
    const handleSubmit = (event) =>{
        event.preventDefault();
        event.target.reset();
    };

    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Write your text here"
                />
                <button>
                    <span className="visuallyHidden">Submit</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
            </label>
        </form>
    );
}

export default Form;