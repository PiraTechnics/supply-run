import { BsFillPlusCircleFill } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';

function TableHeader() {
    return (
        <thead>
        <tr>
          <th><Button variant='outline' size='sm'><BsFillPlusCircleFill size={20} /></Button></th>
          <th className='fs-5'>Item</th>
          <th className='fs-5'>type</th>
        </tr>
      </thead>
    );
}

export default TableHeader;