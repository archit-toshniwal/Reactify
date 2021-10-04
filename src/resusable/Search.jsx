
const Search = () => {
    return(
    <div className="field is-grouped navbar-item">
        <p className="control is-expanded">
            <input className="input" type="text" placeholder="Find Products" />
        </p>
        <p className="control">
            <a className="button is-info is-light">
                <i className="fas fa-search"></i>
            </a>
        </p>
    </div>
    )
}


export default Search;
