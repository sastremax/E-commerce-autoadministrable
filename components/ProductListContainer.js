import { getProducts } from "@/actions/getProducts";
import ProductList from "./ProductList";
import PageTitle from "@/components/PageTitle";

export default async function ProductListContainer() {
    const { payload: productos, error, message } = await getProducts();

    if (error) {
        return (
            <>
                <PageTitle>Error</PageTitle>
                <p>{message}</p>
            </>
        );
    }

    return <ProductList productos={productos} />;
}