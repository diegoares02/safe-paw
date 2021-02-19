import { Component } from 'react';
import PetTable from './PetTable'
import Container from 'react-bootstrap/Container'

class Pets extends Component {
    render() {
        return (
            <Container fluid>
                <PetTable />
            </Container>
        );
    }
}
export default Pets;