// FUNCIONES: CON NOMBRE - DE FLECHA


// function getUser( nombre ) {
//     return {
//         uid: 'abc123',
//         username: nombre,
//     }
// };



export const getUser = ( ) => ({
        uid: 'abc123',
        username: 'getUser',
});


export const userActive = (nombre) => ({
        uid: 'ABC123',
        username: nombre
});

// console.log(userActive);


// export default  {
//     getUser,
//     userActive
// }
