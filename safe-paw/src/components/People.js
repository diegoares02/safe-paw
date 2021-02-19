import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import PeopleTable from './PeopleTable';

class People extends Component {
    render() {
        return (
            <Container fluid>
                <PeopleTable />
            </Container>
        );
    }
}
export default People;