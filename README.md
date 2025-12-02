# Terminal CV

A personal website that looks like a Linux terminal.

## How to use

1.  Open `index.html` in your browser to see the local version.
2.  Edit `script.js` to update the content for `about`, `skills`, and `contact` commands.
3.  Edit `style.css` to change colors or fonts.

## How to deploy to GitHub Pages

To make this your personal website (e.g., `yourusername.github.io/cv` or just `yourusername.github.io`):

1.  **Create a Repository**:
    *   Go to GitHub and create a new repository.
    *   Name it `cv` (or `yourusername.github.io` if you want it to be your main site).

2.  **Upload Files**:
    *   Upload `index.html`, `style.css`, and `script.js` to your new repository.
    *   You can do this via the web interface or using Git commands:
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

3.  **Enable GitHub Pages**:
    *   Go to your repository **Settings**.
    *   Click on **Pages** in the left sidebar.
    *   Under **Build and deployment** > **Source**, select **Deploy from a branch**.
    *   Under **Branch**, select `main` and `/ (root)`.
    *   Click **Save**.

4.  **Visit your site**:
    *   Wait a minute or two.
    *   GitHub will show you the URL where your site is live (usually `https://yourusername.github.io/repo-name`).
