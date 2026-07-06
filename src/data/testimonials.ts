export interface Testimonial {
  business: string;
  name?: string;
  role?: string;
  comment: string;
  rating: number;
  initials: string;
  color: string;
}

export const testimonials: Testimonial[] = [
  {
    business: "EZ Notary Services",
    name: "Tonya Ezell",
    role: "Owner",
    comment:
      "Absolutely loved their service! Here are answers to our most common customer questions. Still curious? Feel free to reach out anytime.",
    rating: 5,
    initials: "EZ",
    color: "from-brand-blue to-brand-teal",
  },
  {
    business: "Dream Homes Designed LLC",
    role: "Founder",
    comment:
      "Their team exceeded all expectations! Here we answer some of the most frequent questions new clients ask. Have more in mind? Don't hesitate to connect with us anytime for clarity.",
    rating: 5,
    initials: "DH",
    color: "from-brand-green to-brand-teal",
  },
  {
    business: "Ablaze Tree Pros LLC",
    role: "Operations Lead",
    comment:
      "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
    rating: 5,
    initials: "AT",
    color: "from-orange-500 to-red-500",
  },
  {
    business: "Cozy Place Learning Center",
    role: "Director",
    comment:
      "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
    rating: 5,
    initials: "CP",
    color: "from-pink-500 to-purple-500",
  },
  {
    business: "South Jersey Orofacial Myology",
    role: "Clinical Lead",
    comment:
      "Outstanding experience from start to finish! Below you'll find answers to common questions new customers usually ask. Still looking for more details? Reach out and our team will happily assist you anytime.",
    rating: 5,
    initials: "SJ",
    color: "from-brand-teal to-brand-blue",
  },
];
