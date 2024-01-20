import Link from "next/link";
import Header from '@/components/layout/Header';
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <HomeMenu />

            <section className="text-center my-8">
                <SectionHeader
                    subHeader="Our Story"
                    mainHeader="About us"
                />
                <div className="max-w-md text-gray-500 mx-auto mt-4 flex flex-col gap-4">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium ab.
                        Nobis, totam dolore, laboriosam corrupti qui accusantium ipsam voluptatum quae
                        placeat dolor ratione, omnis quidem saepe laborum illum facere!
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, praesentium ab.
                        Nobis, totam dolore, laboriosam corrupti qui accusantium ipsam voluptatum quae
                        placeat dolor ratione, omnis quidem saepe laborum illum facere!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe quis neque quas
                        placeat reiciendis ut quidem, dolores assumenda error optio.
                    </p>
                </div>

            </section>
            <section className="text-center my-8">
                <SectionHeader
                    subHeader="Don't hesitate to"
                    mainHeader="Contact us"
                />
                <div className="text-4xl text-gray-500 mt-8 underline">
                    <a href="tel:+86 123456789">+86 123 456 789</a>
                </div>
            </section>
        </>
    );
}
