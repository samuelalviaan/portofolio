import freelancerImg from "../public/assets/projects/serv.png"
import ProjectItem from "./ProjectItem";

export default function Projects() {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl uppercase tracking-widest text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I&apos;ve Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    
                <ProjectItem title="Freelancer Website" backgroundImg={freelancerImg} projectUrl="/freelancer" />

                </div>
            </div>
        </div>  
    );
}