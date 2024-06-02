import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="/assets/icon.svg"
        alt="logo"
        className="logoIcon"
      />
      <h1 className="logoText">
        {"Let's"} <strong>DO</strong> it!
      </h1>
    </div>
  );
};

export { Logo };
