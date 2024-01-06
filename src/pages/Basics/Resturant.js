import React, { useState } from 'react'
import './Style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './navbar'

const uniqueList=[
    ...new Set (Menu.map((currElem)=>{
    return currElem.category
})
),'All',]





const Resturant = () => {
    const [menuData,setMenuData] = useState(Menu);
    const [menuList, setMenuList]=useState(uniqueList)
    
    
    const filterItem=(category)=>{
        if(category==='All'){
            setMenuData(Menu);
            return;
            
            }
        const updatedList= Menu.filter((currElem)=>{
            return currElem.category===category
        })
        
        
    setMenuData(updatedList)
       
    }
    
return (
    <>
    <Navbar filterItem={filterItem} menulist={menuList}/>
    <MenuCard MenuData={menuData}/>
   </>
  )
}

export default Resturant