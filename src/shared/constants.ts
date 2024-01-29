import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChurchIcon from '@mui/icons-material/Church';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

import Attendance from '../pages/ProtectedPages/Attendance';
import Courseware from '../pages/ProtectedPages/Courseware';
import HomePage from '../pages/ProtectedPages/Home';
import Missionary from '../pages/ProtectedPages/Missionary';
import Student from '../pages/ProtectedPages/Student';
import Visit from '../pages/ProtectedPages/Visit';

export const menuItems = [
  {
    name: 'Início',
    icon: ChurchIcon,
    href: '/',
    component: HomePage,
  },
  {
    name: 'Alunos',
    icon: SchoolIcon,
    href: '/aluno',
    component: Student,
  },
  {
    name: 'Evangelizadores',
    icon: PersonIcon,
    href: '/evangelizador',
    component: Missionary,
  },
  {
    name: 'Visita aos Lares',
    icon: FamilyRestroomIcon,
    href: '/visita',
    component: Visit,
  },
  {
    name: 'Lista de chamada',
    icon: ListAltIcon,
    href: '/chamada',
    component: Attendance,
  },
  {
    name: 'Material didático',
    icon: AutoStoriesIcon,
    href: '/material',
    component: Courseware,
  },
];
