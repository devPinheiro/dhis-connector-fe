# Health Data Dashboard

A modern React + TypeScript dashboard for visualizing health data from DHIS2 and OpenLMIS systems.

## Features

- **Authentication & Authorization**: Role-based access control (Admin, Analyst, Facility Manager)
- **Dashboard Overview**: Key metrics, charts, and real-time insights
- **Facility Management**: Comprehensive facility directory with search and filtering
- **Stock Monitoring**: Real-time stock levels, alerts, and trend analysis
- **Alert System**: Automated notifications for stockouts, late reports, and data quality issues
- **Responsive Design**: Mobile-friendly interface with dark mode support

## Tech Stack

- **Frontend**: Vite + React 19 + TypeScript
- **Styling**: TailwindCSS + Custom Design System
- **Data Visualization**: Recharts
- **State Management**: React Context + Custom Hooks
- **API Integration**: Custom API client with error handling
- **Development**: ESLint + TypeScript strict mode

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-health-tracker-fe
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your API configuration:
```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_APP_NAME=Health Data Dashboard
VITE_AUTH_ENABLED=true
VITE_REFRESH_INTERVAL=30000
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Demo Credentials

The application includes demo login credentials for testing:

- **Admin**: admin@example.com / password123
- **Analyst**: analyst@example.com / password123  
- **Facility Manager**: facility@example.com / password123

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation header
│   ├── Sidebar.tsx     # Side navigation
│   ├── MetricCard.tsx  # Dashboard metric cards
│   ├── FilterPanel.tsx # Data filtering component
│   ├── FacilityTable.tsx # Facility data table
│   ├── StockChart.tsx  # Stock visualization charts
│   └── AlertList.tsx   # Alert notifications list
├── routes/             # Page components
│   ├── dashboard.tsx   # Main dashboard page
│   ├── facilities.tsx  # Facility management page
│   ├── stock.tsx       # Stock monitoring page
│   ├── alerts.tsx      # Alerts & notifications page
│   └── login.tsx       # Authentication page
├── hooks/              # Custom React hooks
│   ├── useFacilities.ts # Facility data fetching
│   ├── useStock.ts     # Stock data management
│   ├── useAlerts.ts    # Alert management
│   └── useDashboard.ts # Dashboard metrics
├── lib/                # Utility libraries
│   ├── apiClient.ts    # API communication layer
│   ├── queryKeys.ts    # Query key management
│   ├── utils.ts        # Helper functions
│   └── mockData.ts     # Development mock data
├── context/            # React context providers
│   └── AuthContext.tsx # Authentication state
├── types/              # TypeScript type definitions
│   ├── facility.ts     # Facility data types
│   ├── stock.ts        # Stock data types
│   ├── alert.ts        # Alert data types
│   ├── auth.ts         # Authentication types
│   ├── api.ts          # API response types
│   └── index.ts        # Type exports
└── Router.tsx          # Application routing
```

## API Integration

The dashboard is designed to work with backend APIs that provide:

### Endpoints
- `GET /api/facilities` - Facility directory
- `GET /api/stock` - Stock level data  
- `GET /api/alerts` - System alerts
- `GET /api/dashboard/metrics` - Dashboard metrics
- `POST /api/auth/login` - User authentication

### Authentication
Uses JWT token-based authentication with role-based permissions.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

The project enforces code quality through:
- TypeScript strict mode
- ESLint with React hooks rules
- Consistent code formatting
- Component composition patterns

### Testing Strategy

The application is built with testability in mind:
- Modular components with clear interfaces
- Custom hooks for business logic separation
- Mock data for development and testing
- API client abstraction for easy mocking

## Production Deployment

### Environment Variables

Required environment variables for production:

```env
VITE_API_BASE_URL=https://your-api.com/api
VITE_APP_NAME=Your App Name
VITE_AUTH_ENABLED=true
VITE_REFRESH_INTERVAL=30000
```

### Build Process

1. Install dependencies:
```bash
npm ci
```

2. Build the application:
```bash
npm run build
```

3. The `dist/` folder contains the production build ready for deployment.

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Review the documentation

---

Built with ❤️ for healthcare data management