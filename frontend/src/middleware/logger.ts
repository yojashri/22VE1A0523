// src/middleware/logger.ts

type LogLevel = "INFO" | "ERROR" | "WARN";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
}

const consoleMethods: Record<LogLevel, (...args: any[]) => void> = {
  INFO: console.info,
  ERROR: console.error,
  WARN: console.warn,
};

export function logger(level: LogLevel, message: string, data?: any): void {
  const logEntry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  };

  consoleMethods[level](JSON.stringify(logEntry, null, 2));
}
