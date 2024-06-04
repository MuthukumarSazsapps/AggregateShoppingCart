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
  },
  {
    id: 3,
    name: 'P sand',
    value: 'P sand',
    icon: ColdDrinkIcon,
  },
  {
    id: 4,
    name: 'WASHED MSAND',
    value: 'WASHED MSAND',
    icon: BurgerIcon,
  },
  {
    id: 5,
    name: 'DUST',
    value: 'DUST',
    icon: CoffeeCupIcon,
  },
  {
    id: 6,
    name: 'JALLY',
    value: 'JALLY',
    icon: FrenchFriesIcon,
  },
  {
    id: 7,
    name: 'WET MIX',
    value: 'WET MIX',
    icon: LunchIcon,
  },
  {
    id: 8,
    name: 'KUNDUKKAL',
    value: 'KUNDUKKAL',
    icon: DinnerIcon,
  },
  {
    id: 9,
    name: '40MM',
    value: '40MM',
    icon: SweetIcon,
  },
  {
    id: 10,
    name: '20MM',
    value: '20MM',
    icon: PizzaIcon,
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
