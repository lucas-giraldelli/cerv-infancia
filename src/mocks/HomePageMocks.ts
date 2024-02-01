import { StudentData } from '../components/Table/Table';

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
  function createData(
    regNumber: number,
    name: string,
    dob: string,
    level: number,
    attendance: number
  ): StudentData {
    return { regNumber, name, dob, level, attendance };
  }

  const rows = [
    createData(12345, 'Thyciane Joanil', '29/08/1994', 1, 60),
    createData(94831, 'Lucas Giraldelli', '25/03/1994', 2, 15),
    createData(98765, 'Elena Rodriguez', '12/05/1990', 3, 80),
    createData(56789, 'Carlos Mendez', '18/11/1985', 1, 45),
    createData(23456, 'Sophia Johnson', '02/09/1992', 2, 75),
    createData(78901, 'Michael Smith', '14/06/1988', 3, 25),
    createData(34567, 'Isabella Garcia', '30/12/1996', 1, 55),
    createData(89012, 'Daniel Lee', '22/02/1991', 2, 30),
    createData(45678, 'Olivia Brown', '05/07/1987', 3, 65),
    createData(90123, 'William Taylor', '11/04/1993', 1, 40),
    createData(56789, 'Emily Davis', '19/10/1989', 2, 50),
    createData(23456, 'Matthew Wilson', '27/03/1995', 3, 70),
    createData(34567, 'Ava Moore', '08/08/1990', 1, 20),
    createData(78901, 'James Anderson', '16/01/1986', 2, 60),
    createData(89012, 'Emma Martinez', '04/06/1992', 3, 35),
    createData(45678, 'David Hernandez', '23/09/1988', 1, 45),
    createData(90123, 'Sophie Taylor', '10/02/1994', 2, 55),
    createData(12345, 'Jackson White', '07/07/1989', 3, 75),
    createData(94831, 'Mia Thomas', '31/12/1997', 1, 25),
    createData(98765, 'Nicholas Hall', '15/05/1993', 2, 50),
    createData(56789, 'Grace Garcia', '29/08/1987', 3, 65),
    createData(23456, 'Daniel Brown', '03/03/1996', 1, 30),
    createData(78901, 'Lily Turner', '20/09/1991', 2, 40),
    createData(34567, 'Benjamin Miller', '09/04/1985', 3, 55),
  ];

  return rows;
}
