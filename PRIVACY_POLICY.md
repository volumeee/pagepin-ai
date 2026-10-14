# PagePin AI — Privacy Policy

**Effective date:** 14 October 2026  
**Version:** 1.0.0 (PagePin AI v0.6.25)  
**Publisher:** Bagus Erwanto  
**Support & Contact:** mr.volumee@gmail.com  
**Public URL:** https://volumeee.github.io/pagepin-ai/privacy-policy/

---

## Overview

PagePin AI is a Chrome extension that lets users annotate website elements, capture screenshots, export visual feedback as Markdown, and optionally create implementation plans using an AI provider chosen by the user. Its core annotation workflow is designed to work locally on your computer without an account.

## Information Processed

When you use PagePin AI, the extension processes the following information strictly on your local device from the pages you choose to annotate:

- Page URL and origin
- CSS selectors, XPath, test IDs, and element attributes
- Accessible names, selected element text, and sanitized HTML snippets
- Element geometry (bounding box dimensions) and styles
- Your written feedback, severity, intent, tags, and timestamps
- Local screenshots captured via Chrome's tab capture API

Screenshots may contain personal or confidential information visible on the annotated web page. These screenshots are stored solely on your local device.

If you explicitly enable console capture, the extension may also collect console logs, warnings, errors, and timestamps from the active tab. Console capture is disabled by default and can be turned off at any time.

The extension also processes AI provider settings entered by you (such as provider name, endpoint URL, model ID, and optional API keys). API keys are stored solely in Chrome session storage (`chrome.storage.session`), held in volatile memory during your active browser session, and are never saved to persistent long-term storage or written into exported reports.

## Storage and Retention

- **Annotations and Screenshots:** Saved locally on your device in browser IndexedDB.
- **Preferences and AI Profiles:** Saved locally in `chrome.storage.local`.
- **API Keys:** Stored in volatile `chrome.storage.session`, which is cleared automatically when the browser session ends.
- **No Cloud Database:** PagePin AI does not operate remote databases, servers, user accounts, or cloud storage for user annotations.

All local data remains on your machine until you delete individual items, clear extension storage, or uninstall the extension. Downloaded Markdown reports and PNG screenshot files saved to your computer are managed by your operating system and must be deleted manually if no longer needed.

## AI Providers and Network Transmission

PagePin AI is local-first. It only makes network requests when you explicitly trigger an AI feature (such as testing a provider connection, improving a comment, or generating an implementation plan) to an endpoint that you have configured.

- **Data Sent to AI:** When you request an AI plan or suggestion, the extension sends the text context of the relevant annotation (feedback comment, intent, severity, tag name, CSS selector, XPath, text snippet, or formatted Markdown report) to the AI endpoint configured by you.
- **Screenshot Images Not Transmitted:** PagePin AI does not transmit binary screenshot image files to AI completion endpoints; only textual annotation metadata and references are included.
- **Provider Choice:** If you configure a remote cloud AI provider (e.g., OpenAI or an OpenAI-compatible cloud endpoint), information sent to that endpoint is subject to that provider's privacy policy and terms. If you configure a local provider (e.g., Ollama or LocalAI on localhost), all data remains strictly within your local environment.
- **Consent Gate:** For cloud providers, PagePin AI prompts for confirmation before sending feedback text over the network.

## Sharing and Disclosure

- **No Tracking or Analytics:** PagePin AI does not include third-party trackers, analytics SDKs, telemetry, advertising networks, or tracking cookies.
- **No Sale of Data:** We do not sell, rent, monetize, or trade your data or personal information.
- **User-Initiated Sharing Only:** Your data only leaves your computer when you explicitly invoke an external AI provider, copy content to your clipboard, or export/download files.

## Permissions

PagePin AI declares the following permissions in its `manifest.json`:

| Permission | Purpose |
|---|---|
| `activeTab` | Capture screenshots and interact with the active page when you explicitly activate the extension. |
| `scripting` | Inject the annotation toolbar and optional console listener into the active tab. |
| `storage` | Persist local preferences, provider configurations, and session credentials. |
| `clipboardWrite` | Copy Markdown reports, screenshots, or logs to the system clipboard upon your request. |
| `downloads` | Save exported Markdown reports and screenshot PNG files to your computer upon your request. |
| `optional_host_permissions (<all_urls>)` | Allows the user to grant permission to annotate pages or connect to custom AI provider endpoints on demand. |

## Security

PagePin AI follows the principle of least privilege:

- Minimal permissions required for visual annotation and export.
- Extension pages enforce a strict Content Security Policy (`script-src 'self'; object-src 'self'`).
- API keys are segregated into session storage and never serialized in export documents.
- Connections to remote AI providers require HTTPS (or loopback HTTP for local development).

## Your Choices and Controls

You maintain complete control over your data:

- You can use all core annotation, screenshot, and Markdown export features completely offline without configuring an AI provider.
- Console capture is strictly opt-in and off by default.
- You can delete annotations, clear all local extension data, or uninstall PagePin AI at any time through Chrome settings.
- You can inspect and revoke site permissions at any time via Chrome extension settings.

## Children's Privacy

PagePin AI is a developer and design productivity tool. It is not directed to children under 13 (or under 16 in the European Union), and does not knowingly collect any personal information from children.

## Changes to this Policy

If we update our privacy practices or release new features that impact data handling, we will update the effective date and version at the top of this policy and publish the revised document at this public URL.

## Contact

If you have questions, feedback, or privacy-related inquiries regarding PagePin AI, please contact:

**Bagus Erwanto**  
Email: [mr.volumee@gmail.com](mailto:mr.volumee@gmail.com)  
Repository: [https://github.com/volumeee/pagepin-ai](https://github.com/volumeee/pagepin-ai)
