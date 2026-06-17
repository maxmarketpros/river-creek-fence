export interface Review {
  name: string;
  rating: number;
  dateText: string;
  body: string;
  featured?: boolean;
}

// Verbatim 5-star Google reviews for River Creek Fence LLC.
export const reviews: Review[] = [
  {
    name: "Jeanne Julian",
    rating: 5,
    dateText: "Recently",
    featured: true,
    body: "We called for an estimate and had a pipe fence in 2 weeks! Cody and his team work HARD and efficient together. From start to finish they were respectful of our property and truly demonstrated good workmanship. We highly recommend them!",
  },
  {
    name: "Kathy Bones",
    rating: 5,
    dateText: "2 months ago",
    featured: true,
    body: "They installed my horse pasture fence and I could not be happier. They listened to my request, offered great advice to improve my design, and knocked down a number of small trees that were a fire threat to make a wonderful pasture. I would absolutely recommend them.",
  },
  {
    name: "Mike Hoffman",
    rating: 5,
    dateText: "3 months ago",
    featured: true,
    body: "Cody did work on a neighbor's property and it looked great, so I had him come out to discuss replacing rusted-out panels of wrought iron. The quote was more than fair, so we scheduled the replacement. From start to finish it took less than 4 hours and it looks great. Yard and dog are now secure again. Highly recommend.",
  },
  {
    name: "Rebecca Wiggs",
    rating: 5,
    dateText: "3 months ago",
    body: "Cody did a fantastic job and his crew as well — we have a beautiful fence and it was done in very good time. I will recommend River Creek Fence to everyone! The rate was a good price as well. Thank you Cody!!!",
  },
  {
    name: "Margo Ottman",
    rating: 5,
    dateText: "3 months ago",
    body: "We are very impressed with Cody and his team. They gave us the best quote, arrived on time, and worked hard to build us a beautiful fence. I would highly recommend River Creek Fence!",
  },
  {
    name: "Christy Jones Clark",
    rating: 5,
    dateText: "A year ago",
    body: "I am so impressed with River Creek Fence. Cody came out and did a quote — very friendly. He discussed what I wanted and asked questions. It took awhile to get scheduled but it was well worth it. The fence was replaced (cleanup included) in like 4 hrs! The new fence is gorgeous! Highly recommend!!! Photos don't do it justice.",
  },
  {
    name: "Josh Hamilton",
    rating: 5,
    dateText: "3 months ago",
    body: "Cody and his crew were professional, quick, and friendly! Our new fence looks amazing and the price was very reasonable! We couldn't be happier!",
  },
  {
    name: "Lauren Miller",
    rating: 5,
    dateText: "A week ago",
    body: "We live on a few acres surrounded by an old chain-link fence. The front fence line had severe overgrowth, including large bushes that were nearly impossible to remove and kept coming back every year. River Creek Fence cleared it out and gave us a clean, solid new fence line. Outstanding work.",
  },
  {
    name: "Jennifer McPhail",
    rating: 5,
    dateText: "A month ago",
    body: "Cody and his team were excellent to work with. He had wonderful communication and our fence went up in a timely manner. All of my husband's questions were answered without hesitation.",
  },
  {
    name: "Sandra Tucker",
    rating: 5,
    dateText: "A month ago",
    body: "They put an iron fence and gates up for us — it looked great and was done in a timely manner. Everyone was friendly and super to work with.",
  },
  {
    name: "Connie Ankenman",
    rating: 5,
    dateText: "3 weeks ago",
    body: "The crew was polite and efficient. They did a great job replacing our cedar fence!",
  },
  {
    name: "Jill Siebert",
    rating: 5,
    dateText: "Recently",
    body: "Easy to communicate with, friendly, prompt, worked very quickly, and our fence looks great! Highly recommend.",
  },
  {
    name: "Jamie Washburn",
    rating: 5,
    dateText: "3 months ago",
    body: "Great quality work — done in only 5 hrs!!! Great job and easy-going guys.",
  },
  {
    name: "Isaiah Mann",
    rating: 5,
    dateText: "11 months ago",
    body: "Outstanding service, professional install, great price! Thanks for building the little one a safe place to play!!",
  },
  {
    name: "Aaron Engels",
    rating: 5,
    dateText: "3 months ago",
    body: "Very professional and reliable! Highly recommended.",
  },
  {
    name: "David Dyer",
    rating: 5,
    dateText: "A year ago",
    body: "Good guys to work with. Quality work in a timely manner. Highly recommend!",
  },
  {
    name: "Russell Yost",
    rating: 5,
    dateText: "11 months ago",
    body: "Does a great job! Highly recommend.",
  },
];

export const featuredReviews = reviews.filter((r) => r.featured);
