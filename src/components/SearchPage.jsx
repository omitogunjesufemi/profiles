import SearchBar from "./SearchBar.jsx";

function SearchPage() {
    return(
        <div className='container' style={{height: '80vh'}}>
            <div className='row align-items-center justify-content-center w-100' style={{height: '80vh'}}>
                <div className='col-12 col-md-6'>
                    <SearchBar />
                </div>
            </div>
        </div>
    );
}

export default SearchPage;