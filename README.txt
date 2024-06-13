Hey Matteo,

Here’s how you can update your portfolio website:

Step 1: Edit Your Content

1. Go to the Code Folder:
   - Find the folder on your computer where your portfolio website code is saved.

2. Open the src Folder:
   - Inside that code folder, look for the folder named "src" and open it.

3. Edit the Content File:
   - Find the file called "EDIT_THIS_FILE.js" inside the "src" folder.
   - Open "EDIT_THIS_FILE.js" with a text editor (like Notepad, TextEdit, or any code editor you like).
   - Update your personal info, projects, and descriptions as needed.
   - Save the file after making your changes.

Step 2: Update Your Portfolio Images

1. Add New Images:
   - If you want to add new images to your portfolio, put the image files in the "public/media" folder within the code folder.

2. Update the Image References:
   - Open the "EDIT_THIS_FILE.js" file in the "src" folder.
   - Add a new entry in the `dataportfolio` array for each new image. Use this format:

     ```javascript
     const dataportfolio = [{
         img: "/media/your-image-file.jpg",
         description: "A brief description of the image",
         link: "#", // You can put a link here if needed, or leave it as "#"
     },
     // Add more objects for additional images
     ];
     ```

   - Replace "your-image-file.jpg" with the actual file name of your image.
   - Replace "A brief description of the image" with a short description of the image.

3. Save Your Changes:
   - After updating the `dataportfolio` array, save the "EDIT_THIS_FILE.js" file.

Need Help?

If you get stuck or need help, just let me know. 

