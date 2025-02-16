function Button({ children, onClick, className, type = "button" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="py-1.5 px-3 md:py-4 md:px-8 text-white text-sm bg-blue-600 font-bold rounded-lg border-black cursor-pointer"
        >
            {children}
        </button>
    );
}

export default Button;