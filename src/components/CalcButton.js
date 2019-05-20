import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export class CalcButton extends React.Component{

    render(){
        return (
            <Col className="my-2" md={4}>
                <Button onClick={() => this.props.press(this.props.number) }
                className="p-2" variant="outline-primary " size="lg" block>
                    { this.props.number }
                </Button>
            </Col>
            
        )
    }
}