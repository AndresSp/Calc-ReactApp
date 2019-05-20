import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { CalcButton } from '../components/CalcButton';
import { Screen } from '../components/Screen';


export class Board extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value1 : null,
            value2 : null,
            result : null,
            cursor : 1
        }
    }

    changeValue = (value) => {

        switch(this.state.cursor){
            case 1: 
                this.setState({ value1 : value,
                                cursor: 2 });
            break;
            
            case 2: 
                this.setState({ value2 : value,
                                cursor: 1 });
            break;
            
            default: 
                this.setState({ value1 : value,
                                cursor: 2 });
        }

        this.setState((state, props) => ({
            result: state.value1 + state.value2
          }));

        
            
    }
    
    render(){
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Card border="primary" className="m-3" >
                            <Card.Body>
                                <Card.Text>
                                    <Screen 
                                    value1={this.state.value1} 
                                    value2={this.state.value2} 
                                    result={this.state.result}/>
                                    
                                    <Row>
                                        {
                                            nums.map(num => 
                                            <CalcButton number={num} press={this.changeValue} />
                                            )
                                        }
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}