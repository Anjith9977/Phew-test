import React from 'react'
import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import MenuTabs from '../Components/MenuTabs'
import { getMenusApi, getItemsApi } from '../services/Allapi'
import { useState } from 'react'
import { useEffect } from 'react'
import MainTab from '../Components/MainTab'
import Footer from '../Components/Footer'

function Home() {

    const [menus, setMenus] = useState([])
    const [selectedMenu, setSelectedMenu] = useState(null)
    const [items, setItems] = useState([])

    useEffect(() => {
        fetchMenus()
    }, [])

    const fetchMenus = async () => {
        const res = await getMenusApi()
        const menuList = res.data

        setMenus(menuList)
        
        if (menuList.length > 0) {
            const firstMenuId = menuList[0]._id
            setSelectedMenu(firstMenuId)

            const itemRes = await getItemsApi(firstMenuId)
            setItems(itemRes.data)
        }
    }

    const MenuClick = async (menuId) => {
        setSelectedMenu(menuId)
        const res = await getItemsApi(menuId)
        console.log(res);

        setItems(res.data)
    }


    return (
        <div>
            <Header />
            <HeroSection />
            <MenuTabs menus={menus} selectedMenu={selectedMenu} setSelectedMenu={MenuClick} />
            <MainTab items={items} />
            <Footer/>

        </div>
    )
}

export default Home