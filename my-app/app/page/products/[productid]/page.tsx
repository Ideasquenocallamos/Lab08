export  default async function ProfileProduct({params,

}: {params: Promise<{productid: string}>}) {

    const productid = (await params).productid;
    return <h1>Perfil del producto {productid}</h1>;
}