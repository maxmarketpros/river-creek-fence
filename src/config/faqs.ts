import type { FAQItem } from "@/types";

export const faqs: FAQItem[] = [
  {
    id: "faq-general-1",
    question: "How much does a fence cost in Central Kansas?",
    answer:
      "It depends on the type of fence, the length, and your terrain. As a rough guide, wood privacy fence runs about $25–$45 per linear foot installed, chain link around $20–$35, vinyl $30–$55, and agricultural wire fencing is far less per foot. The only way to get a real number is a free on-site estimate — we'll measure, talk through options, and put a written price in your hands. See our Fence Cost Guide for more detail.",
  },
  {
    id: "faq-general-2",
    question: "What areas do you serve?",
    answer:
      "We're based in Haven and serve all of Reno County plus the surrounding Central Kansas communities — Hutchinson, South Hutchinson, Buhler, Nickerson, Yoder, Pretty Prairie, Partridge, Arlington, Plevna, Mount Hope, Burrton, Halstead, Newton, Kingman, Sterling, Lyons, McPherson, Maize, Wichita, Pratt, and Stafford. Not sure if you're in range? Give us a call.",
  },
  {
    id: "faq-general-3",
    question: "Do you offer free estimates?",
    answer:
      "Yes — always. We'll come out to your property, walk the project with you, and give you an honest, written estimate at no cost and with no obligation. You'll know exactly what you're getting before you commit to anything.",
  },
  {
    id: "faq-general-4",
    question: "How long does it take to install a fence?",
    answer:
      "Most residential fences are finished in one to three days once we start. Larger farm, ranch, and acreage projects take longer depending on length and access. We'll give you a realistic timeline with your estimate and keep you in the loop if Kansas weather affects the schedule.",
  },
  {
    id: "faq-general-5",
    question: "Do you offer a warranty?",
    answer:
      "Every fence we install is backed by a 5-year workmanship warranty. If something isn't right because of how we built it, we'll come back and make it right. Quality that holds up is the whole reason our customers keep referring us.",
  },
  {
    id: "faq-general-6",
    question: "What types of fences do you install?",
    answer:
      "Just about everything used in Central Kansas: wood and cedar privacy, vinyl, chain link, ornamental metal and wrought iron, plus the full range of farm and ranch fencing — barbed wire, woven wire, high-tensile, pipe, continuous panel, and rail. We also build gates of every kind, from walk gates to automated driveway gates.",
  },
  {
    id: "faq-general-7",
    question: "How do you keep fences from leaning in Kansas wind?",
    answer:
      "It comes down to the posts. We set them below the frost line — usually 24 to 36 inches depending on height and soil — and anchor line and corner posts in concrete, then brace corners and gates properly. Proper post depth and bracing are the single biggest reason a fence stays straight through our wind and freeze-thaw cycles.",
  },
  {
    id: "faq-general-8",
    question: "Do you do farm and ranch fencing?",
    answer:
      "Absolutely — it's one of our specialties. Owner Cody Yoder comes from a farm background, so we understand livestock, ground conditions, and how a working fence actually gets used. We build barbed wire, woven wire, high-tensile, pipe, and continuous fence for cattle, horses, and every kind of operation across Reno County.",
  },
  {
    id: "faq-general-9",
    question: "Do you handle permits and utility locates?",
    answer:
      "We always coordinate the Kansas 811 utility locate before we dig, so there's no risk of hitting a buried line. If your project needs a permit or has HOA requirements, we'll let you know during the estimate and help you work through it.",
  },
  {
    id: "faq-general-10",
    question: "What payment methods do you accept?",
    answer:
      "We keep it simple — cash, check, and all major credit and debit cards. For larger ranch and acreage projects, we also offer financing and flexible payment plans. Just ask during your estimate and we'll walk you through the options.",
  },
  {
    id: "faq-contact-1",
    question: "What's the best way to reach you?",
    answer:
      "The fastest way is to call or text Cody at (620) 899-5595. You can also fill out the form on our contact page with your project details and we'll get right back to you, usually the same day.",
  },
  {
    id: "faq-contact-2",
    question: "How soon can you get started?",
    answer:
      "It depends on the season and how busy we are — spring and summer book up fast — but we'll always give you a straight answer on timing when we provide your estimate. For storm damage and urgent repairs, let us know and we'll do our best to get to you quickly.",
  },
];

export function getFaqsByKeys(keys: string[]): FAQItem[] {
  return faqs.filter((faq) => keys.includes(faq.id));
}

export const homepageFaqKeys = [
  "faq-general-1",
  "faq-general-3",
  "faq-general-4",
  "faq-general-5",
  "faq-general-7",
  "faq-general-8",
];

export const contactFaqKeys = [
  "faq-contact-1",
  "faq-contact-2",
  "faq-general-2",
  "faq-general-3",
];
