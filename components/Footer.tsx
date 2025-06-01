
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-background/30 dark:border-foreground/50 bg-card-foreground dark:bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start md:grid md:grid-cols-3 gap-8 md:items-center">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Alex Thompson
            </h3>
            <p className="text-primary-800 dark:text-primary-200">
              Frontend Developer passionate about creating exceptional web experiences.
            </p>
          </div>

          <div className="flex md:flex-col lg:flex-row justify-center space-x-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 dark:text-primary-200 hover:text-primary-950 dark:hover:text-primary-700 hover:underline transition-all duration-300"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 dark:text-primary-200 hover:text-primary-950 dark:hover:text-primary-700 hover:underline transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-800 dark:text-primary-200 hover:text-primary-950 dark:hover:text-primary-700 hover:underline transition-all duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-primary-800 dark:text-primary-200 hover:text-primary-950 dark:hover:text-primary-700 hover:underline transition-all duration-300"
            >
              Email
            </a>
          </div>

          <div className="text-right">
            <p className="text-primary-800 dark:text-primary-200">
              © {currentYear} Alex Thompson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;