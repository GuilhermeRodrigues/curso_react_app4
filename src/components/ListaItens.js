import React, { Component } from 'react';

import {
    Text
} from 'react-native';

export default class ListaItens extends Component {

    constructor(props) {
        super(props);
        console.log('Construindo a aplicação');
    }

    componentWillMount() {
        console.log('Fazer alguma coisa antes de renderizar');
    }

    componentDidMount() {
        console.log('Fazer alguma coisa depois de renderizar');
    }

    render() {
        console.log('Objeto é renderizado');
        return (
            <Text>Teste de importação de componente</Text>
        );
    }
}
