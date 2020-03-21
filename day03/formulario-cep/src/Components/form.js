import React from 'react'
import { Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col, Button, Spinner } from 'reactstrap';

class AddressForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            cep: '',
            bairro: '',
            logradouro: '',
            uf: '',
            numero: '',
            loading:false,
            error: ''
        }
    }
}    
export default AddressForm