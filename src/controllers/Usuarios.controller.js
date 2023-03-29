import Usuarios from "../models/Usuarios"

export const addUser = async (req, res) => {
    const {name, email, password, rol} = req.body

    const usuario = {
        name: name,
        email: email,
        password: password,
        rol: rol
    }
    const newUser = Usuarios(usuario);
    const saveUser = await newUser.save();
    res.json(saveUser);
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    const userData = await Usuarios.findOne({email: email});
    if(!userData) return res.json({msg: "Usuario no existente"});
    if(userData.password != password) return res.json({msg: "Contraseña incorrecta"});
    const user = {
        name: userData.name,
        email: userData.email,
        rol: userData.rol
    }
    return res.json(user)
}

export const updateRol = async (req, res) => {
    const { email } = req.params;
    const { rol } = req.body;

    const userUpdate = await Usuarios.updateOne({email: email}, {$set: {rol: rol}})
    return res.json(userUpdate);
}