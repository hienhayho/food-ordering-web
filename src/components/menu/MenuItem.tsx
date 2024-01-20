import { Stringifier } from "postcss";

interface IMenuItem {
    imagePath: string;
    title: string;
    content: string;
    price: number;
}

const MenuItem = (props: IMenuItem) => {
    const { imagePath, title, content, price } = props;
    return (
        <div
            className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white 
            transition-all hover:shadow-md hover:shadow-black/25"
        >
            <div className="text-center">
                <img src={imagePath} alt={title} className="max-h-24 block mx-auto" />
            </div>
            <h4 className="font-semibold text-xl my-3">{title}</h4>
            <p className="text-gray-500 text-sm">
                {content}
            </p>
            <button className="mt-4 bg-primary text-white rounded-full px-8 py-2 hover:cursor-pointer ">
                Add to cart ${price}
            </button>
        </div>
    );
}

export default MenuItem;