import { For } from 'million/react';

import Card from '../../../components/Card';
import './HomePage.styles.scss';

function mockCardData() {
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

function HomePage() {
  const students = mockCardData();

  return (
    <main className="card-container">
      <For each={students}>
        {(student) => <Card title={student.title} amount={student.amount} />}
      </For>
    </main>
  );
}

export default HomePage;
