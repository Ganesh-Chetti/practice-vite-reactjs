import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Classresfooter extends Component{
  render(){

  
  return (
    <Card className="text-center">
      <Card.Footer className="text-muted">
        <p>© 2024 Breeze Dine | Where every bite tells a story!</p>
        <p>123 Gourmet Street, Foodville, NY | Call us: +1 (555) 123-4567</p>
        <p>Open daily: 9 AM - 11 PM | Follow us on Instagram @BreezeDine</p>
      </Card.Footer>
    </Card>
  );
}
}

export default Classresfooter;
