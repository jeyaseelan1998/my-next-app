import { PageType } from "../../Types/Page";

export default async function Page({ params }: PageType) {
    const { catchAll } = await params;

    return (
        <div>
            {catchAll.join(" / ")}
        </div>
    )
}