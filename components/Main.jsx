import Link from "next/link"
import { AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex items-center justify-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET&apos;S BUILD SOMETHING TOGETHER</p>
                <h1 className="py-4 text-gray-700">Hi, I&apos;m <span className="text-[#5651e5]">Samuel</span></h1>
                <h1 className="py-1 text-gray-700">A Web Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">I&apos;m a web developer. Currently, I&apos;m focused on building front-end web applications while learning back-end techonologies.</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://www.linkedin.com/in/samuelalviaan">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://github.com/samuelalviaan">
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="mailto:samuelalviaan@gmail.com">
                      <AiOutlineMail />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link href="https://www.instagram.com/samuelalviaan">
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
