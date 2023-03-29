import jobs from "../public/jobsData";
import React from "react";
import { FaTaxi, BsWifi, HiHome, SiHomeassistant } from 'react-icons/fa';


export default function Icon ({jobs}) {
    
  const showIcon = () => {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name}:{getIconDescription(item.IconDescription)}
                </li>
            )) }
        </ul>
    );
  };

  const getIconDescription = (IconDescription) => {
    let icon;
    switch (IconDescription) {
        case 'transport':
            icon = <FaTaxi />;
            break;
        case 'remote':
            icon = <BsWifi />;
            break;
        case 'local':
            icon = <HiHome />;
            break;
        default:
            icon = <SiHomeassistant />;
            break;
    }

    return icon;
  };
 
   
}