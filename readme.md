# Medium Project

A full-stack Medium Project built with modern web technologies.

## The Stack

- **Frontend**: React
- **Backend**: Cloudflare Workers
- **API Routing**: Hono
- **Type Safety**: TypeScript
- **Validation**: Zod with type inference
- **Database**: PostgreSQL
- **ORM**: Prisma with connection pooling
- **Authentication**: JWT

## Local Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database
- Prisma CLI (`npm install -g prisma`)

### Backend Setup

1. Clone the repository:
```bash
git clone <https://github.com/Kamaldeep-singh0/medium-projectl>
cd medium-project
```

2. Navigate to the backend directory:
```bash
cd backend
```

3. Create a `.env` file in the backend directory:
```env
# Database URL for Prisma
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
```

3. Create a `.env` file in the backend directory for local development:
```env
# Database URL for Prisma
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
```

4. Configure your `wrangler.toml`:
```toml
name = "backend"
compatibility_date = "2023-01-01"

# Secrets will be set using wrangler secret commands
# JWT_SECRET and PRISMA_ACCELERATE_URL should be set using:
# wrangler secret put JWT_SECRET
# wrangler secret put PRISMA_ACCELERATE_URL
```

5. Set up your secrets using wrangler:
```bash
JWT_SECRET
# Enter your JWT secret when prompted

DATABASE_URL
# Enter your Prisma Accelerate URL when prompted
```


6. Install dependencies:
```bash
npm install
```

7. Generate Prisma client:
```bash
npx prisma generate
```

8. Run database migrations:
```bash
npx prisma migrate dev
```

9. Start the development server:
```bash
npm run dev
```


### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Open src/config.ts in the frontend directory:
```env
export const BACKEND_URL = "http://localhost:8787"  # or your Cloudflare Worker URL
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Environment Variables

### Backend (.env)
- `DATABASE_URL`: Your PostgreSQL connection string
- `DATABASE_URL`: (Wrangler.toml) Prisma Accelerate connection string for improved performance
- `JWT_SECRET`: Secret key for JWT token generation and verification

### Frontend (src/config)
- `BACKEND_URL`: URL of your backend API

## Development Workflow

1. **Database Schema Changes**:
   ```bash
   npx prisma migrate dev --name <migration-name>
   ```

2. **Update Prisma Client**:
   ```bash
   npx prisma generate
   ```

3. **Run Development Servers**:
   - Backend: `npm run dev` (in backend directory)
   - Frontend: `npm run dev` (in frontend directory)

## Production Deployment

1. **Backend**:
   - Deploy to Cloudflare Workers using Wrangler:
     ```bash
     wrangler publish
     ```

2. **Frontend**:
   - Build the production bundle:
     ```bash
     npm run build
     ```
   - Deploy the `dist` folder to your preferred hosting service

## Additional Notes

- Make sure to set up proper CORS configuration in your Cloudflare Worker
- Use Prisma Accelerate for better database connection management in production
- Keep your JWT secret secure and different between development and production
- Configure proper environment variables in your Cloudflare Workers dashboard

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

