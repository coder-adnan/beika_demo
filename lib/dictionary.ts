const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  try {
    return await dictionaries[locale as keyof typeof dictionaries]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    // Fallback to English
    return await dictionaries.en();
  }
};

export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price: string;
  calories?: string;
}

export interface Dictionary {
  navigation: {
    about: string;
    menu: string;
    location: string;
    gallery: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    features: {
      coffee: string;
      vegan: string;
      aesthetic: string;
    };
    cta: {
      menu: string;
      book: string;
    };
  };
  about: {
    title: string;
    story1: string;
    story2: string;
    highlight: string;
    special: {
      title: string;
      safe: string;
      coffee: string;
      vegan: string;
      aesthetic: string;
    };
  };
  features: {
    title: string;
    subtitle: string;
    safe: { title: string; description: string };
    coffee: { title: string; description: string };
    vegan: { title: string; description: string };
    community: { title: string; description: string };
  };
  menu: {
    title: string;
    items: MenuItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    subtitle: string;
    book: {
      title: string;
      description: string;
      button: string;
    };
    visit: {
      title: string;
      description: string;
      button: string;
    };
    menu: {
      title: string;
      description: string;
      button: string;
    };
    events: {
      title: string;
      description: string;
      button: string;
    };
  };
  hours: {
    title: string;
    address: string;
    phone: string;
    email: string;
    schedule: {
      weekdays: string;
      weekend: string;
      sunday: string;
    };
    gettingHere: {
      title: string;
      parking: string;
      transport: string;
      location: string;
    };
  };
  gallery: {
    title: string;
    subtitle: string;
    instagram: string;
    facebook: string;
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      title: string;
      phone: string;
      email: string;
      address: string;
    };
    social: {
      title: string;
      instagram: string;
      facebook: string;
      tripadvisor: string;
    };
    events: {
      title: string;
      description: string;
      button: string;
    };
  };
  footer: {
    description: string;
    privacy: string;
    terms: string;
    accessibility: string;
    copyright: string;
  };
}
