import Image from "next/image";

export default function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/html5.png" width="80" height="80" alt="logo html" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/css.png" width="60" height="60" alt="logo css" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/js.png" width="80" height="80" alt="logo javascript" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/php1.png" width="80" height="80" alt="logo php" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">PHP</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/laravel.png" width="120" height="80" alt="logo laravel" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">Laravel</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 ">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image src="/../public/assets/skills/mysql.png" width="120" height="80" alt="logo mysql" />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="text-lg">MySQL</h3>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}