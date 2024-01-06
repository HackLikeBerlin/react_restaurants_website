import React from 'react'

const Navbar = ({filterItem,menulist}) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
            {
                menulist.map((currElem)=>{
                    return (
                    <button className='btn-group__item' type='button' 
                    onClick={()=>filterItem(currElem)}>{currElem}</button>
                    )
                })
            }
            
           
        </div>
    </nav>
    </>
  )
}

export default Navbar