import Image from "next/image";
import RightArrow from '../icons/RightArrow';

const Hero = () => {
    return (
        <section className="hero">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    Everything<br />
                    is much better <br />
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes everyday
                    complete, a simple yet delicious joy in nowadays
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex items-center text-white rounded-full gap-2 px-4 py-2">
                        Order Now
                        <RightArrow />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <RightArrow />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image
                    src={'/pizza.png'}
                    layout="fill"
                    alt="Pizza"
                    objectFit="contain"
                />
            </div>
        </section>
    );
}

export default Hero;