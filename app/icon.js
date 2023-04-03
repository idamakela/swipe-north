import jobs from '../public/jobsData';
import React from 'react';
import { FaTaxi } from 'react-icons/fa';
import { SiHomeassistant } from 'react-icons/si';
import { BsWifi } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { MdWork } from 'react-icons/md';

export default function Icon({ iconDescription }) {
  let icon;
  switch (iconDescription) {
    case 'transport':
      icon = <FaTaxi />;
      break;
    case 'remote':
      icon = <BsWifi />;
      break;
    case 'local':
      icon = <HiHome />;
      break;
    case 'hybrid':
      icon = <SiHomeassistant />;
      break;
    default:
      icon = <MdWork />;
      break;
  }
  return icon;
}
