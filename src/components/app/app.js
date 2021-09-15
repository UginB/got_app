import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';

export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button 
                                color="primary" 
                                style={{marginBottom: 40+'px'}} 
                                onClick={this.toggleRandomChar}>Toggle random character</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};