import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {searchArtists} from "../services/SpotifyService.jsx";

function SearchResult() {
    const [artistsLists, setArtists] = useState([]);
    const [listLength, setLength] = useState(0);
    const [pageIndex, setPageIndex] = useState(1);
    const [offset, setOffset] = useState(0);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const location = useLocation();

    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
        async function getArtists () {
            setLoading(true);
            try{
                const results = await searchArtists(query, offset);
                setArtists(results.artists.items);
                setLength(results.artists.total);
                setPrevUrl(results.artists.previous);
                setNextUrl(results.artists.next);
            }
            catch (err) {
                setError(err);
                console.log(`Error message: ${error}`);
            }
            finally {
                setLoading(false);
            }

        }

        if (query) {
            getArtists();
        }
    }, [query, offset]);

    function handlePrev () {
        if (prevUrl) {
            setOffset(prev => Math.max(prev - 20, 0));
            setPageIndex(prev => prev - 1);
        }
    }

    function handleNext () {
        if (nextUrl) {
            setOffset(prev => prev + 20);
            setPageIndex(prev => prev + 1);
        }
    }

    console.log(artistsLists);

    return(
        <div className='container'>
            <h2 className='mt-5 mb-3'>Results for "{query}"</h2>
            {loading ? (<p>Loading...</p>) :
                (<div className='row'>
                    {artistsLists.map((artist) => (
                        <div key={artist.id}
                             className='col-sm-6 col-md-4 col-lg-3 mb-4'>
                            <div className='card h-100'>
                                <img className='card-img-top'
                                     src={artist.images?.[2]?.url || artist.images?.[0]?.url || 'https://via.placeholder.com/150'}
                                     alt={artist.name} width={200} height={200}
                                />
                                <div className='card-body'>
                                    <h5 className='card-title'>{artist.name}</h5>
                                    <p className='card-text'>Followers: {artist.followers.total}</p>
                                    <a href='#' className='btn btn-primary'>Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)
            }

            <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' aria-label='Previous' onClick={handlePrev}>
                            <span aria-hidden='true'>&laquo;</span>
                            {/*<span className='sr-only'>Previous</span>*/}
                        </a>
                    </li>
                    <li className='page-item active'><a className='page-link' >{pageIndex}</a></li>
                    <li className='page-item'>
                        <a className='page-link' aria-label='Next' onClick={handleNext}>
                            <span aria-hidden='true'>&raquo;</span>
                            {/*<span className='sr-only'>Next</span>*/}
                        </a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default SearchResult;