---
title: "Installing and Deploying GitBase: A Step-by-Step Guide"
description: "A comprehensive guide for setting up GitBase locally and deploying it to Vercel, suitable for beginners."
date: "2023-07-13"
---

# Installing and Deploying GitBase: A Step-by-Step Guide

This guide will walk you through the process of setting up GitBase on your local machine and deploying it to Vercel. Even if you're new to web development, you should be able to follow these steps to get your GitBase instance up and running.

## Prerequisites

- Node.js (version 14 or later)
- npm (usually comes with Node.js)
- Git
- A GitHub account
- A Vercel account

## Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to store your project.
3. Run the following command:

```bash
git clone https://github.com/qiayue/gitbase.git
cd gitbase
```

## Step 2: Install Dependencies

In the project directory, run:

```bash
npm install
```

This will install all necessary dependencies for the project.

## Step 3: Set Up Environment Variables

1. In the root of your project, create a file named `.env.local`.
2. Open this file and add the following lines:

```
GITHUB_TOKEN=your_github_personal_access_token
GITHUB_OWNER=your_github_username
GITHUB_REPO=your_repo_name
```

Replace `your_github_personal_access_token`, `your_github_username`, and `your_repo_name` with your actual GitHub information.

## Step 4: Run the Development Server

To start the development server, run:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the GitBase homepage.

## Step 5: Build the Project

If the development server runs without errors, try building the project:

```bash
npm run build
```

If this completes successfully, your project is ready for deployment.

## Step 6: Push to Your Own GitHub Repository

1. Create a new repository on GitHub.
2. In your local project directory, run:

```bash
git remote set-url origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

Replace `your-username` and `your-repo-name` with your GitHub username and the name of your new repository.

## Step 7: Deploy to Vercel

1. Log in to your Vercel account.
2. Click "New Project".
3. Select your GitBase repository from the list.
4. In the "Configure Project" step, add the following environment variables:
   - `GITHUB_TOKEN`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
   Use the same values as in your `.env.local` file.
5. Click "Deploy".

## Step 8: Test Your Deployment

Once the deployment is complete, Vercel will provide you with a URL. Open this URL in your browser to verify that your GitBase instance is working correctly.

## Step 9: Configure Custom Domain (Optional)

If you want to use your own domain:

1. In your Vercel project dashboard, go to "Settings" > "Domains".
2. Add your custom domain and follow Vercel's instructions for DNS configuration.

Congratulations! You've successfully set up and deployed your own GitBase instance.

## Troubleshooting

If you encounter any issues:
- Make sure all environment variables are correctly set both locally and on Vercel.
- Check the console in your browser and the Vercel deployment logs for any error messages.
- Ensure your GitHub token has the necessary permissions.

For more help, refer to the [GitBase documentation](https://github.com/qiayue/gitbase) or open an issue on the GitHub repository.