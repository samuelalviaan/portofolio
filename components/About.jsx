import Image from "next/image";
import Link from "next/link";
import codeImg from "../public/image2.png"

export default function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase tracking-widest text-xl text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">I am fresh graduate in computer science at Sekolah Tinggi Teknologi Bandung. I usually build web applications using PHP technology, Laravel as a framework and mySQL as a database. Currently, I&apos;m trying a front-end technology using JavaScript and NextJs as a framework for website application development</p>
                    <Link href='/#projects'>
                        <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects.</p>
                    </Link>
                </div>
                <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300">
                    <Image className="rounded-xl" src={codeImg} width={400} height={400} alt="/" />
                </div>
            </div>
        </div>
    );
}