import { StudentData } from '../components/Table/SearchTable';

export const TABLE_COLUMNS = [
  { field: 'regNumber', title: 'Número de Matricula', width: '100' },
  { field: 'name', title: 'Nome do Aluno' },
  { field: 'dob', title: 'Data de nascimento', width: '100' },
  { field: 'level', title: 'Nível do Aluno' },
  { field: 'attendance', title: 'Presenças' },
];

export function mockCardData() {
  return [
    {
      title: 'Alunos matrículados',
      amount: 60,
    },
    {
      title: 'Alunos Nível 1',
      amount: 43,
    },
    {
      title: 'Alunos Nível 2',
      amount: 45,
    },
    {
      title: 'Evangelizadores',
      amount: 64,
    },
  ];
}

export function mockTableData(): StudentData[] {
  const rows = [
    {
      regNumber: 12345,
      name: 'Thyciane Joanil',
      dob: '29/08/1994',
      level: 1,
      attendance: 60,
    },
    {
      regNumber: 94831,
      name: 'Lucas Giraldelli',
      dob: '25/03/1994',
      level: 2,
      attendance: 15,
    },
    {
      regNumber: 98765,
      name: 'Elena Rodriguez',
      dob: '12/05/1990',
      level: 3,
      attendance: 80,
    },
    {
      regNumber: 56789,
      name: 'Carlos Mendez',
      dob: '18/11/1985',
      level: 1,
      attendance: 45,
    },
    {
      regNumber: 23456,
      name: 'Sophia Johnson',
      dob: '02/09/1992',
      level: 2,
      attendance: 75,
    },
    {
      regNumber: 78901,
      name: 'Michael Smith',
      dob: '14/06/1988',
      level: 3,
      attendance: 25,
    },
    {
      regNumber: 34567,
      name: 'Isabella Garcia',
      dob: '30/12/1996',
      level: 1,
      attendance: 55,
    },
    {
      regNumber: 89012,
      name: 'Daniel Lee',
      dob: '22/02/1991',
      level: 2,
      attendance: 30,
    },
    {
      regNumber: 45678,
      name: 'Olivia Brown',
      dob: '05/07/1987',
      level: 3,
      attendance: 65,
    },
    {
      regNumber: 90123,
      name: 'William Taylor',
      dob: '11/04/1993',
      level: 1,
      attendance: 40,
    },
    {
      regNumber: 56789,
      name: 'Emily Davis',
      dob: '19/10/1989',
      level: 2,
      attendance: 50,
    },
    {
      regNumber: 23456,
      name: 'Matthew Wilson',
      dob: '27/03/1995',
      level: 3,
      attendance: 70,
    },
    {
      regNumber: 34567,
      name: 'Ava Moore',
      dob: '08/08/1990',
      level: 1,
      attendance: 20,
    },
    {
      regNumber: 78901,
      name: 'James Anderson',
      dob: '16/01/1986',
      level: 2,
      attendance: 60,
    },
    {
      regNumber: 89012,
      name: 'Emma Martinez',
      dob: '04/06/1992',
      level: 3,
      attendance: 35,
    },
    {
      regNumber: 45678,
      name: 'David Hernandez',
      dob: '23/09/1988',
      level: 1,
      attendance: 45,
    },
    {
      regNumber: 90123,
      name: 'Sophie Taylor',
      dob: '10/02/1994',
      level: 2,
      attendance: 55,
    },
    {
      regNumber: 12345,
      name: 'Jackson White',
      dob: '07/07/1989',
      level: 3,
      attendance: 75,
    },
    {
      regNumber: 94831,
      name: 'Mia Thomas',
      dob: '31/12/1997',
      level: 1,
      attendance: 25,
    },
    {
      regNumber: 98765,
      name: 'Nicholas Hall',
      dob: '15/05/1993',
      level: 2,
      attendance: 50,
    },
    {
      regNumber: 56789,
      name: 'Grace Garcia',
      dob: '29/08/1987',
      level: 3,
      attendance: 65,
    },
    {
      regNumber: 23456,
      name: 'Daniel Brown',
      dob: '03/03/1996',
      level: 1,
      attendance: 30,
    },
    {
      regNumber: 78901,
      name: 'Lily Turner',
      dob: '20/09/1991',
      level: 2,
      attendance: 40,
    },
    {
      regNumber: 34567,
      name: 'Benjamin Miller',
      dob: '09/04/1985',
      level: 3,
      attendance: 55,
    },
  ];

  return rows;
}
