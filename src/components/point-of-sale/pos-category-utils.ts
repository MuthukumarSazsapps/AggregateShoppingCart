import React from 'react';
import BeefIcon from 'components/icons/beef';
import BurgerIcon from 'components/icons/burger';
import ChickenIcon from 'components/icons/chicken';
import CoffeeCupIcon from 'components/icons/coffee-cup';
import ColdDrinkIcon from 'components/icons/cold-drink';
import CookiesIcon from 'components/icons/cookies';
import DinnerIcon from 'components/icons/dinner';
import FrenchFriesIcon from 'components/icons/french-fries';
import LunchIcon from 'components/icons/lunch';
import PastaIcon from 'components/icons/pasta';
import PineAppleIcon from 'components/icons/pine-apple';
import PizzaIcon from 'components/icons/pizza';
import SweetIcon from 'components/icons/sweet';

export type InitialStateType = {
  filter: string;
};

export const initialState: InitialStateType = {
  filter: '',
};

// Options
export const filterOptions = [
  {
    id: 2,
    name: 'M sand',
    value: 'M sand',
    icon: PizzaIcon,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkJ6VD1HqmnhxFOrXcqKElZR_8g6PcVLx7A&s',
  },
  {
    id: 3,
    name: 'P sand',
    value: 'P sand',
    icon: ColdDrinkIcon,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP09Vy4tHQyTdEpOFlOR-QBpXd3ipJsO8mZg&s',
  },
  {
    id: 4,
    name: 'WASHED MSAND',
    value: 'WASHED MSAND',
    icon: BurgerIcon,
    url: 'https://5.imimg.com/data5/SELLER/Default/2021/9/FE/HF/DU/138455349/double-wash-m-sand-500x500.jpg',
  },
  {
    id: 5,
    name: 'DUST',
    value: 'DUST',
    icon: CoffeeCupIcon,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkJ6VD1HqmnhxFOrXcqKElZR_8g6PcVLx7A&s',
  },
  {
    id: 6,
    name: 'JALLY',
    value: 'JALLY',
    icon: FrenchFriesIcon,
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/12/368521216/MU/WF/KM/36090806/construction-aggregates-1000x1000.jpeg',
  },
  {
    id: 7,
    name: 'WET MIX',
    value: 'WET MIX',
    icon: LunchIcon,
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkJ6VD1HqmnhxFOrXcqKElZR_8g6PcVLx7A&s',
  },
  {
    id: 8,
    name: 'KUNDUKKAL',
    value: 'KUNDUKKAL',
    icon: DinnerIcon,
    url: 'https://5.imimg.com/data5/SELLER/Default/2021/1/IK/NM/AF/13546906/blue-metal-bolder-500x500.jpg',
  },
  {
    id: 9,
    name: '40MM',
    value: '40MM',
    icon: SweetIcon,
    url: 'https://5.imimg.com/data5/ANDROID/Default/2022/9/AW/MG/CZ/77576047/product-jpeg-500x500.jpg',
  },
  {
    id: 10,
    name: '20MM',
    value: '20MM',
    icon: PizzaIcon,
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322693564/VM/CO/NE/118631939/crushed-stone-1000x1000.jpg',
  },
  // {
  //   id: 11,
  //   name: 'Pasta',
  //   value: 'pasta',
  //   icon: PastaIcon,
  // },
  // {
  //   id: 12,
  //   name: 'Cookies',
  //   value: 'cookies',
  //   icon: CookiesIcon,
  // },
  // {
  //   id: 13,
  //   name: 'Chicken',
  //   value: 'chicken',
  //   icon: ChickenIcon,
  // },
  // {
  //   id: 14,
  //   name: 'Beef',
  //   value: 'beef',
  //   icon: BeefIcon,
  // },
  // {
  //   id: 15,
  //   name: 'Fruits',
  //   value: 'fruits',
  //   icon: PineAppleIcon,
  // },
  // {
  //   id: 16,
  //   name: 'Juice',
  //   value: 'juice',
  //   icon: LunchIcon,
  // },
];
