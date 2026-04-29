const Button = ({ className = "", children, ...props }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        className={`m-4 text-white rounded-md px-4 py-2 ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};
export default Button 