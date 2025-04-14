function Button ({ children, color, type }) {
    return (
        <>
            <button className={'btn btn-'+ color}
                    type={type}
            >
                {children}
            </button>
        </>
    );
}

export default Button;