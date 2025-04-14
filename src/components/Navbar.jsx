import Button from "./Button.jsx";

function Navbar () {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light'>
                <form className='container-fluid' role='search'>
                    <div className='container-sm d-inline-flex'>
                        <a className='navbar-brand'>Profile</a>
                        <div className='input-group'>
                            <input className='form-control me-2' type='search' placeholder='e.g. JayMikee' aria-label='Search'/>
                            <Button color={'outline-success'} type={'submit'}>
                                Search
                            </Button>
                        </div>
                    </div>
                </form>
            </nav>
        </>
    );
}

export default Navbar;