export async function getPictures(){

    try {
        const response = await fetch('https://picsum.photos/v2/list?page=2&limit=20', {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        console.log(response);
        const result = await response.json();
        return result;

    }catch(err){
        console.log(err);
    }

}