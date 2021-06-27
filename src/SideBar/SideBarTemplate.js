import React from "react";
import { Link, useLocation } from "react-router-dom";

import SideBarItem from "./SideBarItem";

function SideBar() {

  // URL의 path값을 받아올 수 있다.
  const pathName = useLocation().pathname;

  const menus = [
    { name: "CHAT BOT", path: "/" },
    { name: "건의 게시판", path: "/members" },
    { name: "도움말", path: "/cashes" }
  ];

  return (
    <div>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SideBarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}	// 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SideBar;