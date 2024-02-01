import { For } from 'million/react';

import Card from '../../../components/Card';
import { Table } from '../../../components/Table';
import { mockCardData, mockTableData } from '../../../mocks/HomePageMocks';
import './HomePage.styles.scss';

function HomePage() {
  const cardData = mockCardData();
  const rows = mockTableData();

  return (
    <main className="main-container-home">
      <section className="main-container-home__card">
        <For each={cardData}>
          {(student) => <Card title={student.title} amount={student.amount} />}
        </For>
      </section>
      <section className="main-container-home__table">
        <Table rows={rows} />
      </section>
    </main>
  );
}

export default HomePage;
