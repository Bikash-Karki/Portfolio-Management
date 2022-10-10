import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './sidebar.css'

const Sidebar = () => {
    const [isWide, setIsWide] = useState(true)

    return (



        <div className={isWide ? "side-wide" : "side-notwide"}>
            <div className='d-flex title'>
                <div>
                    <button className={isWide ? "btn" : 'btn-non'} onClick={() => { setIsWide(!isWide) }}><i class='tog-icon bx bxs-caret-left-circle mt-4 mb-4'></i></button>
                    <button className={isWide ? 'btn-non' : 'btn'} onClick={() => { setIsWide(!isWide) }}><i class='tog-icon bx bxs-caret-right-circle mt-4 mb-4'></i></button>
                </div>
                <div>
                    <h6 className='title p-1 mt-4 mb-4'>Portfolio Management</h6>


                </div>
            </div>

            <div className='contents'>
                <ul className='side-links'>
                    <li className='side-item' >
                        <NavLink style={({ isActive }) =>
                            isActive
                                ? {

                                    background: '#dee7fc',
                                    color: 'black'

                                }
                                : { color: '#000', background: '' }
                        } to='/' className='side-link' ><i class='side-icon bx bxs-dashboard'></i> Dashboard</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink style={({ isActive }) =>
                            isActive
                                ? {

                                    background: '#0D53FC',
                                    color: 'white'

                                }
                                : { color: '#000', background: '' }
                        } to='/addstocks' className='side-link' ><i class='side-icon bx bxs-coin-stack'></i> Add Stocks</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink style={({ isActive }) =>
                            isActive
                                ? {

                                    background: '#0D53FC',
                                    color: 'white'

                                }
                                : { color: '#000', background: '' }
                        } to='/transaction-lists' className='side-link' ><i class='side-icon bx bx-candles'></i>Transaction List</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink to='' className='side-link' ><i class='side-icon bx bxs-chat' ></i> Messages</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink to='' className='side-link' ><i class='side-icon bx bx-money' ></i> Payment Information</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink
                            to='#' className='side-link' ><i class='side-icon bx bx-cog' ></i> Settings</NavLink >
                    </li>
                    <li className='side-item'>
                        <NavLink to='' className='side-link down-link' ><i class='side-icon bx bx-info-circle'></i> Help ?</NavLink >
                    </li>
                </ul>
            </div>

        </div>


    )
}

export default Sidebar