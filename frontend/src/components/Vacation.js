import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
export default class Addvacation extends Component {
    constructor(props) {
        super(props)
    // Setting up functions
    this.onChangevacationName = this.onChangevacationName.bind(this);
    this.onChangevacationContinent = this.onChangevacationContinent.bind(this);
    this.onChangevacationPassport = this.onChangevacationPassport.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      continent: '',
      passport: ''
    }
  }

  onChangevacationName(e) {
    this.setState({name: e.target.value})
  }

  onChangevacationContinent(e) {
    this.setState({continent: e.target.value})
  }

  onChangevacationPassport(e) {
    this.setState({passport: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    console.log(`vacation successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Continent: ${this.state.continent}`);
    console.log(`Passport: ${this.state.passport}`);

    this.setState({name: '', continent: '', passport: ''})
  }
  
  
    render() {
    return (
      <div class="form-wrapper">
        <Form>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Continent</Form.Label>
            <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="Passport">
            <Form.Label>Is a passport required</Form.Label>
            <Form.Control type="checkbox" />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Add vacation 🌎
          </Button>
        </Form>
      </div>
    );
    }
}