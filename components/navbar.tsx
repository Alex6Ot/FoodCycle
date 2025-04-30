'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-colors hover:text-primary"
            aria-label="FoodCycle Home"
          >
            <Leaf className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">FoodCycle</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/caracteristicas" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Características
            </Link>
            <Link 
              href="/guia" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Guía
            </Link>
            <Link 
              href="/testimonios" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Testimonios
            </Link>
            <Link 
              href="/nosotros" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Nosotros
            </Link>
            <Link 
              href="/contactanos" 
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Contáctanos
            </Link>
            <ThemeToggle />
            <Button size="sm" className="group">
            Empezar
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-foreground/60 hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#testimonials" 
                className="text-foreground/60 hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#pricing" 
                className="text-foreground/60 hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-accent"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Button className="w-full" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}