# Site Configuration Guide

This file explains how to customize all content on your BlackBIT Studio website using the `site.config.ts` file.

## How to Edit

Open `site.config.ts` in the root directory and modify any values you want to customize.

## Configuration Sections

### 1. Studio Information
```typescript
studio: {
  name: "BlackBIT Studio",
  tagline: "Crafting Premium Discord Solutions",
  description: "A product-based studio focused on...",
}
```

### 2. Hero Section
The main landing section of your website:
```typescript
hero: {
  badge: {
    show: false, // Set to true to show availability badge
    text: "2/5 SPOTS LEFT FOR NOVEMBER",
    color: "green", // green, yellow, or red
  },
  title: "Your main headline here",
  buttons: {
    primary: {
      text: "INVITE BOT",
      url: "https://your-invite-link.com",
      openInNewTab: true,
    },
    secondary: {
      text: "View on Top.gg",
      url: "https://your-topgg-link.com",
      openInNewTab: true,
    },
  },
}
```

### 3. Bot Information
Details about your Discord bot:
```typescript
bot: {
  name: "Cybork",
  tagline: "Your All-in-One Discord Companion",
  description: "Bot description...",
  topggUrl: "https://top.gg/bot/YOUR_BOT_ID",
  inviteUrl: "https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID",
  
  stats: {
    servers: "1,000+",
    users: "500,000+",
    commands: "100+",
    uptime: "99.9%",
  },
}
```

### 4. Projects Section
Showcase your projects:
```typescript
projects: {
  title: "Featured Projects",
  subtitle: "Explore our latest projects...",
  items: [
    {
      title: "Project Name",
      description: "Project description...",
      tags: ["React", "TypeScript", "Node.js"],
      featured: true, // Makes it span 2 columns
      links: {
        github: "https://github.com/...",
        demo: "https://demo-url.com",
      },
    },
  ],
}
```

### 5. About Us Section
Your company story:
```typescript
about: {
  title: "Building The Future",
  paragraphs: [
    "Paragraph 1...",
    "Paragraph 2...",
    "Paragraph 3...",
  ],
  values: [
    {
      icon: "Code2", // Lucide icon name
      title: "INNOVATION",
      description: "We push boundaries...",
    },
  ],
}
```

### 6. Signature Section
Founder/CEO signature (uses handwritten font):
```typescript
signature: {
  name: "Falooda",
  title: "Founder & CEO",
  message: "Your personal message or quote here...",
}
```

### 7. Social Links
Your social media profiles:
```typescript
social: {
  discord: "https://discord.gg/yourserver",
  twitter: "https://twitter.com/yourhandle",
  github: "https://github.com/yourusername",
  instagram: "", // Optional
  linkedin: "", // Optional
}
```

### 8. Contact Information
```typescript
contact: {
  email: "support@yourdomain.com",
  supportServer: "https://discord.gg/yourserver",
}
```

### 9. Call-to-Action Section
The final CTA before the footer:
```typescript
cta: {
  title: "Ready to Transform Your Discord Server?",
  subtitle: "Join thousands of communities...",
  buttons: {
    primary: {
      text: "Invite Cybork Now",
      url: "https://your-invite-link.com",
      openInNewTab: true,
    },
    secondary: {
      text: "Join Support Server",
      url: "https://discord.gg/yourserver",
      openInNewTab: true,
    },
  },
}
```

### 10. Navigation
Top navigation menu:
```typescript
navigation: {
  links: [
    { label: "Projects", href: "#projects" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing", comingSoon: true },
  ],
  ctaButton: {
    text: "Get Started",
    url: "https://your-link.com",
    openInNewTab: true,
  },
}
```

## Available Icons

For `about.values` and other sections, you can use any Lucide icon name:
- Code2
- Lightbulb
- Rocket
- Users2
- Shield
- Zap
- Music
- Settings
- Lock
- And many more from [Lucide Icons](https://lucide.dev/)

## Tips

1. **Always use quotes** for text values
2. **Use boolean** (true/false) for toggle options
3. **URLs should be complete** including https://
4. **Keep descriptions concise** for better mobile display
5. **Test changes** by refreshing your browser

## Handwritten Signature Font

The signature section uses beautiful handwritten fonts (Allura, Dancing Script, Great Vibes, Pacifico). Just change the `signature.name` in the config, and it will automatically display in the handwritten style!

## Need Help?

If you encounter any issues or need help customizing:
1. Check that all quotes and commas are properly placed
2. Make sure URLs are complete and valid
3. Restart the development server if changes don't appear
4. Contact support if you need assistance

---

**Happy Customizing! 🎉**
