import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function GroceryList() {
  return (
    <Table responsive striped hover>
      <TableHeader />
      <tbody>
        <TableRow />
      </tbody>
    </Table>
  );
}

export default GroceryList;