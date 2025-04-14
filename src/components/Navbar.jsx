import Button from "./Button.jsx";

function Navbar () {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <form className='container-fluid' role='search'>
                    <div className='input-group'>
                        <a className='navbar-brand'>PROFILE</a>
                        <input className='form-control me-2' type='search' placeholder='e.g. JayMikee' aria-label='Search'/>
                        <Button color={'outline-success'} type={'submit'}>
                            Search
                        </Button>
                    </div>
                </form>
            </nav>
        </>
    );
}

export default Navbar;