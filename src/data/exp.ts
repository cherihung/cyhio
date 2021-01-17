export type experienceItem = {
  id: string;
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string;
}

const experience: experienceItem[] = [
  {
    "id": "cap1",
    "company": "Capital One",
    "title": "Master Software Engineer, Tech Lead",
    "dates": "OCT 2017 - PRESENT",
    "location": "New York City & Vienna, VA",
    "description": "Tech lead delivering reliable, resilient software and tooling for customers and internal teams. Special projects include exploration into GraphQL/Apollo with React, large-scale NodeJS and event-based architecture. Mentoring and managing performances of junior engineers."
  },
  {
    "id": "aviture",
    "company": "Aviture",
    "title": "Frontend Engineer",
    "dates": "MAR 2014 - OCT 2017",
    "location": "Washington, DC",
    "description": "Created  modular and shareable UI toolkit/frameworks. Designed functional prototypes and implemented applications in AngularJS, React and Backbone."
  },
  {
    "id": "edweek",
    "company": "Editorial Projects in Education",
    "title": "Online Creative Director",
    "dates": "SEP 2010 - OCT 2014",
    "location": "Bethesda, MD",
    "description": "Designed and implemented UI and analytics capabilities for the publication’s flagship website and mobile application. Directed and executed data visualization, multimedia and information projects."
  }
]

export default experience;