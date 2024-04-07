# Project: Lunchkampen

## Functional Specification:

### Vision:
Lunchkampen is a Multi-Game Score Tracker that aims to provide users with a platform to track and share their scores across various games. Users can log in, submit their scores for different games, view their own and others' results, and track their performance over time. If time allows for it the system will embed games with so that the user can play them from the website and record their game times and scores completely from within the website.

### Core Functions:
1. **User Authentication:**
   - Users can log in or create a new account.
   - Users have their own profile pages with the ability to delete their account and associated data.

2. **Score Submission:**
   - Users can submit their scores for different games, specifying the game, score achieved, and time.
   - Scores are stored in the Firebase database associated with the user.

3. **View Results:**
   - Users can view their own and others' results for a specific day.
   - Statistics are available for longer periods or all-time performance.

4. **Embed Games:** (if time)
   - Users can play the games embeded on the website.
   - A timer is provided when starting an embedded game, and users can record their time upon completion.
   - The user can then also record their score.

## Technological Specification:

### Client Framework: Svelte
Svelte is chosen as the client-side framework for its simplicity and efficiency in building reactive web applications. Its reactive nature allows for seamless updates to the user interface as data changes, providing a smooth user experience.

### Server Framework/Backend: Firebase
Firebase is utilized as the backend solution for its real-time database, authentication services, and hosting capabilities. It offers seamless integration with Svelte and provides features such as user authentication, data storage, and real-time synchronization, which are essential for our project requirements.

### Additional Considerations:
- **User Management and Data Storage:** Firebase authentication and Firestore database will be used for user management and data storage, respectively, ensuring efficient and secure handling of user data.
- **Authentication Services:** Firebase Authentication will be employed to authenticate users securely and manage user sessions.
- **Embedding Games:** The application will utilize iframes to embed games, enabling users to interact with embedded content seamlessly.
- **Real-time Updates:** Firebase Realtime Database will be leveraged to provide real-time updates to scores and results, enhancing the interactivity of the application.