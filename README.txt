Birthday Gift Web App
=====================

1. How to open the project
   - Open C:\Users\user\OneDrive\Documents\birthday_gift\splash-1.html in a browser.
   - The app starts on splash screen 1, then automatically moves into the rest of the gift.
   - Because this project is plain HTML, CSS, and JavaScript, it also works as a simple static site on Vercel.

2. Where to put photos
   - Put memory photos inside:
     C:\Users\user\OneDrive\Documents\birthday_gift\images\
   - The current memories page uses:
     memory1.jpg
     memory2.jpg
     memory3.jpg
     memory4.jpg
     memory5.jpg
     memory6.jpg
   - If you replace those files with new ones using the same names, the page updates automatically.

3. How to change text
   - Most editable content lives in:
     C:\Users\user\OneDrive\Documents\birthday_gift\script.js
   - Look for the APP_DATA object near the top of the file.
   - You can change:
     - recipient name and nickname
     - affirmations
     - messages
     - memory captions
     - reasons
     - analysis labels
     - funny moments
     - songs
     - timeline entries
     - final letter text

4. How to host later
   - Upload the whole birthday_gift folder to a Vercel project.
   - Set the framework preset to "Other" or leave it as a static site.
   - No build command is needed.
   - No output directory is needed because the HTML files live directly in the project.
   - The Vercel config sends the root URL to splash-1.html automatically.
   - All images and audio are local static files, so they deploy to GitHub/Vercel with the project folder as-is.
