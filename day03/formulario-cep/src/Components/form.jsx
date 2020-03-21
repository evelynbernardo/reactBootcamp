import React from 'react'
import { FormGroup, Label, Input, FormFeedback, Container, Row, Col, Button, Spinner } from 'reactstrap';

class AddressForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cep: '',
            bairro: '',
            logradouro: '',
            cidade: '',
            uf: '',
            numero: '',
            loading:false
        }
    }
    verificaCEP = async (cep) => {
        return await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(cepResult => {
            this.setState({loading:false})
            return cepResult
        })
        .catch(error => {
            this.setState({loading: false})
            return alert("CEP Inválido");
        })
    }

    handleChange = async (field) => {
        const { name, value } = field
        this.setState({[name]: value})
        if(name === 'cep' && value.length === 8){
            this.setState({loading:true})
            const cepObject = await this.verificaCEP(value)
            if(cepObject.erro){
                return alert("CEP Inválido");
            }
            const {cep, logradouro, bairro, cidade, uf} = cepObject
            this.setState({ cep, logradouro, bairro, cidade, uf})
        }
    }
    handleBlur = async value => {
        if (value.length === 8){
            this.setState({loading:true})
            const cepObject = await this.verificaCEP(value)
            if(cepObject.erro){
                return alert("CEP Inválido");
            }
            const {cep, logradouro, bairro, cidade, uf} = cepObject
            this.setState({ cep, logradouro, bairro, cidade, uf})
        }
    }

    render(){
        const { loading, cep, logradouro, bairro, cidade, uf, numero} = this.state
        return(
            <Container>
                <Row>
                    <Col sm="12" md={{size: 6, offset: 3}}>
                    {loading && <Spinner size="sm" color="primary" />}
                        <FormGroup>
                            <Label for="cep">CEP</Label>
                            <Input name="cep" value={cep} onChange={e => this.handleChange(e.target)} onBlur={e => this.handleBlur(e.target.value)} maxLength={9}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="logradouro">Logradouro</Label>
                            <Input name="logradouro" value={logradouro} onChange={e => this.handleChange(e.target)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="bairro">Bairro</Label>
                            <Input name="bairro" value={bairro} onChange={e => this.handleChange(e.target)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="cidade">Cidade</Label>
                            <Input name="cidade" value={cidade} onChange={e => this.handleChange(e.target)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="uf">UF</Label>
                            <Input name="uf" value={uf}  onChange={e => this.handleChange(e.target)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="numero">Numero</Label>
                            <Input name="numero" value={numero}  onChange={e => this.handleChange(e.target)}/>
                        </FormGroup>
                        <FormGroup>
                            <Button color="success" onClick={this.verificaCep}>Enviar</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}    
export default AddressForm