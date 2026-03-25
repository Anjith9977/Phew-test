import React from "react";

function MenuTabs({ menus, selectedMenu, setSelectedMenu }) {
  return (
    <div className="bg-[#121618] py-6 flex justify-center gap-4 flex-wrap">

      {menus.map((menu) => (
        <button
          key={menu._id}
          onClick={() => setSelectedMenu(menu._id)}
          className={`px-6 py-2 border text-sm tracking-wide
            ${
              selectedMenu === menu._id
                ? "bg-[#C5A059] text-black border-[#C5A059]"
                : "text-white border-gray-600 hover:border-[#C5A059] hover:text-[#C5A059]"
            }
          `}
        >
          {menu.name.toUpperCase()}
        </button>
      ))}

    </div>
  );
}

export default MenuTabs;