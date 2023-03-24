
export default function Picture(props){
    // console.log("Dentro de Picture "+props.item.url);
    return (
        <>
            {props.pictures?.map(pic => <img key={pic.id} src={pic.url} alt={pic.author} style={{width:"300", height:"300"}}/>)}
        </>
    )
}