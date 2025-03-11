"use client";

const NavLink = ({ href, children, target }) => {
  return (
    <a className="link link-hover" href={href} target={target}>
      {children}
    </a>
  );
};

export default NavLink;
