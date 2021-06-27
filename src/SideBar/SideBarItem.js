import React from "react";

function SideBarItem({ menu, isActive }) {
  return isActive === true ? (
    <div>
      <p>{menu.name}</p>
    </div>
  ) : (
    <div>
      <p>{menu.name}</p>
    </div>
  );
}

export default SideBarItem;