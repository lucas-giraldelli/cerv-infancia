import { ThemeProvider, createTheme } from '@mui/material';
import MaterialTable from 'material-table';
import { useRef } from 'react';

import './SearchTable.styles.scss';
import {
  EMPTY_DATASOURCE_MESSAGE,
  FILTER_ROW_TOOLTIP,
  HEADER_ACTIONS,
  LABEL_DISPLAYED_ROWS,
  LABEL_ROWS_PER_PAGE,
  LABEL_ROWS_SELECT,
  N_ROWS_SELECTED,
  SEARCH_PLACEHOLDER,
  SEARCH_TOOLTIP,
} from '../../constants/Global.constants';

export interface StudentData {
  regNumber: number;
  name: string;
  dob: string;
  level: number;
  attendance: number;
}

type SearchTableProps = {
  columns: Array<{
    field: string;
    title: string;
    width?: string;
  }>;
  rows: StudentData[];
  title: string;
};

function SearchTable(props: SearchTableProps) {
  const tableRef = useRef();

  const { columns, rows, title } = props;
  const defaultMaterialTheme = createTheme();

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        tableRef={tableRef}
        title={title}
        columns={columns}
        data={rows}
        localization={{
          pagination: {
            labelDisplayedRows: LABEL_DISPLAYED_ROWS,
            labelRowsPerPage: LABEL_ROWS_PER_PAGE,
            labelRowsSelect: LABEL_ROWS_SELECT,
          },
          toolbar: {
            nRowsSelected: N_ROWS_SELECTED,
            searchTooltip: SEARCH_TOOLTIP,
            searchPlaceholder: SEARCH_PLACEHOLDER,
          },
          header: {
            actions: HEADER_ACTIONS,
          },
          body: {
            emptyDataSourceMessage: EMPTY_DATASOURCE_MESSAGE,
            filterRow: {
              filterTooltip: FILTER_ROW_TOOLTIP,
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
