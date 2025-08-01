# Overview

EconoLab is an educational web application focused on economic schools of thought. It serves as a comprehensive platform for exploring economic theories, models, concepts, and textbooks. The application provides structured access to different economic perspectives including Neoclassical, Post-Keynesian, Austrian, Behavioral, and Complexity schools, along with their associated models, key concepts, and academic resources.

## Recent Changes (January 2025)

- **Content Integration Complete**: All data now uses 100% authentic content from "Sintesi vademecum Economia_1754034629267.pdf" without any additional synthesis
- **5 Complete Economic Schools**: Neoclassica, Post-Keynesiana, Austriaca, Comportamentale, Complessità with full details, economists, and examples
- **13 Authentic University Manuals**: Complete descriptions of actual textbooks used in Italian universities with authors, characteristics, strengths/weaknesses
- **34+ Economic Concepts**: Full glossary with authentic definitions and relationships from the source document  
- **10 Economic Models**: Complete microeconomic and macroeconomic models with applications and school connections
- **Unified Models Section**: Combined micro and macroeconomic models into single "Modelli Teorici" section with unified interface and comparison tools
- **Interactive Selection System**: All major sections (Manuals, Schools, Models) now feature checkbox selection, filtering, and detailed comparison tables
- **Search functionality removed**: Eliminated problematic search feature due to technical complexity and user preference for cleaner interface
- **Header simplified**: Cleaned up navigation to only include Dashboard link
- **Interface streamlined**: Focus on direct access to authentic educational content with interactive comparison capabilities

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend is built using React with TypeScript, leveraging a modern component-based architecture. The application uses Wouter for client-side routing and implements a dashboard-style interface with dedicated pages for each content category (schools, models, manuals, concepts, comparisons, glossary). The UI is built with Radix UI components and styled using Tailwind CSS with custom design tokens for consistent theming.

**Key Design Decisions:**
- **Component Library:** Radix UI provides accessible, unstyled primitives that are customized with Tailwind CSS
- **Styling System:** Tailwind CSS with CSS variables for theming, enabling consistent color schemes and responsive design
- **State Management:** TanStack Query (React Query) handles server state management and caching
- **Routing:** Wouter provides lightweight client-side routing without the complexity of React Router

## Backend Architecture
The backend follows a REST API pattern built with Express.js and TypeScript. It implements a modular route structure with dedicated endpoints for each data entity. The server includes middleware for request logging, JSON parsing, and error handling.

**Key Design Decisions:**
- **API Design:** RESTful endpoints organized by resource type (/api/schools, /api/models, etc.)
- **Data Access:** Storage abstraction layer that currently uses in-memory data but is designed to be database-agnostic
- **Development Environment:** Vite integration for hot module replacement and development server proxy

## Data Storage Solutions
The application uses Drizzle ORM with PostgreSQL for data persistence. The schema defines structured tables for economic schools, models, manuals, concepts, and comparisons with proper relationships and JSON fields for complex data types.

**Key Design Decisions:**
- **ORM Choice:** Drizzle ORM provides type-safe database operations with excellent TypeScript integration
- **Database:** PostgreSQL with Neon serverless hosting for scalability
- **Schema Design:** Normalized structure with JSON fields for arrays and complex objects (principles, economists, etc.)
- **Migration Strategy:** Drizzle Kit handles schema migrations and database synchronization

## Authentication and Authorization
Currently, the application appears to be designed as a public educational resource without authentication requirements. The infrastructure supports session-based authentication with PostgreSQL session storage if needed in the future.

**Key Design Decisions:**
- **Session Storage:** PostgreSQL-backed sessions using connect-pg-simple
- **Public Access:** No authentication barriers for educational content access
- **Future Extensibility:** Infrastructure in place to add user accounts and personalization features

# External Dependencies

## Database Services
- **Neon Database:** Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM:** Type-safe database queries and schema management
- **connect-pg-simple:** PostgreSQL session store for Express sessions

## Frontend Libraries
- **React Ecosystem:** React 18 with TypeScript for component development
- **TanStack Query:** Server state management, caching, and data synchronization
- **Radix UI:** Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS:** Utility-first CSS framework with custom design system
- **Wouter:** Minimalist React router for client-side navigation

## Development Tools
- **Vite:** Fast build tool and development server with HMR
- **TypeScript:** Static type checking and enhanced developer experience
- **ESBuild:** Fast JavaScript bundler for production builds
- **Replit Integration:** Development environment integration with runtime error handling

## UI and Styling
- **Lucide React:** Consistent icon library for interface elements
- **Class Variance Authority:** Type-safe component variant management
- **date-fns:** Date manipulation and formatting utilities
- **Embla Carousel:** Touch-friendly carousel component for content presentation