import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import VaccinesTable from './VaccinesTable'

class Vaccines extends Component {
    render() {
        return (
            <Container>
                <VaccinesTable />
            </Container>
        );
    }
}
export default Vaccines;