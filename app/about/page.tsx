'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Users, Leaf, Shield, Github, Linkedin, Mail } from 'lucide-react';

const features = [
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: 'Premium Quality',
    description: 'Certified organic ingredients sourced from trusted suppliers',
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: 'Expert Consultation',
    description: 'Guidance from experienced Ayurvedic practitioners',
  },
  {
    icon: <Leaf className="h-8 w-8 text-purple-500" />,
    title: '100% Natural',
    description: 'Pure and authentic Ayurvedic formulations',
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: 'GMP Certified',
    description: 'Manufactured in certified facilities',
  },
];

const team = [
  {
    name: 'Dr. Rajesh Kumar',
    role: 'Chief Ayurvedic Consultant',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d',
    bio: '20+ years of experience in Ayurvedic medicine',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Research Head',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f',
    bio: 'PhD in Pharmacology, specializing in herbal medicine',
  },
  {
    name: 'Dr. Amit Patel',
    role: 'Product Development',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d',
    bio: 'Expert in traditional formulation development',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1545048702-79362596cdc9"
          alt="Ayurvedic herbs and ingredients"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Bringing ancient Ayurvedic wisdom to modern wellness through
              innovation and authenticity
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            At Ayuvya, we are committed to preserving and promoting the ancient
            science of Ayurveda while making it accessible to the modern world. Our
            goal is to help people achieve holistic wellness through authentic
            Ayurvedic solutions.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-700"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Developer</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/rishav-raushan"
                alt="Rishav Raushan"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">Rishav Raushan</h3>
            <p className="text-purple-600 dark:text-purple-400 mb-4">
              Full Stack Developer
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Passionate about creating beautiful and functional web applications
              with modern technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/rishav-raushan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/rishav-raushan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:rishavraushan1804@gmail.com"
                className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}