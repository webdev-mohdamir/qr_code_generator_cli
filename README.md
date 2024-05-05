### CLI QR Code Generator

This CLI application generates a QR code for a provided URL and saves it as an SVG file. Additionally, it saves the user's input URL to a text file.

#### Usage

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd <project-directory>
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application:**

   ```bash
   npm start
   ```

#### How It Works

1. **User Input:**

   The application prompts the user to enter a URL.

2. **QR Code Generation:**

   It generates a QR code for the provided URL using the `qr-image` module.

3. **Save QR Code:**

   The generated QR code is saved as an SVG file named `qr_code.svg`.

4. **Save User Input:**

   The user's input URL is saved to a text file named `answer.txt`.

#### Technologies Used

- **inquirer:** Used for user input handling.
- **qr-image:** Utilized for generating QR codes.
- **fs:** Employed for file system operations.

#### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

#### Author

[Mohd Amir] - [GitHub Profile](https://github.com/webdev-mohdamir)
