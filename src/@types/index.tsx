interface Experience {
    title: string,
    company_name: string,
    icon: string,
    iconBg: string,
    date: string,
    points: string[]
}

interface Testimonial {
    testimonial: string,
    name: string,
    designation: string,
    company: string,
    image: string
}

interface ProjectTag {
    name: string,
    color: string
}

interface Project {
    name: string,
    description: string,
    tags: ProjectTag[],
    image: string,
    source_code_link: string
    demo? : string
}

interface Tech {
    name: string,
    icon: string
}

interface Service {
    title: string,
    icon: string
}

interface Navlink {
    id: string,
    title: string
}

export type { Service, Tech, Testimonial, Experience, Project, Navlink}