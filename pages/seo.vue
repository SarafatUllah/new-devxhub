<script setup>
const services = [
  "Custom software development",
  "Web application development",
  "Mobile app development Android",
  "iOS app development services",
  "User interface design services",
  "User experience design consultant",
  "DevOps consulting services",
  "Continuous integration services",
  "Software testing services",
  "Automated testing solutions",
  "Application maintenance services",
  "Software support services",
  "Agile development services",
  "Cloud application development",
  "Enterprise software solutions",
  "Tech startup consulting",
  "E-commerce development services",
  "Custom CRM solutions",
  "API development services",
  "Custom ERP software development",
  "SaaS application development",
  "Web design services",
  "Mobile friendly design",
  "Responsive web design",
  "Full stack developer services",
  "JavaScript development services",
  "Python development services",
  "NET development services",
  "PHP web development",
  "AngularJS developer",
  "Node.js developer services",
  "Blockchain development company",
  "Smart contract development",
  "Data analytics services",
  "Machine learning solutions",
  "Artificial intelligence development",
  "IoT solutions provider",
  "Cybersecurity solutions",
  "Information technology consulting",
  "Digital transformation services",
  "B2B software development",
  "B2C application development",
  "Database development services",
  "SQL database development",
  "NoSQL database solutions",
  "Cloud services AWS",
  "Cloud services Azure",
  "Google Cloud services",
  "Mobile app UI design",
  "Mobile app UX design",
  "Cross-platform app development",
  "Flutter app development",
  "React Native development",
  "Progressive web app development",
  "E-commerce checkout optimization",
  "Payment gateway integration",
  "Shopify development services",
  "Magento developer",
  "WordPress website development",
  "SEO optimization services",
  "Local SEO services",
  "International SEO consulting",
  "Digital marketing services",
  "Content management systems",
  "Content development services",
  "Technical writing services",
  "Blogging services tech",
  "Branding services digital",
  "Startup branding services",
  "Graphic design services",
  "Logo design services",
  "Animated video production",
  "Corporate video services",
  "Training module development",
  "E-learning solutions",
  "Virtual reality development",
  "Augmented reality apps",
  "Game development services",
  "UX research services",
  "User testing services",
  "Customer experience design",
  "Conversion rate optimization",
  "Landing page optimization",
  "AB testing services",
  "Email marketing solutions",
  "Social media marketing services",
  "PPC management services",
  "AdWords campaign management",
  "Facebook advertising consultant",
  "LinkedIn marketing services",
  "Twitter marketing strategy",
  "Instagram marketing tips",
  "Social media optimization",
  "Online reputation management",
  "Affiliate marketing services",
  "Lead generation services",
  "Sales funnel optimization",
  "CRM integration services",
  "Business intelligence solutions",
  "Big data services",
  "Data visualization tools",
  "Analytics consulting services",
  "Predictive analysis services",
  "Cloud storage solutions",
  "Cloud backup services",
  "Cloud security services",
  "Virtual private server",
  "Dedicated server hosting",
  "Shared hosting services",
  "Domain registration services",
  "SSL certificate providers",
  "Email hosting services",
  "Tech news blog",
  "IT event management",
  "Software project management",
  "Agile project tools",
  "Scrum master services",
  "Kanban software development",
  "Lean startup consulting",
  "MVP development services",
  "Prototype development services",
  "Wireframing services",
  "Scalable architecture design",
  "System integration services",
  "Legacy system modernization",
  "Database migration services",
  "Server migration services",
  "IT outsourcing services",
  "Offshore development center",
  "Nearshore IT services",
  "Technical support outsourcing",
  "IT staffing services",
  "Technical recruiter services",
  "IT job board",
  "Career development in IT",
  "IT certification training",
  "Blockchain training courses",
  "Cybersecurity training programs",
  "AI workshops",
  "Machine learning courses",
  "Data science certification",
  "IoT workshops",
  "Cloud computing training",
  "Network security solutions",
  "Endpoint protection services",
  "Antivirus software services",
  "Malware removal services",
  "Ransomware protection solutions",
  "Firewall services",
  "Intrusion detection systems",
  "Network monitoring tools",
  "VPN services",
  "Content delivery network",
  "Load balancing services",
  "Application scaling solutions",
  "High availability solutions",
  "Disaster recovery planning",
  "Business continuity services",
  "Compliance solutions GDPR",
  "HIPAA compliance consulting",
  "PCI DSS compliance services",
  "ISO certification consulting",
];
</script>

<template>
  <div class="container-fluid w-full h-full">
    <div class="flex flex-wrap justify-center pt-32">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="w-fit h-fit p-4 rounded-md border border-[#fdb21d] text-[#fdb21d] m-4"
      >
        <h1 v-if="index === 0">{{ service }}</h1>
        <h2 v-else>{{ service }}</h2>
      </div>
    </div>
  </div>
</template>
