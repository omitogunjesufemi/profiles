import { useState} from "react";
import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";


function SearchBar() {
    const [query, setQuery] = useState('')
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmedQuery = query.trim();
        if (!trimmedQuery) {
            return ;
        }
        navigate(`/results?q=${encodeURIComponent(trimmedQuery)}`);
    }

    return (
        <form className='form-control d-flex justify-content-between' onSubmit={handleSearch}>
            <input className='border-0 text-reset' style={{width: '80%'}}
                 name='q' id='q'
                 type='search' placeholder='e.g. JayMikee.' value={query}
                 inputMode='search' aria-label='Search for artist'
                 onChange={(e) => setQuery(e.target.value)}
            />
            <Button color='secondary' type='submit'>Search</Button>
        </form>
    );
}

export default SearchBar;

{/*<div className='d-flex justify-content-between'>*/}
{/*    <h1>Featured Artist</h1>*/}
{/*    <form>*/}
{/*        <select className='form-select d-inline-block me-3' style={{width: '150px'}}>*/}
{/*            <option value='' disabled>Platform</option>*/}
{/*            <option value='web'>Web</option>*/}
{/*            <option value='mobile'>Mobile</option>*/}
{/*        </select>*/}
{/*        <select className='form-select d-inline-block' style={{width: '150px'}}>*/}
{/*            <option value='' disabled>Order by</option>*/}
{/*            <option value='popularity'>Popularity</option>*/}
{/*            <option value='latest'>Latest</option>*/}
{/*        </select>*/}
{/*    </form>*/}
{/*</div>*/}
