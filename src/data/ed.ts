export type educationItem = {
  id: string;
  school: string;
  degree: string;
  dates: string;
  location: string;
  description: string;
}

const education: educationItem[] = [
  {
    "id": "umd",
    "school": "University of Maryland",
    "degree": "M.S. Information Management",
    "dates": "2009 - 2011",
    "location": "College Park, MD",
    "description": "Thesis: “An Integrated CRM Conceptual Framework” \n Areas of Concentration: Usability and Knowledge Management"
  },
  {
    "id": "su",
    "school": "Syracuse University",
    "degree": "M.S. New Media",
    "dates": "2004 - 2005",
    "location": "Syracuse, NY",
    "description": "Capstone: E-Commerce Interface and Order Management System \n Areas of Concentration: Database-driven interface design"
  }
]

export default education;