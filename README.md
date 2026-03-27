# Site Verifier

Site Verifier is a browser extension designed to protect users from phishing and homograph (IDN) attacks. It automatically detects if the website you are visiting belongs to a list of verified domains.

## Features

- **Domain Verification**: Checks visited websites against a centralized list of trusted domains.
- **Subdomain Support**: Automatically verifies subdomains of trusted domains.
- **IDN Protection**: Detects and warns about Internationalized Domain Names (Punycode) to prevent [homograph attacks](https://en.wikipedia.org/wiki/IDN_homograph_attack).
- **Dynamic Updates**: Loads the latest verified sites directly from a remote repository.

## Installation

Since this is a developer version, you can install it manually in your browser (Chrome, Edge, or any Chromium-based browser):

1. **Download or Clone** this repository to your local machine.
2. Open your browser and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (usually a toggle in the top right corner).
4. Click on the **Load unpacked** button.
5. Select the folder where you downloaded/cloned the project.

## How it Works

The extension uses different icons to indicate the verification status of the current tab:

- ![Yellow Icon](icons/yellow.png) **Yellow**: Scanning or unknown status.
- ![Verified Icon](icons/verified.png) **Green Check**: The domain is verified and safe.
- ![Default Icon](icons/default.png) **Default/Gray**: The domain is not in the verified list.

## Project Structure

- `manifest.json`: Extension configuration and permissions.
- `background.js`: Service worker that handles tab updates and icon changes.
- `verifier.js`: Core logic for domain normalization and verification.
- `sites.json`: Local cache/list of verified domains.
- `icons/`: Directory containing status icons.
- `package.json`: NPM configuration and packaging scripts.

## Distribution

To prepare the extension for distribution (e.g., for the Chrome Web Store), you can generate a clean ZIP file using NPM:

1. Ensure you have Node.js and NPM installed.
2. Run the following command in the project root:
   ```bash
   npm run build
   ```
3. This will create a `dist/site-verifier.zip` file containing only the necessary files for the extension.

## Contributing

If you want to suggest a new verified site, you can contribute to the `sites.json` file via a Pull Request.

## License

This project is open-source. See the repository for more details.
