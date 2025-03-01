type Portfolio = {
    id: string
    name: string
    position: string
    techStack: string
    description: string
    projects: Project[];
}

type Project = {
  title: string;
  startDate: Date;
  endDate?: Date;
  onGoing: boolean;
};