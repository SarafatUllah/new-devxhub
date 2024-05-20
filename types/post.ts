// export interface Author {
//   id: number
//   name: string
//   slug: string
//   avatar: string
// }

// export interface Category {
//   id: number
//   name: string
//   slug: string
// }

// export interface Tag {
//   id: number
//   name: string
//   slug: string
// }

// export interface Post {
//   id: number
//   title: string
//   slug: string
//   url: string
//   image: string
//   read_time: string
//   description: string
//   content: string
//   date: string
//   author: Author
//   categories: Category[]
//   tags: Tag[]
// }

export interface Service {
  id: number
  name: string
  title: string
  image: string
  details: string
  background: string
}

export interface TechnologyStack {
  id: number
  name: string
  stack: string
}

export interface Technologies {
  name: string
  image: string
  stack: string
}

export interface WhyChooseUs {
  whyChoose: Facilities[]
}

export interface Facilities {
  facilities: Facility[]
}

export interface Facility {
  image: string
  text: string
}

export interface Job {
  id: number
  title: string
  jobs: JobDetail[]
}

export interface JobDetail {
  id: number
  title: string
  slug: string
  career: number
  type: string
  vacancy: number
  experience: string
  description: string
  image: string
  age_range: string
  gender: string
  salary: string
  working_hour: string
  deadline: string
  is_published: boolean
  link: string
  location: string
  created_at: string
}

export interface Career {
  careerFor: string
  positionFor: PositionFor[]
}

export interface PositionFor {
  position: string
  experience: string
  deadline: string
  applyLink: string
}