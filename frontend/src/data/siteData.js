import {
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  Handshake,
  MapPinned,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'

export const company = {
  name: 'Grow More Consultants',
  tagline: 'Study Visa and Immigration',
  email: 'info.gmcs.pk@gmail.com',
  phone: '+92 316 4106200',
  phoneDial: '+923164106200',
  whatsappUrl:
    'https://wa.me/923164106200?text=Assalamualaikum%20Grow%20More%20Consultants%2C%20I%20need%20study%20abroad%20guidance.',
  address:
    'Office Number 17 Ground floor Business City plaza Bosan road Multan',
  mapUrl: 'https://maps.app.goo.gl/sMP9LUBgYzKAf1Vt6?g_st=aw',
}

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Countries', path: '/countries' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'Contact', path: '/contact' },
]

export const services = [
  {
    title: 'Student Recruitment',
    icon: GraduationCap,
    summary:
      'A focused pathway for students who want the right institution, course, and country fit before applying.',
    points: ['Profile assessment', 'Course matching', 'University shortlisting'],
    cardImage:
      '/images/gmc-image-27.jpg',
    detailImage:
      '/images/gmc-image-28.jpg',
    detail:
      'We evaluate academic background, budget, destination preference, and career goals before recommending institutions. The goal is to recruit students into programs that are realistic, relevant, and aligned with their future.',
  },
  {
    title: 'Study Visa Guidance',
    icon: Plane,
    summary:
      'Clear guidance for students preparing to study abroad with accurate document and timeline planning.',
    points: ['Visa roadmap', 'Document checklist', 'Application readiness'],
    cardImage:
      '/images/gmc-image-01.jpg',
    detailImage:
      '/images/gmc-image-06.jpg',
    detail:
      'Our study visa guidance keeps students aware of requirements, financial preparation, timelines, and document quality before submission.',
  },
  {
    title: 'Admissions Guidance',
    icon: BookOpenCheck,
    summary:
      'Support from course selection to admission submission with careful attention to academic requirements.',
    points: ['Offer letter support', 'SOP guidance', 'Application tracking'],
    cardImage:
      '/images/gmc-image-02.jpg',
    detailImage:
      '/images/gmc-image-10.jpg',
    detail:
      'We help students prepare applications, select programs, review statements, and track admissions updates so every file is complete and professional.',
  },
  {
    title: 'Interview Preparation',
    icon: MessageCircle,
    summary:
      'Practical preparation for university and visa interviews so students can answer confidently.',
    points: ['Mock interviews', 'Question practice', 'Confidence building'],
    cardImage:
      '/images/gmc-image-31.jpg',
    detailImage:
      '/images/gmc-image-34.jpg',
    detail:
      'Students practice common interview questions, learn how to explain their study plan, and build confidence for university or visa interviews.',
  },
  {
    title: 'Visa Filing Help',
    icon: FileCheck2,
    summary:
      'Organized visa filing assistance that keeps documentation neat, complete, and submission-ready.',
    points: ['File review', 'Form guidance', 'Final submission support'],
    cardImage:
      '/images/gmc-image-33.jpg',
    detailImage:
      '/images/gmc-image-17.jpg',
    detail:
      'We review documents, organize forms, and help students understand every step before their visa file is submitted.',
  },
  {
    title: 'Career-Focused Counseling',
    icon: BriefcaseBusiness,
    summary:
      'Advice that connects study choices with future career goals and long-term settlement planning.',
    points: ['Goal mapping', 'Budget planning', 'Country comparison'],
    cardImage:
      '/images/gmc-image-23.jpg',
    detailImage:
      '/images/gmc-image-32.jpg',
    detail:
      'We connect academic decisions with employability, budget, destination fit, and long-term career direction.',
  },
]

export const countries = [
  {
    name: 'Study in UK',
    image:
      '/images/gmc-image-16.jpg',
    homeImage:
      '/images/gmc-image-05.jpg',
    detailImage:
      '/images/gmc-image-29.jpg',
    description:
      'World-class universities, strong postgraduate options, and globally respected degrees.',
    details: ['January and September intakes', 'Strong postgraduate routes', 'Globally recognized universities'],
  },
  {
    name: 'Study in Malaysia',
    image:
      '/images/gmc-image-39.jpg',
    homeImage:
      '/images/gmc-image-14.jpg',
    detailImage:
      '/images/gmc-image-35.jpg',
    description:
      'Affordable education, modern campuses, and an excellent regional study destination.',
    details: ['Affordable tuition options', 'English-medium programs', 'Modern international campuses'],
  },
  {
    name: 'Study in Australia',
    image:
      '/images/gmc-image-13.jpg',
    homeImage:
      '/images/gmc-image-26.jpg',
    detailImage:
      '/images/gmc-image-30.jpg',
    description:
      'Popular study destination with strong student support and practical learning pathways.',
    details: ['February and July intakes', 'Practical learning focus', 'Popular for business and IT'],
  },
  {
    name: 'Study in Canada',
    image:
      '/images/gmc-image-19.jpg',
    homeImage:
      '/images/gmc-image-20.jpg',
    detailImage:
      '/images/gmc-image-07.jpg',
    description:
      'High-quality institutions, multicultural cities, and excellent academic opportunities.',
    details: ['Multiple study pathways', 'Multicultural environment', 'Strong diploma and degree options'],
  },
  {
    name: 'Study in USA',
    image:
      '/images/gmc-image-11.jpg',
    homeImage:
      '/images/gmc-image-04.jpg',
    detailImage:
      '/images/gmc-image-08.jpg',
    description:
      'Diverse universities, flexible programs, and leading research opportunities.',
    details: ['Large program choice', 'Research-focused institutions', 'Flexible academic pathways'],
  },
  {
    name: 'Study in France',
    image:
      '/images/gmc-image-12.jpg',
    homeImage:
      '/images/gmc-image-21.jpg',
    detailImage:
      '/images/gmc-image-03.jpg',
    description:
      'Prestigious institutions, cultural richness, and attractive European study options.',
    details: ['European study exposure', 'Business and arts options', 'Rich cultural experience'],
  },
]

export const stats = [
  { value: '6+', label: 'Study destinations' },
  { value: '1:1', label: 'Student counseling' },
  { value: '5', label: 'Core services' },
  { value: 'Step-by-step', label: 'Clear guidance' },
]

export const processSteps = [
  {
    title: 'Profile review',
    icon: ClipboardCheck,
    text: 'We review education, budget, preferred countries, and career direction.',
  },
  {
    title: 'Course shortlisting',
    icon: GraduationCap,
    text: 'Students receive realistic university and course options based on profile fit.',
  },
  {
    title: 'Admissions and documents',
    icon: CalendarCheck,
    text: 'We organize admission steps, checklists, statements, and required documents.',
  },
  {
    title: 'Visa preparation',
    icon: Handshake,
    text: 'Interview practice and visa filing help prepare students for final submission.',
  },
]

export const highlights = [
  {
    title: 'Student-first counseling',
    icon: Users,
    text: 'Every recommendation starts with academic profile, budget, goals, and family priorities.',
  },
  {
    title: 'Document clarity',
    icon: ShieldCheck,
    text: 'Students receive clear checklists and organized steps for admissions and visa filing.',
  },
  {
    title: 'Global study options',
    icon: MapPinned,
    text: 'Guidance covers leading destinations including UK, Malaysia, Australia, Canada, USA, and France.',
  },
  {
    title: 'Professional process',
    icon: Sparkles,
    text: 'A polished consultation experience from first meeting to final submission support.',
  },
]

export const successStoryImages = [
  '/images/success-stories/success-story-01.jpeg',
  '/images/success-stories/success-story-02.jpeg',
  '/images/success-stories/success-story-03.jpeg',
  '/images/success-stories/success-story-04.jpeg',
  '/images/success-stories/success-story-05.jpeg',
  '/images/success-stories/success-story-06.jpeg',
  '/images/success-stories/success-story-07.jpeg',
  '/images/success-stories/success-story-08.jpeg',
  '/images/success-stories/success-story-09.jpeg',
  '/images/success-stories/success-story-10.jpeg',
  '/images/success-stories/success-story-11.jpeg',
  '/images/success-stories/success-story-12.jpeg',
  '/images/success-stories/success-story-13.jpeg',
  '/images/success-stories/success-story-14.jpeg',
  '/images/success-stories/success-story-15.jpeg',
  '/images/success-stories/success-story-16.jpeg',
  '/images/success-stories/success-story-17.jpeg',
]
