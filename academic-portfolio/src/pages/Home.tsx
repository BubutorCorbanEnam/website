import { motion } from 'framer-motion';
import { ArrowRight, Download, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';
import { blogPosts, projects, publications, researchInterests, stats, testimonials, timeline } from '../data/content';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';
import { Timeline } from '../components/ui/Timeline';
import { ShareButtons } from '../components/ui/ShareButtons';

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-32 dark:bg-slate-950">
        <div className="absolute inset-0 bg-academic-grid bg-[length:44px_44px] opacity-80" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.16),transparent_55%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-signal-teal">{siteConfig.title}</p>
            <h1 className="text-balance text-5xl font-semibold text-ink-900 dark:text-white sm:text-6xl">{siteConfig.headline}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-slate-300">{siteConfig.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/research" icon={<ArrowRight size={17} />}>
                Explore Research
              </Button>
              <Button href={siteConfig.cv} variant="secondary" icon={<Download size={17} />}>
                Download CV
              </Button>
              <Button href="/publications" variant="ghost" icon={<FileText size={17} />}>
                Publications
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img className="aspect-[4/5] w-full rounded-lg border border-slate-200 object-cover shadow-soft dark:border-slate-800" src={siteConfig.profileImage} alt={`${siteConfig.name} profile placeholder`} />
          </motion.div>
        </div>
      </section>

      <Section eyebrow="Research Interests" title="A focused agenda for rigorous, useful evidence.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {researchInterests.map((interest) => (
            <Card key={interest}>
              <h3 className="font-semibold text-ink-900 dark:text-white">{interest}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured Work" title="Selected publications and current projects.">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-teal">Featured Publication</p>
            <h3 className="mt-3 text-2xl font-semibold text-ink-900 dark:text-white">{publications[0].title}</h3>
            <p className="mt-3 leading-7 text-ink-500 dark:text-slate-400">{publications[0].abstract}</p>
            <Button href="/publications" variant="ghost">
              View all publications
            </Button>
          </Card>
          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-signal-teal">Latest Project</p>
            <img className="mt-4 aspect-video w-full rounded-md object-cover" src={projects[0].image} alt="" />
            <h3 className="mt-4 text-2xl font-semibold text-ink-900 dark:text-white">{projects[0].title}</h3>
            <p className="mt-3 leading-7 text-ink-500 dark:text-slate-400">{projects[0].description}</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Trajectory" title="Timeline preview">
        <Timeline items={timeline.slice(0, 4)} />
      </Section>

      <Section eyebrow="News" title="Recent notes and updates">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.title}>
              <img className="aspect-video w-full rounded-md object-cover" src={post.image} alt="" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-signal-teal">{post.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">{post.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-500 dark:text-slate-400">{post.excerpt}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Placeholder endorsements">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <blockquote className="text-xl leading-8 text-ink-900 dark:text-white">"{testimonial.quote}"</blockquote>
              <p className="mt-4 text-sm font-semibold text-ink-700 dark:text-slate-300">{testimonial.name}</p>
              <p className="text-sm text-ink-500 dark:text-slate-400">{testimonial.role}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8">
          <ShareButtons title="Academic portfolio" />
        </div>
      </Section>
    </>
  );
}
