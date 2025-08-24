import {
  HeartPulse,
  Stethoscope,
  Bone,
  Eye,
  Baby,
  Brain,
  Flower2,
  Target,
  Milestone,
  Microscope,
  Timer,
  Thermometer,
  Activity,
  CircleDot,
} from "lucide-react";

export const SPECIALTIES = [
  {
    name: "General Medicine",
    icon: <Stethoscope className="h-5 w-5" />,
  },
  {
    name: "Cardiology",
    icon: <HeartPulse className="h-5 w-5" />,
  },
  {
    name: "Dermatology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Endocrinology",
    icon: <Timer className="h-5 w-5" />,
  },
  {
    name: "Gastroenterology",
    icon: <Thermometer className="h-5 w-5" />,
  },
  {
    name: "Neurology",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Obstetrics & Gynecology",
    icon: <Flower2 className="h-5 w-5" />,
  },
  {
    name: "Oncology",
    icon: <Target className="h-5 w-5" />,
  },
  {
    name: "Ophthalmology",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    name: "Orthopedics",
    icon: <Bone className="h-5 w-5" />,
  },
  {
    name: "Pediatrics",
    icon: <Baby className="h-5 w-5" />,
  },
  {
    name: "Psychiatry",
    icon: <Brain className="h-5 w-5" />,
  },
  {
    name: "Pulmonology",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    name: "Radiology",
    icon: <CircleDot className="h-5 w-5" />,
  },
  {
    name: "Urology",
    icon: <Milestone className="h-5 w-5" />,
  },
  {
    name: "Other",
    icon: <Microscope className="h-5 w-5" />,
  },
];
export const dummyDoctors = [
  {
    id: "1",
    name: "Dr. Aarav Patel",
    specialty: "General Medicine",
    experience: 14,
    description:
      "Experienced general physician providing comprehensive healthcare and preventive medicine.",
    imageUrl: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    id: "2",
    name: "Dr. Anjali Sharma",
    specialty: "Cardiology",
    experience: 12,
    description:
      "Specialist in heart health and preventive cardiology with over a decade of experience.",
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "3",
    name: "Dr. Rohan Mehta",
    specialty: "Dermatology",
    experience: 8,
    description:
      "Expert in skincare, acne treatment, and cosmetic dermatology. Known for patient-friendly approach.",
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "4",
    name: "Dr. Kavya Menon",
    specialty: "Endocrinology",
    experience: 11,
    description:
      "Focuses on hormone-related disorders such as diabetes, thyroid, and metabolic conditions.",
    imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "5",
    name: "Dr. Ishaan Gupta",
    specialty: "Gastroenterology",
    experience: 13,
    description:
      "Specialist in digestive health, liver diseases, and endoscopic procedures.",
    imageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: "6",
    name: "Dr. Priya Nair",
    specialty: "Pediatrics",
    experience: 10,
    description:
      "Trusted pediatrician providing compassionate care for infants and children.",
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "7",
    name: "Dr. Arvind Gupta",
    specialty: "Orthopedics",
    experience: 15,
    description:
      "Experienced orthopedic surgeon specializing in bone injuries and joint replacements.",
    imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "8",
    name: "Dr. Sneha Verma",
    specialty: "Neurology",
    experience: 9,
    description:
      "Specialist in brain, spinal cord, and nervous system disorders.",
    imageUrl: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: "9",
    name: "Dr. Karan Malhotra",
    specialty: "Obstetrics & Gynecology",
    experience: 16,
    description:
      "Expert gynecologist and obstetrician providing maternity and women’s health care.",
    imageUrl: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "10",
    name: "Dr. Neha Kapoor",
    specialty: "Oncology",
    experience: 12,
    description:
      "Cancer specialist providing chemotherapy, radiation guidance, and palliative care.",
    imageUrl: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    id: "11",
    name: "Dr. Rajeev Saxena",
    specialty: "Ophthalmology",
    experience: 18,
    description:
      "Eye specialist focused on cataract surgeries, LASIK, and retinal disorders.",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: "12",
    name: "Dr. Manisha Iyer",
    specialty: "Psychiatry",
    experience: 14,
    description:
      "Specializes in mental health, depression, anxiety, and therapy-based care.",
    imageUrl: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    id: "13",
    name: "Dr. Rohit Singh",
    specialty: "Pulmonology",
    experience: 10,
    description:
      "Expert in lung diseases, asthma, COPD, and critical care pulmonology.",
    imageUrl: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: "14",
    name: "Dr. Tanya Bansal",
    specialty: "Radiology",
    experience: 9,
    description:
      "Specialist in diagnostic imaging including MRI, CT scans, and ultrasounds.",
    imageUrl: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: "15",
    name: "Dr. Vivek Reddy",
    specialty: "Urology",
    experience: 13,
    description:
      "Expert in kidney, bladder, and prostate disorders. Performs advanced urological surgeries.",
    imageUrl: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    id: "16",
    name: "Dr. Anushka Rao",
    specialty: "General Medicine",
    experience: 7,
    description:
      "General practitioner with special interest in preventive health care.",
    imageUrl: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    id: "17",
    name: "Dr. Mohit Arora",
    specialty: "Cardiology",
    experience: 20,
    description:
      "Renowned cardiologist with expertise in angioplasty and heart failure management.",
    imageUrl: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    id: "18",
    name: "Dr. Shreya Das",
    specialty: "Dermatology",
    experience: 6,
    description:
      "Focused on cosmetic dermatology and hair loss treatments.",
    imageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: "19",
    name: "Dr. Ayaan Khan",
    specialty: "Endocrinology",
    experience: 11,
    description:
      "Diabetes and thyroid expert with focus on patient education.",
    imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    id: "20",
    name: "Dr. Ritu Sinha",
    specialty: "Gastroenterology",
    experience: 8,
    description:
      "Specialist in digestive tract diseases and endoscopic care.",
    imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: "21",
    name: "Dr. Suresh Menon",
    specialty: "Neurology",
    experience: 17,
    description:
      "Neurologist with expertise in stroke, epilepsy, and neuro-rehab.",
    imageUrl: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    id: "22",
    name: "Dr. Pooja Joshi",
    specialty: "Obstetrics & Gynecology",
    experience: 9,
    description:
      "Cares for high-risk pregnancies and infertility treatments.",
    imageUrl: "https://randomuser.me/api/portraits/women/40.jpg",
  },
  {
    id: "23",
    name: "Dr. Harsh Vardhan",
    specialty: "Oncology",
    experience: 15,
    description:
      "Senior oncologist specializing in breast and lung cancer treatments.",
    imageUrl: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    id: "24",
    name: "Dr. Meera Kaur",
    specialty: "Ophthalmology",
    experience: 10,
    description:
      "Provides eye care including glaucoma and pediatric ophthalmology.",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: "25",
    name: "Dr. Yashwant Chaturvedi",
    specialty: "Orthopedics",
    experience: 19,
    description:
      "Sports injury and joint replacement specialist.",
    imageUrl: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    id: "26",
    name: "Dr. Nisha Reddy",
    specialty: "Psychiatry",
    experience: 7,
    description:
      "Focus on child psychiatry and cognitive behavioral therapy.",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: "27",
    name: "Dr. Kunal Bhatt",
    specialty: "Pulmonology",
    experience: 12,
    description:
      "Specialist in sleep disorders and advanced respiratory care.",
    imageUrl: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    id: "28",
    name: "Dr. Sonali Deshmukh",
    specialty: "Radiology",
    experience: 8,
    description:
      "Radiologist focusing on women’s imaging and cancer detection.",
    imageUrl: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: "29",
    name: "Dr. Arjun Nair",
    specialty: "Urology",
    experience: 16,
    description:
      "Performs advanced minimally invasive urological procedures.",
    imageUrl: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    id: "30",
    name: "Dr. Divya Sharma",
    specialty: "Other",
    experience: 5,
    description:
      "General practitioner providing holistic and integrative care.",
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];
