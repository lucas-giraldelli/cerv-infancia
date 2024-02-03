import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from 'material-table';
import { useRef } from 'react';

import './SearchTable.styles.scss';

import { TABLE_COLUMNS } from '../../mocks/HomePageMocks';

export interface StudentData {
  regNumber: number;
  name: string;
  dob: string;
  level: number;
  attendance: number;
}

type SearchTableProps = {
  rows: StudentData[];
};

function SearchTable(props: SearchTableProps) {
  const tableRef = useRef();

  const { rows } = props;
  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        tableRef={tableRef}
        title="Listagem de Alunos"
        columns={TABLE_COLUMNS}
        data={rows}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsPerPage: 'Linhas por página',
            labelRowsSelect: 'Linha(s)',
          },
          toolbar: {
            nRowsSelected: '{0} row(s) selected',
            searchTooltip: 'Digite algo',
            searchPlaceholder: 'Buscar por informação',
          },
          header: {
            actions: 'Actions',
          },
          body: {
            emptyDataSourceMessage: 'Nenhum dado a ser mostrado',
            filterRow: {
              filterTooltip: 'Filtrar',
            },
          },
        }}
        options={{
          search: true,
          maxBodyHeight: '365px',
          headerStyle: {
            color: '#FFFFFF',
            backgroundColor: '#1e2848',
            fontSize: '0.9em',
          },
          rowStyle: {
            color: '#000000',
            backgroundColor: '#eaf4f6',
          },
        }}
      />
    </ThemeProvider>
  );
}

export default SearchTable;
