import Table from 'react-bootstrap/Table';

function Resmenu() {
  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Veg Item</th>
          <th>Non-Veg Item</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Aloo Chana</td>
          <td>Chicken Biryani</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Saag Paneer</td>
          <td>Chicken Tikka</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Vegetable Curry</td>
          <td>Fish Pakora</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Chickpea Curry</td>
          <td>Mutton Curry</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Aloo Gobi</td>
          <td>Mutton Biryani</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Resmenu;
