import React from 'react';
import {Container, Form, InputGroup,Input, Button, InputGroupText} from 'reactstrap';
import './Chat.css';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sengSVG from'./../../images/send.svg';
const QueriesForm = (props) => {
    const {queries, handleQueriesInput, handleSubmitInput} = props;
    //console.log(props.queries);
    return(
        <>
            <div className='p-3 body-bg'>
                <Form onSubmit={handleSubmitInput}>
                    <Container>
                    <InputGroup>
                        <Input
                            autoComplete="off"
                            id="question"
                            name="question"
                            className="background2 QuestionInput"
                            placeholder="Have a Question? Type Here!!"
                            value={queries}
                            onChange={handleQueriesInput}
                        />
                        <InputGroupText className="background2 QuestionInput">
                            <Button color="success" type="submit" className="sendBtn"><FontAwesomeIcon icon={faPaperPlane} /></Button>
                        </InputGroupText>

                    </InputGroup>
                    </Container>
                </Form>
            </div>
        </>
    );
}

export default QueriesForm;