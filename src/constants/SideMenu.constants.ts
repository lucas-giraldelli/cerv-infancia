import ChurchIcon from '@mui/icons-material/Church';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SchoolIcon from '@mui/icons-material/School';

import BookHeart from '../assets/svg/BookHeart/BookHeart';
import Priest from '../assets/svg/Priest/Priest';

export const menuItems = [
  {
    name: 'Início',
    icon: ChurchIcon,
    href: '/',
  },
  {
    name: 'Alunos',
    icon: SchoolIcon,
    href: '/aluno',
  },
  {
    name: 'Evangelizadores',
    icon: Priest,
    href: '/evangelizador',
  },
  {
    name: 'Visita aos Lares',
    icon: FamilyRestroomIcon,
    href: '/visita',
  },
  {
    name: 'Lista de chamada',
    icon: ListAltIcon,
    href: '/chamada',
  },
  {
    name: 'Material didático',
    icon: BookHeart,
    href: '/material',
  },
];
