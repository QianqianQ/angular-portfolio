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
