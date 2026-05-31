'use client';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Exploration' | 'Refining' | 'Infrastructure' | 'Logistics';
  status: 'Completed' | 'Ongoing' | 'Upcoming';
  location: string;
  image: string;
  featured: boolean;
  date: string;
}

const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Niger Delta Deep-Sea Rig Alpha',
    description: 'Deploying advanced deepwater drilling and offshore extraction technologies to securely meet international energy demands while preserving native ecosystems.',
    category: 'Exploration',
    status: 'Ongoing',
    location: 'Offshore Nigeria',
    image: '/images/exploration_rig.png',
    featured: true,
    date: '2025-11-12'
  },
  {
    id: 'proj-2',
    title: 'Sharjah Refinery Modernization',
    description: 'Upgrading a high-throughput petroleum refining system to ultra-low sulfur specifications, utilizing clean catalysis and digital flow optimizations.',
    category: 'Refining',
    status: 'Completed',
    location: 'Sharjah, UAE',
    image: '/images/refinery_hero.png',
    featured: true,
    date: '2025-04-08'
  },
  {
    id: 'proj-3',
    title: 'Juba Crude Storage & Distribution Hub',
    description: 'Engineering massive pipelines, multi-million-barrel storage tanks, and high-efficiency loading manifolds to streamline logistics across East Africa.',
    category: 'Infrastructure',
    status: 'Upcoming',
    location: 'Juba, South Sudan',
    image: '/images/energy_pipeline.png',
    featured: true,
    date: '2026-08-01'
  },
  {
    id: 'proj-4',
    title: 'Gulf of Guinea Supply Logistics Terminal',
    description: 'Integrating automated terminal management systems and smart tanker berthing coordinates to ensure zero-spill petroleum transfer and distribution.',
    category: 'Logistics',
    status: 'Completed',
    location: 'Lagos Coast, Nigeria',
    image: '/images/exploration_rig.png',
    featured: false,
    date: '2024-10-15'
  },
  {
    id: 'proj-5',
    title: 'Ruwais Pipeline Network Expansion',
    description: 'Developing high-pressure steel pipelines spanning over 120km to reliably connect exploration fields to processing plants with fiber-optic leak detection.',
    category: 'Infrastructure',
    status: 'Ongoing',
    location: 'UAE Operations',
    image: '/images/energy_pipeline.png',
    featured: false,
    date: '2025-07-22'
  },
  {
    id: 'proj-6',
    title: 'Muglad Basin Onshore Drilling Phase III',
    description: 'Implementing high-efficiency horizontal onshore drilling to unlock tight reserves with minimal surface ecological footprint.',
    category: 'Exploration',
    status: 'Upcoming',
    location: 'Melut Basin, South Sudan',
    image: '/images/exploration_rig.png',
    featured: false,
    date: '2026-10-10'
  }
];

const LOCAL_STORAGE_KEY = 'neatasi-projects-store';

export function getProjects(): Project[] {
  if (typeof window === 'undefined') return DEFAULT_PROJECTS;
  
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  // Auto-migrate if local storage is empty or contains old broken placeholder .jpg links
  if (!saved || saved.includes('.jpg')) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
    return DEFAULT_PROJECTS;
  }
  
  try {
    return JSON.parse(saved);
  } catch (e) {
    console.error('Error parsing stored projects:', e);
    return DEFAULT_PROJECTS;
  }
}

export function saveProjects(projects: Project[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects));
}

export function addProject(project: Omit<Project, 'id'>): Project {
  const projects = getProjects();
  const newProject: Project = {
    ...project,
    id: 'proj-' + Date.now()
  };
  const updated = [newProject, ...projects];
  saveProjects(updated);
  
  // Dispatch custom event to notify all components of updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('neatasi-projects-updated'));
  }
  
  return newProject;
}

export function deleteProject(id: string): void {
  const projects = getProjects();
  const updated = projects.filter(p => p.id !== id);
  saveProjects(updated);
  
  // Dispatch custom event to notify all components of updates
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('neatasi-projects-updated'));
  }
}

export function resetToDefaults(): void {
  saveProjects(DEFAULT_PROJECTS);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('neatasi-projects-updated'));
  }
}
