import { defineStore } from "pinia";

export const useWebdevChecklistStore = defineStore("webdevchecklist", () => {
  // state
  const selectedCheckListRef = ref<string>("developer");
  const checklistsRef = ref<any>([]);
  const developerChecklists = ref<any>([
    {
      column: 1,
      data: [
        {
          title: "Best Practices",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Fix broken links",
              selected: false,
              subOptions: [
                {
                  link: "W3C link checker",
                  href: "https://validator.w3.org/checklink",
                },
              ],
            },
            {
              check: false,
              text: "Spelling and grammar",
              selected: false,
              subOptions: [
                {
                  link: "Capitalization",
                  href: "https://en.wikipedia.org/wiki/Capitalization",
                },
                {
                  link: "Writing Style",
                  href: "https://en.wikipedia.org/wiki/Writing_style",
                },
                {
                  link: "Word variations (e.g. UK vs US)",
                  href: "https://en.wikipedia.org/wiki/American_and_British_English_spelling_differences",
                },
              ],
            },
            {
              check: false,
              text: "Check website in all browsers",
              selected: false,
              subOptions: [
                {
                  link: "BrowserShots.org",
                  href: "https://browsershots.org/",
                },
                {
                  link: "Browserling.com",
                  href: "https://www.browserling.com/",
                },
                {
                  link: "BrowserStack",
                  href: "https://www.browserstack.com/",
                },
                {
                  link: "LambdaTest",
                  href: "https://www.lambdatest.com/",
                },
                {
                  link: "CrossBrowserTesting",
                  href: "https://crossbrowsertesting.com/",
                },
              ],
            },
            {
              check: false,
              text: "Decide on www-subdomain",
              selected: false,
              subOptions: [
                {
                  link: "no-www.org score of 'B'",
                  href: "https://no-www.org/",
                },
                {
                  link: "...or www.yes-www.org",
                  href: "https://www.yes-www.org/",
                },
                {
                  link: "Handle 'www' in web.config",
                  href: "https://www.madskristensen.net/blog/url-rewrite-and-the-www-subdomain",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Mobile",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Mobile-Friendly Test",
              selected: false,
              subOptions: [
                {
                  link: "Mobile Friendly Checker",
                  href: "https://developer.chrome.com/docs/lighthouse/overview/",
                },
              ],
            },
            {
              check: false,
              text: "Use 'viewport' meta-tag",
              selected: false,
              subOptions: [
                {
                  link: "Don't forget the viewport meta-tag",
                  href: "https://webdesign.tutsplus.com/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972a",
                },
                {
                  link: "Make your website mobile friendly",
                  href: "https://www.hanselman.com/blog/make-your-website-mobile-and-iphone-friendly-add-home-screen-iphone-icons-and-adjust-the-viewport",
                },
              ],
            },
            {
              check: false,
              text: "Use correct input types",
              selected: false,
              subOptions: [
                {
                  link: "Input Type: Email, Url, Phone",
                  href: "https://www.htmlgoodies.com/guides/html5-forms-how-to-use-the-new-email-url-and-telephone-input-types/",
                },
                {
                  link: "Diving in to HTML5 forms",
                  href: "http://diveintohtml5.info/forms.html",
                },
              ],
            },
            {
              check: false,
              text: "Test using real devices",
              selected: false,
              subOptions: [
                {
                  link: "Use BrowserStack to test on multiple devices",
                  href: "https://www.browserstack.com/responsive",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Analytics & Monitoring",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Uptime monitoring",
              selected: false,
              subOptions: [
                {
                  link: "Uptime Robot",
                  href: "https://uptimerobot.com/",
                },
                {
                  link: "StatusCake.com",
                  href: "https://www.statuscake.com/",
                },
              ],
            },
            {
              check: false,
              text: "Traffic Analysis",
              selected: false,
              subOptions: [
                {
                  link: "Google Analytics",
                  href: "https://marketingplatform.google.com/about/analytics/",
                },
                {
                  link: "StatCounter",
                  href: "https://statcounter.com/",
                },
                {
                  link: "Clicky",
                  href: "https://clicky.com/",
                },
                {
                  link: "Matomo (formerly known as Piwik)",
                  href: "https://matomo.org/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    {
      column: 2,
      data: [
        {
          title: "Performance",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Google Page Speed score of 90+",
              selected: false,
              subOptions: [
                {
                  link: "Google PageSpeed Insights",
                  href: "https://developers.google.com/speed/pagespeed/insights/",
                },
              ],
            },
            {
              check: false,
              text: "Optimize HTTP headers",
              selected: false,
              subOptions: [
                {
                  link: "redbot.org",
                  href: "https://redbot.org/",
                },
              ],
            },
            {
              check: false,
              text: "Optimize Images",
              selected: false,
              subOptions: [
                {
                  link: "Analize how images affect your page",
                  href: "https://pageweight.imgix.com/",
                },
                {
                  link: "TinyPNG",
                  href: "https://tinypng.com/",
                },
                {
                  link: "kraken.io",
                  href: "https://kraken.io/",
                },
                {
                  link: "squoosh.app",
                  href: "https://squoosh.app/",
                },
                {
                  link: "PNGGauntlet for Windows",
                  href: "https://pnggauntlet.com/",
                },
                {
                  link: "ImageOptim for Mac",
                  href: "https://imageoptim.com/mac",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Usability",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "HTML5/CSS3 compatibily check",
              selected: false,
              subOptions: [
                {
                  link: "Can I Use",
                  href: "https://caniuse.com/",
                },
                {
                  link: "Modernizr JS library",
                  href: "https://modernizr.com/",
                },
                {
                  link: "W3C Internationalization Checker",
                  href: "https://validator.w3.org/i18n-checker/",
                },
              ],
            },
            {
              check: false,
              text: "Custom 404 page",
              selected: false,
              subOptions: [
                {
                  link: "A more useful 404",
                  href: "https://alistapart.com/article/amoreuseful404/",
                },
              ],
            },
            {
              check: false,
              text: "Favicon",
              selected: false,
              subOptions: [
                {
                  link: "Real Favicon Generator",
                  href: "https://realfavicongenerator.net/",
                },
                {
                  link: "Favicon Cheat Sheet",
                  href: "https://github.com/audreyfeldroy/favicon-cheat-sheet",
                },
              ],
            },
            {
              check: false,
              text: "Use friendly URLs",
              selected: false,
              subOptions: [
                {
                  link: "SEO Friendly URLs",
                  href: "https://moz.com/learn/seo/url",
                },
                {
                  link: "URL rewriting in ISS",
                  href: "https://learn.microsoft.com/en-us/iis/extensions/url-rewrite-module/url-rewrite-module-configuration-reference",
                },
                {
                  link: "URL rewriting in Apache",
                  href: "https://httpd.apache.org/docs/current/mod/mod_rewrite.html",
                },
                {
                  link: "URL rewriting in NGINX",
                  href: "https://www.nginx.com/blog/creating-nginx-rewrite-rules/",
                },
              ],
            },
            {
              check: false,
              text: "Print-friendly CSS",
              selected: false,
              subOptions: [
                {
                  link: "Can I Use",
                  href: "https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/",
                },
              ],
            },
            {
              check: false,
              text: "Add search feature on your website",
              selected: false,
              subOptions: [
                {
                  link: "Google Custom Search",
                  href: "https://programmablesearchengine.google.com/about/",
                },
                {
                  link: "Consider 'Open Search'",
                  href: "https://github.com/dewitt/opensearch",
                },
              ],
            },
            {
              check: false,
              text: "Enviroment Integration",
              selected: false,
              subOptions: [
                {
                  link: "Safari on iOS",
                  href: "https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html",
                },
                {
                  link: "Internet Explorer on Windows",
                  href: "https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/dev-guides/hh781490(v=vs.85)",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Semantics",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Add meaning with structured data",
              selected: false,
              subOptions: [
                {
                  link: "Schema.org reference",
                  href: "https://schema.org/",
                },
                {
                  link: "Schema-Creator.org",
                  href: "https://seoscout.com/tools/schema-generator",
                },
              ],
            },
            {
              check: false,
              text: "Check the semantics",
              selected: false,
              subOptions: [
                {
                  link: "Google Structured Data Testing Tool",
                  href: "https://developers.google.com/search/docs/appearance/structured-data",
                },
                {
                  link: "Facebook OpenGraph Debugger",
                  href: "https://developers.facebook.com/tools/debug/",
                },
                {
                  link: "Twitter Card Validator",
                  href: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vY2FyZHMtZGV2LnR3aXR0ZXIuY29tL3ZhbGlkYXRvciJ9%22%7D",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    {
      column: 3,
      data: [
        {
          title: "SEO",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Google Rich Snippets",
              selected: false,
              subOptions: [
                {
                  link: "Online Tester",
                  href: "https://search.google.com/test/rich-results",
                },
                {
                  link: "Getting Started",
                  href: "https://schema.org/docs/gs.html",
                },
              ],
            },
            {
              check: false,
              text: "robots.txt",
              selected: false,
              subOptions: [
                {
                  link: "Create a robots.txt file",
                  href: "https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt",
                },
              ],
            },
            {
              check: false,
              text: "XML Sitemaps",
              selected: false,
              subOptions: [
                {
                  link: "Create sitemap online",
                  href: "https://www.xml-sitemaps.com/",
                },
              ],
            },
            {
              check: false,
              text: "Nuxt SEO",
              selected: false,
              subOptions: [
                {
                  link: "Nuxt SEO",
                  href: "https://nuxtseo.com/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Code Quality",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "HTML validation",
              selected: false,
              subOptions: [
                {
                  link: "W3C validator",
                  href: "https://validator.w3.org/",
                },
                {
                  link: "HTML5 Validator.nu",
                  href: "https://html5.validator.nu/",
                },
              ],
            },
            {
              check: false,
              text: "CSS validation",
              selected: false,
              subOptions: [
                {
                  link: "W3C CSS validator",
                  href: "https://jigsaw.w3.org/css-validator/",
                },
              ],
            },
            {
              check: false,
              text: "Run CSS Lint",
              selected: false,
              subOptions: [
                {
                  link: "Run CSS Lint online",
                  href: "http://csslint.net/",
                },
              ],
            },
            {
              check: false,
              text: "Run JSLint/JSHint",
              selected: false,
              subOptions: [
                {
                  link: "Run JSLint online",
                  href: "https://www.jslint.com/",
                },
                {
                  link: "Run JSHint online",
                  href: "https://jshint.com/",
                },
              ],
            },
            {
              check: false,
              text: "World ready",
              selected: false,
              subOptions: [
                {
                  link: "W3C i18n checker",
                  href: "https://validator.w3.org/i18n-checker/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Accessibility",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Accessibility validation",
              selected: false,
              subOptions: [
                {
                  link: "Web Content Accessibility Guidelines (WCAG) Overview",
                  href: "https://www.w3.org/WAI/standards-guidelines/wcag/",
                },
                {
                  link: "Common problems and solutions",
                  href: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility",
                },
                {
                  link: "Web Accessibility Evaluation Tool",
                  href: "https://wave.webaim.org/",
                },
                {
                  link: "Test using a screen reader",
                  href: "https://www.nvaccess.org/",
                },
              ],
            },
            {
              check: false,
              text: "Color contrast",
              selected: false,
              subOptions: [
                {
                  link: "Check color contrast online",
                  href: "https://webaim.org/resources/contrastchecker/",
                },
              ],
            },
            {
              check: false,
              text: "WAI-ARIA Landmarks",
              selected: false,
              subOptions: [
                {
                  link: "Using WAI-ARIA Landmarks",
                  href: "https://accessibility.oit.ncsu.edu/using-aria-landmarks-a-demonstration/",
                },
                {
                  link: "Guide to WAI-ARIA",
                  href: "https://alistapart.com/article/the-accessibility-of-wai-aria/",
                },
                {
                  link: "Practical Examples",
                  href: "https://www.punkchip.com/2010/11/aria-basic-findings/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    {
      column: 4,
      data: [
        {
          title: "Security",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Follow Best Practices",
              selected: false,
              subOptions: [
                {
                  link: "Observatory by Mozilla",
                  href: "https://observatory.mozilla.org/",
                },
              ],
            },
            {
              check: false,
              text: "Cross-site scripting",
              selected: false,
              subOptions: [
                {
                  link: "XSS cheat sheet",
                  href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
                },
                {
                  link: "DOM based XSS cheat sheet",
                  href: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html",
                },
              ],
            },
            {
              check: false,
              text: "Cross-site request forgery",
              selected: false,
              subOptions: [
                {
                  link: "Explanation and walkthrough",
                  href: "https://blog.codinghorror.com/cross-site-request-forgeries-and-you/",
                },
                {
                  link: "CSRF cheat sheet",
                  href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
                },
              ],
            },
            {
              check: false,
              text: "Secure connection (SSL)",
              selected: false,
              subOptions: [
                {
                  link: "Free SSL/TLS Certificates",
                  href: "https://letsencrypt.org/",
                },
                {
                  link: "Setup SSL on ISS",
                  href: "https://learn.microsoft.com/en-GB/iis/manage/configuring-security/how-to-set-up-ssl-on-iis",
                },
                {
                  link: "Setup SSL on Apache",
                  href: "https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install",
                },
                {
                  link: "Setup SSL on NGINX",
                  href: "https://nginx.org/en/docs/http/configuring_https_servers.html",
                },
                {
                  link: "https://www.ssllabs.com/ssltest/",
                  href: "https://letsencrypt.org/",
                },
              ],
            },
            {
              check: false,
              text: "HTTP Strict Transport Security",
              selected: false,
              subOptions: [
                {
                  link: "MDN Overview",
                  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",
                },
                {
                  link: "OWASP Overview",
                  href: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html",
                },
              ],
            },
            {
              check: false,
              text: "Enable Content Security Policy",
              selected: false,
              subOptions: [
                {
                  link: "Content Security Policy",
                  href: "https://web.dev/articles/csp",
                },
                {
                  link: "Content Security Policy (MDN)",
                  href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
                },
                {
                  link: "CSP Evaluator Online",
                  href: "https://csp-evaluator.withgoogle.com/",
                },
              ],
            },
            {
              check: false,
              text: "npm audit / yarn audit",
              selected: false,
              subOptions: [
                {
                  link: "npm audit",
                  href: "https://docs.npmjs.com/cli/v10/commands/npm-audit",
                },
                {
                  link: "yarn audit",
                  href: "https://classic.yarnpkg.com/lang/en/docs/cli/audit/",
                },
              ],
            },
            {
              check: false,
              text: "Apply Serialization",
              selected: false,
              subOptions: [
                {
                  link: "Indusface",
                  href: "https://www.indusface.com/blog/what-are-serialization-attacks-and-how-to-prevent-them/",
                },
              ],
            },
            {
              check: false,
              text: "Use Sentry",
              selected: false,
              subOptions: [
                {
                  link: "Sentry",
                  href: "https://sentry.io/welcome/",
                },
              ],
            },
            {
              check: false,
              text: "Broken Access Control",
              selected: false,
              subOptions: [
                {
                  link: "Heimdal",
                  href: "https://heimdalsecurity.com/blog/broken-access-control/#:~:text=Broken%20access%20control%20is%20a,way%20these%20controls%20are%20enforced.",
                },
                {
                  link: "Authgear",
                  href: "https://www.authgear.com/post/what-is-broken-access-control-vulnerability-and-how-to-prevent-it",
                },
                {
                  link: "Owasp",
                  href: "https://owasp.org/www-community/Broken_Access_Control",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Social Media & Structured Data",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Structured Data for Google Search",
              selected: false,
              subOptions: [
                {
                  link: "How structured data works in Google Search",
                  href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
                },
              ],
            },
            {
              check: false,
              text: "Open Graph Protocol",
              selected: false,
              subOptions: [
                {
                  link: "Open Graph Protocol Reference",
                  href: "https://ogp.me/",
                },
              ],
            },
            {
              check: false,
              text: "Twitter Cards",
              selected: false,
              subOptions: [
                {
                  link: "Documentation",
                  href: "https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards",
                },
              ],
            },
            {
              check: false,
              text: "Facebook",
              selected: false,
              subOptions: [
                {
                  link: "Sharing on Facebook",
                  href: "https://developers.facebook.com/docs/sharing/webmasters#markup",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "...and finally",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Add humans.txt",
              selected: false,
              subOptions: [
                {
                  link: "Humans.txt generator",
                  href: "https://humanstxtgenerator.beewits.com/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
  ]);
  const sqaChecklists = ref<any>([
    {
      column: 1,
      data: [
        {
          title: "Planning and Preparation",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Define Testing Objectives and Scope",
              selected: false,
              subOptions: [
                {
                  link: "ISTQB Glossary",
                  href: "https://glossary.istqb.org/",
                },
              ],
            },
            {
              check: false,
              text: "Develop Test Plan",
              selected: false,
              subOptions: [
                {
                  link: "IEEE 829-2008",
                  href: "https://ieeexplore.ieee.org/document/4578383",
                },
              ],
            },
            {
              check: false,
              text: "Establish Test Environment",
              selected: false,
              subOptions: [
                {
                  link: "Test Environment Best Practices",
                  href: "https://www.guru99.com/test-environment-software-testing.html",
                },
              ],
            },
            {
              check: false,
              text: "Resource Allocation",
              selected: false,
              subOptions: [],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Test Design",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Create Test Cases",
              selected: false,
              subOptions: [
                {
                  link: "Test Case Design Techniques",
                  href: "https://www.tutorialspoint.com/software_testing_dictionary/test_case_design_technique.htm",
                },
              ],
            },
            {
              check: false,
              text: "Develop Test Data",
              selected: false,
              subOptions: [
                {
                  link: "Test Data Generation",
                  href: "https://www.guru99.com/test-data-generation.html",
                },
              ],
            },
            {
              check: false,
              text: "Design Test Scenarios",
              selected: false,
              subOptions: [
                {
                  link: "Test Scenario vs. Test Case",
                  href: "https://www.softwaretestinghelp.com/test-cases-vs-test-scenarios/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Test Execution",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Execute Test Cases",
              selected: false,
              subOptions: [
                {
                  link: "Test Case Execution Best Practices",
                  href: "https://www.linkedin.com/pulse/best-practices-software-test-case-creation-testcaselab-gmgze/",
                },
              ],
            },
            {
              check: false,
              text: "Record and Report Defects",
              selected: false,
              subOptions: [
                {
                  link: "Defect Life Cycle",
                  href: "https://www.guru99.com/defect-life-cycle.html",
                },
              ],
            },
            {
              check: false,
              text: "Regression Testing",
              selected: false,
              subOptions: [
                {
                  link: "Regression Testing",
                  href: "https://www.softwaretestinghelp.com/regression-testing/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    {
      column: 2,
      data: [
        {
          title: "Performance Testing",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Load Testing",
              selected: false,
              subOptions: [
                {
                  link: "Load Testing Tutorial",
                  href: "https://www.guru99.com/load-testing-tutorial.html",
                },
              ],
            },
            {
              check: false,
              text: "Stress Testing",
              selected: false,
              subOptions: [
                {
                  link: "Stress Testing",
                  href: "https://www.softwaretestinghelp.com/stress-testing/",
                },
              ],
            },
            {
              check: false,
              text: "Performance Monitoring",
              selected: false,
              subOptions: [
                {
                  link: "Performance Monitoring",
                  href: "https://www.convolo.ai/blog/the-ultimate-guide-to-monitoring-performance#:~:text=Resource%20utilization%20is%20another%20crucial,may%20be%20causing%20performance%20issues",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Automation Testing",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Select Automation Tools",
              selected: false,
              subOptions: [
                {
                  link: "Automation Testing Tools Comparison",
                  href: "https://www.guru99.com/automated-testing-tools.html",
                },
              ],
            },
            {
              check: false,
              text: "Script Development",
              selected: false,
              subOptions: [
                {
                  link: "Automation Scripting Best Practices",
                  href: "https://www.softwaretestinghelp.com/automation-testing-tutorial-7/",
                },
              ],
            },
            {
              check: false,
              text: "Continuous Integration",
              selected: false,
              subOptions: [
                {
                  link: "Continuous Integration",
                  href: "https://www.atlassian.com/continuous-delivery/continuous-integration",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Documentation and Reporting",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Test Summary Report",
              selected: false,
              subOptions: [
                {
                  link: "Test Summary Report",
                  href: "https://www.guru99.com/how-test-reports-predict-the-success-of-your-testing-project.html",
                },
              ],
            },
            {
              check: false,
              text: "Traceability Matrix",
              selected: false,
              subOptions: [
                {
                  link: "Traceability Matrix",
                  href: "https://www.softwaretestinghelp.com/requirements-traceability-matrix/",
                },
              ],
            },
            {
              check: false,
              text: "Lessons Learned",
              selected: false,
              subOptions: [
                {
                  link: "Testing Lessons Learned",
                  href: "https://testlio.com/blog/six-lessons-learned-years-software-tester/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Continuous Improvement",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Retrospective Meetings",
              selected: false,
              subOptions: [
                {
                  link: "Retrospective Meetings",
                  href: "https://www.atlassian.com/team-playbook/plays/retrospective",
                },
              ],
            },
            {
              check: false,
              text: "Process Optimization",
              selected: false,
              subOptions: [
                {
                  link: "Process Improvement",
                  href: "https://www.softwaretestinghelp.com/how-to-improve-your-testing-skills-and-beat-the-competition/",
                },
              ],
            },
            {
              check: false,
              text: "Stay Updated on Industry Trends",
              selected: false,
              subOptions: [
                {
                  link: "Testing Trends",
                  href: "https://www.softwaretestinghelp.com/software-testing-trends/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    {
      column: 3,
      data: [
        {
          title: "Compliance and Standards",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "dherence to International Standards",
              selected: false,
              subOptions: [
                {
                  link: "ISO/IEC 25010",
                  href: "https://www.iso.org/standard/35733.html",
                },
              ],
            },
            {
              check: false,
              text: "Regulatory Compliance",
              selected: false,
              subOptions: [
                {
                  link: "Regulatory Compliance",
                  href: "https://www.softwaretestinghelp.com/regulatory-compliance-in-software-testing/",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Security Testing",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Identify Security Risks",
              selected: false,
              subOptions: [
                {
                  link: "OWASP Top Ten",
                  href: "https://owasp.org/www-project-top-ten/",
                },
              ],
            },
            {
              check: false,
              text: "Penetration Testing",
              selected: false,
              subOptions: [
                {
                  link: "Penetration Testing",
                  href: "https://www.guru99.com/penetration-testing-company.html",
                },
              ],
            },
            {
              check: false,
              text: "Compliance with Security Standards",
              selected: false,
              subOptions: [
                {
                  link: "ISO/IEC 27001",
                  href: "https://www.iso.org/standard/27001",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "User Acceptance Testing (UAT)",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "UAT Planning",
              selected: false,
              subOptions: [
                {
                  link: "UAT Process",
                  href: "https://www.softwaretestinghelp.com/what-is-user-acceptance-testing-uat/",
                },
              ],
            },
            {
              check: false,
              text: "Stakeholder Communication",
              selected: false,
              subOptions: [
                {
                  link: "Communication in QA",
                  href: "https://www.linkedin.com/advice/3/what-importance-communication-software-testing-ypqxc",
                },
              ],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
      ],
    },
    // {
    //   column: 4,
    //   data: [
    //     {
    //       title: "Security",
    //       subtitle: "Required:",
    //       options: [
    //         {
    //           check: false,
    //           text: "Follow Best Practices",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Observatory by Mozilla",
    //               href: "https://observatory.mozilla.org/",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Cross-site scripting",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "XSS cheat sheet",
    //               href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html",
    //             },
    //             {
    //               link: "DOM based XSS cheat sheet",
    //               href: "https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Cross-site request forgery",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Explanation and walkthrough",
    //               href: "https://blog.codinghorror.com/cross-site-request-forgeries-and-you/",
    //             },
    //             {
    //               link: "CSRF cheat sheet",
    //               href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Secure connection (SSL)",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Free SSL/TLS Certificates",
    //               href: "https://letsencrypt.org/",
    //             },
    //             {
    //               link: "Setup SSL on ISS",
    //               href: "https://learn.microsoft.com/en-GB/iis/manage/configuring-security/how-to-set-up-ssl-on-iis",
    //             },
    //             {
    //               link: "Setup SSL on Apache",
    //               href: "https://www.digicert.com/kb/csr-ssl-installation/apache-openssl.htm#ssl_certificate_install",
    //             },
    //             {
    //               link: "Setup SSL on NGINX",
    //               href: "https://nginx.org/en/docs/http/configuring_https_servers.html",
    //             },
    //             {
    //               link: "https://www.ssllabs.com/ssltest/",
    //               href: "https://letsencrypt.org/",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "HTTP Strict Transport Security",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "MDN Overview",
    //               href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security",
    //             },
    //             {
    //               link: "OWASP Overview",
    //               href: "https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Enable Content Security Policy",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Content Security Policy",
    //               href: "https://web.dev/articles/csp",
    //             },
    //             {
    //               link: "Content Security Policy (MDN)",
    //               href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
    //             },
    //             {
    //               link: "CSP Evaluator Online",
    //               href: "https://csp-evaluator.withgoogle.com/",
    //             },
    //           ],
    //         },
    //       ],
    //       optional: "Optional:",
    //       optionalOptions: [],
    //     },
    //     {
    //       title: "Social Media & Structured Data",
    //       subtitle: "Required:",
    //       options: [
    //         {
    //           check: false,
    //           text: "Structured Data for Google Search",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "How structured data works in Google Search",
    //               href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Open Graph Protocol",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Open Graph Protocol Reference",
    //               href: "https://ogp.me/",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Twitter Cards",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Documentation",
    //               href: "https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards",
    //             },
    //           ],
    //         },
    //         {
    //           check: false,
    //           text: "Facebook",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Sharing on Facebook",
    //               href: "https://developers.facebook.com/docs/sharing/webmasters#markup",
    //             },
    //           ],
    //         },
    //       ],
    //       optional: "Optional:",
    //       optionalOptions: [],
    //     },
    //     {
    //       title: "...and finally",
    //       subtitle: "Required:",
    //       options: [
    //         {
    //           check: false,
    //           text: "Add humans.txt",
    //           selected: false,
    //           subOptions: [
    //             {
    //               link: "Humans.txt generator",
    //               href: "https://humanstxtgenerator.beewits.com/",
    //             },
    //           ],
    //         },
    //       ],
    //       optional: "Optional:",
    //       optionalOptions: [],
    //     },
    //   ],
    // },
  ]);
  const baChecklists = ref<any>([
    {
      column: 1,
      data: [
        {
          title: "Project Launch",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Hold a kick-off meeting with key stakeholders",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Hold a kick-off meeting with the full team",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Define team roles",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Create a contact list for team members",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Collect org charts for the organization",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Gather existing documentation",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Decide on the specific deliverables",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Agree on a BDD for the requirements objects on the project",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Setup information management for the requirements information",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Decide where each of the deliverables be stored/maintained",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Agree on how business analysis activities fit into overall methodology",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Create a requirements plan",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Setup a burndown report on requirements plan activities",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Agree on status reporting format, time, and who is involved",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Agree on escalation paths",
              selected: false,
              subOptions: [],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        // {
        //   title: "Test Design",
        //   subtitle: "Required:",
        //   options: [
        //     {
        //       check: false,
        //       text: "Create Test Cases",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Test Case Design Techniques",
        //           href: "https://www.tutorialspoint.com/software_testing_dictionary/test_case_design_technique.htm",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Develop Test Data",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Test Data Generation",
        //           href: "https://www.guru99.com/test-data-generation.html",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Design Test Scenarios",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Test Scenario vs. Test Case",
        //           href: "https://www.softwaretestinghelp.com/test-cases-vs-test-scenarios/",
        //         },
        //       ],
        //     },
        //   ],
        //   optional: "Optional:",
        //   optionalOptions: [],
        // },
        // {
        //   title: "Test Execution",
        //   subtitle: "Required:",
        //   options: [
        //     {
        //       check: false,
        //       text: "Execute Test Cases",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Test Case Execution Best Practices",
        //           href: "https://www.linkedin.com/pulse/best-practices-software-test-case-creation-testcaselab-gmgze/",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Record and Report Defects",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Defect Life Cycle",
        //           href: "https://www.guru99.com/defect-life-cycle.html",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Regression Testing",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Regression Testing",
        //           href: "https://www.softwaretestinghelp.com/regression-testing/",
        //         },
        //       ],
        //     },
        //   ],
        //   optional: "Optional:",
        //   optionalOptions: [],
        // },
      ],
    },
  ]);
  const uiuxChecklists = ref<any>([
    {
      column: 1,
      data: [
        {
          title: "High-level project strategy considerations",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Choose the technology and approach wisely",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Responsive, responsive, RESPONSIVE!",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Effective and easy right from set-up",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Play nice with third-party tools",
              selected: false,
              subOptions: [],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        {
          title: "Design level considerations",
          subtitle: "Required:",
          options: [
            {
              check: false,
              text: "Quantify the benefits of your design",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Advocate Iteration",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Start broad and narrow down",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Focus on the user, not the process",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Explain design decisions as business decisions",
              selected: false,
              subOptions: [],
            },
            {
              check: false,
              text: "Master the art of feedback",
              selected: false,
              subOptions: [],
            },
          ],
          optional: "Optional:",
          optionalOptions: [],
        },
        // {
        //   title: "Test Execution",
        //   subtitle: "Required:",
        //   options: [
        //     {
        //       check: false,
        //       text: "Execute Test Cases",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Test Case Execution Best Practices",
        //           href: "https://www.linkedin.com/pulse/best-practices-software-test-case-creation-testcaselab-gmgze/",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Record and Report Defects",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Defect Life Cycle",
        //           href: "https://www.guru99.com/defect-life-cycle.html",
        //         },
        //       ],
        //     },
        //     {
        //       check: false,
        //       text: "Regression Testing",
        //       selected: false,
        //       subOptions: [
        //         {
        //           link: "Regression Testing",
        //           href: "https://www.softwaretestinghelp.com/regression-testing/",
        //         },
        //       ],
        //     },
        //   ],
        //   optional: "Optional:",
        //   optionalOptions: [],
        // },
      ],
    },
  ]);

  const selectedCheckList = computed(() => selectedCheckListRef.value);
  const checklists = computed(() => checklistsRef.value);

  // actions
  const setSelectedCheckList = (payload: string) => {
    selectedCheckListRef.value = payload;
  };
  const setSelectedCheckLists = (payload: string) => {
    if (payload === "developer") {
      checklistsRef.value = developerChecklists.value;
    } else if (payload === "sqa") {
      checklistsRef.value = sqaChecklists.value;
    } else if (payload === "ba") {
      checklistsRef.value = baChecklists.value;
    } else if (payload === "uiux") {
      checklistsRef.value = uiuxChecklists.value;
    }
  };
  return {
    selectedCheckList,
    checklists,
    setSelectedCheckList,
    setSelectedCheckLists,
  };
});
