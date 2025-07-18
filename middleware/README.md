# Logging Middleware

This is a custom `logger.ts` middleware that logs client-side events with consistent structure and timestamps.

## ✅ Features

- Logs `INFO`, `ERROR`, `WARN`, and `DEBUG` levels
- Adds an ISO timestamp
- Accepts optional metadata (`data`)
- JSON formatted for easy parsing or sending to analytics APIs

## 💡 Usage Example

```ts
import { logger } from './logger';

logger('INFO', 'User submitted a URL', { url: 'https://example.com' });
