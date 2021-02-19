import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import HospitalTable from './HospitalTable'

class Hospitals extends Component {
    render() {
        return (
            <Container fluid>
                <HospitalTable />
            </Container>
        );
    }
}
export default Hospitals;