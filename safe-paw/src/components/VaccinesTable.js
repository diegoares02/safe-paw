import { Component } from "react";
import Table from "react-bootstrap/Table"

class VaccinesTable extends Component {
    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Date</th>
                        <th>Dose</th>
                        <th>Description</th>
                        <th>Pet name</th>
                        <th>Type</th>
                        <th>Hospital</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>Jacob</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>Larry the Bird</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}
export default VaccinesTable;