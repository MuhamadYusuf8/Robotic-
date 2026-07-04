'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/lib/utils/animations';
import { divisions } from '@/lib/data/divisions';
import {
  leadership, secretaryTeam, treasurerTeam,
  hrdTeam, communicationTeam, pnpTeam, multimediaTeam, techResearchTeam,
  type TeamMember,
} from '@/lib/data/team';
import {
  Microscope, Clapperboard, Megaphone, Users, MonitorSpeaker, Shield,
  FileText, Wallet, X, type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Microscope,
  Clapperboard,
  Megaphone,
  Users,
  Shield,
  MonitorSpeaker,
};

// Tree structure data
interface TreeNode {
  id: string;
  label: string;
  shortLabel: string;
  color: string;
  icon: LucideIcon;
  description: string;
  focusAreas: string[];
  members: TeamMember[];
  children?: TreeNode[];
}

const orgTree: TreeNode = {
  id: 'board-of-directors',
  label: 'Board of Directors',
  shortLabel: 'BoD',
  color: '#00c4ff',
  icon: Shield,
  description: divisions.find(d => d.id === 'board-of-directors')?.fullDescription || '',
  focusAreas: divisions.find(d => d.id === 'board-of-directors')?.focusAreas || [],
  members: leadership,
  children: [
    {
      id: 'secretary',
      label: 'Secretary',
      shortLabel: 'Sec',
      color: '#64748b',
      icon: FileText,
      description: 'Secretary is the administrative foundation of PURTC. This division ensures the entire organizational machinery runs in an orderly manner — from meeting minutes, official document management, correspondence, to activity archives.',
      focusAreas: ['Administration', 'Documentation', 'Meeting Management', 'Record Keeping'],
      members: secretaryTeam,
    },
    {
      id: 'treasurer',
      label: 'Treasurer',
      shortLabel: 'Trea',
      color: '#f97316',
      icon: Wallet,
      description: 'Treasurer ensures PURTC operates financially healthy and transparent. This division is responsible for budget planning, cash management, financial reporting, and ensuring every fund used provides maximum benefit.',
      focusAreas: ['Budget Planning', 'Financial Management', 'Cash Flow', 'Financial Reporting'],
      members: treasurerTeam,
    },
    {
      id: 'communication',
      label: 'Communication',
      shortLabel: 'Comm',
      color: '#10b981',
      icon: Megaphone,
      description: divisions.find(d => d.id === 'communication')?.fullDescription || '',
      focusAreas: divisions.find(d => d.id === 'communication')?.focusAreas || [],
      members: communicationTeam,
    },
    {
      id: 'hrd',
      label: 'Human Resource Development',
      shortLabel: 'HRD',
      color: '#ec4899',
      icon: Users,
      description: divisions.find(d => d.id === 'hrd')?.fullDescription || '',
      focusAreas: divisions.find(d => d.id === 'hrd')?.focusAreas || [],
      members: hrdTeam,
    },
    {
      id: 'technology-research',
      label: 'Technology Research',
      shortLabel: 'TR',
      color: '#00c4ff',
      icon: Microscope,
      description: divisions.find(d => d.id === 'technology-research')?.fullDescription || '',
      focusAreas: divisions.find(d => d.id === 'technology-research')?.focusAreas || [],
      members: techResearchTeam,
    },
    {
      id: 'program-production',
      label: 'Program & Production',
      shortLabel: 'PnP',
      color: '#7c3aed',
      icon: Clapperboard,
      description: divisions.find(d => d.id === 'program-production')?.fullDescription || '',
      focusAreas: divisions.find(d => d.id === 'program-production')?.focusAreas || [],
      members: pnpTeam,
    },
    {
      id: 'multimedia-design',
      label: 'Multimedia & Design',
      shortLabel: 'MTDD',
      color: '#f59e0b',
      icon: MonitorSpeaker,
      description: divisions.find(d => d.id === 'multimedia-design')?.fullDescription || '',
      focusAreas: divisions.find(d => d.id === 'multimedia-design')?.focusAreas || [],
      members: multimediaTeam,
    },
  ],
};

function MemberRow({ member, color }: { member: TeamMember; color: string }) {
  return (
    <div
      className={`flex items-center gap-3 p-2.5 rounded-lg border transition-colors ${
        member.isHead || member.isViceHead ? 'border-white/15 bg-white/[0.03]' : 'border-white/5'
      }`}
    >
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-orbitron font-bold"
        style={{
          background: member.isHead ? `${color}25` : `${color}10`,
          color: color,
          border: `1px solid ${color}${member.isHead ? '50' : '20'}`,
        }}
      >
        {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-text-primary text-xs font-medium truncate">{member.name}</p>
        <p className="text-text-secondary text-[10px] truncate">{member.position}</p>
      </div>
      {(member.isHead || member.isViceHead) && (
        <span
          className="text-[9px] px-1.5 py-0.5 rounded font-orbitron font-semibold flex-shrink-0"
          style={{ color: color, background: `${color}15` }}
        >
          {member.isHead ? 'Head' : 'Vice'}
        </span>
      )}
    </div>
  );
}

export default function DivisionsPage() {
  const [selectedNode, setSelectedNode] = useState(null as TreeNode | null);

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
              Organizational Structure
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-text-primary mb-6">
              <span className="text-accent-blue glow-blue-text">PURTC</span> Divisions
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg max-w-2xl mx-auto">
              Click on any division to explore its purpose, focus areas, and team members.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Org Tree */}
      <section className="pb-24 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            className="flex flex-col items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Root: BoD */}
            <motion.button
              variants={fadeInUp}
              onClick={() => setSelectedNode(orgTree)}
              className="group cursor-pointer"
            >
              <div
                className="glass rounded-2xl px-8 py-5 border-2 transition-all duration-300 hover:scale-105 group-hover:shadow-lg"
                style={{
                  borderColor: selectedNode?.id === orgTree.id ? orgTree.color : `${orgTree.color}30`,
                  boxShadow: selectedNode?.id === orgTree.id ? `0 0 20px ${orgTree.color}20` : 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${orgTree.color}15`, border: `1px solid ${orgTree.color}40` }}
                  >
                    <Shield size={24} style={{ color: orgTree.color }} />
                  </div>
                  <div className="text-left">
                    <span
                      className="inline-block font-orbitron text-[10px] tracking-[0.2em] px-2 py-0.5 rounded font-semibold"
                      style={{ color: orgTree.color, background: `${orgTree.color}15` }}
                    >
                      {orgTree.shortLabel}
                    </span>
                    <h3 className="font-orbitron text-lg font-bold text-text-primary">{orgTree.label}</h3>
                  </div>
                </div>
              </div>
            </motion.button>

            {/* Vertical connector */}
            <div className="w-px h-10 bg-gradient-to-b from-accent-blue/40 to-accent-blue/15" />

            {/* Horizontal bar */}
            <div className="relative w-full max-w-5xl">
              <div className="h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
            </div>

            {/* Child nodes */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-0"
            >
              {orgTree.children?.map((node) => {
                const NodeIcon = node.icon;
                const isSelected = selectedNode?.id === node.id;
                return (
                  <motion.button
                    key={node.id}
                    variants={fadeInUp}
                    onClick={() => setSelectedNode(node)}
                    className="flex flex-col items-center cursor-pointer group h-full"
                  >
                    {/* Vertical connector */}
                    <div className="w-px h-6 bg-gradient-to-b from-accent-blue/25 to-transparent flex-shrink-0" />

                    <div
                      className="glass rounded-xl p-4 border-2 transition-all duration-300 hover:scale-105 w-full flex-1 flex flex-col items-center justify-start group-hover:shadow-lg"
                      style={{
                        borderColor: isSelected ? node.color : `${node.color}15`,
                        boxShadow: isSelected ? `0 0 20px ${node.color}20` : 'none',
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2"
                        style={{ background: `${node.color}15`, border: `1px solid ${node.color}30` }}
                      >
                        <NodeIcon size={18} style={{ color: node.color }} />
                      </div>
                      <span
                        className="inline-block font-orbitron text-[9px] tracking-[0.15em] px-1.5 py-0.5 rounded font-semibold mb-1"
                        style={{ color: node.color, background: `${node.color}15` }}
                      >
                        {node.shortLabel}
                      </span>
                      <p className="font-orbitron text-[10px] font-bold text-text-primary leading-tight">{node.label}</p>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popup / Detail Modal */}
      <AnimatePresence>
        {selectedNode && (
          <>
            {/* Backdrop and Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedNode(null)}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl max-h-[85vh] overflow-y-auto glass rounded-2xl border relative"
                style={{ borderColor: `${selectedNode.color}30` }}
              >
              {/* Accent bar */}
              <div
                className="h-1 sticky top-0"
                style={{ background: `linear-gradient(90deg, ${selectedNode.color}80, ${selectedNode.color}20, transparent)` }}
              />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${selectedNode.color}15`, border: `1px solid ${selectedNode.color}40` }}
                    >
                      {(() => {
                        const SelectedIcon = selectedNode.icon;
                        return <SelectedIcon size={28} style={{ color: selectedNode.color }} />;
                      })()}
                    </div>
                    <div>
                      <span
                        className="inline-block font-orbitron text-[10px] tracking-[0.2em] px-2 py-0.5 rounded font-semibold mb-1"
                        style={{ color: selectedNode.color, background: `${selectedNode.color}15` }}
                      >
                        {selectedNode.shortLabel}
                      </span>
                      <h3 className="font-orbitron text-xl font-bold text-text-primary">{selectedNode.label}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedNode(null)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors text-text-secondary hover:text-text-primary flex-shrink-0"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-6">{selectedNode.description}</p>

                {/* Focus Areas */}
                {selectedNode.focusAreas.length > 0 && (
                  <div className="mb-6">
                    <p className="font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-3">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="text-xs px-3 py-1.5 rounded-full border font-medium"
                          style={{ color: selectedNode.color, borderColor: `${selectedNode.color}40`, background: `${selectedNode.color}10` }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Members */}
                <div>
                  <p className="font-orbitron text-[10px] tracking-[0.2em] text-text-secondary uppercase mb-3">
                    Team Members ({selectedNode.members.length})
                  </p>
                  <div className="space-y-2">
                    {selectedNode.members.map((m) => (
                      <MemberRow key={m.name} member={m} color={selectedNode.color} />
                    ))}
                  </div>
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
