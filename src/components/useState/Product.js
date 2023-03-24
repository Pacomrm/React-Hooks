export default function Product({product}){
    let classNegotiation = "table-danger";
    if(product.negotiation === true){
        let classNegotiation = "table-success";
    }

    return (
        <tr id={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td className={classNegotiation}>{product.negotiation}</td>
        </tr>
    )
}