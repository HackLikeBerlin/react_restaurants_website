import React from 'react'
const MenuCard = ({MenuData}) => {
    
    return (
    <>
    <section className='main-card--cointainer'>
    {MenuData.map((elem)=>{
        const {id,name,image,description}=elem
         return(
        <>
         <div className='card-container' key={elem.id} >
                <div className='card'>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        {/* inline css used this */}
                        <span className='card-author subtle' style={{color:"red"}}>BreakFast</span> 
                        <h2 className='card-title'>{name}</h2>
                        <span className='card-description subtle'>
                           {description}
                        </span>
                        <div className='card-read'>Read</div>
                    </div>
                    <img src={image} alt="" className='card-media' />
        
                    <span className='card-tag subtle' >Order Now</span>
                </div>
               </div>
               </> 
            )
       
    })}
    </section>
    </>
  )
}

export default MenuCard