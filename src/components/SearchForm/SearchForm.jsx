import PropTypes from 'prop-types';

import { SearchInput, SearchFormEl, SearchButton, SearchIcon} from './SearchForm.styled';

const SearchForm = ({ onSubmit, value }) => {
   
    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(e.target.elements.inputQuery.value.trim())
        e.target.elements.inputQuery.value=''
}
    
    return (
        <SearchFormEl onSubmit={handleSubmit}>
                <label>
                    <SearchInput name='inputQuery' type="text" placeholder="Enter your request"/>
                </label>
                <SearchButton type="submit"><SearchIcon /></SearchButton>
        </SearchFormEl>
    )
}

export default SearchForm

SearchForm.propTypes = {
    onSubmit: PropTypes.func,
    value:PropTypes.string
}