const SearchForm = ({onSubmit, value}) => {
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(e.target.elements.inputQuery.value)
        e.target.elements.inputQuery.value=''
}
    
    return (
        <form onSubmit={handleSubmit}>
                <label>
                    <input name='inputQuery' type="text" value={value} placeholder="Enter your request"/>
                </label>
                <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm