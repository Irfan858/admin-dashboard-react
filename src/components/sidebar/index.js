import React from 'react'
import Logo from '../../assets/logo.png'
import { BiHomeAlt, BiGridAlt, BiCreditCardAlt, BiUser, BiCalculator, Bi } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
export default function Sidebar() {
    const menu = [
        { name: "Home", icon: <BiHomeAlt /> },
        { name: "Accounts", icon: <BiGridAlt /> },
        { name: "Cards", icon: <BiCreditCardAlt /> },
        { name: "Contacts", icon: <BiUser /> },
        { name: "Loan Calculator", icon: <BiCalculator /> },
        { name: "Settings", icon: <IoSettingsOutline /> },
    ]

    const schedulePayment = ["Monthly Rent", "Food Payment", "Utility Payment"]

    return (
        <div className='h-screen border-r border-gray-200 w-64 px-9 py-9 space-y-8'>
            <div className='flex flex-row items-center'>
                <img src={Logo} alt="Logo" className='w-9 h-9' />
                <div>Olith Banking</div>
            </div>
            <div className='space-y-16'>
                <div>
                    <div className='mb-4 text-indigo-800'>Menu</div>
                    <ul className='space-y-6'>
                        {
                            menu.map((val, index) => {
                                return (
                                    <li key={index} className='flex flex-row items-center text-gray-400'>
                                        <div className='mr-5'>{val.icon}</div>
                                        <div>{val.name}</div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <div className='mb-4 text-indigo-800'>Schedule Payment</div>
                    <div className='space-y-9'>
                        {
                            schedulePayment.map((val, index) => {
                                return (
                                    <div className='flex flex-row items-center text-gray-400'>
                                        <div className='h-4 w-4 mr-4 border border-gray-400 rounded-lg'/>
                                        {val}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
