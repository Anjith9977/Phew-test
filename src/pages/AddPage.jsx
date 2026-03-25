import React, { useState, useEffect } from "react";
import { addMenuApi, addItemApi, getMenusApi } from "../services/Allapi";
import { useNavigate } from "react-router-dom";

function AddPage() {

  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  const [menuData, setMenuData] = useState({
    name: "",
    description: "",
  });

  const [itemData, setItemData] = useState({
    name: "",
    description: "",
    price: "",
    menuId: "",
  });

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const res = await getMenusApi();
    setMenus(res.data);
  };

  // ADD MENU
  const AddMenu = async () => {
    const { name, description } = menuData;

    if (!name || !description) {
      alert("Menu name and description required");
      return;
    }

    const res = await addMenuApi(menuData);

    if (res.status === 201) {
      alert("Menu Added");
      setMenuData({ name: "", description: "" });
      fetchMenus();
      navigate("/");
    }
  };

  // ADD ITEM
  const AddItem = async () => {
    const { name, description, price, menuId } = itemData;

    if (!name || !description || !price || !menuId) {
      alert("All fields required");
      return;
    }

    const res = await addItemApi(itemData);

    if (res.status === 201) {
      alert("Item Added");
      setItemData({
        name: "",
        description: "",
        price: "",
        menuId: "",
      });
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#121618] text-white flex justify-center items-center px-4">

      <div className="w-full max-w-3xl space-y-8">

        <h1 className="text-3xl font-bold text-center">
          Add Menu & Items
        </h1>

        {/* Add menu*/}
        <div className="bg-black/50 p-6 rounded-lg border border-[#C5A059]">
          <h2 className="mb-4 text-lg font-semibold text-[#C5A059]">
            Add Menu
          </h2>

          <div className="flex flex-col md:flex-row gap-3">

            <input
              placeholder="Menu Name"
              value={menuData.name}
              onChange={(e) =>
                setMenuData({ ...menuData, name: e.target.value })
              }
              className="p-2 rounded text-white w-full"
            />

            <input
              placeholder="Menu Description"
              value={menuData.description}
              onChange={(e) =>
                setMenuData({ ...menuData, description: e.target.value })
              }
              className="p-2 rounded text-white w-full"
            />

            <button
              onClick={AddMenu}
              className="bg-[#C5A059] px-4 py-2 rounded text-black font-semibold"
            >
              Add
            </button>

          </div>
        </div>

        {/* Add item */}
        <div className="bg-black/50 p-6 rounded-lg border border-[#C5A059]">
          <h2 className="mb-4 text-lg font-semibold text-[#C5A059]">
            Add Item
          </h2>

          <div className="grid md:grid-cols-2 gap-3">

            <input
              placeholder="Item Name"
              value={itemData.name}
              onChange={(e) =>
                setItemData({ ...itemData, name: e.target.value })
              }
              className="p-2 rounded text-white"
            />

            <input
              placeholder="Price"
              value={itemData.price}
              onChange={(e) =>
                setItemData({ ...itemData, price: e.target.value })
              }
              className="p-2 rounded text-white"
            />

            <input
              placeholder="Description"
              value={itemData.description}
              onChange={(e) =>
                setItemData({ ...itemData, description: e.target.value })
              }
              className="p-2 rounded text-white md:col-span-2"
            />

            <select
              value={itemData.menuId}
              onChange={(e) =>
                setItemData({ ...itemData, menuId: e.target.value })
              }
              className="p-2 rounded  md:col-span-2"
            >
              <option className="text-white" value="">Select Menu</option>
              {menus.map((m) => (
                <option className="text-black" key={m._id} value={m._id}>
                  {m.name}
                </option>
              ))}
            </select>

          </div>

          <button
            onClick={AddItem}
            className="mt-4 bg-green-500 px-6 py-2 rounded font-semibold"
          >
            Add Item
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddPage;