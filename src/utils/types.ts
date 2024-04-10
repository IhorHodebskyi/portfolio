export interface Images {
  label: string;
  url: string;
}

export interface ProjectTab {
  title: string;
  images: Images[];
  description: string;
  link?: string;
  role: string;

  project: string;
  techStack: string;
}
