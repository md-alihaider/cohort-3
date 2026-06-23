
const Button = () => {
  return (
    <button className="btn-wave-dark group">
      {/* The span uses z-10 to stay on top of the ::after pseudo-element */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        Click me
      </span>
    </button>
  );
};

export default Button;
