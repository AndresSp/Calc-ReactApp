import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

export class Screen extends React.Component{

    render(){
        return (
            <Row>
                <Col md={12}>
                    <Card border="primary" className="p-3">
                        <Row>
                            <Col><input type="text" class="form-control" value={this.props.value1}/></Col>
                            +
                            <Col><input type="text" class="form-control" value={this.props.value2}/></Col>
                            =
                            <Col><input type="text" class="form-control" value={this.props.result}/></Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}