import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";


const HomeMenu = () => {
    return (
        <section>
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute left-0 -top-[70px] text-left -z-10">
                    <Image src={"/sallad1.png"} width={109} height={189} alt="sallad1" />
                </div>
                <div className="absolute right-0 -top-[100px] -z-10">
                    <Image src={"/sallad2.png"} width={107} height={195} alt="sallad2" />
                </div>
            </div>
            <div className="text-center mb-4">
                <SectionHeader
                    subHeader="Check out"
                    mainHeader="MENU"
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
                <MenuItem
                    imagePath="/pizza.png"
                    content="My description for my favourite pizza"
                    price={12}
                    title="Pepperoni Pizza"
                />
            </div>
        </section>
    );
}

export default HomeMenu;