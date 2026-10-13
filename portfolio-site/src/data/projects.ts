export interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    liveUrl?: string;
    repoUrl?: string;
}

export const projects: Project[] = [
    {
        title: 'Arbor',
        description: 'A custom file manager and suite of related tools.',
        tags: ['Rust', 'Desktop'],
    },
    {
        title: '3D Vector Visulizer',
        description: 'A tool for visualizing vectors in 3D.',
        tags: ['Winforms', 'C#'],
    },
    {
        title: 'Portfolio Site',
        description: 'This site: Vite, TypeScript, SCSS and Bootstrap on GitHub Pages.',
        tags: ['TypeScript', 'SCSS', 'Bootstrap'],
        repoUrl: 'https://github.com/your-user/EHSite',
    },
];