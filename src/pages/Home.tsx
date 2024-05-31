import { useEffect } from 'react';
import { useLayout } from 'hooks/use-layout';
import HydrogenLayout from 'layouts/hydrogen/layout';
import { LAYOUT_OPTIONS } from '../config/enums';
import HeliumLayout from 'layouts/Helium/helium-layout';
import LithiumLayout from 'layouts/Lithium/lithium-layout';
import BerylliumLayout from 'layouts/BeryLlium/beryllium-layout';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { actions, dispatch } from 'store';
import useUsers from 'hooks/use-users';
import useLocalData from 'hooks/use-localData';
import CenterSpinner from 'common/center-spinner';

const Home = () => {
  return <HydrogenLayout />;
};

export default Home;
