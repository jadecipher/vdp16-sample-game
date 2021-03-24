import React from 'react';

const LeftNav = () => (
  <div id="left-nav">
    <a
      href="https://www.linkedin.com/in/burnsmich/"
      target="_blank"
      without
      rel="noopener noreferrer"
    >
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
        alt="linkedin icon"
      />
    </a>
    <a
      color="inherit"
      href="https://github.com/michslush"
      target="_blank"
      without
      rel="noopener noreferrer"
    >
      <img
        className="logo"
        src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
        alt="GitHub icon"
      />
    </a>
    <a
      href="mailto:michaelaburns0@gmail.com?Subject=Hi%20Michaela!"
      target="_blank"
      without
      rel="noopener noreferrer"
    >
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
        alt="email icon"
      />
    </a>
  </div>
);

export default LeftNav;
