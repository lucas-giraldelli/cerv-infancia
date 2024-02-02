import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from 'material-table';
import { useRef } from 'react';

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
        title=""
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
            fontSize: '0.9em',
          },
          editCellStyle: {
            fontSize: '0.9em',
          },
        }}
      />
    </ThemeProvider>
  );
}

export default SearchTable;
