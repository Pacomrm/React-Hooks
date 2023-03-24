export async function getMyProducts(){

    try{
        const response = await fetch("http://localhost:3333/myProducts",{
        method: "GET",
            headers: {
            accept: 'application/json',
            },
        });

        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }
        const result = await response.json();
        return result;

    }catch(err){
        console.log(err);
    }
}

export async function publishMyProduct(item){

    try{
        const response = await fetch("http://localhost:3333/myProducts",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: item.name, price: item.price, description: item.description, negotiation: item.negotiation  })
        });

        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }
        const result = await response.json();
        console.log(result);
        return result;

    }catch(err){
        console.log(err);
    }
}

export async function getPublicProducts(){
    try{
        const response = await fetch("http://localhost:3333/publicProducts",{
            method: "GET",
            headers: {
                accept: 'application/json',
            },
        });

        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }
        const result = await response.json();
        return result;

    }catch(err){
        console.log(err);
    }
}