const {response, request} = require('express');



const usuariosGet = (req=request, res=response) => {

    const {q, nombre='No name', apikey, page = 1, limit} = req.query;
    res.json({
        msg: 'GetAPI',
        q, nombre, apikey, page, limit
    });
}


const usuariosPost = (req, res=response) => {
    const {nombre, edad} = req.body;



    res.json({
        msg: 'PostAPI',
        nombre, 
        edad
    });
}


const usuariosPut = (req, res=response) => {

    const id = req.params.id;

    res.json({
        msg: 'PutAPI',
        id
    });
}


const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'DeleteAPI'
    });
}


const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'PatchAPI'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}