import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChurchIcon from '@mui/icons-material/Church';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';

export const tabMenu = [
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
    icon: PersonIcon,
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
    icon: AutoStoriesIcon,
    href: '/material',
  },
];
