import { ExternalLink, Github, Zap, LayoutTemplate } from 'lucide-react';
import { projects } from '@/src/data/projects';
import { ProjectCarousel } from '@/src/components/sections/ProjectCarousel';

export function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-20">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-coffee font-serif text-4xl md:text-5xl">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            사용자의 불편함을 데이터와 기술로 해결한 경험을 기록합니다.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <article key={project.id} className="group">
              <div className="grid items-start gap-12 lg:grid-cols-12">
                {/* ✅ 이미지 컬럼: wrapper 1개만 사용 */}
                <div
                  className={`relative overflow-hidden rounded-3xl border transition-all duration-500 group-hover:shadow-lg lg:col-span-7 ${
                    index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  } ${
                    project.color === 'sage'
                      ? 'bg-sage/10 border-sage/20'
                      : 'border-orange-100 bg-orange-50/50'
                  }`}
                >
                  {project.images?.length ? (
                    <ProjectCarousel
                      slides={project.images}
                      tone={project.color}
                      priority={index === 0}
                    />
                  ) : (
                    <div className="flex w-full items-center justify-center">
                      <div className="space-y-2 text-center">
                        <LayoutTemplate
                          size={64}
                          className={`mx-auto ${
                            project.color === 'sage'
                              ? 'text-sage/50'
                              : 'text-orange-300'
                          }`}
                        />
                        <span
                          className={`block font-serif text-xl ${
                            project.color === 'sage'
                              ? 'text-sage'
                              : 'text-orange-400'
                          }`}
                        ></span>
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`space-y-8 lg:col-span-5 ${
                    index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${
                          project.color === 'sage'
                            ? 'bg-sage/20 text-sage-dark'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {project.type}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-coffee mb-2 font-serif text-3xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-foreground mb-4 text-lg font-medium">
                      {project.summary}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`bg-cream rounded-2xl border p-6 shadow-sm ${
                      project.color === 'sage'
                        ? 'border-sage/20'
                        : 'border-orange-200/50'
                    }`}
                  >
                    <h4
                      className={`mb-4 flex items-center gap-2 border-b pb-2 font-bold ${
                        project.color === 'sage'
                          ? 'text-sage-dark border-sage/10'
                          : 'border-orange-200/50 text-orange-700'
                      }`}
                    >
                      <Zap size={18} /> {project.troubleShooting.title}
                    </h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="text-coffee mb-1 block font-bold">
                          [문제]
                        </span>
                        <p className="text-muted-foreground leading-snug">
                          {project.troubleShooting.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-coffee mb-1 block font-bold">
                          [해결]
                        </span>
                        <p className="text-muted-foreground leading-snug">
                          {project.troubleShooting.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        className="btn-outline flex items-center gap-2 px-5 py-2 text-sm"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="btn-outline flex items-center gap-2 px-5 py-2 text-sm"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
