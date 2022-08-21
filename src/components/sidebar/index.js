import React from 'react'
import Logo from '../../assets/logo.png'
export default function Sidebar() {
    const menu = [
        { name:"Home", icon:''},
        {name:"Accounts", icon:''},
        {name:"Cards", icon:''},
        {name:"Contacts", icon:''},
        {name:"Loan Calculator", icon:''},
        {name:"Settings", icon:''},
    ]
  return (
    <div className='h-screen border-r border-gray-200 w-64 px-9'>
        <div className='flex flex-row items-center'>
            <img src={Logo} alt="Logo" className='w-9 h-9' />
            <div>Olith Banking</div>
        </div>
        <div>
            <div className='mb-4'>Menu</div>
            <ul>
            {
                menu.map((val, index) => {
                    return <li key={index} className='mb-7'>{val.name}</li> 
                })
            }
            </ul>
        </div>
    </div>
  )
}
