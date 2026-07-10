import {
  Pill,
  HeartPulse,
  Baby,
  ShieldPlus,
  Smile,
  Venus,
  Leaf,
  Stethoscope,
} from "lucide-react";

const category = [
  {
    id: 1,
    title: "Medicines",
    description: "Prescription & OTC",
    icon: Pill,
    slug: "medicines",
  },
  {
    id: 2,
    title: "Personal Care",
    description: "Daily essentials",
    icon: HeartPulse,
    slug: "personal-care",
  },
  {
    id: 3,
    title: "Health Care",
    description: "Medical equipment",
    icon: Smile,
    slug: "health-care",
  },
  {
    id: 4,
    title: "Baby Care",
    description: "Baby products",
    icon: Baby,
    slug: "baby-care",
  },
  {
  id: 5,
  title: "Dental Care",
  description: "Oral hygiene products",
  icon: ShieldPlus,
  slug: "dental-care",
},
{
  id: 6,
  title: "Women's Care",
  description: "Health & wellness",
  icon: Venus,
  slug: "womens-care",
},
{
  id: 7,
  title: "Ayurveda",
  description: "Natural remedies",
  icon: Leaf,
  slug: "ayurveda",
},
{
  id: 8,
  title: "Medical Devices",
  description: "Healthcare equipment",
  icon: Stethoscope,
  slug: "medical-devices",
}
];

export default category;