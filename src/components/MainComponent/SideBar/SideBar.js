import React, { useState } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { Link,useNavigate } from 'react-router-dom';
import { LogoutApi } from '../../../services/Api';
const SideBar = (props) => {
    const Navigate = useNavigate();
    //console.log(`Props are ${props.UserData.fullname}`);
    const menus = [
        { name: (props.UserData.fullname === "") ? "dashboard" : props.UserData.fullname, link: "#", icon: MdOutlineDashboard },
        { name: (props.UserData.fullname === "") ? "User" : props.UserData.fullname, link: "#", icon: AiOutlineUser },
        { name: (props.UserData.email === "") ? "email" : props.UserData.email, link: "#", icon: FiMessageSquare },
        { name: "Logout", link: "#", icon: AiOutlineLogout },
    ]
    const [open, setOpen] = useState(true);
    const logoutfn = () => {
        LogoutApi(Navigate);
        //console.log("From Logout Handler");
    }
    return (
        <div className={`bg-[#0e0e0e] min-h-screen ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
            </div>
            <div className='mt-4 flex flex-col gap-4 relative'>
                {
                    menus?.map((menu, i) => (
                        <Link to={menu?.link} key={i} className={`group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`} {...(menu?.name === 'Logout' && {
                            onClick: () => {
                                // perform logout action here
                                //console.log('User logged out');
                                logoutfn();
                            }
                        })}>
                            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                            <h2 style={{ transitionDelay: `${i + 3}00ms` }} className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu?.name}</h2>
                            <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                                {menu?.name}
                            </h2>
                        </Link>))
                }

            </div>
        </div>
    )
}

export default SideBar;