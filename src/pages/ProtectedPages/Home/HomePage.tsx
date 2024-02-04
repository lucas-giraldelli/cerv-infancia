import Card from '../../../components/Card';
import { Table } from '../../../components/Table';
import { STUDENT_TABLE_TITLE } from '../../../constants/Global.constants';
import {
  STUDENT_TABLE_COLUMNS,
  mockCardData,
  mockTableData,
} from '../../../mocks/HomePageMocks';
import './HomePage.styles.scss';

function HomePage() {
  const cardData = mockCardData();
  const rows = mockTableData();

  return (
    <main className="main-container-home">
      <section className="main-container-home__card">
        {cardData.map((student) => (
          <Card
            key={student.title}
            title={student.title}
            amount={student.amount}
          />
        ))}
      </section>
      <section className="main-container-home__table">
        <Table
          columns={STUDENT_TABLE_COLUMNS}
          rows={rows}
          title={STUDENT_TABLE_TITLE}
        />
      </section>
    </main>
  );
}

export default HomePage;
