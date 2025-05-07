// import { useState, useEffect } from "react";

// const Formulario = () => {

//     const [materiaA, setMateriaA] = useState(0);
//     const [materiaB, setMateriaB] = useState(0);
//     const [materiaC, setMateriaC] = useState(0);
//     const [nome, setNome] = useState('');

//     /* Ciclo de vida de um componente no React:
//         mount
//         update
//         unmount
//     */

//     //executa apenas qunado o componente for montado
//     useEffect(() => {
//         console.log('O componente iniciou');
        
//         return () => {
//             console.log('O componente finalizou.');
//         }

//     }, []); 

//     useEffect(() => {
//         console.log('O estado nome mudou');
//     }, [nome]); 

//     useEffect(() => {
//         console.log(`materia A mudou para: ${materiaA}`)
//     }, [materiaA, materiaB, materiaC])  


//     const alteraNome = (evento) => {
//         // console.log(evento.target.value)
//         // setNome(evento.target.value);
//         setNome(estadoAnterior => {
//             // console.log(estadoAnterior)
//             return evento.target.value;
//         });

//     }

//     const renderizaResultado = () => {
//         const soma = materiaA  + materiaB + materiaC;
//         const media = soma/3;

//         // console.log(soma)
//         // console.log(media)

//         if (media >= 7) {
//             return (
//                 <p>{nome} approved!</p>
//             )
//         } else {
//             return(
//                 <p>{nome} reproved!</p>
//             )
//         }
//     }

//     return (
//         <form>
//             <ul>
//                 {[1,2,3,4,5].map(item => (
//                     <>
//                         <b>{`Item ${item}`}</b>
//                         <li key={item} >{item}</li>
//                     </>
//                     ) 
//                 )}
//             </ul>

//             <input type="text" placeholder="Your name" onChange={alteraNome} />
//             <input type="number" placeholder="Nota materia A" onChange={({ target }) => setMateriaA(parseInt(target.value))}/>
//             <input type="number" placeholder="Nota materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
//             <input type="number" placeholder="Nota materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
//             { renderizaResultado() }
            
//         </form>
//     )
// }

// export default Formulario;