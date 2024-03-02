import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { getIconByName } from '../utilities/icons';

const ListarCategorias = () => {

    const categorias = [
        {
            id: 1,
            nombre: 'jardineria',
            icono: 'tree'
        },
        {
            id: 2,
            nombre: 'construccion',
            icono: 'trash'
        },
        {
            id: 3,
            nombre: 'sanitario',
            icono: 'batteryFull'
        },
        {
            id: 4,
            nombre: 'hogar',
            icono: 'house'
        },
        {
            id: 5,
            nombre: 'exterior',
            icono: 'mapPin'
        },

]
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3">Id</th>
                    <th scope="col" className="px-6 py-3">Nombre</th>
                    <th scope="col" className="px-6 py-3">Icono</th>
                    
                </tr>
            </thead>
            <tbody>
                {categorias.map((categoria) => (
                    <tr key={categoria.id} className={`odd:bg-white even:bg-gray-50 border-b`}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{categoria.id}</th>
                        <td className="px-6 py-4">{categoria.nombre}</td>
                        <td className="px-6 py-4 text-cyan-900">
                            <FontAwesomeIcon icon={getIconByName(categoria.icono)} size="lg" /></td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default ListarCategorias;