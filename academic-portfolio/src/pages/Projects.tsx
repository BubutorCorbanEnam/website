import { ExternalLink, Github, Library } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { projects } from '../data/content';

export function Projects() {
  return (
    <>
      <PageHeader title="Projects" description="Research software, data products, dashboards, and reproducible analysis systems." />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title}>
              <img className="aspect-video w-full rounded-md object-cover" src={project.image} alt={`${project.title} screenshot placeholder`} />
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">{project.title}</h2>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-slate-800 dark:text-slate-200">{project.status}</span>
              </div>
              <p className="mt-3 leading-7 text-ink-500 dark:text-slate-400">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs text-ink-500 dark:border-slate-800 dark:text-slate-400" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={project.github} variant="secondary" icon={<Github size={16} />}>
                  GitHub
                </Button>
                <Button href={project.demo} variant="secondary" icon={<ExternalLink size={16} />}>
                  Demo
                </Button>
                <Button href={project.publication} variant="ghost" icon={<Library size={16} />}>
                  Publication
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
