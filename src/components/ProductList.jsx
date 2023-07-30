import React from 'react'

export default function ProductList({ id, name, price }) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
