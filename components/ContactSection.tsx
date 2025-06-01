'use client'
import { Button } from '@/components/aspect-ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/aspect-ui/Card';
import { Input } from '@/components/aspect-ui/Input';
import { Textarea } from '@/components/aspect-ui/Textarea';
import { useToast } from '@/components/aspect-ui/Toast';
import { User } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-primary-800 dark:text-primary-200 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="transition-all duration-300 border border-primary-800/30 hover:border-primary-800/50 dark:border-primary-200/30 dark:hover:border-primary-200/50 bg-card-foreground/20 dark:bg-card hover:bg-initial dark:hover:bg-initial">
              <CardHeader className='p-6'>
                <CardTitle className="text-2xl text-background dark:text-foreground">Get In Touch</CardTitle>
                <CardDescription className='text-primary-800 dark:text-primary-200'>
                  Feel free to reach out for collaborations, opportunities, or just a friendly hello.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/20 dark:bg-primary-200/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:alex@example.com"
                      className="text-primary-600 hover:underline"
                    >
                      alex@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/20 dark:bg-primary-200/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">🌐</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/alexthompson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      linkedin.com/in/alexthompson
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-800/20 dark:bg-primary-200/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">💻</span>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/alexthompson"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:underline"
                    >
                      github.com/alexthompson
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="transition-all duration-300 border border-primary-800/30 hover:border-primary-800/50 dark:border-primary-200/30 dark:hover:border-primary-200/50 bg-card-foreground/20 dark:bg-card hover:bg-initial dark:hover:bg-initial">
            <CardHeader className='p-6'>
              <CardTitle className="text-2xl text-background dark:text-foreground">Send a Message</CardTitle>
              <CardDescription className='text-primary-800 dark:text-primary-200'>
                I&apos;ll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    icon={<User />}
                    className="dark:bg-primary-950/30 border-primary-800/30 dark:border-primary-200/30"
                  />
                </div>

                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="dark:bg-primary-950/30  border-primary-800/30 dark:border-primary-200/30"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none dark:bg-primary-950/30 border-primary-800/30 dark:border-primary-200/30"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary-200 hover:bg-primary-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;