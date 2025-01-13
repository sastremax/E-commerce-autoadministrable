function Button({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="py-2 px-4 md:py-3 md:px-6 bg-blue-500 text-white font-bold text-sm md:text-base rounded-lg cursor-pointer shadow-md hover:opacity-50 focus:shadow-2xl border-none outline-none">
            {children}
        </button>
    );
}

export default Button;