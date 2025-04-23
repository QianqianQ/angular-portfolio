# Portfolio

A modern, responsive portfolio application built with Angular, featuring dynamic content powered by customizable JSON data.

## Technologies Used

- Angular 19
- TypeScript
- SCSS
- Bootstrap 5

## Local Development

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/QianqianQ/angular-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd angular-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up and modify the data file:
   - Copy `public/data/data.sample.json` to `public/data/data.json`:
     ```bash
     cp public/data/data.sample.json public/data/data.json
     ```
   - Modify `public/data/data.json` as needed

5. Start the development server:
   ```bash
   ng serve
   ```

6. Open your browser and visit:
   ```
   http://localhost:4200/
   ```

The application will automatically reload if you change any of the source files or the data.json file.

## Deployment

The application is deployed on Vercel.

1. Upload `public/data/data.json` to vercel storage
(a vercel blob storage needs to be created and the project needs to connect to it.
Check if `BLOB_READ_WRITE_TOKEN` is available in `.env.local` file and in the vercel project's `Environment Variables`)
   ```bash
   node scripts/uploadFile.js data/data.json
   ```
   Or upload the file via vercel dashboard directly.

2. Add url of the uploaded `data.json` (copy it from vercel dashboard) as the project's `PORTFOLIO_JSON_URL` environment variable from vercel dashboard

3. Deploy
   ```bash
   # deploy to preview 
   vercel
   # deploy to production
   vercel --prod
   ```

4. GitHub Actions for Vercel Preview Deployment:
   - The project includes a GitHub Actions workflow (`preview.yml`) to automate Vercel preview deployments.
   - It triggers on pushes to the master branch or can be manually triggered.
   - The workflow checks out the repository, installs the Vercel CLI, pulls environment info, builds artifacts, and deploys to Vercel.
   - Ensure the Vercel secrets (`VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `VERCEL_TOKEN`) are set in the GitHub repository's secrets for successful deployment.

   A preview deployment can be promoted to production directly from the Vercel dashboard once the preview version meets the necessary criteria.
