// BlackBIT Studio Website Configuration
// Edit this file to customize all website content, links, and bot details

export const siteConfig = {
  // Studio Information
  studio: {
    name: "BlackBIT Studio",
    tagline: "Crafting Premium Discord Solutions",
    description: "A product-based studio focused on creating powerful Discord bots and tools for communities worldwide.",
  },

  // Hero Section
  hero: {
    badge: {
      show: false, // Set to true to show availability badge
      text: "2/5 SPOTS LEFT FOR NOVEMBER",
      color: "green", // green, yellow, red
    },
    title: "Introducing Cybork bot All in one bot comes with modern user-friendly UI",
    buttons: {
      primary: {
        text: "INVITE BOT",
        url: "https://discord.com/oauth2/authorize?client_id=1379715904287412315&permissions=8&integration_type=0&scope=bot+applications.commands",
        openInNewTab: true,
      },
      secondary: {
        text: "View on Top.gg",
        url: "https://top.gg/bot/1379715904287412315?s=0269a05424d03",
        openInNewTab: true,
      },
    },
  },

  // Bot Information
  bot: {
    name: "Cybork",
    tagline: "Your All-in-One Discord Companion",
    description: "A powerful multi-purpose Discord bot designed to enhance your server with moderation, utility, fun commands, and more.",
    topggUrl: "https://top.gg/bot/1379715904287412315?s=0269a05424d03",
    inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=1379715904287412315&permissions=8&scope=bot",
    
    // Bot Statistics (update these values)
    stats: {
      servers: "100+",
      users: "100,000+",
      commands: "100+",
      uptime: "99.9%",
    },

    // Bot Features
    features: [
      {
        icon: "Shield",
        title: "Advanced Moderation",
        description: "Keep your server safe with powerful auto-moderation, warning systems, and logging capabilities.",
      },
      {
        icon: "Zap",
        title: "Lightning Fast",
        description: "Built for speed and reliability with 99.9% uptime and instant command responses.",
      },
      {
        icon: "Music",
        title: "Music & Entertainment",
        description: "High-quality music playback, games, and fun commands to keep your community engaged.",
      },
      {
        icon: "Settings",
        title: "Highly Customizable",
        description: "Configure everything to match your server's needs with an intuitive dashboard.",
      },
      {
        icon: "Users",
        title: "Community Tools",
        description: "Welcome messages, leveling systems, and engagement features to grow your community.",
      },
      {
        icon: "Lock",
        title: "Secure & Private",
        description: "Your data is encrypted and secure. We never share or sell your information.",
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "Explore our latest projects showcasing cutting-edge technology and innovative solutions.",
    items: [
      {
        title: "Cybork Bot",
        description: "All-in-one Discord bot with modern user-friendly UI. Features include moderation, music, games, and utility commands.",
        tags: ["Discord Bot", "TypeScript", "Node.js"],
        featured: true,
        links: {
          github: "", // Add GitHub URL or leave empty
          demo: "https://top.gg/bot/1379715904287412315?s=0269a05424d03",
        },
      },
      
      },
    ],
  },

  // About Us Section
  about: {
    title: "Building The Future",
    paragraphs: [
      "We are a team of passionate developers and designers dedicated to creating innovative solutions that make a difference. Our expertise spans across modern web technologies, AI integration, and scalable cloud infrastructure.",
      "With years of combined experience in the tech industry, we've helped numerous clients bring their visions to life. From startups to established businesses, we pride ourselves on delivering exceptional quality and unmatched support.",
      "Our mission is to empower businesses and communities through technology. We believe in building products that not only meet today's needs but also anticipate tomorrow's challenges.",
    ],
    values: [
      {
        icon: "Code2",
        title: "INNOVATION",
        description: "We push boundaries with cutting-edge technology",
      },
      {
        icon: "Lightbulb",
        title: "CREATIVITY",
        description: "Unique solutions for every challenge",
      },
      {
        icon: "Rocket",
        title: "PERFORMANCE",
        description: "Fast, reliable, and scalable solutions",
      },
      {
        icon: "Users2",
        title: "COLLABORATION",
        description: "Working together to achieve greatness",
      },
    ],
  },

  // Signature Section
  signature: {
    name: "Falooda",
    title: "Founder & CEO",
    message: "We know design isn't just about making things look good. It's about sharing your story in a way that investors understand, top talent wants to join, and users genuinely care. Our focus is always on making an impression that lasts.",
  },

  // Social Links
  social: {
    discord: "https://discord.gg/yourserver", // Update with your Discord server invite
    twitter: "https://twitter.com/blackbitstudio", // Update with your Twitter
    github: "https://github.com/blackbitstudio", // Update with your GitHub
    instagram: "", // Optional
    linkedin: "", // Optional
  },

  // Contact
  contact: {
    email: "support@blackbitstudio.com", // Update with your email
    supportServer: "https://discord.gg/yourserver", // Update with your support Discord
  },

  // Call-to-Action Section
  cta: {
    title: "Ready to Transform Your Discord Server?",
    subtitle: "Join thousands of communities already using Cybork to create amazing experiences.",
    buttons: {
      primary: {
        text: "Invite Cybork Now",
        url: "https://discord.com/api/oauth2/authorize?client_id=1379715904287412315&permissions=8&scope=bot",
        openInNewTab: true,
      },
      secondary: {
        text: "Join Support Server",
        url: "https://discord.gg/yourserver",
        openInNewTab: true,
      },
    },
  },

  // Navigation Links
  navigation: {
    links: [
      { label: "Projects", href: "#projects" },
      { label: "About Us", href: "#about" },
      { label: "Pricing", href: "#pricing", comingSoon: true },
    ],
    ctaButton: {
      text: "Get Started",
      url: "https://discord.com/api/oauth2/authorize?client_id=1379715904287412315&permissions=8&scope=bot",
      openInNewTab: true,
    },
  },

  // Legal
  legal: {
    companyName: "BlackBIT Studio",
    lastUpdated: "2024",
  },
};
