const Button = ({ className = "", children, ...props }) => {
  return (
      <button
      {...props}
      className={` text-white rounded-md px-4 py-2 ${className}`}
      >
        {children}
      </button>
  );
};
export default Button 