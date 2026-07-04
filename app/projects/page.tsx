'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { projects, type Project } from '@/lib/data/projects';
import { ExternalLink, GitBranch, Trophy, Star, Cpu, X, Wrench, Users } from 'lucide-react';

const achievementConfig = {
  gold: { label: '🥇 Gold', color: '#d4a843' },
  silver: { label: '🥈 Silver', color: '#c8d0e0' },
  bronze: { label: '🥉 Bronze', color: '#cd7f32' },
  finalist: { label: '🏆 Finalist', color: '#7c3aed' },
  winner: { label: '✨ Success', color: '#10b981' },
  none: { label: '', color: '#64748b' },
};

const divisionColors: Record<string, string> = {
  'Technology Research': '#00c4ff',
  'Program & Production': '#7c3aed',
  'Multimedia & Design': '#f59e0b',
  'Communication': '#10b981',
  'HRD': '#ec4899',
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null as Project | null);

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="font-orbitron text-xs font-semibold text-accent-blue tracking-[0.3em] uppercase mb-4">
              Our Work
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              Featured <span className="text-accent-blue glow-blue-text">Projects</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto">
              These aren&apos;t just words — these are real works built by PURTC members.
              From robotics to digital platforms, every project is proof that we truly create.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project) => {
              const ach = achievementConfig[project.achievementType || 'none'];
              const divColor = divisionColors[project.division] || '#00c4ff';

              return (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  onClick={() => setSelectedProject(project)}
                  className="group glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                >
                  {/* Visual banner */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.imageGradient} flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                        <Cpu size={32} className="text-accent-blue" />
                      </div>
                    </div>

                    {/* Achievement badge */}
                    {project.achievementType && project.achievementType !== 'none' && (
                      <div
                        className="absolute top-4 right-4 font-orbitron text-[10px] tracking-[0.1em] px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: `${ach.color}20`, color: ach.color, border: `1px solid ${ach.color}40` }}
                      >
                        {ach.label}
                      </div>
                    )}

                    {/* Year badge */}
                    <div className="absolute top-4 left-4 font-orbitron text-[10px] tracking-[0.1em] px-2 py-1 rounded bg-black/40 text-text-secondary">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Division */}
                    <span
                      className="inline-block font-orbitron text-[10px] tracking-[0.15em] px-2.5 py-1 rounded mb-3 font-semibold"
                      style={{ color: divColor, background: `${divColor}15` }}
                    >
                      {project.division}
                    </span>

                    <h3 className="font-orbitron text-lg font-bold text-text-primary mb-3">{project.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        {project.event && (
                          <p className="text-text-secondary text-xs">
                            <Star size={10} className="inline mr-1 text-accent-gold" />
                            {project.event}
                          </p>
                        )}
                      </div>
                      <div className="flex gap-3">
                        {project.demoUrl && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-accent-blue hover:text-text-primary transition-colors font-orbitron tracking-wider">
                            <ExternalLink size={12} /> Demo
                          </a>
                        )}
                        {project.repoUrl && (
                          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-blue transition-colors">
                            <GitBranch size={12} /> Repo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Coming soon note */}
          <motion.div
            className="mt-12 text-center glass rounded-xl p-8 border border-white/5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Trophy size={32} className="text-accent-blue mx-auto mb-4 opacity-50" />
            <p className="font-orbitron text-sm text-text-secondary tracking-wider">
              More projects are in development by PURTC members.
            </p>
            <p className="text-text-secondary text-xs mt-2">
              Every Weekly Training session produces new works — stay tuned!
            </p>
          </motion.div>
        </div>
      </section>


      {/* Project Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl max-h-[85vh] overflow-y-auto glass rounded-2xl border border-white/10 relative flex flex-col"
              >
                {/* Visual Header */}
                <div className={`relative h-48 sm:h-64 bg-gradient-to-br ${selectedProject?.imageGradient} flex-shrink-0 flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20"
                  >
                    <X size={16} />
                  </button>
                  <Cpu size={48} className="text-white/50 relative z-10" />
                  
                  {/* Division Badge */}
                  <div className="absolute bottom-4 left-6 z-10">
                    <span
                      className="inline-block font-orbitron text-[10px] tracking-[0.15em] px-2.5 py-1 rounded bg-black/50 text-white font-semibold backdrop-blur-md"
                    >
                      {selectedProject?.division}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-orbitron text-2xl font-bold text-text-primary">{selectedProject?.name}</h2>
                      {selectedProject?.achievementType && selectedProject.achievementType !== 'none' && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/20 bg-white/5 text-text-secondary">
                          {achievementConfig[selectedProject.achievementType].label}
                        </span>
                      )}
                    </div>
                    <p className="text-text-secondary text-sm">Created in {selectedProject?.year}</p>
                  </div>

                  {/* Full Description */}
                  <div className="mb-8">
                    <h3 className="font-orbitron text-xs tracking-wider text-accent-blue uppercase mb-3">About the Project</h3>
                    <p className="text-text-secondary leading-relaxed text-sm whitespace-pre-line">
                      {selectedProject?.fullDescription || selectedProject?.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                    {/* Tools Used */}
                    {selectedProject?.toolsUsed && selectedProject.toolsUsed.length > 0 && (
                      <div>
                        <h3 className="flex items-center gap-2 font-orbitron text-xs tracking-wider text-accent-blue uppercase mb-3">
                          <Wrench size={14} /> Tech Stack & Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.toolsUsed.map((tool) => (
                            <span key={tool} className="text-[11px] px-2.5 py-1 rounded border border-white/10 bg-white/5 text-text-secondary">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Creators */}
                    {selectedProject?.creators && selectedProject.creators.length > 0 && (
                      <div>
                        <h3 className="flex items-center gap-2 font-orbitron text-xs tracking-wider text-accent-blue uppercase mb-3">
                          <Users size={14} /> Team & Creators
                        </h3>
                        <div className="space-y-2">
                          {selectedProject.creators.map((creator, idx) => (
                            <div key={idx} className="flex flex-col border-l-2 border-white/10 pl-3 py-0.5">
                              <span className="text-sm text-text-primary font-medium">{creator.name}</span>
                              <span className="text-[10px] text-text-secondary">{creator.role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 pt-6 border-t border-white/10 mt-auto">
                    {selectedProject?.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-accent-blue/10 hover:bg-accent-blue/20 border border-accent-blue/30 rounded-lg text-accent-blue font-orbitron text-xs tracking-widest transition-colors"
                      >
                        <ExternalLink size={16} /> LIVE DEMO
                      </a>
                    )}
                    {selectedProject?.repoUrl && (
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-2 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-text-secondary hover:text-text-primary font-orbitron text-xs tracking-widest transition-colors"
                      >
                        <GitBranch size={16} /> REPOSITORY
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
